'use client';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRightIcon, MapIcon } from 'lucide-react';
import { ReactNode, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { PrimaryLink } from '@/components/ges-ui/links/primary-link';

type Card = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const HomePageCardsSection = () => {
  const cards: Card[] = useMemo(() => {
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
    <section className="flex flex-col justify-center items-center gap-14">
      <article className="px-wide md:px-main grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7 lg:grid-cols-3">
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
      </article>
      <PrimaryLink icon={<ArrowRightIcon />} label={'Contact us'} href={'#'} />
    </section>

  );
};
