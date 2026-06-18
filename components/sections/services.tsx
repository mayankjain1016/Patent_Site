import { CheckCircle2 } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { SERVICES } from '@/constants/site'; // { id, number, Icon, title, description }

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="flex justify-center">
            <SectionOverline>Our Services</SectionOverline>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl text-balance">
            Comprehensive Patent Research Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-pretty">
            From initial prior art searches to full patent landscape studies,
            every service is designed to give inventors and businesses the
            intelligence they need to make stronger patent decisions.
          </p>
        </Reveal>

        {/* Precision Feature Matrix Grid */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {SERVICES.map((service) => {
              const { Icon } = service;

              return (
                <StaggerItem key={service.id}>
                  <article
                    className="group relative flex h-full flex-col bg-white p-8 sm:p-10 transition-colors duration-200 hover:bg-slate-50/80"
                    aria-labelledby={`service-${service.id}`}
                  >
                    {/* Header Row: Icon & Number */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-colors duration-200 group-hover:border-blue-100 group-hover:bg-blue-50/50">
                        <Icon
                          className="h-6 w-6 text-slate-600 transition-colors duration-200 group-hover:text-blue-600"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-mono text-xs font-medium tracking-wider text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3
                      id={`service-${service.id}`}
                      className="mb-3 font-sans text-lg font-semibold text-slate-900"
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
        </div>

        {/* Structured Bottom Note - Converted to Value Pillars */}
        <Reveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400 sm:pr-4 sm:border-r sm:border-slate-300">
              Report Deliverables
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {['Novelty Analysis', 'Inventive Step', 'Industrial Applicability'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  );
}