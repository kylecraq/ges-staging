import { GesCompleteLogo } from '@/components/ges-ui/icons/icon-logo';
import { Link } from '@/i18n/navigation';
import { cva, VariantProps } from 'class-variance-authority';

const logoVariants = cva('flex items-center text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-neutral-0',
      primary: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type LogoProps = VariantProps<typeof logoVariants>;
export const Logo = (props: LogoProps) => {
  const { variant } = props;
  return (
    <Link href={'/'} className={logoVariants({ variant })}>
      <div aria-hidden="true">
        <GesCompleteLogo className="max-h-[56px] w-28 drop-shadow-sm drop-shadow-neutral-100 md:w-32" />
      </div>
    </Link>
  );
};
