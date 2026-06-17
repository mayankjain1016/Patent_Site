import { SectionOverline } from '@/components/ui/badge';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { CLIENT_TYPES } from '@/constants/site';

export function WhoWeHelp() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <SectionOverline>Who We Help</SectionOverline>
          <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end">
            <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15]">
              Supporting Inventors, Businesses & Legal Teams
            </h2>
            <p className="text-slate-500 leading-[1.8]">
              Patent intelligence is not just for large corporations. 
              Vicky Infotech works with individual inventors, startups, 
              R&amp;D teams, law firms, and technology businesses at 
              every stage of the innovation lifecycle.
            </p>
          </div>
        </Reveal>

        {/* Client type cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_TYPES.map(({ Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group bg-white p-7 border border-slate-200 hover:border-navy-700 transition-all duration-200 h-full flex flex-col gap-5">
                {/* Icon */}
                <div className="w-10 h-10 border border-slate-200 group-hover:border-navy-700 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-navy-700 group-hover:text-accent-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <h3 className="font-display font-semibold text-navy-900 text-sm mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-[1.8]">{description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
