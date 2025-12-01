'use client';
import { ContentLeftBlock } from '@/components/nextcharge-ui/content/content-left-block';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';
import { PrimaryButtonWithIconProps } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { cn } from '@/lib/utils';
import { HeadingEffects } from '@/components/nextcharge-ui/typography';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  imgSrcDsk?: string;
  imgSrcMbl?: string;
  title: ReactNode;
  titleEffect?: HeadingEffects;
  description?: ReactNode;
  buttons?: PrimaryButtonWithIconProps[];
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
  const bgHero = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (bgHero.current) {
      gsap.fromTo(
        bgHero.current,
        { y: -30 },
        {
          y: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: bgHero.current,
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <div
      className={cn(className, 'grid grid-cols-1 grid-rows-1 xl:min-h-screen')}
    >
      <div className="col-start-1 row-start-1 overflow-hidden pt-80 pb-2 md:pt-40 md:pb-0 xl:pt-32">
        <img
          ref={bgHero}
          src={imgSrcDsk}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Next charge hero"
          loading="eager"
          decoding="async"
          className="hidden aspect-4/3 h-full w-full object-contain object-top md:block xl:aspect-[460/327] xl:object-cover xl:object-center"
        />
        <img
          ref={bgHero}
          src={imgSrcMbl}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Next charge hero"
          loading="eager"
          decoding="async"
          className="h-full w-full object-contain object-bottom md:hidden"
        />
      </div>
      <div className="col-start-1 row-start-1 grid h-full w-full grid-cols-1 grid-rows-1 pt-28 md:pt-32">
        <div className="z-10 col-start-1 row-start-1 md:w-7/12 md:pr-0 md:pl-12 lg:mt-16 lg:w-6/12 lg:pl-16 xl:mt-40 xl:w-[50.5%] xl:pl-36">
          <ContentLeftBlock
            title={title}
            titleTag="h1"
            titleSize="xxl"
            titleEffect={titleEffect}
            description={description}
            buttons={buttons}
          />
        </div>
      </div>
    </div>
  );
};
