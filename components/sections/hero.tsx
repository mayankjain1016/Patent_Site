'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { STATS } from '@/constants/site';
import { Counter } from '@/components/ui/counter';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-20 pb-8 lg:pt-24 lg:pb-8 overflow-hidden bg-slate-50"
    >


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="max-w-2xl">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-balance text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.15]"
            >
              Expert Prior Art Search for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Technology-Driven</span> Inventions.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-justify text-pretty text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-xl"
            >
              Make informed patent decisions with reliable research, technical analysis, and support across computer science, electronics, and AI architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4"
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-md"
              >
                Request a Search
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-slate-100"
            >
              <dl className="grid grid-cols-3 gap-3 sm:gap-8">
                {STATS.map((stat, index) => (
                  <div key={index} className="flex flex-col justify-end">
                    <dt className="text-[9px] sm:text-xs leading-tight sm:leading-normal font-semibold text-slate-500 mb-1 sm:mb-1.5 uppercase tracking-wide sm:tracking-wider">{stat.label}</dt>
                    <dd className="text-lg sm:text-3xl font-bold text-slate-900 tracking-tight mt-auto">
                      <Counter value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 mx-auto lg:ml-auto lg:mr-0 w-full max-w-lg xl:max-w-xl"
          >
            {/* Soft background shape behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-blue-50/50 rounded-[2rem] transform -rotate-2 scale-105 -z-10" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100/50 bg-white">
              <Image
                src="/images/Hero.jpg"
                alt="Patent Research Professional"
                width={800}
                height={600}
                priority
                unoptimized
                className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/90 backdrop-blur-sm p-2.5 sm:p-4 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-4 z-20"
            >
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg shadow-inner">
                 2008
               </div>
               <div>
                 <p className="text-xs sm:text-sm font-bold text-slate-900">Established</p>
                 <p className="text-[10px] sm:text-xs font-medium text-slate-500">Decades of Trust</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}