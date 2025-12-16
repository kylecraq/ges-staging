'use client';

import { IntroParagraph, IntroParagraphProps } from '@/components/ges-ui/sections/intro-paragraph';
import { PrimaryButton, PrimaryButtonProps } from '@/components/ges-ui/buttons/primary-button';
import { cn } from '@/lib/utils';

type BoxParagraphProps = {
  className?: string;
  buttons?: PrimaryButtonProps[];
} & IntroParagraphProps;

export const BoxParagraph = (
  props: BoxParagraphProps,
  props1: BoxParagraphProps = props,
) => {
  const { title, kicker, description, buttons, className } = props1;

  const actualClassname = cn(
    className,
    'flex flex-col items-center justify-center rounded-4xl p-8 px-3 md:p-12 md:py-20 xl:px-24 xl:py-28',
  );

  return (
    <div className={actualClassname}>
      <IntroParagraph title={title} kicker={kicker} description={description} />
      <div className="flex flex-wrap items-center gap-2.5">
        {buttons
          ? buttons.map((buttonProps, index) => {
            return (
              <PrimaryButton
                key={index}
                icon={buttonProps.icon}
                label={buttonProps.label}
              />
            );
          })
          : null}
      </div>
    </div>
  );
};
