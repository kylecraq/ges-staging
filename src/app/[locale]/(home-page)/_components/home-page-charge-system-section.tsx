'use client';
import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';

export const HomePageChargeSystemSection = () => {
  const t = useTranslations('HomePage.SectionChargeSystem');
  return (
    <section className="px-wide-sm md:px-wide">
      <IntroParagraph
        title={t.rich('title', {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
        kicker={t('kicker')}
        description={t('description')}
      />
    </section>
  );
};
