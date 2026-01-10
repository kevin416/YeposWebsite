'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const ClientCases = () => {
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

  const cases = t('clientCases.cases', { returnObjects: true }) as Array<{
    title: string;
    industry: string;
    description: string;
    results: string[];
    technologies: string[];
  }> || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-xl md:text-2xl text-gray-900 mb-6">
              {t('clientCases.title')}
            </h4>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('clientCases.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(cases) && cases.map((caseStudy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('clientCases.resultsTitle')}：</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('clientCases.technologiesTitle')}：</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCases; 