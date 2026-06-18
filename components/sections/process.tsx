import { Database, LayoutTemplate, FileSearch } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { PROCESS_STEPS } from '@/constants/site'; // { step: string/number, title: string, description: string }

export function Process() {
  return (
    <section id="process" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Engineered Header Layout */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              {/* Assuming `light` prop makes your badge suitable for dark backgrounds */}
              <SectionOverline light>Our Search Process</SectionOverline>
              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                A Systematic Research Methodology Built for Accuracy
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-slate-400 text-pretty">
                Patent searches are conducted using both free and paid patent database
                sources covering global patent records across more than 120 million
                published documents. Every search follows a structured, repeatable
                process to ensure the most relevant prior art is identified and
                clearly communicated.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Execution Pipeline (Grid) */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px">
            {PROCESS_STEPS.map((step, idx) => (
              <StaggerItem key={step.step}>
                <div className="group relative flex h-full flex-col bg-slate-950 p-8 transition-colors duration-300 hover:bg-white/[0.02] sm:p-10">

                  {/* Node Header (Connects visually across the grid) */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 font-mono text-xs font-semibold text-blue-400 transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                      {step.step}
                    </div>
                    {/* Visual connecting line (only rightward) */}
                    <div className="h-px flex-1 bg-white/5 transition-colors duration-300 group-hover:bg-white/10" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-sans text-lg font-semibold text-slate-200">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Telemetry Footer (Methodology Note) */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-1 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-3 md:divide-x md:divide-y-0">

            {/* Metric 1 */}
            <div className="flex items-start gap-4 p-6 sm:p-8">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                <Database className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                  Database Coverage
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  120M+ patent documents across global jurisdictions
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-start gap-4 p-6 sm:p-8">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                <FileSearch className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                  Search Sources
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Combined intelligence from free and paid patent database sources
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-start gap-4 p-6 sm:p-8">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                <LayoutTemplate className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                  Delivery Format
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Structured report with key references and exact relevance notes
                </p>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}