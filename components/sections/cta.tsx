import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function CtaBanner() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>

          {/* Floating Conversion Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">

            {/* Engineered Background Substrate (Spotlight Effect) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[200%] sm:w-[40rem] rounded-full bg-blue-500/20 blur-[100px]" />
            </div>

            {/* Main CTA Content */}
            <div className="relative z-10 flex flex-col gap-10 px-6 py-12 sm:p-16 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-20">

              {/* Left: Copy */}
              <div className="max-w-xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                  Ready to Evaluate Your Invention?
                </p>
                <h2 className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                  Share Your Concept. Get Focused Prior Art Research.
                </h2>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                <Link
                  href="#contact"
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-8 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Request a Search
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#services"
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/10 bg-transparent px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View Services
                </Link>
              </div>

            </div>

            {/* Integrated Trust Footer */}
            <div className="relative z-10 border-t border-white/10 bg-white/[0.02] px-6 py-5 sm:px-16 lg:px-20">
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 font-mono text-xs font-medium uppercase tracking-wider text-slate-400">
                <li>Clear searches</li>
                <li className="text-slate-600" aria-hidden="true">•</li>
                <li>Practical insights</li>
                <li className="text-slate-600" aria-hidden="true">•</li>
                <li>Stronger patent decisions</li>
              </ul>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}