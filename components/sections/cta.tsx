import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function CtaBanner() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>

          {/* Floating Conversion Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-blue-900/20">

            {/* Engineered Background Substrate (Spotlight Effect) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[200%] sm:w-[40rem] rounded-full bg-blue-500/30 blur-[100px]" />
            </div>

            {/* Main CTA Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6 py-8 sm:p-10 lg:px-12 lg:py-10">

              {/* Copy */}
              <div className="max-w-2xl mx-auto">
                <p className="font-sans text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
                  Ready to Evaluate Your Invention?
                </p>
                <h2 className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                  Share Your Concept. Get Focused Prior Art Research.
                </h2>
              </div>



            </div>

            {/* Integrated Trust Footer */}
            <div className="relative z-10 border-t border-white/5 bg-white/[0.02] px-6 py-6 sm:px-10">
              <ul className="flex flex-wrap items-center justify-center gap-3">
                <li className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-sans font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                  Clear searches
                </li>
                <li className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-sans font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                  Practical insights
                </li>
                <li className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-sans font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                  Stronger patent decisions
                </li>
              </ul>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}