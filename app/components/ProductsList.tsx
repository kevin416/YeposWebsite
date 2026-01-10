"use client";

import FeatureCard from './FeatureCard';
import { FaMobileAlt, FaLaptop, FaPrint } from 'react-icons/fa';
import Link from 'next/link';
import PrefillLink from './PrefillLink';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';

export default function ProductsList() {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);
  const products = [
    {
      key: 'yepos-manager',
      title: t('products.yeposManager.title'),
      description: t('products.yeposManager.description'),
      icon: <FaMobileAlt />,
      highlight: t('products.yeposManager.highlight'),
      href: '/solutions/yepos-manager'
    },
    {
      key: 'manager-next',
      title: t('products.managerNext.title'),
      description: t('products.managerNext.description'),
      icon: <FaLaptop />,
      highlight: t('products.managerNext.highlight'),
      href: '/solutions/manager-next'
    },
    {
      key: 'print-proxy',
      title: t('products.printProxy.title'),
      description: t('products.printProxy.description'),
      icon: <FaPrint />,
      highlight: t('products.printProxy.highlight'),
      href: '/solutions/print-proxy'
    },
    {
      key: 'yepos-online',
      title: t('products.yeposOnline.title'),
      description: t('products.yeposOnline.description'),
      icon: <FaLaptop />,
      highlight: t('products.yeposOnline.highlight'),
      href: '/solutions/yepos-online'
    }
  ];

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{t('products.title')}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{t('products.description')}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <PrefillLink key={p.key} product={p.key}>
              <div className="group">
                <FeatureCard title={p.title} description={p.description} icon={p.icon} highlight={p.highlight} />
              </div>
            </PrefillLink>
          ))}
        </div>
      </div>
    </section>
  );
}
