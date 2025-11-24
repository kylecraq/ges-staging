'use client';

import { IntroParagraph } from '@/components/nextcharge-ui/sections/intro-paragraph';
import { useTranslations } from 'next-intl';

export const NextChargeMap = () => {
  const t = useTranslations('HomePage.SectionMap');

  return (
    <section>
      <IntroParagraph title={t('title')} kicker={'kicker'} />
      <div className="relative mt-20 h-[675px] w-full overflow-hidden rounded-4xl shadow-md">
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
