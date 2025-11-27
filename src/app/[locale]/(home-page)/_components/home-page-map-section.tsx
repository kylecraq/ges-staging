'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';

export const HomePageMapSection = () => {
  const t = useTranslations('HomePage.SectionMap');

  return (
    <section className="px-wide-sm">
      <IntroParagraph title={t('title')} kicker={'kicker'} />
      <div className="relative aspect-3/4 xl:aspect-2/1 w-full overflow-hidden rounded-4xl shadow-md">
        <iframe
          className=""
          src="https://nextcharge.app/map?nextcharge=only&isHeaderLogo=false&isNEXTCHARGEnetworkWebsite=true"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>
    </section>
  );
};
