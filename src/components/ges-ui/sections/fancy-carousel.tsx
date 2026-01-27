'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Kicker } from '@/components/ges-ui/badge/kicker';
import { BodyText, Heading } from '@/components/ges-ui/typography';
import { renderToStaticMarkup } from 'react-dom/server';
import { PaginationOptions } from 'swiper/types';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Slide = {
  id: number;
  badge: string;
  title: string;
  description: string;
  backgroundImageDsk: string;
  backgroundImageMbl: string;
  icon: ReactNode;
};

export type FancyCarouselProps = {
  slides: Slide[];
  className?: string;
};

export function FancyCarousel({ slides, className }: FancyCarouselProps) {
  const isSmallDevice = useMediaQuery('only screen and (min-width : 768px)');

  const pagination: PaginationOptions = {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass:
      'text-neutral-900 focus:outline-offset-0 outline-2 outline-offset-3 outline-primary-variant',
    renderBullet: (index, className) => {
      const iconHtml = renderToStaticMarkup(slides[index].icon);
      return `<button type="button" aria-label="Go to slide ${index + 1}" class='${className} focus:outline-offset-0 focus:outline-2 focus:outline-primary-variant text-neutral-60/50 transition-all duration-200 ease-slow bg-neutral-0 min-w-4 cursor-pointer p-2 rounded-full [&_svg]:size-5'>
        ${iconHtml}
      </button>`;
    },
  };

  return (
    <section
      aria-label="Carousel of slides"
      className={cn('relative overflow-hidden md:h-[685px]', className)}
    >
      <Swiper
        className="h-full w-full"
        modules={[Navigation, Pagination, EffectFade, Keyboard, A11y]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        direction={isSmallDevice ? 'vertical' : 'horizontal'}
        loop={true}
        speed={300}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={pagination}
        a11y={{
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="bg-neutral-0 h-full w-full">
              {slide.backgroundImageDsk && (
                <img
                  src={slide.backgroundImageDsk}
                  alt=""
                  aria-hidden="true"
                  className="hidden h-full w-full object-cover object-right md:block"
                />
              )}
              {slide.backgroundImageMbl && (
                <img
                  src={slide.backgroundImageMbl}
                  alt=""
                  aria-hidden="true"
                  className="h-full aspect-3/4 min-h-[800px] xxs:min-h-[700px] w-full object-cover object-top md:hidden"
                />
              )}
            </div>
            <SlideArticle
              badge={slide.badge}
              title={slide.title}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={cn(
          'absolute top-0 right-0 flex h-fit w-full items-center justify-center',
          'pt-6 pb-12 md:h-full md:w-fit md:pt-0 md:pr-11 md:pb-0 md:pl-22 lg:pb-0',
          'before:from-neutral-40 before:pointer-events-none before:absolute before:right-0 before:z-10 before:h-full before:w-full before:bg-linear-to-b before:to-transparent before:content-[""] before:md:bg-linear-to-l'
        )}
      >
        <div className={cn('swiper-pagination z-10 flex gap-6 md:flex-col')} />
      </div>
    </section>
  );
}

const SlideArticle = ({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge: string;
}) => (
  <article className="lg:px-wide absolute bottom-0 left-0 z-10 px-5 pb-6.5 md:max-w-sm md:px-7 md:pb-9 lg:max-w-lg xl:pr-0 xl:pb-16 xl:pl-20">
    <div className="flex flex-col items-start gap-4 text-neutral-100 lg:gap-6">
      <Kicker text={badge} variant="full" />
      <div className="bg-transparent">
        <Heading as="h3" size="l" className="pb-6">
          {title}
        </Heading>
        <BodyText>{description}</BodyText>
      </div>
    </div>
  </article>
);
