import { Button, buttonVariants } from '@/components/ui/button';
import { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type PrimaryButtonProps = {
  icon: ReactNode;
  label: string;
} & ButtonVariantProps;

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { icon, label, variant } = props;
  return (
    <Button
      variant={variant}
      className={cn(variant === 'secondary' ? 'border-secondary hover:bg-secondary' : 'border-primary hover:bg-primary', 'group h-fit cursor-pointer rounded-full border-1 px-0.5 py-0.5  focus-visible:border-inherit focus-visible:ring-0 [&_svg:not([class*=\'size-\'])]:size-5.5')}>
    <span
        className={cn(variant === 'secondary' ? 'text-neutral-0 bg-primary' : 'bg-white text-primary', 'grid h-10 w-10 place-items-center rounded-full  ')}>
        {icon}
      </span>
      {label ? (
        <span className="h-5 overflow-hidden pr-5 uppercase">
          <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
            {label}
          </span>
          <span
            aria-hidden={'true'}
            className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full"
          >
            {label}
          </span>
        </span>
      ) : null}
    </Button>
  );
};
