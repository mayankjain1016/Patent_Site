'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE_NAME } from '@/constants/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20); // Lower threshold for snappier response
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Responsive cleanup & Body scroll lock
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);

    // Lock body scroll when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Precision Scroll Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    // Allow React state to flush before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        // Offset accounts for the h-16 (64px) navbar + 24px of breathing room
        const offset = 88;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 10);
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white border-b border-slate-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          {/* Brand Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex shrink-0 items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-md border border-slate-200/50 bg-white">
              <Image
                src="/images/logo.jpg"
                alt={`${SITE_NAME} Logo`}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                    'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={cn(
                'group inline-flex h-9 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                'bg-slate-950 text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-slate-900'
              )}
            >
              Request a Search
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
              'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-slate-950/20 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <div
          className={cn(
            'absolute inset-x-0 top-16 border-b border-slate-200 bg-white px-6 pb-8 pt-4 shadow-xl transition-transform duration-300 ease-out overflow-y-auto max-h-[calc(100vh-4rem)]',
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>


        </div>
      </div>
    </>
  );
}