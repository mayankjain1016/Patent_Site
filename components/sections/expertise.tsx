import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { EXPERTISE_DOMAINS } from '@/constants/site';

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <Reveal>
            <SectionOverline>Technical Expertise</SectionOverline>
            <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15]">
              Deep Domain Coverage Across Technology Fields
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-500 leading-[1.85] lg:mt-14">
              Patent research requires understanding the invention at a technical level. 
              With a B.E. in Computer Science and hands-on knowledge of embedded systems, 
              the research covers the full breadth of modern technology fields — from 
              algorithms and hardware to AI, IoT, cybersecurity, and cross-domain inventions 
              touching electronics, physics, and thermal science.
            </p>
          </Reveal>
        </div>

        {/* Expertise domains */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {EXPERTISE_DOMAINS.map((domain, idx) => (
            <StaggerItem key={domain.domain}>
              <div className="group h-full">
                {/* Domain header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                <h3 className="font-display font-semibold text-navy-900 text-sm mb-4">
                  {domain.domain}
                </h3>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-2">
                  {domain.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs leading-none"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Cross-domain note */}
        <Reveal delay={0.15} className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              <span className="font-semibold text-navy-900">Cross-domain capability: </span>
              Many inventions span multiple fields. Prior art searches also extend into 
              electronics, signal systems, analog interfaces, physics, chemistry, 
              and thermal science where the invention concept crosses technical boundaries.
            </p>
            <div className="shrink-0">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">
                Methodology
              </div>
              <p className="text-sm font-semibold text-navy-900 mt-1">
                IPC · CPC · Keyword · Assignee Search
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
