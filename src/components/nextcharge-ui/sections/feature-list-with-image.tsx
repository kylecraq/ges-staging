import { Kicker } from '@/components/nextcharge-ui/badge/kicker';

type FeatureListWithImageProps = {
  chips: Chip[];
  imgDsk?: string;
  imgMbl?: string;
  imgAlt?: string;
};

export type Chip = {
  badge: string;
  description: string;
};

export const FeatureListWithImage = (props: FeatureListWithImageProps) => {
  const { chips, imgDsk, imgMbl, imgAlt } = props;

  return (
    <section className="grid md:grid-cols-2 gap-10">
      <div className="flex md:w-8/12 flex-col gap-10">
        {chips.map((chip, index) => {
          return (
            <div key={index} className="flex flex-col items-start gap-4">
              <Kicker text={chip.badge} variant="full" />
              <p className="rounded-4xl bg-neutral-100 p-8">
                {chip.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid place-items-center order-first md:order-last">
        {imgDsk ? (
          <img
            src={imgDsk}
            alt={imgAlt || 'Image'}
            className="hidden aspect-4/4 h-full w-full object-contain object-center md:block"
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
