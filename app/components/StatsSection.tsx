'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

const StatsSection = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    satisfaction: 0
  });

  const stats = [
    {
      number: 95,
      label: t('statsSection.projects'),
      suffix: '+',
      color: 'blue'
    },
    {
      number: 95,
      label: t('statsSection.clients'),
      suffix: '+',
      color: 'green'
    },
    {
      number: 5,
      label: t('statsSection.countries'),
      suffix: '+',
      color: 'purple'
    },
    {
      number: 98,
      label: t('statsSection.satisfaction'),
      suffix: '%',
      color: 'orange'
    }
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => ({
          projects: Math.min(prev.projects + Math.ceil(95 / steps), 95),
          clients: Math.min(prev.clients + Math.ceil(95 / steps), 95),
          countries: Math.min(prev.countries + Math.ceil(5 / steps), 5),
          satisfaction: Math.min(prev.satisfaction + Math.ceil(98 / steps), 98)
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="text-xl md:text-2xl text-white mb-6">
            数据见证实力
          </h4>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            多年行业经验，数百个成功项目，服务全球客户，见证我们的专业与承诺
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(stat.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-bold">
                    {stat.color === 'blue' && '📊'}
                    {stat.color === 'green' && '👥'}
                    {stat.color === 'purple' && '🌍'}
                    {stat.color === 'orange' && '⭐'}
                  </span>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {stat.color === 'blue' && counts.projects}
                  {stat.color === 'green' && counts.clients}
                  {stat.color === 'purple' && counts.countries}
                  {stat.color === 'orange' && counts.satisfaction}
                  <span className="text-blue-300">{stat.suffix}</span>
                </div>
                
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl text-white mb-4">为什么选择我们</h4>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">全球化视野</h4>
                <p>国际化团队，跨文化背景，深谙全球市场</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">技术卓越</h4>
                <p>前沿技术与最佳实践，确保软件开发质量</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">客户成功</h4>
                <p>专注客户成功，拥有丰富的项目交付经验</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 