'use client';
import { Logo } from '@/components/ges-ui/logo';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { BodyText } from '@/components/ges-ui/typography';
import { useMemo } from 'react';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer
      className="text-neutral-0 mt-32 h-[353px] px-3 md:mt-36 md:px-9 lg:text-sm xl:text-base"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="flex h-full flex-col justify-between rounded-t-4xl bg-neutral-100 px-5 pt-20 pb-5 md:px-24 xl:px-28">
        <Logo variant={"primary"}/>

        <div className="flex flex-col">
          <div className="mb-3 flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
            <div className="flex gap-4">
              <FooterGesLink href="/privacy" label={t('terms')} />
              <FooterGesLink href="/b2b" label={t('b2b')} />
            </div>
            <Copyright />
          </div>
          <hr />
          <div className="mt-2 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <FooterGesLink href={'/status'} label={t('status')} />
            <cite className="text-xs md:text-sm">
              {t.rich('craq-tag-crafted', {
                strong: (chunks) => (
                  <Link
                    href="https://craqdesignstudio.it/"
                    target="_blank"
                    className="hover:decoration-primary-variant underline decoration-transparent underline-offset-4 transition duration-200"
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

const FooterGesLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="hover:decoration-primary-variant shrink-0 underline underline-offset-4 transition-all duration-500"
    >
      {label}
    </Link>
  );
};

const Copyright = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = useTranslations('Footer');
  return <BodyText>{t('copyright', { year: year })}</BodyText>;
};
