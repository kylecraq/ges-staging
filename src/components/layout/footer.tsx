'use client';
import { Logo } from '@/components/nextcharge-ui/logo';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { BodyText } from '@/components/nextcharge-ui/typography';
import { Suspense, useMemo } from 'react';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer
      className="mt-40 h-[353px] px-3 md:px-9 lg:text-sm xl:text-base text-neutral-0"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="flex h-full flex-col justify-between rounded-t-4xl bg-neutral-100 px-5 pt-20 pb-5 md:px-24 xl:px-28">
        <Logo />

        <div className="flex flex-col">
          <div className="mb-3 flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:decoration-primary shrink-0 underline underline-offset-4 transition-all duration-500"
              >
                {t('terms')}
              </Link>
              <Link
                href="/b2b"
                className="hover:decoration-primary shrink-0 underline underline-offset-4 transition-all duration-500"
              >
                {t('b2b')}
              </Link>
            </div>
            <Copyright />
          </div>
          <hr />
          <div className="mt-2 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <Link
              href="/credits"
              className="hover:decoration-primary shrink-0 underline underline-offset-4 transition-all duration-500"
            >
              {t('status')}
            </Link>
            <cite className="text-xs md:text-sm">
              {t.rich('craq-tag-crafted', {
                strong: (chunks) => (
                  <Link
                    href="https://craqdesignstudio.it/"
                    target="_blank"
                    className="hover:decoration-primary underline decoration-transparent underline-offset-4 transition duration-200"
                  >
                    <strong>{chunks}</strong>
                  </Link>
                ),
              })}
            </cite>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Copyright = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = useTranslations('Footer');
  return <BodyText>{t('copyright', { year: year })}</BodyText>;
};
