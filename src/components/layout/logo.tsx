import {
  NextChargeCompleteLogo,
  NextChargeIcon,
  NextChargeIconText,
} from '@/components/nextcharge-ui/icons/icon-logo';
import { Link } from '@/i18n/navigation';
import { cva, VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

const logoVariants = cva(
  'flex items-center text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'text-neutral-0',
        primary: 'text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type LogoProps = VariantProps<typeof logoVariants>;
export const Logo = (props: LogoProps) => {
  const { variant } = props;
  return (
    <Link
      href={'/'}
      className={logoVariants({ variant })}
    >
      <span aria-hidden="true">
        <NextChargeCompleteLogo className={"size-28 md:size-32"}/>
      </span>
    </Link>
  );
};
