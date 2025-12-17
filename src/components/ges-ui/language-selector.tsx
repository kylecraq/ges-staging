import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { startTransition, useEffect, useState } from 'react';
import { useLocale } from 'use-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

export const LanguageSelector = () => {
  const locale = useLocale();
  const t = useTranslations('Header.LanguageLabels');

  const { scrollDirection } = useWindowScroll();

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      router.push(pathname, { locale: newLocale });
    });
  };

  useEffect(() => {
    if (scrollDirection === 'down') {
      setOpen(false);
    }
  }, [scrollDirection]);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 text-sm font-semibold uppercase underline-offset-4 transition-colors outline-none focus-visible:underline data-[state=open]:[&_svg]:rotate-180">
        {locale}
        <ChevronDownIcon className="text-muted-foreground ease-sine-in-out pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={'bg-neutral-0 text-neutral-100'}
      >
        <DropdownMenuItem
          className="focus-visible:bg-neutral-20 hover:bg-neutral-20 cursor-pointer"
          onClick={() => handleChange('en')}
        >
          {t('en')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="focus-visible:bg-neutral-20 hover:bg-neutral-20 cursor-pointer"
          onClick={() => handleChange('it')}
        >
          {t('it')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
