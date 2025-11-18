"use client";
import { CurvedLine } from '@/components/nextcharge-ui/decorations/curved-line';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HomePageDecorations = () => {
  const curvedLine1 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (curvedLine1 && curvedLine1.current) {
      gsap.fromTo(
        curvedLine1.current,
        { y: -100 },
        {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: curvedLine1.current,
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return <>
    <span className="absolute top-0" ref={curvedLine1}>
      <CurvedLine />
    </span>
    <span className="absolute bottom-0" ref={curvedLine1}>
      <CurvedLine />
    </span>
  </>
}