'use client';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRightIcon, MapIcon } from 'lucide-react';
import { PrimaryLink } from '@/components/ges-ui/links/primary-link';
import { CardType } from '@/types/Card';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export const HomePageCardsSection = () => {
  const t = useTranslations('HomePage.SectionCards');
  const cards: CardType[] = [
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards1.title'),
      description: t('Cards1.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards2.title'),
      description: t('Cards2.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards3.title'),
      description: t('Cards3.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards4.title'),
      description: t('Cards4.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards5.title'),
      description: t('Cards5.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards6.title'),
      description: t('Cards6.description'),
    },
  ];

  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const cards = container.current?.querySelectorAll('.item');
      if (!cards) return;

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="flex flex-col items-center justify-center gap-14"
    >
      <article className="px-main grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7 lg:grid-cols-3">
        {cards.map((data, index) => {
          return (
            <Card
              key={index}
              className="item bg-neutral-0 border-neutral-40 border shadow-none"
            >
              <CardHeader>{data.icon}</CardHeader>
              <CardFooter className="flex flex-col items-start gap-5 text-start">
                <CardTitle className="heading-xs font-mono font-normal">
                  {data.title}
                </CardTitle>
                <CardDescription className="body-text">
                  {data.description}
                </CardDescription>
              </CardFooter>
            </Card>
          );
        })}
      </article>
      <div className="item">
        <PrimaryLink icon={<ArrowRightIcon />} label={t('button')} href={'#'} />
      </div>
    </section>
  );
};
