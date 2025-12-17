import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import '../globals.css';
import { ReactNode } from 'react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const robotoSans = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const VERCEL_HOST = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
const BASE_URL = VERCEL_HOST ? `https://${VERCEL_HOST}` : 'https://goelectricstations.it';
const ogImage = `${BASE_URL}/hero/ges-hero-dsk.png`;

export const metadata: Metadata = {
  title: {
    template: 'Go Electric Stations - %s',
    default: 'Go Electric Stations - Charging stations for electric vehicles',
  },
  openGraph: {
    title: 'Go Electric Stations',
    description: 'Go Electric Stations - Charging stations for electric vehicles',
    images: {
      url: ogImage,
      alt: 'Go Electric Stations',
    },
  },
  robots: {
    index: false,
    follow: false
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn(
        robotoSans.variable,
        robotoMono.variable,
        'scroll-pt-6 scroll-smooth'
      )}
    >
      <body className="antialiased w-full max-w-7xl mx-auto">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
