'use client';

import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useBlockContentAnimations } from '@/hooks/useBlockContentAnimations';
import { LinkPrimaryProps, PrimaryLink } from '@/components/ges-ui/links/primary-link';
import { Kicker } from '@/components/ges-ui/badge/kicker';
import { BodyText, Heading } from '@/components/ges-ui/typography';


export type IntroParagraphProps = {
  kicker?: ReactNode;
  title: ReactNode;
  description?: string;
  buttons?: LinkPrimaryProps[];
  className?: string;
};

export const IntroParagraph = (props: IntroParagraphProps) => {
  const { title, kicker, description, className = true, buttons } =
    props;

  const container = useRef<HTMLElement>(null);
  useBlockContentAnimations({ container });

  return (
    <article
      className={cn(className, 'flex flex-col items-center gap-6 text-center')}
      ref={container}
    >
      {kicker ? <Kicker text={kicker} className="kicker" /> : null}
      {title ? (
        <Heading as="h2" size="xl" className="heading">
          {title}
        </Heading>
      ) : null}
      {description ? (
        <BodyText className="description md:max-w-7/12">{description}</BodyText>
      ) : null}
      {buttons ? (
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
          {buttons.map((buttonProps, index) => {
            return (
              <PrimaryLink
                key={index}
                icon={buttonProps.icon}
                label={buttonProps.label}
                href={buttonProps.href}
                target={buttonProps.target}
              />
            );
          })}
        </div>
      ) : null}
    </article>
  );
};
