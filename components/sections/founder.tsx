import Image from 'next/image';
import { GraduationCap, Shield, Cpu, Search, Award, BookOpen } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';

const credentials = [
  {
    Icon: GraduationCap,
    title: 'B.E. Computer Science',
    subtitle: 'Completed 2002',
    detail: 'Foundation in algorithms, systems, hardware, and software engineering',
  },
  {
    Icon: Shield,
    title: 'Patent Professional',
    subtitle: 'Since 2008 · India',
    detail: 'Authorised to conduct patent searches, drafting, and prosecution support',
  },
  {
    Icon: Cpu,
    title: 'Embedded Systems',
    subtitle: 'Post-Degree Certification',
    detail: 'Deep understanding of hardware-software interface and system design',
  },
  {
    Icon: Search,
    title: 'Prior Art Specialisation',
    subtitle: '18+ Years Practice',
    detail: 'Extensive experience in patent and non-patent literature searches globally',
  },
  {
    Icon: Award,
    title: 'Patent Search Expert',
    subtitle: 'Novelty · Inventive Step',
    detail: 'Structured analysis across all three patentability criteria for each search',
  },
  {
    Icon: BookOpen,
    title: 'Cross-Domain Knowledge',
    subtitle: 'CS · Electronics · AI · IoT',
    detail: 'Technical fluency across modern technology fields and interdisciplinary inventions',
  },
];

export function Founder() {
  return (
    <section id="founder" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* 12-Column Grid Architecture */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Sticky Executive Profile */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-32">
            <Reveal>
              <div className="flex flex-col">
                {/* Optimized Profile Image Container */}
                <div className="relative mb-6 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src="/images/vipin.jpg"
                    alt="Vipin Kumar - Founder of Vicky Infotech"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                {/* Identity Metadata */}
                <h2 className="font-sans text-2xl font-semibold tracking-tight text-slate-900">
                  Vipin Kumar
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Founder, Vicky Infotech
                </p>


              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            <Reveal>
              <h3 className="font-sans text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                The Expert Behind the Research
              </h3>
              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl text-balance">
                Technical Authority in Patent Search & Prior Art Analysis
              </h2>

              {/* Typeset Bio Narrative */}
              <div className="text-justify text-pretty mt-8 text-base leading-relaxed text-slate-600">
                <p className="mb-4">
                  Vipin Kumar holds a B.E. in Computer Science, completed in 2002, and has been working in the patent field since 2008. He has extensive experience in conducting patent searches and prior art searches. After completing his B.E. degree, he also completed a course in Embedded Systems.
                </p>
                <p>
                  Vipin provides prior art search services across various computer science topics to support inventors in filing patent applications. His focus is exclusively on delivering patent search services with detailed analysis of novelty, inventive step/non-obviousness, and industrial applicability. These services help inventors understand, in advance, who their competitors are and what information related to their inventions is already available in the public domain, enabling them to rework or work around existing knowledge to improve their inventions.
                </p>
              </div>
            </Reveal>

            {/* Structured Credentials Matrix */}
            <Reveal delay={0.1} className="mt-16">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
                  {credentials.map(({ Icon, title, subtitle, detail }) => (
                    <div
                      key={title}
                      className="flex flex-col bg-white p-6 sm:p-8 transition-colors duration-200 hover:bg-slate-50/50"
                    >
                      {/* Credential Header */}
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-blue-600">
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-sans text-sm font-semibold text-slate-900">
                            {title}
                          </h3>
                          <p className="mt-0.5 text-xs font-medium text-slate-500">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Credential Detail */}
                      <p className="text-justify text-pretty text-sm leading-relaxed text-slate-600">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}