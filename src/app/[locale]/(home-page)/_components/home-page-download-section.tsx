'use client';

import { useTranslations } from 'next-intl';
import { BoxParagraph } from '@/components/nextcharge-ui/sections/box-paragraph';
import { AppleIcon, ArrowUpRightIcon, BotIcon } from 'lucide-react';
import { PrimaryButtonProps } from '@/components/nextcharge-ui/buttons/primary-button';

export const HomePageDownloadSection = () => {
  const t = useTranslations('HomePage.SectionDownload');
  const buttons: PrimaryButtonProps[] = [
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
    <section className="px-wide">
      <BoxParagraph
        title={t('title')}
        description={t('description')}
        buttons={buttons}
        className="bg-[url(/download-app-bg.png)] bg-cover"
      />
    </section>
  );
};
