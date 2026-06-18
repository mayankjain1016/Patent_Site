import { Database, LayoutTemplate, FileSearch } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { PROCESS_STEPS } from '@/constants/site'; 

export function Process() {
  return (
    <section id="process" className="bg-slate-50/50 py-16 sm:py-24 lg:py-32 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Engineered Header Layout */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <SectionOverline>Our Search Process</SectionOverline>
              <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                A Systematic Research Methodology Built for Accuracy
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-slate-600 text-pretty">
                Patent searches are conducted using both free and paid patent database
                sources covering global patent records across more than 120 million
                published documents. Every search follows a structured, repeatable
                process to ensure the most relevant prior art is identified and
                clearly communicated.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Execution Pipeline (Airy Light Grid) */}
        <div className="mt-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="flex h-full flex-col bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 lg:p-8 shadow-sm transition-colors duration-300 hover:border-sky-400">
                  
                  {/* Node Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-sm font-bold text-blue-600 ring-4 ring-white shadow-sm">
                      {step.step}
                    </div>
                    {/* Visual connecting line indicator */}
                    <div className="h-px flex-1 mx-4 bg-slate-100" aria-hidden="true" />
                    <div className="h-2 w-2 rounded-full bg-slate-200" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-sans text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Telemetry Footer (Methodology Note) */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-3 md:divide-x md:divide-y-0 shadow-sm">

            {/* Metric 1 */}
            <div className="flex items-start gap-4 p-6 sm:p-8 hover:bg-slate-50 transition-colors">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Database className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Database Coverage
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                  120M+ patent documents across global jurisdictions
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-start gap-4 p-6 sm:p-8 hover:bg-slate-50 transition-colors">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FileSearch className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Search Sources
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                  Combined intelligence from free and paid patent database sources
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-start gap-4 p-6 sm:p-8 hover:bg-slate-50 transition-colors">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <LayoutTemplate className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Delivery Format
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
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