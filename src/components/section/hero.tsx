'use client';
import Image from 'next/image';
import { Heading } from '@/components/typography';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('HomePage');
  return (
    <header className="min-h-screen">
      <div className="relative aspect-[460/327]">
        <Heading as="h1" size="xxl">
          {t.rich('title', {
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </Heading>
        <Image
          src="/hero/next-charge-hero.png"
          alt="Next charge hero"
          fill={true}
          objectFit="cover"
        />
      </div>
    </header>
  );
};
