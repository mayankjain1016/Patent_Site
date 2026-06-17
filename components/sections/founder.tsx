import { GraduationCap, Shield, Cpu, Search, Award, BookOpen } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';

const credentials = [
  {
    Icon: GraduationCap,
    title: 'B.E. Computer Science',
    subtitle: 'Completed 2002',
    detail: 'Foundation in algorithms, systems, hardware, and software engineering',
  },
  {
    Icon: Shield,
    title: 'Registered Patent Agent',
    subtitle: 'Since 2008 · India',
    detail: 'Authorised to conduct patent searches, drafting, and prosecution support',
  },
  {
    Icon: Cpu,
    title: 'Embedded Systems',
    subtitle: 'Post-Degree Certification',
    detail: 'Deep understanding of hardware-software interface and system design',
  },
  {
    Icon: Search,
    title: 'Prior Art Specialisation',
    subtitle: '18+ Years Practice',
    detail: 'Extensive experience in patent and non-patent literature searches globally',
  },
  {
    Icon: Award,
    title: 'Patent Search Expert',
    subtitle: 'Novelty · Inventive Step · Industrial Applicability',
    detail: 'Structured analysis across all three patentability criteria for each search',
  },
  {
    Icon: BookOpen,
    title: 'Cross-Domain Knowledge',
    subtitle: 'CS · Electronics · AI · IoT',
    detail: 'Technical fluency across modern technology fields and interdisciplinary inventions',
  },
];

export function Founder() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[auto_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: Profile */}
          <Reveal className="lg:sticky lg:top-24">
            <div className="max-w-xs">

              {/* Photo placeholder */}
              <div className="w-full aspect-[3/4] max-w-[240px] bg-navy-900 flex flex-col items-center justify-center mb-6 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(19,45,86,0.5) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <div className="relative text-center px-4">
                  <div className="font-display font-bold text-white text-5xl tracking-tight">
                    VK
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-400 mt-2">
                    Vipin Kumar
                  </div>
                </div>
              </div>

              {/* Name & title */}
              <h2 className="font-display font-bold text-navy-900 text-2xl tracking-tight mb-1">
                Vipin Kumar
              </h2>
              <p className="text-slate-500 text-sm">
                Founder, Vicky Infotech
              </p>
              <div className="mt-3 inline-flex items-center gap-2 border border-slate-200 px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500">
                  Registered Patent Agent
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Credentials + bio */}
          <div>
            <Reveal>
              <SectionOverline>The Expert Behind the Research</SectionOverline>
              <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15] mb-6">
                Technical Authority in Patent Search & Prior Art Analysis
              </h2>
              <div className="prose prose-slate max-w-none mb-10">
                <p className="text-slate-600 leading-[1.85]">
                  Vipin Kumar holds a B.E. in Computer Science, completed in 2002, and has been a Registered Patent Agent since 2008. He has extensive experience in conducting patent searches and prior art searches. After completing his B.E. degree, he also completed a course in Embedded Systems. Vipin provides prior art search services across various computer science topics to support inventors in filing patent applications. His focus is exclusively on delivering patent search services with detailed analysis of novelty, inventive step/non-obviousness, and industrial applicability. These services help inventors understand, in advance, who their competitors are and what information related to their inventions is already available in the public domain, enabling them to rework or work around existing knowledge to improve their inventions.
                </p>
              </div>
            </Reveal>

            {/* Credentials grid */}
            <Reveal delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-px bg-slate-200">
                {credentials.map(({ Icon, title, subtitle, detail }) => (
                  <div
                    key={title}
                    className="bg-white p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-slate-50 border border-slate-200 shrink-0">
                        <Icon size={16} strokeWidth={1.75} className="text-navy-700" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-navy-900 text-sm">
                          {title}
                        </p>
                        <p className="font-mono text-[10px] tracking-wide uppercase text-accent-500 mt-0.5">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed pl-10">{detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
