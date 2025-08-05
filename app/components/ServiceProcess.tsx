'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const ServiceProcess = () => {
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

  const processSteps = [
    {
      icon: Search,
      title: '需求发现与分析',
      description: '我们通过全面分析来了解您的业务需求、目标和技求，为项目奠定坚实基础。',
      color: 'blue',
      step: '01'
    },
    {
      icon: PenTool,
      title: '设计与规划',
      description: '我们的设计团队创建以用户为中心的界面，架构师规划技术架构。',
      color: 'green',
      step: '02'
    },
    {
      icon: Code,
      title: '开发实施',
      description: '我们经验丰富的开发团队使用敏捷方法构建您的解决方案，定期更新和反馈。',
      color: 'purple',
      step: '03'
    },
    {
      icon: TestTube,
      title: '测试与质量保证',
      description: '全面测试确保您的解决方案无缺陷、安全且性能最优。',
      color: 'orange',
      step: '04'
    },
    {
      icon: Rocket,
      title: '部署上线',
      description: '我们零停机时间部署您的解决方案，确保平滑过渡到生产环境。',
      color: 'red',
      step: '05'
    },
    {
      icon: Headphones,
      title: '支持与维护',
      description: '持续的支持、维护和更新，确保您的解决方案平稳运行。',
      color: 'indigo',
      step: '06'
    }
  ];

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
              我们的开发流程
            </h4>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              经过验证的方法论，确保从初始概念到最终部署及后续维护的项目成功交付。
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                
                <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">准备开始您的项目了吗？</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              让我们讨论您的需求，制定一个完美契合您业务需求和时间安排的定制开发计划。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                免费咨询
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                查看我们的作品
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess; 