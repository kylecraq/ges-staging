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
      <DropdownMenuTrigger
        className="font-medium uppercase flex cursor-pointer items-center gap-1 text-sm transition-colors outline-none">
        {locale}
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={'bg-neutral-0 text-neutral-100'}
      >
        <DropdownMenuItem className="cursor-pointer hover:bg-neutral-40" onClick={() => handleChange('en')}>
          {t('en')}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-neutral-40" onClick={() => handleChange('it')}>
          {t('it')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
