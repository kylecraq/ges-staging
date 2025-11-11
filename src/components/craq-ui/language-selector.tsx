import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { startTransition } from 'react';
import { useLocale } from 'use-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const LanguageSelector = () => {
  const locale = useLocale()
  const t = useTranslations("Header.LanguageLabels")

  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      router.push(pathname, {locale: newLocale});
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 text-sm font-semibold uppercase text-foreground hover:text-foreground/80 transition-colors outline-none">
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
      <DropdownMenuContent align="end" className={"bg-neutral-0 text-neutral-100"}>
        <DropdownMenuItem onClick={() => handleChange('en')}>
          {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('it')}>
          {t("it")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
