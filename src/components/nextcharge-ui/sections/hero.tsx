'use client';
import { BlockContent } from '@/components/nextcharge-ui/content/block-content';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { ReactNode, useRef } from 'react';
import { PrimaryButtonProps } from '@/components/nextcharge-ui/buttons/primary-button';
import { cn } from '@/lib/utils';
import { HeadingEffects } from '@/components/nextcharge-ui/typography';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  imgSrcDsk: string;
  imgSrcMbl: string;
  title: ReactNode;
  titleEffect?: HeadingEffects;
  description?: ReactNode;
  buttons?: PrimaryButtonProps[];
  className?: string;
};

export const Hero = (props: HeroProps) => {
  const {
    imgSrcDsk,
    imgSrcMbl,
    title,
    titleEffect,
    description,
    buttons,
    className,
  } = props;

  return (
    <div className={cn(className, 'grid grid-cols-1 grid-rows-1')}>
      <div className="relative col-start-1 row-start-1">
        <ImgWithBg
          yParallaxAmount={30}
          imgSrc={imgSrcDsk}
          alt={'Hero image desktop'}
          className="hidden w-full lg:block"
        />
        <ImgWithBg
          yParallaxAmount={30}
          imgSrc={imgSrcMbl}
          alt={'Hero image mobile'}
          className="lg:hidden"
        />
      </div>
      <div className="col-start-1 row-start-1 grid h-full w-full grid-cols-1 grid-rows-1 pt-28 xl:pt-32">
        <div className="z-10 col-start-1 row-start-1 md:pr-0 md:pb-8 lg:mt-20 lg:w-7/12 lg:pl-20 xl:mt-10 xl:pl-36">
          <BlockContent
            title={title}
            titleTag="h1"
            titleSize="xxl"
            titleEffect={titleEffect}
            description={description}
            buttons={buttons}
            className="px-wide xs:max-w-10/12 pb-12 sm:max-w-8/12 sm:px-0 md:max-w-11/12 xl:max-w-10/12"
          />
        </div>
      </div>
    </div>
  );
};

const ImgWithBg = ({
  imgSrc,
  alt,
  className,
  yParallaxAmount,
}: {
  imgSrc: string;
  alt: string;
  className: string;
  yParallaxAmount: number;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (imgRef.current) {
      const tl = gsap.fromTo(
        [imgRef.current],
        { y: -yParallaxAmount },
        { y: yParallaxAmount, ease: "none" }
      );

      ScrollTrigger.create({
        animation: tl,
        trigger: imgRef.current,
        scrub: true
      });
    }
  }, []);

  return (
    <div className={cn('relative h-full w-full flex justify-center overflow-hidden', className)}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};
