import { ReactNode } from 'react';

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
export default function RootIndexLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Go Electric Stations - Charging stations for electric vehicles</title>
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
