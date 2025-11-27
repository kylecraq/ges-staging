'use client';
import {
  BodyText,
  Heading,
  HeadingEffects,
  HeadingSizes,
  HeadingTags,
} from '@/components/nextcharge-ui/typography';
import {
  PrimaryButtonWithIcon,
  PrimaryButtonWithIconProps,
} from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { ReactNode } from 'react';

type HeroContentProps = {
  title: ReactNode;
  titleTag: HeadingTags;
  titleSize: HeadingSizes;
  titleEffect?: HeadingEffects;
  description?: ReactNode;
  buttons?: PrimaryButtonWithIconProps[];
};
export const ContentBlock = (props: HeroContentProps) => {
  const { title, titleTag, titleSize, titleEffect, description, buttons } =
    props;
  return (
    <article className="h-full flex flex-col items-start gap-6 w-full">
      <Heading as={titleTag} size={titleSize} effect={titleEffect}>
        {title}
      </Heading>
      {description ? <p className="text-[15px] leading-[24px]">{description}</p> : null}
      <div className="mt-auto md:mt-0 mb-8 mx-auto md:mx-0 flex items-center gap-2.5">
        {buttons
          ? buttons.map((buttonProps, index) => {
            return (
              <PrimaryButtonWithIcon
                key={index}
                icon={buttonProps.icon}
                label={buttonProps.label}
              />
            );
          })
          : null}
      </div>
    </article>
  );
};
