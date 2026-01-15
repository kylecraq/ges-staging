'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ges-ui/typography';

const robotoSans = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.
export default function GlobalNotFound() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const locale = segments[0] ?? routing.defaultLocale;

  const title =
    locale === routing.defaultLocale
      ? 'Ops page not found! 😕'
      : 'Ops pagina non trovata! 😕';

  const buttonLabel = 'Home';

  return (
    <html
      lang={locale}
      className={cn(robotoSans.variable, robotoMono.variable)}
    >
      <body>
        <main className="flex h-dvh flex-col items-center justify-center gap-10">
          <Heading as="h2" size="xl" className="heading">
            {title}
          </Heading>
          <Button
            asChild
            className="group border-primary hover:bg-primary h-fit cursor-pointer rounded-full border-1 px-0.5 py-0.5 text-neutral-900 uppercase focus-visible:border-inherit focus-visible:ring-0 [&_svg:not([class*='size-'])]:size-5.5"
          >
            <Link href={`/${locale}`}>
              <span className="text-primary grid h-10 w-10 place-items-center rounded-full bg-white">
                <HomeIcon />
              </span>
              {buttonLabel ? (
                <span
                  aria-hidden={'true'}
                  className="text-neutral-0 h-5 overflow-hidden pr-5 font-mono"
                >
                  <span className="ease-sine-in-out block transition-transform duration-300 group-hover:-translate-y-full">
                    {buttonLabel}
                  </span>
                  <span className="ease-sine-in-out block transition-transform duration-300 group-hover:-translate-y-full">
                    {buttonLabel}
                  </span>
                </span>
              ) : null}
            </Link>
          </Button>
        </main>
      </body>
    </html>
  );
}
