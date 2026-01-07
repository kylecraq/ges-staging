'use client';
import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';
import { FancyCarousel } from '@/components/ges-ui/sections/fancy-carousel';
import { GesSystemIcon } from '@/components/ges-ui/icons/ges-system-icon';
import { CrosshairIcon } from '@/components/ges-ui/icons/crosshair-icon';
import { CreditCardIcon } from '@/components/ges-ui/icons/credit-card-icon';
import { FingerprintIcon } from '@/components/ges-ui/icons/fingerprint-icon';

export const HomePageChargeSystemSection = () => {
  const t = useTranslations('HomePage.SectionChargeSystem');
  const slides = [
    {
      id: 1,
      badge: t('Carousel.slide-1.badge'),
      title: t('Carousel.slide-1.title'),
      description: t('Carousel.slide-1.description'),
      backgroundImageDsk: 'identity.png',
      backgroundImageMbl: 'identity-mbl.png',
      icon: <CrosshairIcon />,
    },
    {
      id: 2,
      badge: t('Carousel.slide-2.badge'),
      title: t('Carousel.slide-2.title'),
      description: t('Carousel.slide-1.description'),
      backgroundImageDsk: 'payment-methods.png',
      backgroundImageMbl: 'payment-methods-mbl.png',
      icon: <CreditCardIcon />,
    },
    {
      id: 3,
      badge: t('Carousel.slide-4.badge'),
      title: t('Carousel.slide-4.title'),
      description: t('Carousel.slide-1.description'),
      backgroundImageDsk: 'authorization-methods.png',
      backgroundImageMbl: 'authorization-methods-mbl.png',
      icon: <FingerprintIcon />,
    },
    {
      id: 4,
      badge: t('Carousel.slide-3.badge'),
      title: t('Carousel.slide-3.title'),
      description: t('Carousel.slide-1.description'),
      backgroundImageDsk: 'analyzer.png',
      backgroundImageMbl: 'analyzer-mbl.png',
      icon: <GesSystemIcon />,
    },
  ];
  return (
    <section id="charge-system" className="px-wide">
      <div className="px-main pb-16">
        <IntroParagraph
          title={t.rich('title', {
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
          kicker={t('kicker')}
          description={t('description')}
        />
      </div>
      <FancyCarousel slides={slides} className="rounded-4xl border border-neutral-40" />
    </section>
  );
};
