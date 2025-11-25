'use client';
import { CurvedLine } from '@/components/nextcharge-ui/decorations/curved-line';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HomePageDecorations = () => {
  const curvedLine1 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (curvedLine1 && curvedLine1.current) {
      gsap.fromTo(
        curvedLine1.current,
        {
          autoAlpha: 0,
          // yPercent: -100,
          rotate: -15,
        },
        {
          autoAlpha: 1,
          xPercent: 100,
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'sine.inOut',
        },
      );
    }
  }, []);

  return <>
    <span className="absolute top-[55%]">
      <CurvedLine />
    </span>
    {/*<span className="absolute bottom-0" ref={curvedLine1}>*/}
    {/*  <CurvedLine />*/}
    {/*</span>*/}
  </>;
};