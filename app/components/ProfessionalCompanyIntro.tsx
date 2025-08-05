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

  const stats = [
    { number: '5+', label: '服务国家', icon: Globe },
    { number: '95+', label: '完成项目', icon: Code },
    { number: '95%', label: '客户满意度', icon: Award },
    { number: '24/7', label: '全天候支持', icon: Shield }
  ];

  const advantages = [
    {
      icon: Globe,
      title: '全球化视野',
      description: '国际化团队，跨文化背景，深谙全球市场',
      color: 'blue'
    },
    {
      icon: Code,
      title: '技术卓越',
      description: '采用前沿技术与最佳实践，打造高质量软件',
      color: 'green'
    },
    {
      icon: Shield,
      title: '安全为先',
      description: '企业级安全标准，符合国际合规要求',
      color: 'purple'
    },
    {
      icon: Zap,
      title: '敏捷交付',
      description: '快速开发迭代，持续集成与部署',
      color: 'orange'
    },
    {
      icon: Users,
      title: '专属团队',
      description: '经验丰富的开发与项目管理团队全程服务',
      color: 'indigo'
    },
    {
      icon: Award,
      title: '质量保障',
      description: '全流程测试与质量控制，确保方案可靠',
      color: 'red'
    }
  ];

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
              跨国的软件开发公司
            </h4>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              我们是一家具有跨国的专业软件开发公司，专注于定制软件解决方案、移动应用开发和数字化转型。
              我们的国际化团队融合前沿技术与深厚行业经验，为企业提供创新方案，助力业务增长
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
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl  text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Advantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 ${getColorClasses(advantage.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <advantage.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
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
            <h4 className="text-3xl  mb-6">我们的使命</h4>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              通过创新软件解决方案，赋能全球企业实现数字化转型，提升运营效率，打造可持续竞争优势
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                创新驱动
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                质量为本
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                客户至上
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                全球视野
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalCompanyIntro; 