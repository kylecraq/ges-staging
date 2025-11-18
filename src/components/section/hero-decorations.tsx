import { BlobSquare } from '@/components/nextcharge-ui/decorations/blob-square';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const HeroDecorations = () => {
  const container = useRef<HTMLDivElement>(null);

  const blobSquare1 = useRef<HTMLSpanElement>(null);
  const blobSquare2 = useRef<HTMLSpanElement>(null);
  const userStatus = useRef<HTMLImageElement>(null);
  const userReviews = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const blobs = [blobSquare1, blobSquare2];

    if (userStatus.current && container.current) {
      gsap.fromTo(
        userStatus.current,
        { y: -150 },
        {
          y: 150,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            markers: false,
          },
        }
      );
    }

    if (userReviews.current && container.current) {
      gsap.fromTo(
        userReviews.current,
        { y: -100 },
        {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            markers: false,
          },
        }
      );
    }

    blobs.forEach((blob) => {
      if (blob.current && container.current) {
        gsap.fromTo(
          blob.current,
          { autoAlpha: 0, y: -15, rotate: -15 },
          {
            autoAlpha: 0.9,
            y: 0,
            rotate: 0,
            delay: 0,
            duration: 1,
            ease: 'power3.out',
          }
        );
        gsap.to(blob.current, {
          y: 0,
          duration: 2.7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });
  }, []);

  return (
    <div className="relative h-full" ref={container}>
      <span className="absolute mt-[53px] ml-[87px]" ref={blobSquare1}>
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
        className="absolute right-0 mt-[77px] h-fit w-fit object-cover object-center"
      />
      <Image
        ref={userReviews}
        src={'/hero/hero-reviews.png'}
        alt={'Decoration user reviews'}
        height={383}
        width={115}
        className="absolute bottom-0 mb-[103px] ml-[299px] h-fit w-fit object-cover object-center"
      />
    </div>
  );
};
