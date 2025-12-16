'use client';
import {
  BodyText,
  Heading,
  HeadingEffects,
  HeadingSizes,
  HeadingTags,
} from '@/components/ges-ui/typography';
import {
  PrimaryButton,
  PrimaryButtonProps,
} from '@/components/ges-ui/buttons/primary-button';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Kicker } from '@/components/ges-ui/badge/kicker';

type HeroContentProps = {
  kicker?: string;
  title: ReactNode;
  titleTag: HeadingTags;
  titleSize: HeadingSizes;
  titleEffect?: HeadingEffects;
  description?: ReactNode;
  buttons?: PrimaryButtonProps[];
  className?: string;
};
export const BlockContent = (props: HeroContentProps) => {
  const {
    kicker,
    title,
    titleTag,
    titleSize,
    titleEffect,
    description,
    buttons,
    className,
  } = props;
  return (
    <article
      className={cn(
        'mx-auto flex h-full w-full flex-col items-start gap-6 text-center md:text-left xl:gap-8 pb-6',
        className
      )}
    >
      {kicker ? <Kicker text={kicker} /> : null}
      <Heading as={titleTag} size={titleSize} effect={titleEffect}>
        {title}
      </Heading>
      {description ? (
        <BodyText className="lg:w-11/12 xl:w-8/12">{description}</BodyText>
      ) : null}
      <div className="mx-auto mt-auto flex justify-center md:items-center flex-wrap gap-2.5 md:mx-0 md:mt-0">
        {buttons
          ? buttons.map((buttonProps, index) => {
              return (
                <PrimaryButton
                  key={index}
                  icon={buttonProps.icon}
                  label={buttonProps.label}
                  variant={buttonProps.variant}
                />
              );
            })
          : null}
      </div>
    </article>
  );
};
