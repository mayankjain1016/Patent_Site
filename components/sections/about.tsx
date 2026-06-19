import { CheckCircle2, ShieldCheck, Cpu, Award, MapPin, Quote } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';

const differentiators = [
  'Led by a Computer Science Engineer with deep technical and IP experience',
  'Strong understanding of software, electronics, communication, AI, IoT, and cross-domain inventions',
  'Experience supporting inventors, MSMEs, law firms, research organizations, and technology businesses',
  'Clear reporting style focused on relevance, technical comparison, and decision-making value',
  'Flexible support through remote discussions and in-office consultations in Agra',
];

const credentials = [
  { icon: Cpu, label: 'B.E. Computer Science', sublabel: 'Since 2002' },
  { icon: ShieldCheck, label: 'Patent Professional', sublabel: 'Since 2008' },
  { icon: Award, label: 'Embedded Systems', sublabel: 'Certified Course' },
  { icon: MapPin, label: 'MSME-Registered', sublabel: 'Agra, UP' },
];

export function About() {
  return (
    <section id="about" className="relative bg-white pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>


              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl text-balance">
                An MSME-Based IPR Consultancy Built on Technical Depth
              </h2>

              <div className="mt-6 flex flex-col gap-6">
                <p className="text-justify text-pretty text-base leading-relaxed text-slate-600">
                  Vicky Infotech is an MSME-based IPR consultancy located in Sikandra, Agra.
                  The firm is founded and managed by Vipin Kumar, a Computer Science Engineer
                  with extensive experience in patent search,
                  patent drafting, prosecution support, patent landscaping, invalidation
                  analysis, and technology-focused IP strategy.
                </p>

                {/* Mission Quote */}
                <div className="relative mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-4 items-start">
                    <Quote className="mt-0.5 h-6 w-6 shrink-0 text-blue-500" aria-hidden="true" strokeWidth={2} fill="currentColor" />
                    <p className="text-justify text-pretty font-sans text-base font-normal leading-relaxed text-slate-700">
                      Our focus is to support innovators with technically sound, well-structured,
                      and business-relevant patent research that helps them understand the strength,
                      novelty, and competitive context of their inventions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Spacer Column for Desktop */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Column: Differentiators & Trust Signals */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Credentials Grid - Elevated to the top for immediate trust */}
            <Reveal delay={0.1}>
              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 border border-blue-100/50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100/80 group-hover:text-blue-700">
                      <cred.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-bold text-slate-900 group-hover:text-blue-950 transition-colors">{cred.label}</p>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {cred.sublabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Differentiators List - Styled as a technical spec sheet */}
            <Reveal delay={0.2}>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-slate-950 mb-6">
                Why Professionals Trust Us
              </h3>

              <ul className="flex flex-col divide-y divide-slate-100" role="list">
                {differentiators.map((point, i) => (
                  <li key={i} className="flex gap-x-4 py-4 first:pt-0 last:pb-0">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-none text-blue-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="text-pretty text-sm leading-relaxed text-slate-600">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}