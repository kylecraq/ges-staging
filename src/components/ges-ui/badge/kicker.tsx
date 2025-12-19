import { BodyText } from '@/components/ges-ui/typography';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const kickerVariants = cva(
  'text-primary border-primary rounded-full border px-5 py-1 font-mono uppercase',
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
      <BodyText variant={'button'}>{text}</BodyText>
    </div>
  );
};
