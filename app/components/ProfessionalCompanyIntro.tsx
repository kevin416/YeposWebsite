'use client';

import { motion } from 'framer-motion';
import { Globe, Code, Shield, Zap, Users, Award } from 'lucide-react';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

const ProfessionalCompanyIntro = () => {
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

  const stats = t('professionalCompanyIntro.stats', { returnObjects: true }) as Array<{
    number: string;
    label: string;
  }>;

  const advantages = t('professionalCompanyIntro.advantages', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const statIcons = [Globe, Code, Award, Shield];
  const advantageIcons = [Globe, Code, Shield, Zap, Users, Award];
  const advantageColors = ['blue', 'green', 'purple', 'orange', 'indigo', 'red'];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h4 className="text-1xl md:text-2xl  text-gray-900 mb-6">
              {t('professionalCompanyIntro.title')}
            </h4>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('professionalCompanyIntro.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = statIcons[index];

            return (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl  text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Core Advantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantageIcons[index];
            const color = advantageColors[index];

            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 ${getColorClasses(color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <h4 className="text-3xl  mb-6">{t('professionalCompanyIntro.mission.title')}</h4>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              {t('professionalCompanyIntro.mission.description')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {(t('professionalCompanyIntro.mission.values', { returnObjects: true }) as string[]).map((value: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalCompanyIntro; 