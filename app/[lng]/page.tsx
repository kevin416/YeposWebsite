import AnimatedHero from '../components/AnimatedHero';
import IndustrySolutions from '../components/IndustrySolutions';
import CoreValues from '../components/CoreValues';
import AnimatedServices from '../components/AnimatedServices';
import ContactForm from '../components/ContactForm';

export default function Home({
  params: { lng }
}: {
  params: { lng: string }
}) {
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