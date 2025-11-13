import Image from "next/image";
import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export default function Home({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('HomePage');

    return (
        <main>
          <HeroGeometric
            badge="shadcn.io"
            title1= {t('title')}
            title2="Digital Vision"
            description="A custom shadcn registry with beautiful, reusable components for modern web development."
          />
          <HeroGeometric
            badge="shadcn.io"
            title1= {t('title')}
            title2="Digital Vision"
            description="A custom shadcn registry with beautiful, reusable components for modern web development."
          />
        </main>
    );
}
