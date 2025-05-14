// app/[lng]/page.tsx
'use client';

import AnimatedHero from '../components/AnimatedHero';
import IndustrySolutions from '../components/IndustrySolutions';
import CoreValues from '../components/CoreValues';
import AnimatedServices from '../components/AnimatedServices';
import ContactForm from '../components/ContactForm';
import { useParams } from 'next/navigation';

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic';

export default function Home() {
  const params = useParams();
  const lng = params?.lng || 'en';
  
  return (
    <main className="overflow-hidden">
      <AnimatedHero />
      <CoreValues />
      <IndustrySolutions />
      <AnimatedServices />
      <ContactForm />
    </main>
  );
}