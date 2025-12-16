'use client';

import { useMemo } from 'react';
import { BlockContent } from '@/components/ges-ui/content/block-content';
import { useTranslations } from 'next-intl';
import { DownloadIcon } from 'lucide-react';
import {
  BlobBlackSquare,
  BlobBlackSquareVertical,
} from '@/components/ges-ui/decorations/blob-black-square';
import { PrimaryButtonProps } from '@/components/ges-ui/buttons/primary-button';
import { OnboardingImageAndButton } from '@/app/[locale]/(home-page)/_components/onboarding/OnboardingImageAndButton';

export const HomePageOnBoardingSection = () => {
  const t = useTranslations('HomePage.SectionOnboarding');
  const contentButtons: PrimaryButtonProps[] = useMemo(() => {
    return [{ icon: <DownloadIcon />, label: t('button') }];
  }, []);

  return (
    <section className="mt-20 md:mt-0 px-main relative grid grid-cols-1 gap-10 md:gap-12 xl:grid-cols-[auto_62%] xl:pr-0 xl:mb-32">
      <BlockContent
        kicker={t("kicker")}
        title={t('title')}
        titleTag="h1"
        titleSize="xxl"
        titleEffect="text-wave-reveal"
        description={t('description')}
        buttons={contentButtons}
        className="col-start-1 row-start-1 items-center md:items-center md:text-center xl:justify-center xl:items-start xl:text-left"
      />
      <div className="xl:col-start-2 xl:row-start-1 flex flex-col items-center gap-6 lg:flex-row lg:items-end xl:gap-9">
        <OnboardingImageAndButton />
        <p className="body-text text-neutral-70 w-full pb-6 text-center lg:text-left xl:w-1/3">
          {t.rich('caption', {
            important: (chunks) => (
              <span className="heading-m mb-2 block font-mono font-semibold">
                {chunks}
              </span>
            ),
          })}
        </p>
      </div>
      <div className="px-wide text-neutral-90 absolute -bottom-14 -z-20 w-full md:-bottom-20 md:w-fit lg:right-4 xl:-bottom-24 xl:w-fit">
        <BlobBlackSquare className="hidden md:inline" />
        <BlobBlackSquareVertical className="h-full w-full md:hidden" />
      </div>
    </section>
  );
};
