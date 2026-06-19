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
              <h3 className="font-sans text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                Our Search Process
              </h3>
              <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                A Systematic Research Methodology Built for Accuracy
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.1}>
              <p className="text-justify text-pretty text-base leading-relaxed text-slate-600">
                Patent searches are conducted using both free and paid patent database
                sources covering global patent records across more than 120 million
                published documents. Every search follows a structured, repeatable
                process to ensure the most relevant prior art is identified and
                clearly communicated.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Execution Pipeline (Upgraded Animated Grid) */}
        <div className="mt-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                {/* 
                  Card Container: 
                  Added group class for synchronized child animations. 
                  Added lift effect (-translate-y-2) and enhanced shadows on hover.
                */}
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">

                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                  {/* Node Header */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    {/* 
                      Number Bubble:
                      Transforms from a soft blue circle to a solid blue "squircle" that scales up.
                    */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-base font-bold text-blue-600 ring-4 ring-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rounded-xl group-hover:bg-blue-600 group-hover:text-white">
                      {step.step}
                    </div>

                    {/* Visual connecting line indicator - Lights up on hover */}
                    <div className="h-px flex-1 mx-4 bg-slate-100 transition-colors duration-500 group-hover:bg-blue-200" aria-hidden="true" />
                    <div className="h-2 w-2 rounded-full bg-slate-200 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 mb-3 font-sans text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {step.title}
                  </h3>
                  <p className="text-justify text-pretty relative z-10 flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {step.description}
                  </p>

                  {/* Decorative bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-500 group-hover:w-full" aria-hidden="true" />

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
                <p className="text-sm font-semibold text-slate-700">
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
                <p className="text-sm font-semibold text-slate-700">
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
                <p className="text-sm font-semibold text-slate-700">
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