import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Vicky Infotech — Expert Prior Art Search Services',
    template: '%s | Vicky Infotech',
  },
  description:
    'Expert prior art search services for technology-driven inventions. Led by Vipin Kumar, Registered Patent Agent since 2008. Covering CS, electronics, AI, IoT, and cross-domain inventions. Based in Agra, India.',
  keywords: [
    'prior art search',
    'patent search India',
    'patentability search',
    'registered patent agent',
    'patent search Agra',
    'invalidation search',
    'freedom to operate',
    'patent landscape',
    'IP research India',
  ],
  authors: [{ name: 'Vipin Kumar' }],
  creator: 'Vicky Infotech',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Vicky Infotech — Expert Prior Art Search Services',
    description:
      'Expert prior art search and patent research services led by Vipin Kumar, Registered Patent Agent with 18+ years of experience.',
    siteName: 'Vicky Infotech',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — loaded via browser for flexibility at deploy time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
