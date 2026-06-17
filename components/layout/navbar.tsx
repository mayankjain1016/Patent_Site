'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE_NAME } from '@/constants/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white border-b border-slate-200 shadow-sm'
            : 'bg-transparent',
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div
              className={cn(
                'flex items-center justify-center w-8 h-8 text-xs font-bold font-mono shrink-0 transition-colors duration-300',
                scrolled
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900',
              )}
            >
              VI
            </div>
            <span
              className={cn(
                'font-display font-semibold text-sm tracking-tight transition-colors duration-300',
                scrolled ? 'text-navy-900' : 'text-white',
              )}
            >
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80',
                    scrolled ? 'text-slate-700 hover:text-navy-900' : 'text-white/80 hover:text-white',
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className={cn(
                'inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold transition-all duration-200',
                scrolled
                  ? 'bg-navy-900 text-white hover:bg-navy-800'
                  : 'bg-white text-navy-900 hover:bg-slate-100',
              )}
            >
              Request a Search
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={cn(
              'lg:hidden p-2 transition-colors',
              scrolled ? 'text-navy-900' : 'text-white',
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-navy-950/70 transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            'absolute top-16 left-0 right-0 bg-white border-b border-slate-200 transition-transform duration-300',
            mobileOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-0 py-3 text-base font-medium text-slate-700 border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-navy-900 text-white text-sm font-semibold"
            >
              Request a Search
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
