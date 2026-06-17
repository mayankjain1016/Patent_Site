import { CheckCircle2 } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';

const differentiators = [
  'Led by a Computer Science Engineer and Registered Patent Agent with deep technical and IP experience',
  'Strong understanding of software, electronics, communication, AI, IoT, and cross-domain inventions',
  'Experience supporting inventors, MSMEs, law firms, research organizations, and technology businesses',
  'Clear reporting style focused on relevance, technical comparison, and decision-making value',
  'Flexible support through remote discussions and in-office consultations in Agra',
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column: Section identity */}
          <Reveal>
            <SectionOverline>About Vicky Infotech</SectionOverline>
            <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15] mb-6">
              An MSME-Based IPR Consultancy Built on Technical Depth
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-accent-500 pl-5 mb-8">
              <p className="text-slate-500 text-sm font-mono tracking-wide uppercase leading-relaxed">
                &ldquo;The focus is to support innovators with technically sound, 
                well-structured, and business-relevant patent research.&rdquo;
              </p>
            </blockquote>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-[1.8] mb-4">
                Vicky Infotech is an MSME-based IPR consultancy located in Sikandra, Agra. 
                The firm is founded and managed by Vipin Kumar, a Computer Science Engineer 
                and Registered Patent Agent with extensive experience in patent search, 
                patent drafting, prosecution support, patent landscaping, invalidation 
                analysis, and technology-focused IP strategy.
              </p>
              <p className="text-slate-600 leading-[1.8]">
                Whether you are preparing to file a patent application, evaluating 
                novelty before investing in a product, or supporting a legal matter 
                requiring prior art evidence — Vicky Infotech delivers clear searches, 
                practical insights, and stronger patent decisions.
              </p>
            </div>
          </Reveal>

          {/* Right column: Why choose */}
          <Reveal delay={0.12}>
            <div className="bg-slate-50 p-8 lg:p-10">
              <h3 className="font-display font-semibold text-navy-900 text-lg mb-6">
                Why Patent Professionals Trust Vicky Infotech
              </h3>
              <ul className="flex flex-col gap-5" role="list">
                {differentiators.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-accent-500"
                      strokeWidth={2}
                    />
                    <p className="text-slate-600 text-sm leading-[1.75]">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Credential strip */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                {[
                  { label: 'B.E. Computer Science', sublabel: 'Since 2002' },
                  { label: 'Registered Patent Agent', sublabel: 'Since 2008' },
                  { label: 'MSME-Registered Firm', sublabel: 'Agra, UP' },
                  { label: 'Embedded Systems', sublabel: 'Certified Course' },
                ].map(({ label, sublabel }) => (
                  <div key={label} className="bg-white p-3 border border-slate-200">
                    <p className="text-xs font-semibold text-navy-900">{label}</p>
                    <p className="font-mono text-[10px] tracking-wide text-slate-400 mt-0.5 uppercase">
                      {sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
