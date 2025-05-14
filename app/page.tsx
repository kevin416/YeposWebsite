import { redirect } from 'next/navigation';
import { fallbackLng } from './i18n/settings';
import AnimatedHero from './components/AnimatedHero';
import IndustrySolutions from './components/IndustrySolutions';
import CoreValues from './components/CoreValues';
import AnimatedServices from './components/AnimatedServices';
import ContactForm from './components/ContactForm';

export default function RootPage() {
  redirect(`/${fallbackLng}`);
}

export function Home() {
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
