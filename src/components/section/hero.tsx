'use client';
import Image from 'next/image';
import { HeroContent } from '@/components/section/hero-content';

export const Hero = () => {
  return (
    <header className="min-h-screen">
      <article className="grid grid-cols-1 grid-rows-1">
        <div className="px-3 md:px-9 relative col-start-1 col-end-3 row-start-1 aspect-[460/327] object-cover object-center">
          <Image
            src="/hero/next-charge-hero.png"
            alt="Next charge hero"
            loading="eager"
            fill={true}
          />
        </div>
        <div className="px-3 md:pl-36 md:pr-0 z-10 col-start-1 row-start-1 w-[44%] mt-36">
          <HeroContent />
        </div>
      </article>
    </header>
  );
};
