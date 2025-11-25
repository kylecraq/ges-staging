'use client';
import { Hero } from '@/components/nextcharge-ui/sections/hero';
import { useTranslations } from 'next-intl';
import { HomePageHeroDecorations } from '@/app/[locale]/(home-page)/_components/home-page-hero-decorations';
import { PrimaryButtonWithIconProps } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { DownloadIcon } from 'lucide-react';

export const HomePageHero = () => {
  const t = useTranslations('HomePage');
  const buttons: PrimaryButtonWithIconProps[] = [
    {
      icon: <DownloadIcon />,
      label: t("Buttons.download")
    }
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <Hero
        className="col-start-1 row-start-1"
        imgSrcDsk="/hero/next-charge-hero-dsk.png"
        imgSrcMbl={"/hero/next-charge-hero-mbl.png"}
        title={t.rich('title', {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
        titleEffect="text-wave-reveal"
        description={t.rich('description', {
          primary: (chunks) => <span className="font-semibold">{chunks}</span>,
        })}
        buttons={buttons}
      />
      <div className="col-start-1 row-start-1 px-3 md:px-9 hidden md:block">
        <HomePageHeroDecorations />
      </div>
    </div>
  );
};
