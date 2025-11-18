'use client';
import Image from 'next/image';
import { HeroContent } from '@/components/section/hero-content';
import { HeroDecorations } from '@/components/section/hero-decorations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
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
    <header className="grid">
      <article className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1">
        <div className="col-start-1 col-end-3 row-start-1 px-3 md:px-9 overflow-hidden">
          <div
            ref={bgHero}
            className="relative aspect-[460/327] object-cover object-center"
          >
            <Image
              src="/hero/next-charge-hero.png"
              alt="Next charge hero"
              loading="eager"
              fill={true}
            />
          </div>
        </div>
        <div className="z-10 col-start-1 row-start-1 mt-40 w-[49.4%] px-3 md:pr-0 md:pl-36">
          <HeroContent />
        </div>
      </article>
      <div className="col-start-1 row-start-1 px-3 md:px-9">
        <HeroDecorations />
      </div>
    </header>
  );
};
