import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { HomePageDecorations } from '@/app/[locale]/(home-page)/_components/home-page-decorations';
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
    <main className="relative mt-28">
     <HomePageHero />
      <div className="absolute inset-0">
        {/*<HomePageDecorations />*/}
      </div>
    </main>
  );
}
