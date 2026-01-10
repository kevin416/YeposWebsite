"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';

export default function Header() {
  const pathname = usePathname();
  const lng = pathname.split('/')[1] || 'zh'; // Extract language from pathname
  const { t } = useTranslation(lng);

  return (
    <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Logo section - positioned absolutely on left */}
        <div className="absolute left-0 flex items-center gap-4">
          <Link href={`/${lng}`} className="flex items-center gap-4">
            {/* Y logo */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">Y</div>
            {/* Yepos text */}
            <div className="text-sm font-semibold">{t('brand.name')}</div>
            {/* 餐饮一体化解决方案 text */}
            <div className="text-xs text-gray-500">{t('brand.tagline')}</div>
          </Link>
        </div>

        {/* Navigation section - positioned absolutely on right */}
        <nav className="absolute right-0 flex items-center gap-6">
          <Link href={`/${lng}`} className="text-sm text-gray-700 hover:text-blue-600">{t('nav.home')}</Link>
          <Link href="#products" className="text-sm text-gray-700 hover:text-blue-600">{t('nav.products')}</Link>
          <Link href="/solutions/print-proxy" className="text-sm text-gray-700 hover:text-blue-600">{t('nav.printProxy')}</Link>
          <Link href="/case-studies" className="text-sm text-gray-700 hover:text-blue-600">{t('nav.caseStudies')}</Link>
          <Link href="#contact" className="text-sm text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">{t('nav.bookDemo')}</Link>
        </nav>
      </div>
    </header>
  );
}
