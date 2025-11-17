import { Button } from '@/components/ui/button';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

export const LinkButtonWithIcon = (props: {
  icon: ReactNode;
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  const { icon, label, href, target = "_self" } = props;
  return (
    <Button
      asChild
      className="group"
    >
      <Link href={href} target={target}>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
          {icon}
        </span>
        <span className="h-5 overflow-hidden">
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.18,1.8,0.45,1)] group-hover:-translate-y-full">
            {label}
          </span>
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.18,1.8,0.45,1)] group-hover:-translate-y-full">
            {label}
          </span>
        </span>
      </Link>
    </Button>
  );
};
