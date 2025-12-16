'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

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

export function FancyCarousel(props: FancyCarouselProps) {
  const { slides, className } = props;

  const pagination: PaginationOptions = {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass:
      'text-neutral-100 outline-2 outline-offset-3 outline-primary-variant',
    renderBullet: (index, className) => {
      const iconHtml = renderToStaticMarkup(slides[index].icon);
      return `<span class='${className} transition-all duration-200 ease-slow bg-neutral-0 min-w-4 cursor-pointer p-2 rounded-full [&_svg]:size-5'>${iconHtml}</span>`;
    },
  };

  const isSmallDevice = useMediaQuery('only screen and (min-width : 768px)');

  return (
    <div className={cn('relative overflow-hidwden md:aspect-video', className)}>
      <Swiper
        className="h-full w-full"
        modules={[Navigation, Pagination, EffectFade]}
        scrollbar={{ draggable: true }}
        direction={isSmallDevice ? 'vertical' : 'horizontal'}
        loop={true}
        speed={300}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={pagination}
        onSwiper={() => null}
        onSlideChange={() => null}
      >
        {slides.map((slide, index) => {
          const BackgroundImageDsk = slide.backgroundImageDsk
            ? `/carousel/${slide.backgroundImageDsk}`
            : null;
          const BackgroundImageMbl = slide.backgroundImageMbl
            ? `/carousel/${slide.backgroundImageMbl}`
            : null;

          return (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div className="bg-neutral-80 h-full w-full overflow-hidden">
                {BackgroundImageDsk ? (
                  <img
                    src={BackgroundImageDsk}
                    alt={slide.badge}
                    className="hidden h-full w-full object-cover object-center md:block"
                  />
                ) : null}
                {BackgroundImageMbl ? (
                  <img
                    src={BackgroundImageMbl}
                    alt={slide.badge}
                    className="min-h-[800px] h-full w-full object-cover object-center md:hidden"
                  />
                ) : null}
              </div>
              <SlideArticle
                badge={slide.badge}
                title={slide.title}
                description={slide.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={cn(
          'absolute top-0 right-0 flex h-fit w-full items-center justify-center',
          'pt-6 pb-12 md:h-full md:w-fit md:pt-0 md:pr-11 md:pb-0 md:pl-22 lg:pb-0',
          'before:pointer-events-none before:absolute before:right-0 before:z-10 before:h-full before:w-full before:bg-linear-to-b before:from-neutral-40 before:to-transparent before:content-[""] before:md:bg-linear-to-l'
        )}
      >
        <div className={cn('swiper-pagination z-10 flex gap-6 md:flex-col')} />
      </div>
    </div>
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
}) => {
  return (
    <article className="lg:px-wide absolute bottom-0 left-0 z-10 px-3.5 pb-3.5 md:max-w-sm md:px-7 md:pb-7 lg:max-w-lg xl:pr-0 xl:pb-16 xl:pl-20">
      <div className="flex flex-col items-start gap-4 text-neutral-100 lg:gap-6">
        <Kicker text={badge} variant="full" />
        <div className="bg-transparent p-5 lg:p-7">
          <Heading as="h3" size="xl">
            {title}
          </Heading>
          <BodyText>{description}</BodyText>
        </div>
      </div>
    </article>
  );
};
