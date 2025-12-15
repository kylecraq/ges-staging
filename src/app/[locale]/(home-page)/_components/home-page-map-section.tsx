'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const IframeWrapper = dynamic(
  () =>
    import('@/components/nextcharge-ui/sections/iframe-wrapper').then(
      (mod) => mod.IframeWrapper
    ),
  {
    ssr: false,
    loading: () => (
      <div className="bg-neutral-80 h-full w-full animate-pulse" />
    ),
  }
);

export const HomePageMapSection = () => {
  const t = useTranslations('HomePage.SectionMap');

  return (
    <section className={"mt-24 md:mt-0"}>
      <IntroParagraph
        title={t('title')}
        kicker={t('kicker')}
        className="px-main xl:px-central pb-16"
      />
      <div className="w-wide relative mx-auto aspect-3/4 overflow-hidden rounded-4xl shadow-md md:aspect-4/2">
        <IframeWrapper
          title={t('title')}
          src={
            'https://nextcharge.app/map?nextcharge=only&isHeaderLogo=false&isNEXTCHARGEnetworkWebsite=true'
          }
        />
      </div>
    </section>
  );
};
