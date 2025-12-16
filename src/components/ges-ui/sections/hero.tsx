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
          alt={"Hero image desktop"}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center hidden lg:block"
        />
        <img
          src={imgSrcMbl}
          alt={"Hero image mobile"}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center lg:hidden"
        />
      </div>
      <div className="z-10 col-start-1 row-start-1 pt-[15%] pl-main">
        <BlockContent
          title={title}
          titleTag="h1"
          titleSize="xl"
          titleEffect={titleEffect}
          description={description}
          buttons={buttons}
          className="mx-0 w-[60%]"
        />
      </div>
    </div>
  );
}
