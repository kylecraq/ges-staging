'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import {
  Chip,
  FeatureListWithImage,
} from '@/components/nextcharge-ui/sections/feature-list-with-image';
import { useTranslations } from 'next-intl';

export const HomePageFeatureSection = () => {
  const t = useTranslations('HomePage.SectionFeature');

  const chips: Chip[] = [
    {
      badge: t('chips.badge-1'),
      description: t('chips.description-1'),
    },
    {
      badge: t('chips.badge-2'),
      description: t('chips.description-2'),
    },
    {
      badge: t('chips.badge-3'),
      description: t('chips.description-3'),
    },
  ];

  return (
    <article className="px-wide md:px-main xl:px-central flex flex-col">
      <IntroParagraph title={t('title')} kicker={t('kicker')} />
      <FeatureListWithImage
        chips={chips}
        imgAlt="Iphone"
        imgMbl="/hero/feature-phone.png"
        imgDsk="/hero/feature-phone.png"
      />
    </article>
  );
};
