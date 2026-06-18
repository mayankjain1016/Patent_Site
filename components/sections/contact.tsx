'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SectionOverline } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { CONTACT } from '@/constants/site';

const serviceOptions = [
  'Prior Art Search',
  'Patentability Search',
  'Invalidation / Opposition Search',
  'Freedom-to-Operate Support',
  'Patent Landscape Study',
  'Technical Reference Analysis',
  'Other / Not Sure',
]; 
interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Patent Search Inquiry — ${form.serviceType || 'General'} from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nService Required: ${form.serviceType || 'N/A'}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setForm(emptyForm);
  };

  const inputBase =
    'w-full bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-navy-700 focus:ring-1 focus:ring-navy-700 transition-colors duration-150';

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-start">

          {/* Left: Contact info */}
          <Reveal className="order-2 lg:order-2">
            <h2 className="font-display font-bold text-navy-900 text-3xl md:text-4xl tracking-tight leading-[1.15] mb-6">
              Share Your Invention. Receive Expert Research.
            </h2>
            <p className="text-slate-500 leading-[1.85] mb-10">
              Share your invention disclosure, technical concept, or search requirement. 
              Vicky Infotech will help you understand the closest available references 
              and take the next step with greater confidence.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="p-2.5 border border-slate-200 group-hover:border-navy-700 transition-colors duration-200 shrink-0 mt-0.5">
                  <Mail size={16} strokeWidth={1.75} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-400 mb-1">
                    Email
                  </p>
                  <p className="text-navy-900 text-sm font-medium group-hover:text-accent-500 transition-colors">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-4 group"
              >
                <div className="p-2.5 border border-slate-200 group-hover:border-navy-700 transition-colors duration-200 shrink-0 mt-0.5">
                  <Phone size={16} strokeWidth={1.75} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-400 mb-1">
                    Mobile
                  </p>
                  <p className="text-navy-900 text-sm font-medium group-hover:text-accent-500 transition-colors">
                    {CONTACT.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-slate-200 shrink-0 mt-0.5">
                  <MapPin size={16} strokeWidth={1.75} className="text-navy-700" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-400 mb-1">
                    Address
                  </p>
                  <address className="not-italic text-navy-900 text-sm leading-relaxed">
                    {CONTACT.address.line1},<br />
                    {CONTACT.address.line2},<br />
                    {CONTACT.address.city}, {CONTACT.address.state}&nbsp;
                    {CONTACT.address.pin}<br />
                    {CONTACT.address.country}
                  </address>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-400 mb-2">
                Available For
              </p>
              <div className="flex flex-wrap gap-2">
                {['Remote Consultations', 'In-Office Meetings (Agra)', 'Email Inquiries'].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1.5 border border-slate-200 text-xs text-slate-600"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.1} className="order-1 lg:order-1">
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10">
                  <h3 className="font-display font-semibold text-navy-900 text-lg mb-6">
                    Inquiry Form
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mb-2">
                        Full Name <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        className={inputBase}
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mb-2">
                        Email <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="your@email.com"
                        className={inputBase}
                        autoComplete="email"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputBase}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Service type */}
                    <div className="sm:col-span-2">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mb-2">
                        Search Type <span className="text-accent-500">*</span>
                      </label>
                      <select
                        required
                        value={form.serviceType}
                        onChange={set('serviceType')}
                        className={`${inputBase} cursor-pointer`}
                      >
                        <option value="">Select service type...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mb-2">
                        Invention Summary / Query <span className="text-accent-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Briefly describe your invention or query. Include the technical field, key features, and the problem it solves..."
                        className={`${inputBase} resize-none`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-navy-900 text-white text-sm font-semibold transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:shadow-lg active:bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                  >
                    <Send size={15} strokeWidth={2} />
                    Send Inquiry
                  </button>

                  <p className="text-xs text-slate-400 mt-3 text-center">
                    This will open your email client with your inquiry pre-filled.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="bg-slate-50 border border-slate-200 p-10 flex flex-col items-center text-center">
      <div className="w-12 h-12 border border-accent-500/30 bg-accent-500/5 flex items-center justify-center mb-5">
        <CheckCircle2 size={24} strokeWidth={1.5} className="text-accent-500" />
      </div>
      <h3 className="font-display font-semibold text-navy-900 text-xl mb-3">
        Inquiry Prepared
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
        Your email client should have opened with the inquiry pre-filled. 
        If not, please email directly at{' '}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-navy-700 underline underline-offset-2"
        >
          {CONTACT.email}
        </a>
        .
      </p>
      <button
        onClick={onReset}
        className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-navy-700 transition-colors"
      >
        Send Another Inquiry
      </button>
    </div>
  );
}
