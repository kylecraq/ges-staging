'use client';
import {
  BodyText,
  Heading,
  HeadingSizes,
  HeadingTags,
} from '@/components/ges-ui/typography';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Kicker } from '@/components/ges-ui/badge/kicker';
import { LinkPrimaryProps, PrimaryLink } from '../links/primary-link';

type HeroContentProps = {
  kicker?: string;
  title: ReactNode;
  titleTag: HeadingTags;
  titleSize: HeadingSizes;
  description?: ReactNode;
  buttons?: LinkPrimaryProps[];
  className?: string;
};
export const BlockContent = (props: HeroContentProps) => {
  const {
    kicker,
    title,
    titleTag,
    titleSize,
    description,
    buttons,
    className,
  } = props;
  return (
    <article
      className={cn(
        'mx-auto flex h-full w-full flex-col items-start gap-6 pb-6 text-center md:text-left xl:gap-8',
        className
      )}
    >
      {kicker ? <Kicker text={kicker} className="kicker" /> : null}
      <Heading as={titleTag} size={titleSize} className="heading">
        {title}
      </Heading>
      {description ? (
        <BodyText className="description lg:w-11/12 xl:w-8/12">
          {description}
        </BodyText>
      ) : null}
      <div className="buttons mx-auto mt-auto flex flex-wrap justify-center gap-2.5 md:mx-0 md:mt-4 md:justify-start">
        {buttons
          ? buttons.map((buttonProps, index) => {
              return (
                <PrimaryLink
                  onClick={buttonProps.onClick}
                  key={index}
                  icon={buttonProps.icon}
                  label={buttonProps.label}
                  variant={buttonProps.variant}
                  href={buttonProps.href}
                />
              );
            })
          : null}
      </div>
    </article>
  );
};
