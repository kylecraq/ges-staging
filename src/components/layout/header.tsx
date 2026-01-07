'use client';

import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/ges-ui/language-selector';

import { useWindowScroll } from '@/hooks/useWindowScroll';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/ges-ui/logo';
import { PrimaryLink } from '@/components/ges-ui/links/primary-link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export function Header() {
  const t = useTranslations('Header.Buttons');

  const { scrollDirection } = useWindowScroll();

  const headerClassname = cn(
    { '-translate-y-20': scrollDirection === 'down' },
    'pl-wide md:px-wide fixed top-4 z-50 flex h-14 w-full max-w-7xl items-center justify-between transition duration-700'
  );

  const navbarClassname = cn(
    'border border-neutral-40 bg-neutral-0 py-navbar-3 md:pr-navbar-3 md:px-wide flex h-full items-center justify-end gap-6 rounded-l-full pr-3 pl-6 font-medium text-neutral-100 uppercase transition duration-700 md:rounded-full'
  );

  return (
    <header className={headerClassname}>
      <Logo />
      <nav className={navbarClassname}>
        <Button
          onClick={(e)=>{
            e.preventDefault()
            const element = document.getElementById("faq");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          asChild
          variant={'link'}
          className="text-sm text-neutral-100 transition-colors focus-visible:underline focus-visible:ring-0"
        >
          <Link href="#faq">faq</Link>
        </Button>
        <LanguageSelector />
        <div className="border-neutral-0 hidden md:block">
          <PrimaryLink
            icon={<ArrowRightIcon />}
            label={t('contact-us')}
            href={'https://apps.apple.com/it/app/nextcharge/id614946715'}
            target={'_blank'}
          />
        </div>
      </nav>
    </header>
  );
}
