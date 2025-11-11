'use client';

import { Download } from 'lucide-react';
import Link from 'next/link';
import { PrimaryButtonWithIcon } from '@/components/craq-ui/buttons/primary-with-icon';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/craq-ui/language-selector';

export function Header() {
  const t = useTranslations('Header.Buttons');

  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-16 items-center justify-end gap-6 px-6">
        <Link
          href="#faq"
          className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          FAQ
        </Link>

        <LanguageSelector />
        <PrimaryButtonWithIcon icon={<Download />} label={t('download')} />
      </div>
    </header>
  );
}
