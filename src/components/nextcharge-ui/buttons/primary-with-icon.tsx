import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export const PrimaryButtonWithIcon = ({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) => {
  return (
    <Button className="group gap-2 rounded-full font-semibold">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
        {icon}
      </span>
      <span className="h-5 overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.18,1.8,0.45,1)] group-hover:-translate-y-full">
          {label}
        </span>
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.18,1.8,0.45,1)] group-hover:-translate-y-full">
          {label}
        </span>
      </span>
    </Button>
  );
};
