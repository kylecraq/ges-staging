import { ReactNode } from 'react';
import { Metadata } from 'next';

const VERCEL_HOST = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
const BASE_URL = VERCEL_HOST
  ? `https://${VERCEL_HOST}`
  : 'https://www.goelectricstations.it';
const isProduction = process.env.VERCEL_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Go Electric Stations - Charging stations for electric vehicles',
  robots: {
    index: isProduction,
    follow: isProduction,
  },
};

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
export default function RootIndexLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                var supported = ['en', 'it'];
                var defaultLang = 'en';
                
                var saved = window.localStorage.getItem('NEXT_LOCALE');
                var browserLang = navigator.language.split('-')[0];
                
                var target = saved || browserLang;
                if (!supported.includes(target)) target = defaultLang;

                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                  window.location.replace('/' + target);
                }
              })();
            `,
        }}
      />
    </head>
    <body style={{ backgroundColor: '#ffffff' }}>{children}</body>
    </html>
  );
}