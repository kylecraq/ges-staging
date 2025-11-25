'use client';

import { BodyText, Heading } from '@/components/nextcharge-ui/typography';
import { ReactNode } from 'react';
import { Kicker } from '@/components/nextcharge-ui/badge/kicker';

type IntroParagraphProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
};

export const IntroParagraph = (props: IntroParagraphProps) => {
  const { title, kicker, description } = props;

  return (
    <article className="flex flex-col items-center text-center gap-8 px-2.5 md:px-36">
      {kicker ? <Kicker text={kicker} /> : null}
      <Heading as="h2" size="l">
        {title}
      </Heading>
      {description ? <BodyText>{description}</BodyText> : null}
    </article>
  );
};
