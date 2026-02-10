'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const supportedLocales = ['en', 'it'];
    const defaultLocale = 'en';

    const browserLang = navigator.language.split('-')[0];

    const targetLocale = supportedLocales.includes(browserLang)
      ? browserLang
      : defaultLocale;

    router.replace(`/${targetLocale}`);
  }, [router]);

  return (
    <main
      style={{
        backgroundColor: '#1c1e1c',
        color: '#ffffff',
        margin: 0,
        height: '100dvh',
        width: '100dvw',
        display: 'grid',
        placeContent: 'center',
        placeItems: 'center',
      }}
    >
      Redirecting...
    </main>
  );
}
