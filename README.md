# Vicky Infotech — Patent Research Website

Production-grade Next.js 16 website for Vicky Infotech, an MSME-based IPR consultancy in Agra led by Vipin Kumar, Registered Patent Agent.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (custom navy/accent palette)
- **Framer Motion 12** (scroll-reveal animations)
- **Lucide React** (icons)
- **Google Fonts** — Plus Jakarta Sans · Inter · JetBrains Mono

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve production build
```

## Project Structure

```
app/
  layout.tsx          Root layout + Google Fonts
  page.tsx            Main page (composes sections)
  globals.css         Tailwind v4 theme tokens + global styles

components/
  layout/
    navbar.tsx         Sticky nav (transparent → white on scroll, mobile menu)
    footer.tsx         Dark-navy footer with contact info
  sections/
    hero.tsx           Full-height dark hero with patent card + stats
    about.tsx          MSME intro + differentiators + credential badges
    services.tsx       6-service grid (Prior Art → Landscape Studies)
    expertise.tsx      6 technology domain groups with topic tags
    process.tsx        6-step search process on dark navy background
    founder.tsx        Vipin Kumar executive profile + credentials
    who-we-help.tsx    6 client types (Inventors → Businesses)
    cta.tsx            Mid-page call-to-action banner
    contact.tsx        Inquiry form (mailto) + address + contact details
  ui/
    button.tsx         Button with 4 variants
    badge.tsx          Badge + SectionOverline components
    reveal.tsx         Framer Motion scroll-reveal wrappers

constants/
  site.ts             All content data (services, process, expertise, etc.)

types/
  index.ts            Shared TypeScript interfaces

lib/
  utils.ts            cn() tailwind-merge utility
```

## Deployment

Deploy to **Vercel** (zero-config), **Netlify**, or any Node.js host.

For static export (GitHub Pages, S3), add `output: 'export'` to `next.config.ts`.

## Contact Details

- **Email**: kumar.vipin1980@gmail.com
- **Phone**: +91 77092 69318
- **Address**: Shop No. 2, Plot No. 105, Narayan Vihar, Sikandra, Agra, UP 282007
