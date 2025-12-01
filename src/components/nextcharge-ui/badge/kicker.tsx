import { BodyText } from '@/components/nextcharge-ui/typography';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const kickerVariants = cva(
  '' + 'border-primary rounded-full border px-5 py-2.5 uppercase',
  {
    variants: {
      variant: {
        outline: 'bg-transparent',
        full: 'bg-primary text-neutral-0',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export type KickerProps = { text: string } & VariantProps<
  typeof kickerVariants
>;

export const Kicker = (props: KickerProps) => {
  const { text, variant } = props;

  return (
    <div className={cn(kickerVariants({ variant }))}>
      <BodyText>{text}</BodyText>
    </div>
  );
};
