'use client';

import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';
import { CardType } from '@/types/Card';
import { ArrowRightIcon, MapIcon } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PrimaryLink } from '@/components/ges-ui/links/primary-link';

export const HomePageNextChargeAppSection = () => {
  const t = useTranslations('HomePage.SectionNextChargeApp');
  const cards: CardType[] = [
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards.Card1.title'),
      description: t('Cards.Card1.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards.Card2.title'),
      description: t('Cards.Card2.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards.Card3.title'),
      description: t('Cards.Card3.description'),
    },
    {
      icon: <MapIcon className="size-10" />,
      title: t('Cards.Card4.title'),
      description: t('Cards.Card4.description'),
    },
  ];

  return (
    <section>
      <IntroParagraph
        title={t('title')}
        kicker={t('kicker')}
        className="px-wide lg:px-main xl:pl-central xl:pr-main lg:pb-12"
      />
      <div className="px-wide md:px-main grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <img
          src="/ges-app-section.png"
          alt="Nextcharge app mobile"
          className="aspect-[491/736] object-contain object-center"
        />
        <div className="flex flex-col items-center justify-center gap-6 md:gap-7 lg:items-start">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7">
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
          </div>
          <PrimaryLink
            target="_blank"
            icon={<ArrowRightIcon />}
            label={t('button')}
            href="https://nextcharge-staging.vercel.app/en"
          />
        </div>
      </div>
    </section>
  );
};
