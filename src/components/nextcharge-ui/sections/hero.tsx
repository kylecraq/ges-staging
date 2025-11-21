'use client';
import Image from 'next/image';
import { ContentBlock } from '@/components/nextcharge-ui/content/content-block';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';
import { PrimaryButtonWithIconProps } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  imgSrc: string;
  title: ReactNode;
  description?: ReactNode;
  buttons?: PrimaryButtonWithIconProps[];
  className?: string;
};

export const Hero = (props: HeroProps) => {
  const { imgSrc, title, description, buttons, className } = props;
  const bgHero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgHero.current) {
      gsap.fromTo(
        bgHero.current,
        { y: -100 },
        {
          y: 100,
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
      className={cn(
        'grid grid-cols-1 grid-rows-1',
        className
      )}
    >
      <div className="col-start-1 row-start-1">
        <img
            src={imgSrc}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Next charge hero"
            loading="eager"
            decoding="async"
            className="aspect-[460/327] object-cover object-center w-full h-full"
        />
      </div>
      <article className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1">
        <div className="z-10 col-start-1 row-start-1 mt-40 w-[49.4%] px-3 md:pr-0 md:pl-36">
          <ContentBlock
            title={title}
            titleTag="h1"
            titleSize="xxl"
            description={description}
            buttons={buttons}
          />
        </div>
      </article>
    </header>
  );
};
