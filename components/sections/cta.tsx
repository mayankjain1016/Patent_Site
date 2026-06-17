import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-400 mb-3">
              Ready to Evaluate Your Invention?
            </p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-[1.15] max-w-lg">
              Share Your Concept. Get Focused Prior Art Research.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition-colors duration-200"
            >
              Request a Search
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-600 text-slate-300 text-sm font-medium hover:border-navy-400 hover:text-white transition-all duration-200"
            >
              View Services
            </a>
          </div>
        </Reveal>

        {/* Bottom tagline */}
        <Reveal delay={0.1} className="mt-14 pt-8 border-t border-navy-800">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-500 text-center">
            Clear searches · Practical insights · Stronger patent decisions
          </p>
        </Reveal>
      </div>
    </section>
  );
}
