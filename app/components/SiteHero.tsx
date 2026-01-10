"use client";

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

export default function SiteHero() {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{t('siteHero.title')}</h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">{t('siteHero.description')}</p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow">{t('siteHero.cta.bookDemo')} <FaArrowRight /></a>
            <a href="#products" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full text-white/95">{t('siteHero.cta.learnMore')}</a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-blue-200">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm">{t('siteHero.stats.speedUp')}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold">80%</div>
              <div className="text-sm">{t('siteHero.stats.reduceErrors')}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold">多平台</div>
              <div className="text-sm">{t('siteHero.stats.multiPlatform')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
