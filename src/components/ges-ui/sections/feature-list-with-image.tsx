import { Kicker } from '@/components/ges-ui/badge/kicker';
import {
  LinkPrimaryProps,
  PrimaryLink,
} from '@/components/ges-ui/links/primary-link';
import { gsap } from '@/lib/gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

type FeatureListWithImageProps = {
  chips: Chip[];
  imgDsk?: string;
  imgMbl?: string;
  imgAlt?: string;
  button?: LinkPrimaryProps;
};

export type Chip = {
  badge: string;
  description: string;
};

export const FeatureListWithImage = (props: FeatureListWithImageProps) => {
  const { chips, imgDsk, imgMbl, imgAlt, button } = props;
  return (
    <section className="px-wide md:px-main lg:pl-main xl:pl-main xl:pr-wide grid grid-cols-1 md:gap-0 lg:grid-cols-[auto_60%] lg:gap-8 lg:pr-0 xl:grid-cols-[auto_65%]">
      <div className="mx-auto flex flex-col items-center gap-10 overflow-hidden lg:items-start">
        {chips.map((chip, index) => (
          <Chip key={index} badge={chip.badge} description={chip.description} />
        ))}
        {button ? (
          <div className="item">
            <PrimaryLink
              icon={button.icon}
              label={button.label}
              href={button.href}
              target={button.target}
            />
          </div>
        ) : null}
      </div>
      <div className="order-first grid place-items-center md:place-items-end lg:order-last">
        {imgDsk ? (
          <img
            src={imgDsk}
            alt={imgAlt || 'Image'}
            className="hidden aspect-4/4 h-full w-full object-contain object-center md:block md:object-right"
          />
        ) : null}

        {imgDsk ? (
          <img
            src={imgMbl}
            alt={imgAlt || 'Image'}
            className="aspect-4/4 h-full min-h-[344px] w-full object-contain object-center md:hidden"
          />
        ) : null}
      </div>
    </section>
  );
};

const Chip = ({ badge, description }: Chip) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const element = container.current;
      if (!element) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
          once: true,
        },
      });
      tl.fromTo(
        element,
        { opacity: 0, xPercent: 5 },
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container} className="flex flex-col items-start gap-4">
      <Kicker text={badge} variant="full" className="item" />
      <p className="item bg-neutral-0 border-neutral-40 rounded-4xl border px-8 py-6 xl:p-8">
        {description}
      </p>
    </div>
  );
};
