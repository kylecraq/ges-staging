'use client';

import { Download } from 'lucide-react';
import { PrimaryButtonWithIcon } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/nextcharge-ui/language-selector';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/layout/logo';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const t = useTranslations('Header.Buttons');

  const { scrollDirection } = useWindowScroll();

  const headerClassname = cn(
    { '-translate-y-20': scrollDirection === 'down' },
    'fixed top-4 z-50 flex h-14 w-full items-center justify-between px-4 transition duration-700'
  );

  const navbarClassname = cn(
    'font-medium uppercase bg-neutral-0 py-navbar-3 pr-navbar-3 flex items-center justify-end gap-6 rounded-full pl-10 text-neutral-100 transition duration-700'
  );

  return (
    <header className={headerClassname}>
      <Logo />
      <div className={navbarClassname}>
        <Link
          href="#faq"
          className="text-sm transition-colors"
        >
          faq
        </Link>
        <LanguageSelector />
        <PrimaryButtonWithIcon icon={<Download />} label={t('download')} />
      </div>
    </header>
  );
}
