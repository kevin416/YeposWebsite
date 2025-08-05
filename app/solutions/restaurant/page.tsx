// solutions/restaurant/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FaUtensils, FaCalendar, FaUsers, FaMobileAlt, FaChartBar } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { useTranslation } from '../../i18n/client';
import Link from 'next/link';

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic';

export default function RestaurantSolution() {
  // 获取当前语言参数
  const params = useParams();
  const lng = typeof params?.lng === 'string' ? params.lng : 'zh'; // 默认中文
  
  // 使用静态翻译对象作为备份，以防i18n在静态生成时出错
  const staticTranslations = {
    en: {
      hero: {
        title: "Digital Solutions for Restaurants",
        description: "Comprehensive digital upgrade solutions for your restaurant to improve operational efficiency, increase revenue, and enhance customer experience"
      },
      sections: {
        painPoints: "Solving Restaurant Industry Pain Points",
        solutions: "Solutions"
      },
      painPoints: {
        booking: {
          title: "Chaotic Reservation Management",
          description: "Traditional phone reservations vs. smart reservation system",
          traditional: "Manual answering, error-prone, low efficiency",
          digital: "Automated processing, high accuracy, 24/7 service"
        },
        loyalty: {
          title: "Low Customer Loyalty",
          description: "No membership system vs. intelligent member management",
          traditional: "Difficult to identify regular customers, unable to personalize service",
          digital: "Precise identification, personalized recommendations, increased repurchase rate"
        },
        menu: {
          title: "Outdated Menus",
          description: "Paper menus vs. digital menus",
          traditional: "High update costs, long cycles, easily misunderstood",
          digital: "Real-time updates, multi-language support, image display"
        }
      },
      cta: {
        title: "Ready to start your restaurant's digital journey?",
        button: "Book a Free Consultation"
      }
    },
    zh: {
      hero: {
        title: "餐饮行业数字化解决方案",
        description: "为您的餐厅打造全方位数字化升级方案，提升运营效率，增加营收，改善顾客体验"
      },
      sections: {
        painPoints: "解决餐饮行业痛点",
        solutions: "解决方案"
      },
      painPoints: {
        booking: {
          title: "预订管理混乱",
          description: "传统电话预订vs智能预订系统",
          traditional: "人工接听、易出错、效率低",
          digital: "自动化处理、准确率高、24/7服务"
        },
        loyalty: {
          title: "顾客忠诚度低",
          description: "无会员系统vs智能会员管理",
          traditional: "难以识别老客户、无法个性化服务",
          digital: "精准识别、个性化推荐、提高复购率"
        },
        menu: {
          title: "菜单更新不及时",
          description: "纸质菜单vs数字菜单",
          traditional: "更新成本高、周期长、易造成误解",
          digital: "实时更新、多语言支持、图片展示"
        }
      },
      cta: {
        title: "准备开始您的餐厅数字化之旅？",
        button: "预约免费咨询"
      }
    }
  };
  
  // 使用静态翻译，避免构建时的翻译错误
  const currentLang = lng === 'zh' ? 'zh' : 'en';
  const t = (key: string, options?: any) => {
    try {
      const currentLang = lng === 'zh' ? 'zh' : 'en';
      const keys = key.split('.');
      let result = staticTranslations[currentLang as keyof typeof staticTranslations];
      
              for (const k of keys) {
          if (k === 'solutions' && keys[1] === 'restaurant') {
            // 特殊处理solutions.restaurant路径
            return options?.defaultValue || key;
          }
          // @ts-ignore
          result = result[k];
          if (result === undefined) {
            return options?.defaultValue || key;
          }
        }
        return typeof result === 'string' ? result : (options?.defaultValue || key);
    } catch (e) {
      return options?.defaultValue || key;
    }
  };

  // 使用可能的翻译，如果不存在则使用默认值
  const getTranslation = (key: string, defaultValue: string): string => {
    try {
      const value = t(key, { defaultValue });
      return value || defaultValue;
    } catch (error) {
      return defaultValue;
    }
  };

  // 定义痛点类型
  interface PainPoint {
    icon: React.ReactElement;
    title: string;
    description: string;
    comparison: {
      traditional: string;
      digital: string;
    };
  }

  // 定义解决方案类型
  interface Solution {
    title: string;
    features: string[];
  }

  const painPoints: PainPoint[] = [
    {
      icon: <FaCalendar className="h-6 w-6" />,
      title: getTranslation('solutions.restaurant.painPoints.booking.title', "预订管理混乱"),
      description: getTranslation('solutions.restaurant.painPoints.booking.description', "传统电话预订vs智能预订系统"),
      comparison: {
        traditional: getTranslation('solutions.restaurant.painPoints.booking.traditional', "人工接听、易出错、效率低"),
        digital: getTranslation('solutions.restaurant.painPoints.booking.digital', "自动化处理、准确率高、24/7服务")
      }
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: getTranslation('solutions.restaurant.painPoints.loyalty.title', "顾客忠诚度低"),
      description: getTranslation('solutions.restaurant.painPoints.loyalty.description', "无会员系统vs智能会员管理"),
      comparison: {
        traditional: getTranslation('solutions.restaurant.painPoints.loyalty.traditional', "难以识别老客户、无法个性化服务"),
        digital: getTranslation('solutions.restaurant.painPoints.loyalty.digital', "精准识别、个性化推荐、提高复购率")
      }
    },
    {
      icon: <FaMobileAlt className="h-6 w-6" />,
      title: getTranslation('solutions.restaurant.painPoints.menu.title', "菜单更新不及时"),
      description: getTranslation('solutions.restaurant.painPoints.menu.description', "纸质菜单vs数字菜单"),
      comparison: {
        traditional: getTranslation('solutions.restaurant.painPoints.menu.traditional', "更新成本高、周期长、易造成误解"),
        digital: getTranslation('solutions.restaurant.painPoints.menu.digital', "实时更新、多语言支持、图片展示")
      }
    }
  ];

  // 默认解决方案
  const defaultSolutions: Solution[] = [
    {
      title: lng === 'zh' ? "智能预订系统" : "Smart Reservation System",
      features: lng === 'zh' ? [
        "在线预订和自动确认",
        "智能桌位分配",
        "客户特殊要求记录",
        "自动提醒服务"
      ] : [
        "Online booking and automatic confirmation",
        "Intelligent table allocation",
        "Customer special request recording",
        "Automatic reminder service"
      ]
    },
    {
      title: lng === 'zh' ? "会员忠诚度计划" : "Membership Loyalty Program",
      features: lng === 'zh' ? [
        "积分奖励系统",
        "个性化优惠推送",
        "生日特别关怀",
        "消费数据分析"
      ] : [
        "Points reward system",
        "Personalized offer delivery",
        "Birthday special care",
        "Consumption data analysis"
      ]
    },
    {
      title: lng === 'zh' ? "数字化菜单管理" : "Digital Menu Management",
      features: lng === 'zh' ? [
        "实时价格更新",
        "多语言支持",
        "食物过敏标签",
        "推荐菜品展示"
      ] : [
        "Real-time price updates",
        "Multi-language support",
        "Food allergy labels",
        "Recommended dish display"
      ]
    }
  ];

  // 尝试从翻译中获取解决方案，如果不存在则使用默认值
  const getSolutions = (): Solution[] => {
    try {
      const translatedSolutions = t('solutions.restaurant.solutions', { returnObjects: true });
      if (Array.isArray(translatedSolutions) && translatedSolutions.length > 0) {
        return translatedSolutions as Solution[];
      }
    } catch (error) {
      // 如果出错，继续使用默认值
    }
    
    // 默认值
    return defaultSolutions;
  };

  const solutions = getSolutions();

  // Hero 标题和描述
  const heroTitle = getTranslation('solutions.restaurant.hero.title', '餐饮行业数字化解决方案');
  const heroDescription = getTranslation('solutions.restaurant.hero.description', 
    '为您的餐厅打造全方位数字化升级方案，提升运营效率，增加营收，改善顾客体验');

  // 页面部分标题
  const painPointsTitle = getTranslation('solutions.restaurant.sections.painPoints', '解决餐饮行业痛点');
  const solutionsTitle = getTranslation('solutions.restaurant.sections.solutions', '解决方案');
  const ctaTitle = getTranslation('solutions.restaurant.cta.title', '准备开始您的餐厅数字化之旅？');
  const ctaButton = getTranslation('solutions.restaurant.cta.button', '预约免费咨询');

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
              {heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              {heroDescription}
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
            {painPointsTitle}
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
            {solutionsTitle}
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
                  {(solution.features || []).map((feature, featureIndex) => (
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
            {ctaTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/${lng}/contact`} 
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-200"
            >
              {ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}