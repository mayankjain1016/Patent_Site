import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { CLIENT_TYPES } from '@/constants/site'; // { Icon, title, description }

export function WhoWeHelp() {
  return (
    <section id="clients" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Engineered Header Layout (Matches Expertise & Process sections) */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <Reveal>

              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl text-balance">
                Supporting Inventors, Businesses & Legal Teams
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.1}>
              <p className="text-justify text-pretty text-base leading-relaxed text-slate-600">
                Patent intelligence is not just for large corporations.
                Vicky Infotech works with individual inventors, startups,
                R&amp;D teams, law firms, and technology businesses at
                every stage of the innovation lifecycle.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Audience Profile Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_TYPES.map(({ Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">

                {/* Premium Icon Container */}
                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/50">
                  <Icon
                    className="h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-blue-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-3 font-sans text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-justify text-pretty text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}