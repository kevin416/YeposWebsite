'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Zap, GitBranch, TestTube, Rocket } from 'lucide-react';

const TechnicalAdvantages = () => {
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
      title: '需求分析',
      description: '深入理解业务需求与技术要求',
      color: 'blue'
    },
    {
      icon: GitBranch,
      title: '敏捷开发',
      description: '迭代式开发，定期客户反馈与更新',
      color: 'green'
    },
    {
      icon: TestTube,
      title: '质量测试',
      description: '全流程测试，包括单元、集成与用户验收',
      color: 'purple'
    },
    {
      icon: Rocket,
      title: '上线部署',
      description: '无缝部署，CI/CD自动化与监控',
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              技术卓越与
              <span className="text-blue-600 block">创新</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们采用前沿技术与行业最佳实践，交付高可扩展、高安全、高性能的软件解决方案。
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                  {category === 'frontend' && '前端技术'}
                  {category === 'backend' && '后端技术'}
                  {category === 'mobile' && '移动端'}
                  {category === 'database' && '数据库'}
                  {category === 'cloud' && '云服务'}
                  {category === 'ai' && '人工智能与机器学习'}
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