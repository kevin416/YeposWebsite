'use client';

import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Package, 
  Megaphone, 
  Home, 
  CreditCard, 
  BarChart3 
} from 'lucide-react';

const SixCoreGoals = () => {
  const goals = [
    {
      icon: TrendingDown,
      title: "降本增效",
      description: "通过AI自动化工具减少30%人力成本，提升运营效率",
      color: "blue",
      metrics: "30%成本降低"
    },
    {
      icon: Package,
      title: "供应链优化",
      description: "对接本土供应商，实现智能库存管理，提高周转率",
      color: "green",
      metrics: "50%周转提升"
    },
    {
      icon: Megaphone,
      title: "全渠道营销",
      description: "集成类似抖音/美团式推广工具，提升私域流量运营能力",
      color: "purple",
      metrics: "60%获客成本降低"
    },
    {
      icon: Home,
      title: "生活服务聚合",
      description: "构建涵盖租房、二手交易、留学咨询等留学生生活服务平台",
      color: "orange",
      metrics: "一站式服务"
    },
    {
      icon: CreditCard,
      title: "支付整合",
      description: "支持微信/支付宝与本地支付方式（如Apple Pay、Google Pay）",
      color: "indigo",
      metrics: "多支付方式"
    },
    {
      icon: BarChart3,
      title: "数据驱动",
      description: "提供实时经营分析看板，辅助决策，实现精准运营",
      color: "red",
      metrics: "实时数据分析"
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      indigo: "from-indigo-500 to-indigo-600",
      red: "from-red-500 to-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-blue-500 to-blue-600";
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600",
      red: "text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-blue-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            六大核心目标
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过技术创新和生态整合，为海外华人企业提供全方位的数字化解决方案
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(goal.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(goal.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {goal.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {goal.description}
                  </p>
                  
                  {/* Metrics badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getColorClasses(goal.color)} text-white text-sm font-semibold`}>
                    {goal.metrics}
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${goal.color}-200 transition-colors duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">实现数字化转型</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              通过这六大核心目标的实现，我们将帮助海外华人企业建立完整的数字化商业生态，
              在竞争激烈的市场中脱颖而出。
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              了解更多
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SixCoreGoals; 