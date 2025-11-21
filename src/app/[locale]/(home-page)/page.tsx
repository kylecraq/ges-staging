import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HomePageHero } from '@/app/[locale]/(home-page)/_components/home-page-hero';
import { HomePageSection1 } from '@/app/[locale]/(home-page)/_components/home-page-section-1';

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <div className="absolute inset-0">
        {/*<HomePageDecorations />*/}
      </div>
      <main className="relative flex flex-col gap-32 px-3 md:px-9 pt-32">
        <HomePageHero />
        <HomePageSection1 />
      </main>
    </>
  );
}
