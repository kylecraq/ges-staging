import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/section/hero';
import { FancyCarousel } from '@/components/section/fancy-carousel';

export default function Home({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('HomePage');

    return (
        <main>
          <Hero />
          <FancyCarousel />
        </main>
    );
}
