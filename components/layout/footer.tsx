import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, NAV_LINKS, SITE_NAME, SITE_TAGLINE } from '@/constants/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden border border-slate-800 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt={`${SITE_NAME} Logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                {SITE_NAME}
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-navy-300 mb-4">
              {SITE_TAGLINE}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Expert prior art search and patent research services led by Vipin Kumar, 
              Registered Patent Agent with 18+ years of deep technical IP experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono font-medium tracking-[0.14em] uppercase text-navy-300 mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono font-medium tracking-[0.14em] uppercase text-navy-300 mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-navy-300" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0 text-navy-300" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-navy-300" />
                  <address className="not-italic">
                    {CONTACT.address.line1},<br />
                    {CONTACT.address.line2},<br />
                    {CONTACT.address.city}, {CONTACT.address.state}&nbsp;
                    {CONTACT.address.pin}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 font-mono tracking-wider">
            MSME · IPR CONSULTANCY · AGRA, INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
