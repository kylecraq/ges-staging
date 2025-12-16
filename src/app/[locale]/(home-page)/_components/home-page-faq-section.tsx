'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { IntroParagraph } from '@/components/ges-ui/sections/intro-paragraph';

export const HomePageFaqSection = () => {
  const t = useTranslations('HomePage.SectionFaq');

  return (
    <article id="faq" className="px-wide md:px-central flex flex-col">
      <IntroParagraph kicker={t('kicker')} title={t('title')} className="pb-16"/>
      <Accordion
        type="single"
        collapsible
        className="w-full mx-auto"
      >
        <AccordionItem value="item-1" className="bg-neutral-20 border border-neutral-40">
          <AccordionTrigger className="font-normal">{t('question-1')}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6 text-balance">
            <strong>
              Guida Introduttiva all’App
            </strong>
            <p>
              Monitor charging sessions, energy delivered, and costs through visual reports and maps. Filter by date, view station usage, and export everything in Excel or PDF for fast, accurate reporting. Monitor charging sessions, energy delivered, and costs through visual reports and maps. Filter by date, view station usage, and export everything in Excel or PDF for fast, accurate reporting.
              Monitor charging sessions, energy delivered, and costs through visual reports and maps. Filter by date, view station usage, and export everything in Excel or PDF for fast, accurate reporting. Monitor charging sessions, energy delivered, and costs through visual reports and maps.
              Filter by date, view station usage, and export everything in Excel or PDF for fast, accurate reporting.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-neutral-20 border border-neutral-40">
          <AccordionTrigger className="font-normal">{t('question-2')}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-neutral-20 border border-neutral-40">
          <AccordionTrigger className="font-normal">{t('question-3')}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};
