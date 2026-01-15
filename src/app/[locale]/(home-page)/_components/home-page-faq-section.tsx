'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';
import { BodyText } from '@/components/ges-ui/typography';

export const HomePageFaqSection = () => {
  const t = useTranslations('HomePage.SectionFaq');
  const faqNumbers = Array.from({ length: 6 });

  return (
    <article
      id="faq"
      className="px-wide md:px-main lg:px-central flex flex-col"
    >
      <IntroParagraph
        kicker={t('kicker')}
        title={t('title')}
        className="pb-16"
      />
      <Accordion type="single" collapsible className="mx-auto w-full">
        {faqNumbers.map((_,index)=>{
          const currentNumber = index + 1
          return (
            <AccordionItem
              key={index}
              value={`item-${currentNumber}`}
              className="bg-neutral-20 border-neutral-40 border"
            >
              <AccordionTrigger className="font-normal">
                {t(`question-${currentNumber}`)}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6">
                <BodyText variant="caption">{t(`answer-${currentNumber}`)}</BodyText>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </article>
  );
};
