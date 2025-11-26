import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HomePageHero } from '@/app/[locale]/(home-page)/_components/home-page-hero';
import { HomePageSection1 } from '@/app/[locale]/(home-page)/_components/home-page-section-1';
import { NextChargeMap } from '@/app/[locale]/(home-page)/_components/next-charge-map';
import { HomePageDecorations } from './_components/home-page-decorations';
import { HomePageDownloadSection } from '@/app/[locale]/(home-page)/_components/home-page-download-section';
import { HomePageFaqSection } from '@/app/[locale]/(home-page)/_components/home-page-faq-section';

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default function Home(props: HomeProps) {
  const { params } = props;
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <div className="absolute inset-0">
        <HomePageDecorations />
      </div>
      <main className="relative flex flex-col gap-32 px-3 pt-24 md:px-9 xl:pt-32">
        <HomePageHero />
        <HomePageSection1 />
        <NextChargeMap />
        <HomePageDownloadSection />
        <HomePageFaqSection />
      </main>
    </>
  );
}
