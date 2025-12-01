import { use } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HomePageHero } from '@/app/[locale]/(home-page)/_components/home-page-hero';
import { HomePageChargeSystemSection } from '@/app/[locale]/(home-page)/_components/home-page-charge-system-section';
import { HomePageMapSection } from '@/app/[locale]/(home-page)/_components/home-page-map-section';
import { HomePageDecorations } from './_components/home-page-decorations';
import { HomePageDownloadSection } from '@/app/[locale]/(home-page)/_components/home-page-download-section';
import { HomePageFaqSection } from '@/app/[locale]/(home-page)/_components/home-page-faq-section';
import { HomePageFeatureSection } from '@/app/[locale]/(home-page)/_components/home-page-feature-section';
import { Metadata } from 'next';

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({params}:HomeProps): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'HomePage.Seo'});

  return {
    title: t('title')
  };
}

export default function Home(props: HomeProps) {
  const { params } = props;
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="relative flex flex-col gap-32">
      <HomePageDecorations />
      <HomePageHero />
      <HomePageChargeSystemSection />
      <HomePageMapSection />
      <HomePageFeatureSection />
      <HomePageFaqSection />
      <HomePageDownloadSection />
    </main>
  );
}
