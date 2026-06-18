import { Layers, Search } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { EXPERTISE_DOMAINS } from '@/constants/site';

export function Expertise() {
  return (
    <section id="expertise" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Engineered Header Layout */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <SectionOverline>Technical Expertise</SectionOverline>
              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl text-balance">
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

        {/* Capability Matrix (Grid) */}
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXPERTISE_DOMAINS.map((domain, idx) => (
            <StaggerItem key={domain.domain}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/60 bg-slate-50/50 p-6 sm:p-8">

                {/* Domain Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-sans text-base font-semibold text-slate-900">
                    {domain.domain}
                  </h3>
                  <span className="font-mono text-xs font-medium text-slate-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Data Tokens (Tags) */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {domain.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-md border border-slate-200/60 bg-white px-2.5 py-1 font-sans text-xs font-medium text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dark Mode System Callout Banner */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col gap-8 rounded-2xl bg-slate-950 p-6 sm:p-8 md:flex-row md:items-center md:justify-between shadow-xl">

            {/* Left: Cross-domain explanation */}
            <div className="flex max-w-2xl items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <Layers className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Cross-Domain Capability
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Many inventions span multiple fields. Prior art searches extend into
                  electronics, signal systems, analog interfaces, physics, chemistry,
                  and thermal science where the invention concept crosses boundaries.
                </p>
              </div>
            </div>

            {/* Right: Search Methodology Specs */}
            <div className="flex items-start gap-4 md:shrink-0 md:border-l md:border-white/10 md:pl-8">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <Search className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Search Methodology
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs font-medium text-slate-300">
                  <li>IPC</li>
                  <li className="text-slate-600">•</li>
                  <li>CPC</li>
                  <li className="text-slate-600">•</li>
                  <li>Keyword</li>
                  <li className="text-slate-600">•</li>
                  <li>Assignee</li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}