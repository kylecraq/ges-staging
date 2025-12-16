import { Kicker } from '@/components/ges-ui/badge/kicker';
import {
  LinkPrimaryProps,
  PrimaryLink,
} from '@/components/ges-ui/links/primary-link';

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
    <section className="grid grid-cols-1 md:gap-0 lg:gap-8 lg:grid-cols-[auto_60%] xl:grid-cols-[auto_65%] px-wide md:px-main lg:pl-main lg:pr-0 xl:pl-main xl:pr-wide">
      <div className="mx-auto flex flex-col items-center lg:items-start gap-10">
        {chips.map((chip, index) => {
          return (
            <div key={index} className="flex flex-col items-start gap-4">
              <Kicker text={chip.badge} variant="full" />
              <p className="rounded-4xl border bg-neutral-0 border-neutral-40 px-8 py-6 xl:p-8">
                {chip.description}
              </p>
            </div>
          );
        })}
        {button ? (
          <PrimaryLink
            icon={button.icon}
            label={button.label}
            href={button.href}
            target={button.target}
          />
        ) : null}
      </div>
      <div className="order-first grid place-items-center lg:order-last md:place-items-end">
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
            className="min-h-[344px] aspect-4/4 h-full w-full object-contain object-center md:hidden"
          />
        ) : null}
      </div>
    </section>
  );
};
