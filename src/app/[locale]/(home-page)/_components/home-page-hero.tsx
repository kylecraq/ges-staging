'use client';
import { Hero } from '@/components/ges-ui/sections/hero';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from 'lucide-react';
import { PrimaryButtonProps } from '@/components/ges-ui/buttons/primary-button';
import { LinkPrimaryProps } from '@/components/ges-ui/links/primary-link';

export const HomePageHero = () => {
  const t = useTranslations('HomePage');
  const buttons: LinkPrimaryProps[] = [
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.cpm-backend'),
      variant: 'secondary',
      href: "#charge-system",
      onClick: (e) => {
        e.preventDefault()
        const element = document.getElementById("charge-system");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.fleet-management'),
      variant: 'secondary',
      href: "#fleet-management",
      onClick: (e) => {
        e.preventDefault()
        const element = document.getElementById("fleet-management");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
    {
      icon: <ArrowRightIcon />,
      label: t('Buttons.nextcharge'),
      variant: 'secondary',
      href: "#nextcharge-app",
      onClick: (e) => {
        e.preventDefault()
        const element = document.getElementById("nextcharge-app");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
  ];

  return (
    <section className="text-neutral-0">
      <Hero
        className="xs:aspect-[414/928] aspect-[374/900] md:aspect-[800/1150] lg:aspect-[1440/995]"
        imgSrcDsk="/hero/ges-hero-dsk.png"
        imgSrcMbl={'/hero/ges-hero-mbl.png'}
        imgSrcTbl={'/hero/ges-hero-tbl.png'}
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
