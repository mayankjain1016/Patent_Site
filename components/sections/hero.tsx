import { ArrowRight, ChevronRight } from 'lucide-react';
import { STATS } from '@/constants/site';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy-950 flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dot-grid texture overlay */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />

      {/* Very subtle gradient: top-left glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(26,61,112,0.35) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* Left: Main content */}
          <div>
            {/* Overline */}
            <p className="animate-fade-up font-mono text-[10px] tracking-[0.22em] uppercase text-accent-400 mb-6">
              Registered Patent Agent · B.E. Computer Science · Agra, India
            </p>

            {/* Headline */}
            <h1 className="animate-fade-up animation-delay-100 font-display font-bold text-white leading-[1.08] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] max-w-2xl mb-6">
              Expert Prior Art Search for Technology-Driven Inventions
            </h1>

            {/* Body */}
            <p className="animate-fade-up animation-delay-200 text-slate-300 text-lg leading-[1.75] max-w-xl mb-10">
              Make informed patent decisions with reliable prior art research, 
              technical analysis, and patent search support across computer science, 
              electronics, AI, IoT, and cross-domain inventions.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up animation-delay-300 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition-colors duration-200"
              >
                Request a Search
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-medium hover:bg-white/8 hover:border-white/40 transition-all duration-200"
              >
                Explore Services
                <ChevronRight size={15} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Right: Patent search record card */}
          <div className="hidden lg:block animate-fade-up animation-delay-400">
            <PatentCard />
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up animation-delay-500 mt-20 pt-8 border-t border-navy-800">
          <div className="flex flex-wrap gap-8 md:gap-0 md:divide-x md:divide-navy-800">
            {STATS.map((stat) => (
              <div key={stat.value} className="md:px-10 first:pl-0 last:pr-0">
                <div className="font-display font-bold text-white text-3xl tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-navy-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Patent search record card ──────────────────────────────────────── */
function PatentCard() {
  const fields: { label: string; value: string }[] = [
    { label: 'SEARCH TYPE',   value: 'Prior Art Search' },
    { label: 'COVERAGE',      value: '120M+ Patent Docs' },
    { label: 'DATABASES',     value: 'Global / Multi-Jurisdiction' },
    { label: 'DOMAINS',       value: 'CS · AI · IoT · Electronics' },
    { label: 'AGENT STATUS',  value: 'Registered Patent Agent' },
    { label: 'ESTABLISHED',   value: '2008' },
  ];

  return (
    <div
      className="relative border border-navy-700 bg-navy-900/60 backdrop-blur-sm"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {/* Cyan top accent line */}
      <div className="h-[2px] w-full bg-accent-500" />

      {/* Card header */}
      <div className="px-6 py-4 border-b border-navy-700">
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-navy-300">
          Search Record
        </p>
        <p className="font-mono text-xs text-slate-300 mt-0.5">
          VKI — Prior Art Intelligence
        </p>
      </div>

      {/* Fields */}
      <div className="px-6 py-5 flex flex-col gap-4">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex items-start justify-between gap-4">
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-navy-400 shrink-0 pt-0.5">
              {label}
            </span>
            <span className="text-xs text-slate-200 text-right leading-[1.5]">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Card footer */}
      <div className="px-6 py-4 border-t border-navy-700 bg-navy-950/40">
        <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-navy-400">
          Vicky Infotech · Agra, Uttar Pradesh, India
        </p>
      </div>
    </div>
  );
}
