'use client';
import { BlockContent } from '@/components/ges-ui/content/block-content';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';
import { LinkPrimaryProps } from '@/components/ges-ui/links/primary-link';
import { useBlockContentAnimations } from '@/hooks/useBlockContentAnimations';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  imgSrcDsk: string;
  imgSrcMbl: string;
  imgSrcTbl: string;
  title: ReactNode;
  description?: ReactNode;
  buttons?: LinkPrimaryProps[];
  className?: string;
};

export const Hero = (props: HeroProps) => {
  const {
    imgSrcDsk,
    imgSrcMbl,
    imgSrcTbl,
    title,
    description,
    buttons,
    className,
  } = props;


  const container = useRef<HTMLDivElement>(null);
  useBlockContentAnimations({ container, hasTrigger: false });

  return (
    <div
      ref={container}
      className={cn(
        className,
        'grid aspect-[374/900] grid-cols-1 grid-rows-1',
        'xs:aspect-1/2',
        'md:aspect-[800/1150]',
        'lg:aspect-[1440/995]'
      )}
    >
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
          alt={'Hero image tablet'}
          loading="eager"
          decoding="async"
          className="hidden h-full w-full object-cover object-center md:block lg:hidden"
        />
        <img
          src={imgSrcMbl}
          alt={'Hero image mobile'}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-bottom md:hidden"
        />
      </div>
      <div className="xs:pt-32 xl:pl-main z-10 col-start-1 row-start-1 pt-28 xl:pt-[15%]">
        <BlockContent
          title={title}
          titleTag="h1"
          titleSize="xl"
          description={description}
          buttons={buttons}
          className="px-wide md:px-main xl:px-wide mx-0 lg:w-11/12 xl:w-[60%]"
        />
      </div>
    </div>
  );
};
