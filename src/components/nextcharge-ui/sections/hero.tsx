'use client';
import Image from 'next/image';
import { ContentBlock } from '@/components/nextcharge-ui/content/content-block';
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
    <header
      className={cn('grid min-h-screen grid-cols-1 grid-rows-1', className)}
    >
      <div className="col-start-1 row-start-1 overflow-hidden pt-64 pb-2 md:pt-0 md:pb-0">
        <img
          ref={bgHero}
          src={imgSrcDsk}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Next charge hero"
          loading="eager"
          decoding="async"
          className="md:block hidden aspect-[460/327] h-full w-full object-cover object-center"
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
      <article className="col-start-1 row-start-1 grid h-full grid-cols-1 grid-rows-1">
        <div className="z-10 col-start-1 row-start-1 px-3 md:pr-0 md:pl-36 xl:mt-40 xl:w-[49.4%]">
          <ContentBlock
            title={title}
            titleTag="h1"
            titleSize="xxl"
            titleEffect={titleEffect}
            description={description}
            buttons={buttons}
          />
        </div>
      </article>
    </header>
  );
};
