'use client';

import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import {
  Chip,
  FeatureListWithImage,
} from '@/components/ges-ui/sections/feature-list-with-image';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from 'lucide-react';

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
    <article className="mt-20 md:mt-0 px-wide lg:px-main xl:pl-central xl:pr-main flex flex-col">
      <IntroParagraph title={t('title')} kicker={t('kicker')} className="pb-12"/>
      <FeatureListWithImage
        chips={chips}
        imgAlt="Management"
        imgMbl="/fleet-management.png"
        imgDsk="/fleet-management.png"
        button={{
          label: t("button"),
          href:"#",
          icon: <ArrowRightIcon />
        }}
      />
    </article>
  );
};
