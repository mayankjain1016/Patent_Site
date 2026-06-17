import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output standalone for Docker / server deployments
  // output: 'standalone',

  // Enable static export for simple hosting (Vercel, Netlify, etc.)
  // output: 'export',

  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
