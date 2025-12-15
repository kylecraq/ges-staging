'use client';

import { BodyText, Heading } from '@/components/nextcharge-ui/typography';
import { ReactNode } from 'react';
import { Kicker } from '@/components/nextcharge-ui/badge/kicker';
import { cn } from '@/lib/utils';

export type IntroParagraphProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export const IntroParagraph = (props: IntroParagraphProps) => {
  const { title, kicker, description, className } = props;

  return (
    <article className={cn(className, 'flex flex-col items-center text-center gap-6')}>
      {kicker ? <Kicker text={kicker} /> : null}
      <Heading as="h2" size="xl" effect={"text-wave-reveal"}>
        {title}
      </Heading>
      {description ? <BodyText className="md:max-w-7/12">{description}</BodyText> : null}
    </article>
  );
};
