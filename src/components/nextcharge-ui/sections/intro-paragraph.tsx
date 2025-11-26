'use client';

import { BodyText, Heading } from '@/components/nextcharge-ui/typography';
import { ReactNode } from 'react';
import { Kicker } from '@/components/nextcharge-ui/badge/kicker';

export type IntroParagraphProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
};

export const IntroParagraph = (props: IntroParagraphProps) => {
  const { title, kicker, description } = props;

  return (
    <div className="flex flex-col items-center text-center gap-8">
      {kicker ? <Kicker text={kicker} /> : null}
      <Heading as="h2" size="xxl">
        {title}
      </Heading>
      {description ? <BodyText className="md:max-w-7/12">{description}</BodyText> : null}
    </div>
  );
};
