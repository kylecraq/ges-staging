'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import { Locales, routing } from '@/i18n/routing';
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


import en from '@/messages/en.json';
import it from '@/messages/it.json';

/**
 * The shape of the translation messages is inferred from the default locale (`en.json`),
 * ensuring type safety across all locales.
 */
type Messages = typeof en;
/**
 * A static registry of translation messages for all supported locales.
 *
 * We use `Record<string, Messages>` here to map locale codes to their messages.
 * - `en` and `it` are explicitly typed as `Messages` for compile-time safety.
 * - This ensures all locales share the same structure of messages.
 *
 * Why we define it this way:
 * - Compatible with Next.js static exports (`output: "export"`), where all locales
 *   must be known at build time.
 * - Allows type-safe access to messages in components, e.g. `translations[locale]?.NotFound`.
 */
const translations: Record<string, Messages> = {
  en: en as Messages,
  it: it as Messages
};

/**
 * @see https://nextjs.org/docs/app/guides/static-exports#unsupported-features
 *
 * ⚠️ Development note:
 * When running `next dev`, requesting an unknown route (e.g., `/unknown.txt`)
 * may throw an error instead of rendering the 404 page.
 *
 * This happens because Next.js tries to resolve the route as
 * `app/[locale]/layout.tsx`, passing the invalid segment as the `[locale]` param.
 * If the locale is not recognized, `notFound()` is called in the layout,
 * but in dev mode this surfaces as an error rather than a static 404.
 *
 * In production (static export), the invalid route does not exist and the pre-generated
 * `404.html` file is served instead.
 */
export default function GlobalNotFound() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const localeFromPathname = segments.length > 1 ? segments[0] : '';
  const locale = routing.locales.includes(localeFromPathname as Locales)
    ? segments[0]
    : routing.defaultLocale;
  const t = translations[locale]?.NotFound;
  const title = t?.title;
  const buttonLabel = t?.button;

  return (
    <html
      lang={locale}
      className={cn(robotoSans.variable, robotoMono.variable)}
    >
      <body>
        <main className="px-wide flex h-dvh flex-col items-center justify-center gap-10">
          {title ? (
            <Heading as="h2" size="xl" className="heading text-center">
              {title}
            </Heading>
          ) : null}
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
