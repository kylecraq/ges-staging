import { Button } from '@/components/ui/button';
import { ComponentProps, HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { ButtonVariantProps } from '@/components/ges-ui/buttons/primary-button';
import { cn } from '@/lib/utils';

export type LinkPrimaryProps = {
  icon: ReactNode;
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
} & ButtonVariantProps &
  ComponentProps<'button'>;

export const PrimaryLink = (props: LinkPrimaryProps) => {
  const { icon, label, href, target = '_self', variant, onClick } = props;
  return (
    <Button
      onClick={onClick}
      variant={variant}
      asChild
      className={cn(
        variant === 'secondary'
          ? 'hover:bg-secondary border-secondary'
          : 'hover:bg-primary border-primary',
        "group h-fit cursor-pointer rounded-full border-1 px-0.5 py-0.5 focus-visible:border-inherit focus-visible:ring-0 [&_svg:not([class*='size-'])]:size-5.5"
      )}
    >
      <Link href={href} target={target}>
        <span
          className={cn(
            variant === 'secondary'
              ? 'text-neutral-0 bg-primary'
              : 'text-primary bg-white',
            'grid h-10 w-10 place-items-center rounded-full'
          )}
        >
          {icon}
        </span>
        {label ? (
          <span
            aria-hidden={'true'}
            className="h-5 overflow-hidden pr-5 uppercase"
          >
            <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
              {label}
            </span>
            <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
              {label}
            </span>
          </span>
        ) : null}
      </Link>
    </Button>
  );
};
