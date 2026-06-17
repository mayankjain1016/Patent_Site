import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { SERVICES } from '@/constants/site';

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <Reveal className="max-w-2xl mb-14">
          <SectionOverline>Our Services</SectionOverline>
          <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15] mb-4">
            Comprehensive Patent Research Services
          </h2>
          <p className="text-slate-500 text-base leading-[1.8]">
            From initial prior art searches to full patent landscape studies, 
            every service is designed to give inventors and businesses the 
            intelligence they need to make stronger patent decisions.
          </p>
        </Reveal>

        {/* Services grid — gap-px with bg creates fine-line dividers */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {SERVICES.map((service) => {
            const { Icon } = service;
            return (
              <StaggerItem key={service.id}>
                <article
                  className="group bg-white p-8 lg:p-10 h-full flex flex-col transition-all duration-200 hover:bg-slate-50/60 cursor-default"
                  aria-labelledby={`service-${service.id}`}
                >
                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-300 mb-5">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      className="text-navy-700 group-hover:text-accent-500 transition-colors duration-200"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    id={`service-${service.id}`}
                    className="font-display font-semibold text-navy-900 text-base mb-3"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-[1.8] flex-1">
                    {service.description}
                  </p>

                  {/* Bottom hover indicator */}
                  <div className="mt-6 h-[1px] w-8 bg-slate-200 group-hover:w-full group-hover:bg-accent-500/30 transition-all duration-300" />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">
            Search reports delivered with novelty analysis · inventive step · industrial applicability
          </p>
        </Reveal>
      </div>
    </section>
  );
}
