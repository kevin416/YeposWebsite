'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const MarketPainPoints = () => {
  const painPoints = [
    {
      category: "运营成本",
      problem: "人力成本飙升（如英国NI税15%）",
      traditionalSolution: "增加兼职员工",
      ourSolution: "AI客服+自动化订单处理",
      impact: "减少30%人力成本"
    },
    {
      category: "供应链",
      problem: "库存管理混乱，采购成本高",
      traditionalSolution: "人工电话订货",
      ourSolution: "供应商API直连+智能补货",
      impact: "提高50%周转率"
    },
    {
      category: "营销获客",
      problem: "依赖高佣金平台（30%+）",
      traditionalSolution: "被动等单",
      ourSolution: "自媒体营销工具+私域流量运营",
      impact: "降低60%获客成本"
    },
    {
      category: "服务单一",
      problem: "无法满足留学生多元需求",
      traditionalSolution: "单一餐饮服务",
      ourSolution: "餐饮/商超/租房/二手/留学等生活服务聚合",
      impact: "一站式服务平台"
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
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            市场痛点与解决方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深度分析海外华人企业面临的挑战，提供创新的数字化解决方案
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.category}</h3>
                    <p className="text-gray-600">{item.problem}</p>
                  </div>
                </div>

                {/* Solutions Comparison */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Traditional Solution */}
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-300">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 text-sm font-bold">传</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700">传统方案</h4>
                    </div>
                    <p className="text-gray-600">{item.traditionalSolution}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Our Solution */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-blue-900">我们的方案</h4>
                    </div>
                    <p className="text-blue-800 mb-3">{item.ourSolution}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {item.impact}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">解决方案效果对比</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-blue-100">人力成本降低</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-blue-100">库存周转提升</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-blue-100">获客成本降低</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">服务覆盖度</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              准备开始数字化转型？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              加入我们的平台，体验智能化的商业管理解决方案，
              让您的企业在数字化时代获得竞争优势。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                免费试用
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                预约演示
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketPainPoints; 