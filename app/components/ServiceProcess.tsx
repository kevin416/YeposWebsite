'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const ServiceProcess = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const processSteps = t('serviceProcess.steps', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [Search, PenTool, Code, TestTube, Rocket, Headphones];
  const colors = ['blue', 'green', 'purple', 'orange', 'red', 'indigo'];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-1xl md:text-2xl font-bold text-gray-900 mb-6">
              {t('serviceProcess.title')}
            </h4>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('serviceProcess.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = icons[index];
            const color = colors[index];

            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  <div className={`w-16 h-16 ${getColorClasses(color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">{t('serviceProcess.cta.title')}</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {t('serviceProcess.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('serviceProcess.cta.consultation')}
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t('serviceProcess.cta.portfolio')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess; 