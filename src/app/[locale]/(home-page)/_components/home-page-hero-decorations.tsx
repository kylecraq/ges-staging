'use client';
import { BlobSquare } from '@/components/nextcharge-ui/decorations/blob-square';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const HomePageHeroDecorations = () => {
  const container = useRef<HTMLDivElement>(null);

  const blobSquare1 = useRef<HTMLSpanElement>(null);
  const blobSquare2 = useRef<HTMLSpanElement>(null);
  const userStatus = useRef<HTMLImageElement>(null);
  const userReviews = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const blobs = [blobSquare1, blobSquare2];

    const context = gsap.context(() => {
      if (userStatus.current && container.current) {
        gsap.fromTo(
          userStatus.current,
          { y: -180 },
          {
            y: 180,
            ease: 'none',
            scrollTrigger: {
              trigger: container.current,
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      if (userReviews.current && container.current) {
        gsap.fromTo(
          userReviews.current,
          { y: -90 },
          {
            y: 90,
            ease: 'none',
            scrollTrigger: {
              trigger: container.current,
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      blobs.forEach((blob) => {
        if (blob.current && container.current) {
          const tl = gsap.timeline();
          tl.fromTo(
            blob.current,
            { autoAlpha: 0, y: -15, rotate: -15 },
            {
              autoAlpha: 0.9,
              y: 0,
              rotate: 0,
              duration: 1,
              ease: 'slow',
            },
          );
          tl.to(blob.current, {
            y: '+=15',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'slow',
          });
        }
      });
    });
    return () => {
      context.revert();
    };
  }, []);

  return (
    <div className="pointer-events-none relative h-full pt-32" ref={container}>
      <span className="absolute mt-[50px] ml-[87px]" ref={blobSquare1}>
        <BlobSquare />
      </span>
      <span
        className="absolute right-0 bottom-0 mr-[147px] mb-[140px]"
        ref={blobSquare2}
      >
        <BlobSquare />
      </span>
      <Image
        ref={userStatus}
        src={'/hero/user-status.png'}
        alt={'Decoration user status'}
        height={183}
        width={213}
        className="absolute right-0 mt-[77px] max-h-[213px] w-32 object-cover object-center xl:h-fit xl:w-fit"
      />
      <Image
        ref={userReviews}
        src={'/hero/hero-reviews.png'}
        alt={'Decoration user reviews'}
        height={383}
        width={115}
        className="absolute bottom-0 mb-[120px] ml-[299px] max-h-[115px] w-64 object-cover object-center xl:h-fit xl:w-fit"
      />
    </div>
  );
};
