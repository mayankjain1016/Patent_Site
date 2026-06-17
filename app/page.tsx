import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Expertise } from '@/components/sections/expertise';
import { Process } from '@/components/sections/process';
import { Founder } from '@/components/sections/founder';
import { WhoWeHelp } from '@/components/sections/who-we-help';
import { CtaBanner } from '@/components/sections/cta';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Process />
        <Founder />
        <WhoWeHelp />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
