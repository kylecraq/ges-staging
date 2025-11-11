import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export const PrimaryButtonWithIcon = ({ icon, label }: { icon: ReactNode, label: string }) => {
  return (
    <Button className="gap-2 font-semibold rounded-full">
      <span className="w-10 h-10 bg-white rounded-full grid place-items-center">
        {icon}
      </span>
      {label}
    </Button>
  );
};
