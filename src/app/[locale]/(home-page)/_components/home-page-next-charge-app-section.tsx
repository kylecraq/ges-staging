'use client';

import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';
import { CardType } from '@/types/Card';
import { useMemo } from 'react';
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
  const cards: CardType[] = useMemo(() => {
    return [
      {
        icon: <MapIcon className="size-10" />,
        title: 'Maps',
        description:
          'An overview of your stations, highlighting their real time status.',
      },
      {
        icon: <MapIcon className="size-10" />,
        title: 'Maps',
        description:
          'An overview of your stations, highlighting their real time status.',
      },
      {
        icon: <MapIcon className="size-10" />,
        title: 'Maps',
        description:
          'An overview of your stations, highlighting their real time status.',
      },
      {
        icon: <MapIcon className="size-10" />,
        title: 'Maps',
        description:
          'An overview of your stations, highlighting their real time status.',
      },
    ];
  }, []);

  return (
    <section>
      <IntroParagraph
        title={t('title')}
        kicker={t('kicker')}
        className="px-wide lg:px-main xl:pl-central xl:pr-main lg:pb-12"
      />
      <div className="px-wide md:px-main grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <img
          src="/ges-app-section.png"
          alt="Nextcharge app mobile"
          className="aspect-[491/736] object-contain object-center"
        />
        <div className="flex flex-col items-center lg:items-start justify-center gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7">
            {cards.map((data, index) => {
              return (
                <Card key={index} className="border border-neutral-400">
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
          <PrimaryLink target="_blank" icon={<ArrowRightIcon />} label={'vai al sito di nextcharge'} href="https://nextcharge-staging.vercel.app/en" />
        </div>
      </div>
    </section>
  );
};
