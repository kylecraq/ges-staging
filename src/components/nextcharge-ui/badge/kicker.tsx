import { BodyText } from '@/components/nextcharge-ui/typography';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const kickerVariants = cva(
  'border-primary rounded-full border px-5 py-2.5 uppercase font-mono',
  {
    variants: {
      variant: {
        outline: 'bg-transparent',
        full: 'bg-primary',
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
      <BodyText variant={"button"}>{text}</BodyText>
    </div>
  );
};
