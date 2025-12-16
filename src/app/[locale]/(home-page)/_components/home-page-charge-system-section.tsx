'use client';
import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';
import { FancyCarousel } from '@/components/ges-ui/sections/fancy-carousel';
import { CreditCardIcon, CrosshairIcon, FingerprintIcon, Users } from 'lucide-react';

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
      badge: t('Carousel.slide-3.badge'),
      title: t('Carousel.slide-3.title'),
      description: t('Carousel.slide-1.description'),
      backgroundImageDsk: 'analyzer.png',
      backgroundImageMbl: 'analyzer-mbl.png',
      icon: <Users />,
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
  ];
  return (
    <section className="px-wide">
      <div className="px-main pb-16">
        <IntroParagraph
          title={t.rich('title', {
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
          kicker={t('kicker')}
          description={t('description')}
        />
      </div>
      <FancyCarousel slides={slides} className="rounded-4xl"/>
    </section>
  );
};
