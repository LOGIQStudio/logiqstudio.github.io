import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Industries } from '@/components/sections/Industries';
import { Process } from '@/components/sections/Process';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Awards } from '@/components/sections/Awards';
import { CTA } from '@/components/sections/CTA';

export function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Awards />
      <CTA />
    </main>
  );
}
