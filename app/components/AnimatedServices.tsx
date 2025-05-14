'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaMobile, FaCogs, FaRobot, FaCode, FaLightbulb } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

// 定义服务项的接口
interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[]; // 明确标记为字符串数组
  color: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AnimatedServices() {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  // 使用类型断言确保 features 被视为字符串数组
  const services: ServiceItem[] = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: t('services.website.features', { returnObjects: true }) as string[],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: t('services.mobile.features', { returnObjects: true }) as string[],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: t('services.system.title'),
      description: t('services.system.description'),
      features: t('services.system.features', { returnObjects: true }) as string[],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: t('services.ai.features', { returnObjects: true }) as string[],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: t('services.custom.features', { returnObjects: true }) as string[],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features', { returnObjects: true }) as string[],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title inline-block"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} 
                  flex items-center justify-center text-white mb-6 transform 
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center group"
          >
            了解更多服务详情
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}