'use client';

import { useTranslations } from 'next-intl';
import { BoxParagraph } from '@/components/nextcharge-ui/sections/box-paragraph';
import { PrimaryButtonWithIconProps } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { AppleIcon, ArrowUpRightIcon, BotIcon } from 'lucide-react';

export const HomePageDownloadSection = () => {
  const t = useTranslations('HomePage.SectionDownload');
  const buttons: PrimaryButtonWithIconProps[] = [
    {
      icon: <AppleIcon />,
      label: 'Apple store',
    },
    {
      icon: <BotIcon />,
      label: 'Google play',
    },
    {
      icon: <ArrowUpRightIcon />,
      label: 'Apri la web app',
    },
  ];
  return (
    <section>
      <BoxParagraph
        title={t('title')}
        description={t('description')}
        buttons={buttons}
        className="bg-neutral-100"
      />
    </section>
  );
};
