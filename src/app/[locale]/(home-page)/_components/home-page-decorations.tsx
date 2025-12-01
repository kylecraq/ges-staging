'use client';
import {
  CurvedLeftLinesDsk,
  CurvedRightLineDsk,
} from '@/components/nextcharge-ui/decorations/curved-lines-dsk';
import { BlobSquare } from '@/components/nextcharge-ui/decorations/blob-square';
import { useLayoutEffect, useRef } from 'react';
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

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!containerRef.current || !blob1.current || !blob2.current) return;
      const internalBlob1 = blob1.current;
      const internalBlob2 = blob2.current;

      gsap.set([internalBlob1, internalBlob2], { y: -15, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: true,
        },
        ease: 'none',
      });

      tl.fromTo(
        internalBlob1,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'none' },
        0
      );
      tl.to(
        internalBlob2,
        { y: 0, opacity: 0.5, duration: 0 , ease: 'none'},
        '<0.5',
      );
      tl.to(
        internalBlob2,
        { y: 0, opacity: 1, duration: 0.5 , ease: 'none' },
        '<',
      );

    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-[34%] right-8 -z-10 flex flex-col justify-center"
    >
      <BlobSquare ref={blob1} className="-translate-x-1/2 scale-50" />
      <BlobSquare ref={blob2} />
    </div>
  );
};
