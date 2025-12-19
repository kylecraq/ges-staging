'use client';
import { BlockContent } from '@/components/ges-ui/content/block-content';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useRef } from 'react';
import { PrimaryButtonProps } from '@/components/ges-ui/buttons/primary-button';
import { cn } from '@/lib/utils';
import { HeadingEffects } from '@/components/ges-ui/typography';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  imgSrcDsk: string;
  imgSrcMbl: string;
  imgSrcTbl: string;
  title: ReactNode;
  titleEffect?: HeadingEffects;
  description?: ReactNode;
  buttons?: PrimaryButtonProps[];
  className?: string;
};

export const Hero = (props: HeroProps) => {
  const {
    imgSrcDsk,
    imgSrcMbl,
    imgSrcTbl,
    title,
    titleEffect,
    description,
    buttons,
    className,
  } = props;

  return (
    <div className={cn(className, 'grid grid-cols-1 grid-rows-1')}>
      <div className="col-start-1 row-start-1">
        <img
          src={imgSrcDsk}
          alt={'Hero image desktop'}
          loading="eager"
          decoding="async"
          className="hidden h-full w-full object-cover object-center lg:block"
        />
        <img
          src={imgSrcTbl}
          alt={'Hero image mobile'}
          loading="eager"
          decoding="async"
          className="hidden h-full w-full object-cover object-center md:block lg:hidden"
        />
        <img
          src={imgSrcMbl}
          alt={'Hero image mobile'}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center md:hidden"
        />
      </div>
      <div className="xs:pt-32 xl:pl-main z-10 col-start-1 row-start-1 pt-28 xl:pt-[15%]">
        <BlockContent
          title={title}
          titleTag="h1"
          titleSize="xl"
          titleEffect={titleEffect}
          description={description}
          buttons={buttons}
          className="px-wide md:px-main xl:px-wide mx-0 lg:w-11/12 xl:w-[60%]"
        />
      </div>
    </div>
  );
};
