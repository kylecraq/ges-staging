'use client';
import { Hero } from '@/components/nextcharge-ui/sections/hero';
import { useTranslations } from 'next-intl';
import { HomePageHeroDecorations } from '@/app/[locale]/(home-page)/_components/home-page-hero-decorations';
import { ArrowRightIcon } from 'lucide-react';
import { PrimaryButtonProps } from '@/components/nextcharge-ui/buttons/primary-button';
import { cn } from '@/lib/utils';

export const HomePageHero = () => {
  const t = useTranslations('HomePage');
  const buttons: PrimaryButtonProps[] = [
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.cpm-backend'),
      variant: 'secondary',
    },
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.fleet-management'),
      variant: 'secondary',
    },
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.nextcharge'),
      variant: 'secondary',
    },
  ];

  return (
    <section className={"text-neutral-0"}>
      <Hero
        className="aspect-[375/874] lg:aspect-[1440/995]"
        imgSrcDsk="/hero/ges-hero-dsk.png"
        imgSrcMbl={'/hero/ges-hero-mbl.png'}
        title={t.rich('title', {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
        titleEffect="text-wave-reveal"
        description={t.rich('description', {
          primary: (chunks) => <span className="font-semibold">{chunks}</span>,
        })}
        buttons={buttons}
      />
    </section>
  );
};
