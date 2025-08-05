'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

const ClientCases = () => {
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

  const cases = [
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      description: 'Developed a comprehensive e-commerce platform for a leading retail chain.',
      results: ['150% Sales Increase', '40% Cost Reduction'],
      technologies: ['React', 'Node.js', 'MongoDB'],
      rating: 5
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Built a patient management system for a network of clinics.',
      results: ['60% Time Savings', 'Enhanced Patient Care'],
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      rating: 5
    },
    {
      title: 'Financial Analytics Dashboard',
      industry: 'Finance',
      description: 'Created a real-time analytics dashboard for financial services.',
      results: ['Real-time Insights', '90% Faster Reporting'],
      technologies: ['Angular', 'Java', 'Redis'],
      rating: 5
    }
  ];

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories &
              <span className="text-blue-600 block">Client Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <div className="flex items-center">
                    {[...Array(caseStudy.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
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