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

  return (
    <section className="flex flex-col items-center justify-center gap-14">
      <article className="px-main grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7 lg:grid-cols-3">
        {cards.map((data, index) => {
          return (
            <Card
              key={index}
              className="bg-neutral-0 border border-neutral-400"
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
      <PrimaryLink icon={<ArrowRightIcon />} label={t('button')} href={'#'} />
    </section>
  );
};
