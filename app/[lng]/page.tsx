// app/[lng]/page.tsx

import AnimatedHero from '../components/AnimatedHero';
import ProfessionalCompanyIntro from '../components/ProfessionalCompanyIntro';
import TechnicalAdvantages from '../components/TechnicalAdvantages';
import SixCoreGoals from '../components/SixCoreGoals';
import MarketPainPoints from '../components/MarketPainPoints';
import IndustrySolutions from '../components/IndustrySolutions';
import CoreValues from '../components/CoreValues';
import AnimatedServices from '../components/AnimatedServices';
import ServiceProcess from '../components/ServiceProcess';
import ClientCases from '../components/ClientCases';
import StatsSection from '../components/StatsSection';
import BlogFeatured from '../components/BlogFeatured';
import ContactForm from '../components/ContactForm';

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <AnimatedHero />
      
      {/* Professional Company Introduction */}
      <ProfessionalCompanyIntro />
      
      {/* Technical Advantages */}
      <TechnicalAdvantages />
      
      {/* Statistics Section */}
      <StatsSection />
      
      {/* Core Goals */}
      <SixCoreGoals />
      
      {/* Market Pain Points */}
      <MarketPainPoints />
      
      {/* Core Values */}
      <CoreValues />
      
      {/* Industry Solutions */}
      <IndustrySolutions />
      
      {/* Services */}
      <AnimatedServices />
      
      {/* Development Process */}
      <ServiceProcess />
      
      {/* Client Cases */}
      <ClientCases />
      
      {/* Blog Featured */}
      <BlogFeatured />
      
      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}