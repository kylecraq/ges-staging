'use client';

import { useTranslations } from 'next-intl';
import { BoxParagraph } from '@/components/ges-ui/sections/box-paragraph';

export const HomePageCompatibilitySection = () => {
  const t = useTranslations('HomePage.SectionDownload');
  return (
    <section className="px-wide">
      <BoxParagraph
        kicker={t('kicker')}
        title={t('title')}
        description={t('description')}
        className="border-neutral-40 border bg-[url(/integration.png)] bg-cover"
      />
    </section>
  );
};
