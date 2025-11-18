import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HomePageHero } from '@/app/[locale]/(home-page)/_components/home-page-hero';

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
      <main className="relative pt-32">
        <HomePageHero />
      </main>
    </>
  );
}
