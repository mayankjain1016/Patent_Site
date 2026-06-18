import { Layers, Search, Cpu, Code, Globe, Shield, Network, Database } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { EXPERTISE_DOMAINS } from '@/constants/site';

const DOMAIN_ICONS = [
  Code,       // Software
  Cpu,        // Hardware
  Database,   // Systems
  Globe,      // Networks
  Network,    // AI
  Shield,     // Security
];

export function Expertise() {
  return (
    <section id="expertise" className="relative bg-slate-50/50 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 w-[600px] h-[600px] bg-indigo-50/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 w-[600px] h-[600px] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Engineered Header Layout */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <h3 className="font-sans text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                Technical Expertise
              </h3>
              <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                Deep Domain Coverage Across Technology Fields
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-slate-600 text-pretty">
                Patent research requires understanding the invention at a technical level.
                With a B.E. in Computer Science and hands-on knowledge of embedded systems,
                our research covers the full breadth of modern technology fields — from
                algorithms and hardware to AI, IoT, cybersecurity, and cross-domain inventions
                touching electronics, physics, and thermal science.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Capability Matrix (Premium Cards) */}
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXPERTISE_DOMAINS.map((domain, idx) => {
            const IconComponent = DOMAIN_ICONS[idx % DOMAIN_ICONS.length];
            return (
              <StaggerItem key={domain.domain}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-colors duration-300 hover:border-sky-400">
                  
                  {/* Domain Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm">
                         <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-sans text-base font-bold text-slate-900">
                        {domain.domain}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Data Tokens (Tags) */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {domain.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 font-sans text-[11px] font-semibold text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Light Theme Callout Banner */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col gap-8 rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 sm:p-8 md:p-10 md:flex-row md:items-center md:justify-between shadow-sm border border-blue-100/50">

            {/* Left: Cross-domain explanation */}
            <div className="flex max-w-2xl items-start gap-5">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm border border-blue-100/50">
                <Layers className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">
                  Cross-Domain Capability
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Many inventions span multiple fields. Prior art searches extend into
                  electronics, signal systems, analog interfaces, physics, chemistry,
                  and thermal science where the invention concept crosses boundaries.
                </p>
              </div>
            </div>

            {/* Right: Search Methodology Specs */}
            <div className="flex items-start gap-5 md:shrink-0 md:border-l md:border-blue-200/60 md:pl-10">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm border border-indigo-100/50">
                <Search className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                  Search Methodology
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs font-semibold text-slate-700">
                  <li className="bg-white px-2 py-1 rounded-md border border-slate-200/60 shadow-sm">IPC</li>
                  <li className="bg-white px-2 py-1 rounded-md border border-slate-200/60 shadow-sm">CPC</li>
                  <li className="bg-white px-2 py-1 rounded-md border border-slate-200/60 shadow-sm">Keyword</li>
                  <li className="bg-white px-2 py-1 rounded-md border border-slate-200/60 shadow-sm">Assignee</li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}