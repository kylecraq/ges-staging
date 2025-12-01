import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export type PrimaryButtonWithIconProps = {
  icon: ReactNode;
  label: string;
}

export const PrimaryButtonWithIcon = (props:PrimaryButtonWithIconProps ) => {
  const {
    icon,
    label,
  } = props;
  return (
    <Button className="group">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
        {icon}
      </span>
      <span className="h-5 overflow-hidden">
        <span
          className="block transition-transform duration-200 ease-sine-in-out group-hover:-translate-y-full">
          {label}
        </span>
        <span
          className="block transition-transform duration-200 ease-sine-in-out group-hover:-translate-y-full">
          {label}
        </span>
      </span>
    </Button>
  );
};
