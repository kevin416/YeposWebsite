'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const CompanyIntro = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = t('companyIntro.features', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('companyIntro.title')}
              <span className="text-blue-600 block">{t('companyIntro.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('companyIntro.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const icons = [Building2, Globe, Users, Target];
            const colors = ['blue', 'green', 'purple', 'orange'];
            const IconComponent = icons[index];
            const color = colors[index];

            return (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('companyIntro.mission.title')}</h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              {t('companyIntro.mission.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro; 