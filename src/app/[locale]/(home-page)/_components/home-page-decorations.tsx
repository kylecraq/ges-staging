"use client";
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
  const containerRef = useRef<HTMLSpanElement>(null);

  const blob1 = useRef<SVGSVGElement>(null);
  const blob2 = useRef<SVGSVGElement>(null);


  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if(!containerRef.current) return;
      if(!blob1.current || !blob2.current) return;
      const internalBlob1 = blob1.current;
      const internalBlob2 = blob2.current;
      gsap.set('.blob-square', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // 3. Define the animation steps

      // The first BlobSquare fades in from 0 to 1 over the first 30% of the scroll
      tl.to(internalBlob1, { opacity: 1, ease: 'none' }, 0.0) // 0.0 position
        .to(internalBlob1, { opacity: 0, ease: 'none' }, 0.7); // Fades out starting at 70%

      // The second BlobSquare starts fading in slightly later and stays opaque longer
      tl.to(internalBlob2, { opacity: 1, ease: 'none' }, 0.3) // Starts fading in at 30%
        .to(internalBlob2, { opacity: 0, ease: 'none' }, 0.9); // Fades out starting at 90%
    }, containerRef);

    return () => context.revert(); // <- cleanup
  }, []);

  return (
    <span ref={containerRef} className="absolute top-[34%] right-8">
      <BlobSquare className="-translate-x-1/2 scale-50" ref={blob1} />
      <BlobSquare ref={blob2}/>
    </span>
  );
};
