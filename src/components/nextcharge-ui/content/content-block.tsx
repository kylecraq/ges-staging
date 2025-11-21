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
    <section className="flex flex-col items-start gap-8">
      <Heading as={titleTag} size={titleSize} effect={titleEffect}>
        {title}
      </Heading>
      {description ? <BodyText>{description}</BodyText> : null}
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
    </section>
  );
};
