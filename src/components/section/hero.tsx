'use client';
import Image from 'next/image';
import { BodyText, Heading } from '@/components/typography';
import { useTranslations } from 'next-intl';
import { PrimaryButtonWithIcon } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { Download } from 'lucide-react';

export const Hero = () => {
  const t = useTranslations('HomePage');
  return (
    <header className="min-h-screen px-3 md:px-9">
      <article className="grid grid-cols-[1fr_51%] grid-rows-1">
        <div className="col-start-1 col-end-3 row-start-1 relative aspect-[460/327]">
          <Image
            src="/hero/next-charge-hero.png"
            alt="Next charge hero"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="col-start-1 row-start-1 z-10 flex flex-col items-start gap-8">
          <Heading as="h1" size="xxl">
            {t.rich('title', {
              primary: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </Heading>
          <BodyText>
            {t.rich("description", {
              primary: (chunks) => <span className="font-semibold">{chunks}</span>
            })}
          </BodyText>
          <PrimaryButtonWithIcon icon={<Download />} label="Download app" />
        </div>
      </article>
    </header>
  );
};
