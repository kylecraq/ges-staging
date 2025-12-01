'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';

export const HomePageMapSection = () => {
  const t = useTranslations('HomePage.SectionMap');

  return (
    <section>
      <IntroParagraph
        title={t('title')}
        kicker={'kicker'}
        className="px-main"
      />
      <div className="w-wide relative mx-auto aspect-3/4 overflow-hidden rounded-4xl shadow-md md:aspect-4/2">
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
