import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { PROCESS_STEPS } from '@/constants/site';

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <Reveal>
            <SectionOverline light>Our Search Process</SectionOverline>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-[1.15]">
              A Systematic Research Methodology Built for Accuracy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-400 leading-[1.85] lg:mt-14">
              Patent searches are conducted using both free and paid patent database 
              sources covering global patent records across more than 120 million 
              published documents. Every search follows a structured, repeatable 
              process to ensure the most relevant prior art is identified and 
              clearly communicated.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-navy-800">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group bg-navy-950 p-8 lg:p-10 h-full relative overflow-hidden">

                {/* Large background step number */}
                <div
                  className="absolute -top-4 -right-2 font-display font-bold text-navy-800 select-none pointer-events-none"
                  style={{ fontSize: '7rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {step.step}
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 border border-navy-600 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-navy-400">{step.step}</span>
                  </div>
                  <div className="flex-1 h-px bg-navy-800" />
                </div>

                <h3 className="font-display font-semibold text-white text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-[1.85]">
                  {step.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-navy-800 group-hover:bg-accent-500 transition-colors duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Methodology note */}
        <Reveal delay={0.1} className="mt-12">
          <div className="border border-navy-800 p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  label: 'Database Coverage',
                  value: '120M+ patent documents across global jurisdictions',
                },
                {
                  label: 'Search Sources',
                  value: 'Free and paid patent database sources',
                },
                {
                  label: 'Delivery Format',
                  value: 'Structured report with key references and relevance notes',
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-400 mb-2">
                    {label}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
