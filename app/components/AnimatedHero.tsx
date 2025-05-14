'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

export default function AnimatedHero() {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
            <span className="block text-3xl md:text-5xl mt-4 text-blue-200">
              {t('hero.subtitle')}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50 group"
            >
              {t('hero.cta.contact')}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#services" 
              className="btn-primary bg-transparent border-2 border-white/50 hover:bg-white/10"
            >
              {t('hero.cta.learnMore')}
            </a>
          </motion.div>

          {/* Tech stack showcase */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-white/70 mb-4">{t('hero.techStack')}</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'iOS', 'Android', 'Flutter'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#services" 
            className="text-white/80 hover:text-white flex flex-col items-center animate-float"
          >
            <span className="text-sm mb-4">{t('hero.scroll')}</span>
            <FaArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
} 