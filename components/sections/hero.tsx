'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { STATS } from '@/constants/site';

interface AbstractBackgroundProps {
  mouseX: any;
  mouseY: any;
}

function AbstractBackground({ mouseX, mouseY }: AbstractBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base light gradient and clean white/slate background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50/50 to-white" />

      {/* Interactive spotlight following the mouse - Soft Light-Blue Glow */}
      <motion.div
        className="absolute rounded-full bg-accent-500/8 blur-[100px]"
        style={{
          left: mouseX,
          top: mouseY,
          width: '35rem',
          height: '35rem',
          x: '-50%',
          y: '-50%',
        }}
      />

      {/* Radial Dot Grid Pattern - Custom Navy dots with low opacity */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #132d56 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 75%)'
        }}
      />

      {/* Animated Pastel Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-[10%] -top-[10%] h-[40rem] w-[40rem] rounded-full bg-blue-200/40 blur-[130px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-[10%] top-[15%] h-[35rem] w-[35rem] rounded-full bg-indigo-100/40 blur-[110px]"
      />

      {/* Floating Micro-Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20 blur-[1px]"
          style={{
            width: i % 2 === 0 ? '5px' : '3px',
            height: i % 2 === 0 ? '5px' : '3px',
            top: `${15 + i * 11}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, i % 2 === 0 ? 35 : -35, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Abstract Animated Tech Lines - Soft light slate/blue lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M-100,250 Q450,350 850,150 T1920,450"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,550 Q450,250 1050,650 T1920,250"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 5.5, ease: "easeInOut", delay: 1.2 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);

      const handleMouseMove = (event: MouseEvent) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [mouseX, mouseY]);

  // Stagger entry variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] flex-col overflow-hidden bg-white selection:bg-blue-500/20"
      aria-label="Introduction"
    >
      <AbstractBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 pb-12 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Metadata Overline Trust Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-slate-50/70 px-3.5 py-1.5 mb-6 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider text-navy-600 uppercase">
                Registered Patent Agent · 18+ Years IP Experience
              </span>
            </motion.div>

            {/* Typography */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl font-bold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-balance mb-6 leading-[1.15]"
            >
              Expert Prior Art Search for Technology-Driven Inventions
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-2xl text-base sm:text-lg lg:text-[1.05rem] leading-relaxed text-navy-600/90 mb-10 text-pretty"
            >
              Make informed patent decisions with reliable prior art research,
              technical analysis, and search support across computer science,
              electronics, AI, IoT, and cross-domain architectures.
            </motion.p>

            {/* Action Area */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-8 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 overflow-hidden"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/10" />
                </div>
                Request a Search
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
              >
                Explore Services
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 lg:col-start-8 relative w-full h-[400px] xl:h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
              <Image
                src="/images/heroImg.jpg"
                alt="Patent Research"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {/* Soft decorative glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/40 via-transparent to-cyan-100/40 blur-2xl -z-10 rounded-[3rem]" />
          </motion.div>
        </div>

        {/* Structured Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-200/80 relative"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-accent-300/40 to-transparent" />
          
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <dt className="font-mono text-[10px] tracking-[0.15em] text-navy-500 uppercase mb-2">
                  {stat.label}
                </dt>
                <dd className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-navy-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Abstract Objects Visual Component ─────────────────────────────── */
interface AbstractVisualProps {
  mouseX: any;
  mouseY: any;
}

function AbstractVisual({ mouseX, mouseY }: AbstractVisualProps) {
  // Map mouse movement to slight 3D rotation tilts for parallax effect
  const rotateX = useTransform(mouseY, [0, 1200], [22, 14]);
  const rotateY = useTransform(mouseX, [0, 1920], [-10, 10]);

  return (
    <div className="relative w-full h-[360px] flex items-center justify-center pointer-events-none select-none" style={{ perspective: '1200px' }}>
      
      {/* 3D perspective floor grid */}
      <div 
        className="absolute bottom-[-15%] w-[140%] h-[150px] opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(19, 45, 86, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(19, 45, 86, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          transform: 'rotateX(75deg) translateZ(-80px)',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)'
        }}
      />

      <motion.div 
        className="relative w-[340px] h-[340px] flex items-center justify-center"
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY
        }}
      >
        {/* Soft background glow behind the stack */}
        <div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-to-tr from-blue-100/10 via-indigo-100/20 to-purple-100/10 blur-[45px] animate-pulse" />

        {/* ── Active Scanning Rays SVG Layer ── */}
        <svg className="absolute inset-0 w-full h-full text-slate-200/60" style={{ transform: 'translateZ(-10px)' }}>
          {/* Connection paths */}
          <path d="M170,170 Q120,130 104,88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M170,170 Q220,130 236,96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M170,170 Q120,210 104,244" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M170,170 Q220,210 236,252" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Animated Scanning Signal Dashes */}
          <motion.path
            d="M170,170 Q120,130 104,88"
            fill="none"
            stroke="url(#beamGradient1)"
            strokeWidth="1.5"
            strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, -180] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M170,170 Q220,130 236,96"
            fill="none"
            stroke="url(#beamGradient2)"
            strokeWidth="1.5"
            strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, -180] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />
          <motion.path
            d="M170,170 Q120,210 104,244"
            fill="none"
            stroke="url(#beamGradient3)"
            strokeWidth="1.5"
            strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, -180] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 1 }}
          />
          <motion.path
            d="M170,170 Q220,210 236,252"
            fill="none"
            stroke="url(#beamGradient4)"
            strokeWidth="1.5"
            strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, -180] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', delay: 1.5 }}
          />

          <defs>
            <linearGradient id="beamGradient1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beamGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beamGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beamGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── CENTRAL SEARCH CORE ── */}
        <div className="absolute w-24 h-24 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
          {/* Outer rotating/pulsing ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-dashed border-accent-500/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner ring */}
          <motion.div 
            className="absolute w-16 h-16 rounded-full border border-navy-500/20 bg-slate-50/40 backdrop-blur-sm"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Core glow */}
          <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-accent-500 to-blue-600 shadow-[0_0_20px_rgba(14,165,233,0.6)] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>

        {/* ── CARD 1: TOP LEFT - AI & ALGORITHMS ── */}
        <motion.div
          className="absolute top-[24px] left-[16px] w-[116px] h-[88px] rounded-xl bg-white/40 border border-slate-200/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-2.5 flex flex-col justify-between overflow-hidden"
          style={{ transform: 'translateZ(50px)' }}
          animate={{ 
            y: [-3, 3, -3],
            x: [-2, 2, -2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-1">
            <span className="w-1 h-1.5 rounded-full bg-accent-500" />
            <span className="font-mono text-[7px] font-semibold uppercase tracking-wider text-navy-800">AI & Algorithm</span>
          </div>
          
          <svg className="w-full h-8 text-navy-400/40" viewBox="0 0 100 30">
            <line x1="10" y1="15" x2="35" y2="7" stroke="currentColor" strokeWidth="0.75" />
            <line x1="10" y1="15" x2="35" y2="23" stroke="currentColor" strokeWidth="0.75" />
            <line x1="35" y1="7" x2="65" y2="7" stroke="currentColor" strokeWidth="0.75" />
            <line x1="35" y1="23" x2="65" y2="23" stroke="currentColor" strokeWidth="0.75" />
            <line x1="35" y1="7" x2="65" y2="23" stroke="currentColor" strokeWidth="0.75" />
            <line x1="35" y1="23" x2="65" y2="7" stroke="currentColor" strokeWidth="0.75" />
            <line x1="65" y1="7" x2="90" y2="15" stroke="currentColor" strokeWidth="0.75" />
            <line x1="65" y1="23" x2="90" y2="15" stroke="currentColor" strokeWidth="0.75" />
            
            <circle cx="10" cy="15" r="1.5" fill="#0ea5e9" />
            <circle cx="35" cy="7" r="1.5" fill="#1e4d8c" />
            <circle cx="35" cy="23" r="1.5" fill="#1e4d8c" />
            <circle cx="65" cy="7" r="1.5" fill="#1e4d8c" />
            <circle cx="65" cy="23" r="1.5" fill="#1e4d8c" />
            <motion.circle 
              cx="90" cy="15" r="2" fill="#0ea5e9"
              animate={{ r: [1.5, 2.5, 1.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>

        {/* ── CARD 2: TOP RIGHT - ELECTRONICS & IOT ── */}
        <motion.div
          className="absolute top-[32px] right-[16px] w-[116px] h-[88px] rounded-xl bg-white/40 border border-slate-200/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-2.5 flex flex-col justify-between overflow-hidden"
          style={{ transform: 'translateZ(-30px)' }}
          animate={{ 
            y: [3, -3, 3],
            x: [-2, 2, -2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <div className="flex items-center gap-1">
            <span className="w-1 h-1.5 rounded-full bg-amber-500" />
            <span className="font-mono text-[7px] font-semibold uppercase tracking-wider text-navy-800">IoT & Hardware</span>
          </div>

          <svg className="w-full h-8 text-navy-400/40" viewBox="0 0 100 30" fill="none">
            <path d="M10,15 H35 L48,7 H75 L85,20 H90" stroke="currentColor" strokeWidth="0.75" />
            <path d="M15,22 H32 L40,15 H68 L78,25 H88" stroke="currentColor" strokeWidth="0.75" />
            
            <motion.circle
              r="1.5"
              fill="#f59e0b"
              animate={{
                cx: [10, 35, 48, 75, 85, 90],
                cy: [15, 15, 7, 7, 20, 20]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </motion.div>

        {/* ── CARD 3: BOTTOM LEFT - RADAR ── */}
        <motion.div
          className="absolute bottom-[32px] left-[16px] w-[116px] h-[88px] rounded-xl bg-white/40 border border-slate-200/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-2.5 flex flex-col justify-between overflow-hidden"
          style={{ transform: 'translateZ(-10px)' }}
          animate={{ 
            y: [2, -4, 2],
            x: [2, -2, 2]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <div className="flex items-center gap-1">
            <span className="w-1 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[7px] font-semibold uppercase tracking-wider text-navy-800">Prior Art Search</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-navy-400/40" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <circle cx="15" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <motion.line
                x1="15" y1="15" x2="15" y2="2"
                stroke="url(#radarSweepSmall)"
                strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '15px', originY: '15px' }}
              />
              <defs>
                <linearGradient id="radarSweepSmall" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="space-y-0.5">
              <span className="block h-1 w-10 bg-emerald-500/20 rounded-full" />
              <span className="block h-1 w-8 bg-slate-300/30 rounded-full" />
              <span className="block h-1 w-6 bg-slate-300/30 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* ── CARD 4: BOTTOM RIGHT - DATABASE ── */}
        <motion.div
          className="absolute bottom-[24px] right-[16px] w-[116px] h-[88px] rounded-xl bg-white/40 border border-slate-200/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-2.5 flex flex-col justify-between overflow-hidden"
          style={{ transform: 'translateZ(60px)' }}
          animate={{ 
            y: [-4, 2, -4],
            x: [1, -1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        >
          <div className="flex items-center gap-1">
            <span className="w-1 h-1.5 rounded-full bg-indigo-500" />
            <span className="font-mono text-[7px] font-semibold uppercase tracking-wider text-navy-800">Database Index</span>
          </div>

          <div className="grid grid-cols-4 gap-1 w-full pt-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-[2px]"
                animate={{
                  backgroundColor: i % 3 === 0 
                    ? ['rgba(99, 102, 241, 0.15)', 'rgba(99, 102, 241, 0.7)', 'rgba(99, 102, 241, 0.15)']
                    : i % 2 === 0
                    ? ['rgba(30, 77, 140, 0.08)', 'rgba(30, 77, 140, 0.4)', 'rgba(30, 77, 140, 0.08)']
                    : ['rgba(226, 232, 240, 0.3)', 'rgba(226, 232, 240, 0.3)', 'rgba(226, 232, 240, 0.3)']
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Orbiting particles inside 3D space */}
        <motion.div 
          className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)] top-[25%] left-[25%]"
          style={{ transform: 'translateZ(40px)' }}
          animate={{
            x: [0, 80, 0, -80, 0],
            y: [0, -40, -80, -40, 0],
            z: [40, 60, 40, 20, 40]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.div 
          className="absolute w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(168,85,247,0.3)] bottom-[25%] right-[25%]"
          style={{ transform: 'translateZ(-40px)' }}
          animate={{
            x: [0, -70, 0, 70, 0],
            y: [0, 50, 80, 50, 0],
            z: [-40, -60, -40, -20, -40]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

      </motion.div>
    </div>
  );
}