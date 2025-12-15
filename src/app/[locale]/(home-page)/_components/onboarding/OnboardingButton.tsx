import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TouchIcon } from '@/components/nextcharge-ui/icons/touch-icon';

export type OnBoardingButtonProps = {
  label: string;
  onClick: () => void;
};
export const OnBoardingButton = (props: OnBoardingButtonProps) => {
  const { label, onClick } = props;

  return (
    <Button
      className={cn(
        'group hover:bg-primary h-fit cursor-pointer rounded-full border border-white px-1 py-1 text-neutral-100 uppercase drop-shadow-sm'
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          label ? 'bg-white text-neutral-100' : 'bg-primary text-neutral-0',
          'relative grid h-8 w-8 md:h-9 md:w-9 place-content-center place-items-center rounded-full p-0'
        )}
      >
        <span className="absolute inset-0 bottom-0 block aspect-4/4 scale-90 animate-ping rounded-full bg-inherit" />
        <span className="relative z-10">
          <TouchIcon className="size-5 md:size-6"/>
        </span>
      </div>
      {label ? (
        <span className="h-5 overflow-hidden pr-4">
          <span className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full">
            {label}
          </span>
          <span
            aria-hidden="true"
            className="ease-sine-in-out block transition-transform duration-200 group-hover:-translate-y-full"
          >
            {label}
          </span>
        </span>
      ) : null}
    </Button>
  );
};
