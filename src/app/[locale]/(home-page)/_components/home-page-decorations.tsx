'use client';
import { BlobSquare } from '@/components/ges-ui/decorations/blob-square';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import { CurvedLineLeftDsk } from '@/components/ges-ui/decorations/curved-line-left-dsk';
import { CurvedLineRightDsk } from '@/components/ges-ui/decorations/curved-line-right-dsk';
import { CurvedLineLeftMbl } from '@/components/ges-ui/decorations/curved-line-left-mbl';
import { CurvedLineRightMbl } from '@/components/ges-ui/decorations/curved-line-right-mbl';

export const HomePageDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full">
      {/*---MOBILE---*/}
      {/*HERO*/}
      <span className="absolute top-[6%] md:hidden">
        <CurvedLineLeftMbl />
      </span>
      {/*MAP*/}
      <span className="absolute top-[54%] md:hidden">
        <CurvedLineLeftMbl />
      </span>

      {/*FEATURE*/}
      <span className="absolute top-[68%] md:hidden right-0">
        <CurvedLineRightMbl />
      </span>

      {/*---DESKTOP---*/}
      {/*HERO*/}
      <span className="absolute top-[8%] hidden md:inline lg:top-[7%] xl:top-[10%]">
        <CurvedLineLeftDsk />
      </span>
      {/*MAP*/}
      <span className="absolute top-[54%] hidden md:inline">
        <CurvedLineLeftDsk />
      </span>
      {/*FEATURE*/}
      <span className="absolute md:top-[70%] lg:top-[69%] right-0">
        <CurvedLineRightDsk className="hidden md:inline" />
      </span>

      {/*---BLOBS---*/}

      {/*ONBOARDING*/}
      <BlobsDecoration className="absolute left-2 top-[30%] xxs:top-[31.5%] md:top-[32%] xl:top-[37.5%] 2xl:top-[40%] md:left-24 xl:left-12" inverted />

      {/*MAP*/}
      <BlobsDecoration className="absolute top-[52.5%] right-[6%] md:top-[53%] md:right-[15%]" />

      {/*FEATURE*/}
      <BlobsDecoration
        hide="small"
        className="absolute left-4 md:left-24 top-[65%] lg:top-[68%] xl:top-[70%] 2xl:top-[71%]"
      />

      {/*FAQ*/}
      <BlobsDecoration className="absolute hidden md:inline md:top-[87.5%] md:right-24" />
    </div>
  );
};

type BlobsDecorationProps = {
  className?: string;
  hide?: 'big' | 'small';
  inverted?: boolean;
};

const BlobsDecoration = (props: BlobsDecorationProps) => {
  const { className, hide = '', inverted } = props;
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
      tl.to(internalBlob2, { autoAlpha: 1, duration: 0.6, ease: 'none' }, '>');
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <span ref={containerRef} className={cn(className, '')}>
      <BlobSquare
        ref={blob1}
        className={cn(
          'absolute opacity-0 scale-50',
          hide === 'small' && 'hidden',
          inverted
            ? '-bottom-18 left-12'
            : '-top-8/12 -translate-x-10/12'
        )}
      />
      <BlobSquare
        ref={blob2}
        className={cn(
          'opacity-0',
          hide === 'big' && 'hidden',
          inverted ? '-top-12 -left-8' : ''
        )}
      />
    </span>
  );
};
