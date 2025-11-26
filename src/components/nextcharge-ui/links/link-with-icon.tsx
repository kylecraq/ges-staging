import { Button } from '@/components/ui/button';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

export const LinkButtonWithIcon = (props: {
  icon: ReactNode;
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  const { icon, label, href, target = '_self' } = props;
  return (
    <Button asChild className="group">
      <Link href={href} target={target}>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
          {icon}
        </span>
        <span className="h-5 overflow-hidden">
          <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
            {label}
          </span>
          <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
            {label}
          </span>
        </span>
      </Link>
    </Button>
  );
};
