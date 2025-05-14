'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function CoreValues() {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  const values = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: t('coreValues.efficiency.title'),
      description: t('coreValues.efficiency.description'),
      stats: t('coreValues.efficiency.stats'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      title: t('coreValues.revenue.title'),
      description: t('coreValues.revenue.description'),
      stats: t('coreValues.revenue.stats'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaPiggyBank className="w-8 h-8" />,
      title: t('coreValues.cost.title'),
      description: t('coreValues.cost.description'),
      stats: t('coreValues.cost.stats'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="values" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
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
            {t('coreValues.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto"
          >
            {t('coreValues.description')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} 
                  flex items-center justify-center text-white mb-6 transform 
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className={`text-lg font-semibold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                  {value.stats}
                </div>
              </div>
              <div className={`h-2 bg-gradient-to-r ${value.color}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 