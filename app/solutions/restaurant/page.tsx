'use client';

import { motion } from 'framer-motion';
import { FaUtensils, FaCalendar, FaUsers, FaMobileAlt, FaChartBar } from 'react-icons/fa';

const painPoints = [
  {
    icon: <FaCalendar className="h-6 w-6" />,
    title: "预订管理混乱",
    description: "传统电话预订vs智能预订系统",
    comparison: {
      traditional: "人工接听、易出错、效率低",
      digital: "自动化处理、准确率高、24/7服务"
    }
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "顾客忠诚度低",
    description: "无会员系统vs智能会员管理",
    comparison: {
      traditional: "难以识别老客户、无法个性化服务",
      digital: "精准识别、个性化推荐、提高复购率"
    }
  },
  {
    icon: <FaMobileAlt className="h-6 w-6" />,
    title: "菜单更新不及时",
    description: "纸质菜单vs数字菜单",
    comparison: {
      traditional: "更新成本高、周期长、易造成误解",
      digital: "实时更新、多语言支持、图片展示"
    }
  }
];

const solutions = [
  {
    title: "智能预订系统",
    features: [
      "在线预订和自动确认",
      "智能桌位分配",
      "客户特殊要求记录",
      "自动提醒服务"
    ]
  },
  {
    title: "会员忠诚度计划",
    features: [
      "积分奖励系统",
      "个性化优惠推送",
      "生日特别关怀",
      "消费数据分析"
    ]
  },
  {
    title: "数字化菜单管理",
    features: [
      "实时价格更新",
      "多语言支持",
      "食物过敏标签",
      "推荐菜品展示"
    ]
  }
];

export default function RestaurantSolution() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-400 to-red-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              餐饮行业数字化解决方案
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              为您的餐厅打造全方位数字化升级方案，提升运营效率，增加营收，改善顾客体验
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            解决餐饮行业痛点
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700">传统模式：{point.comparison.traditional}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-green-700">数字化后：{point.comparison.digital}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            解决方案
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <FaChartBar className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-400 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            准备开始您的餐厅数字化之旅？
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="/contact" 
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-200"
            >
              预约免费咨询
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 