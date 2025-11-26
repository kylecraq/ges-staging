import { Kicker } from '@/components/nextcharge-ui/badge/kicker';

type FeatureListWithImageProps = {
  chips: Chip[];
  imgDsk?: string;
  imgMbl?: string;
};

export type Chip = {
  badge: string;
  description: string;
};

export const FeatureListWithImage = (props: FeatureListWithImageProps) => {
  const { chips, imgDsk, imgMbl } = props;

  return (
    <section className="grid grid-cols-2">
      <div className="flex flex-col gap-10 w-8/12">
        {chips.map((chip, index) => {
          return (
            <div className="flex flex-col items-start gap-4">
              <Kicker text={chip.badge} variant="full" key={index} />
              <p className="p-8 rounded-4xl bg-neutral-100">{chip.description}</p>
            </div>
          );
        })}
      </div>
      {/*<img*/}
      {/*  src={imgDsk}*/}
      {/*  alt={'Ciao'}*/}
      {/*  className="aspect-4/4 object-cover object-center"*/}
      {/*/>*/}
    </section>
  );
};
