'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Zap, GitBranch, TestTube, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const TechnicalAdvantages = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const techStack = {
    frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript'],
    backend: ['Node.js', 'Python', 'Java', 'C#', 'PHP'],
    mobile: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    ai: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Machine Learning']
  };

  const developmentProcess = [
    {
      icon: Code,
      title: t('technicalAdvantages.developmentProcess.0.title'),
      description: t('technicalAdvantages.developmentProcess.0.description'),
      color: 'blue'
    },
    {
      icon: GitBranch,
      title: t('technicalAdvantages.developmentProcess.1.title'),
      description: t('technicalAdvantages.developmentProcess.1.description'),
      color: 'green'
    },
    {
      icon: TestTube,
      title: t('technicalAdvantages.developmentProcess.2.title'),
      description: t('technicalAdvantages.developmentProcess.2.description'),
      color: 'purple'
    },
    {
      icon: Rocket,
      title: t('technicalAdvantages.developmentProcess.3.title'),
      description: t('technicalAdvantages.developmentProcess.3.description'),
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
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
            <h4 className="text-1xl md:text-2xl  text-gray-900 mb-6">
              {t('technicalAdvantages.title')}
            </h4>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('technicalAdvantages.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                  {t(`technicalAdvantages.techStack.${category}`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developmentProcess.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalAdvantages; 