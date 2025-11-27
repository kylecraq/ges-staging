'use client';

import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/nextcharge-ui/language-selector';

import { useWindowScroll } from '@/hooks/useWindowScroll';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/nextcharge-ui/logo';
import { LinkPrimaryButtonWithIcon } from '@/components/nextcharge-ui/links/link-with-icon';
import { Button } from '@/components/ui/button';


export function Header() {
  const t = useTranslations('Header.Buttons');

  const { scrollDirection } = useWindowScroll();

  const headerClassname = cn(
    { '-translate-y-20': scrollDirection === 'down' },
    'fixed top-4 z-50 flex h-14 w-full items-center justify-between pl-wide-sm transition duration-700 xl:px-wide'
  );

  const navbarClassname = cn(
    'bg-neutral-0 py-navbar-3 md:pr-navbar-3 flex h-full items-center justify-end gap-6 rounded-l-full pr-3 pl-6 font-medium text-neutral-100 uppercase transition duration-700 md:rounded-full md:px-wide'
  );

  return (
    <header className={headerClassname}>
      <Logo />
      <nav className={navbarClassname}>
        <Button asChild variant={'link'} className="text-sm transition-colors">
          <Link href="#faq">faq</Link>
        </Button>
        <LanguageSelector />
        <div className="hidden md:block">
          <LinkPrimaryButtonWithIcon
            icon={<Download />}
            label={t('download')}
            href={'https://apps.apple.com/it/app/nextcharge/id614946715'}
            target={"_blank"}
          />
        </div>
      </nav>
    </header>
  );
}
