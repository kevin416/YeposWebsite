"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languages, fallbackLng } from '../i18n/settings';

type Props = {
  product: string;
  children?: React.ReactNode;
  className?: string;
};

export default function PrefillLink({ product, children, className }: Props) {
  const pathname = usePathname() || '/';
  // pathname like '/zh/solutions/print-proxy' => ['', 'zh', 'solutions', ...]
  const parts = pathname.split('/').filter(Boolean);
  let lng = parts[0];
  if (!languages.includes(lng)) lng = fallbackLng;

  const href = `/${lng}?product=${encodeURIComponent(product)}#contact`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
