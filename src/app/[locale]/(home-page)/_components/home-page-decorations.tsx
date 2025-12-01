'use client';
import {
  CurvedLeftLinesDsk,
  CurvedRightLineDsk,
} from '@/components/nextcharge-ui/decorations/curved-lines-dsk';
import { BlobSquare } from '@/components/nextcharge-ui/decorations/blob-square';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HomePageDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 h-full">
      <span className="absolute top-[13%]">
        <CurvedLeftLinesDsk />
      </span>
      <span className="absolute top-[35%]">
        <CurvedLeftLinesDsk />
      </span>
      <span className="absolute top-[55%] right-0 -z-10">
        <CurvedRightLineDsk />
      </span>
      <BubblesDecoration />
    </div>
  );
};

const BubblesDecoration = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const blob1 = useRef<SVGSVGElement>(null);
  const blob2 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!containerRef.current || !blob1.current || !blob2.current) return;
      const yEndValue = 15;

      const internalBlob1 = blob1.current;
      const internalBlob2 = blob2.current;

      const yoyoTween = gsap.to([internalBlob1, internalBlob2], {
        y: -yEndValue,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'slow',
        paused: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false,
          onLeave: () => yoyoTween.play(),
        },
        ease: 'none',
      });

      tl.fromTo(
        internalBlob1,
        { autoAlpha: 0, rotate: -yEndValue },
        { autoAlpha: 1, rotate: 0, duration: 1, ease: 'none' },
        0
      );
      tl.fromTo(
        internalBlob2,
        { rotate: -yEndValue },
        { rotate: 0, duration: 1, ease: 'none' },
        0
      );
      tl.fromTo(
        internalBlob2,
        { autoAlpha: 0 },
        { autoAlpha: 0.4, duration: 0.1, ease: 'slow' },
        0.3
      );
      tl.to(
        internalBlob2,
        { autoAlpha: 1, duration: 0.6, ease: 'none' },
        '>'
      );
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-[34%] right-8 -z-10 flex flex-col justify-center"
    >
      <BlobSquare ref={blob1} className="-translate-x-1/2 scale-50 opacity-0" />
      <BlobSquare ref={blob2} className="opacity-0" />
    </div>
  );
};
