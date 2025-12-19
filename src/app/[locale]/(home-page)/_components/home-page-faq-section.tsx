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
        <AccordionItem
          value="item-1"
          className="bg-neutral-20 border-neutral-40 border"
        >
          <AccordionTrigger className="font-normal">
            {t('question-1')}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <BodyText variant="caption">{t('answer-1')}</BodyText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-neutral-20 border-neutral-40 border"
        >
          <AccordionTrigger className="font-normal">
            {t('question-2')}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <BodyText variant="caption">{t('answer-2')}</BodyText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-neutral-20 border-neutral-40 border"
        >
          <AccordionTrigger className="font-normal">
            {t('question-3')}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6">
            <BodyText variant="caption">{t('answer-3')}</BodyText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};
