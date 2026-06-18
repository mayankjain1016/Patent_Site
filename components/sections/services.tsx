import { CheckCircle2 } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { SERVICES } from '@/constants/site'; 

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      {/* Decorative background element */}
      <div className="absolute top-0 inset-x-0 h-[40rem] bg-gradient-to-b from-slate-50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-40 right-0 -mr-20 w-[600px] h-[600px] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="flex justify-center">
            <SectionOverline>Our Services</SectionOverline>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Comprehensive Patent Research Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-pretty">
            From initial prior art searches to full patent landscape studies,
            every service is designed to give inventors and businesses the
            intelligence they need to make stronger patent decisions.
          </p>
        </Reveal>

        {/* Services Grid (Floating Cards) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const { Icon } = service;

            return (
              <StaggerItem key={service.id}>
                <article
                  className="relative flex h-full flex-col bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-8 transition-colors duration-300 hover:border-sky-400"
                  aria-labelledby={`service-${service.id}`}
                >
                  {/* Header Row: Icon & Number */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-mono text-sm font-bold tracking-widest text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    id={`service-${service.id}`}
                    className="mb-3 font-sans text-lg font-bold text-slate-900"
                  >
                    {service.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Structured Bottom Note - Converted to Value Pillars */}
        <Reveal delay={0.2} className="mt-16 sm:mt-20">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8 bg-slate-50 py-6 px-8 rounded-2xl border border-slate-100 max-w-4xl mx-auto shadow-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 sm:pr-8 sm:border-r sm:border-slate-200">
              Report Deliverables
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {['Novelty Analysis', 'Inventive Step', 'Industrial Applicability'].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  );
}