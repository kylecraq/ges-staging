import { Kicker } from '@/components/nextcharge-ui/badge/kicker';
import {
  LinkPrimaryButtonWithIcon,
  LinkPrimaryButtonWithIconProps,
} from '@/components/nextcharge-ui/links/link-with-icon';

type FeatureListWithImageProps = {
  chips: Chip[];
  imgDsk?: string;
  imgMbl?: string;
  imgAlt?: string;
  button?: LinkPrimaryButtonWithIconProps;
};

export type Chip = {
  badge: string;
  description: string;
};

export const FeatureListWithImage = (props: FeatureListWithImageProps) => {
  const { chips, imgDsk, imgMbl, imgAlt, button } = props;

  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div className="mx-auto flex flex-col gap-10">
        {chips.map((chip, index) => {
          return (
            <div key={index} className="flex flex-col items-start gap-4">
              <Kicker text={chip.badge} variant="full" />
              <p className="rounded-4xl bg-neutral-100 px-8 py-6 xl:p-8">
                {chip.description}
              </p>
            </div>
          );
        })}
        {button ? (
          <LinkPrimaryButtonWithIcon
            icon={button.icon}
            label={button.label}
            href={button.href}
            target={button.target}
          />
        ) : null}
      </div>
      <div className="order-first grid place-items-center md:order-last md:place-items-end">
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
            className="aspect-4/4 h-full w-full object-contain object-center md:hidden"
          />
        ) : null}
      </div>
    </section>
  );
};
