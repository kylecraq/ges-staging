'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { Chip, FeatureListWithImage } from '@/components/nextcharge-ui/sections/feature-list-with-image';
import { useTranslations } from 'next-intl';

export const HomePageFeatureSection = () => {
  const t = useTranslations("HomePage.SectionFeature")

  const chips: Chip[] = [
    {
      badge: 'Smartphone',
      description: 'Connesso sempre al tuo smartphone, ricarica in modo semplice e consulta le tue transazioni. Connesso sempre al tuo smartphone, ricarica in modo semplice e consulta le tue transazioni.',
    },
    {
      badge: 'Smartcard Rfid',
      description: 'La carta Rfid NextCharge è sempre connessa al tuo wallet e ti permette di ricaricare anche senza smartphone.',
    },
    {
      badge: 'Plug&charge',
      description: 'La carta Rfid NextCharge è sempre connessa al tuo wallet e ti permette di ricaricare anche senza smartphone.',
    },
  ];

  return <article className="flex flex-col">
    <IntroParagraph title={"title"} kicker={"kicker"}/>
    <FeatureListWithImage chips={chips} />
  </article>;
};