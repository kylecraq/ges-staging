'use client';

import { useTranslations } from 'next-intl';
import { BoxParagraph } from '@/components/ges-ui/sections/box-paragraph';

export const HomePageDownloadSection = () => {
  const t = useTranslations('HomePage.SectionDownload');
  return (
    <section className="px-wide">
      <BoxParagraph
        kicker={t("kicker")}
        title={t('title')}
        description={t('description')}
        className="bg-[url(/integration.png)] bg-cover"
      />
    </section>
  );
};
