'use client';
import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';

export const HomePageSection1 = () => {
  const t = useTranslations('HomePage.Section1');
  return (
    <article className="max-w-3/6 mx-auto">
      <IntroParagraph
        title={t.rich('title', {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
        kicker={t('kicker')}
        description={t('description')}
      />
    </article>
  );
};
