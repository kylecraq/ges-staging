'use client';
import Image from 'next/image';
import { ContentBlock } from '@/components/nextcharge-ui/content/content-block';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';
import { PrimaryButtonWithIconProps } from '@/components/nextcharge-ui/buttons/primary-with-icon';

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
    <header className={className}>
      <article className="grid grid-cols-1 grid-rows-1">
        <div className="col-start-1 col-end-3 row-start-1 overflow-hidden px-3 md:px-9">
          <div
            ref={bgHero}
            className="relative aspect-[460/327] object-cover object-center"
          >
            <Image
              src={imgSrc}
              alt="Next charge hero"
              loading="eager"
              fill={true}
            />
          </div>
        </div>
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
