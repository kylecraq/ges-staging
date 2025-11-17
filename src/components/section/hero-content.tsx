import { useTranslations } from 'next-intl';
import { BodyText, Heading } from '@/components/typography';
import { PrimaryButtonWithIcon } from '@/components/nextcharge-ui/buttons/primary-with-icon';
import { DownloadIcon } from 'lucide-react';

export const HeroContent = () => {
  const t = useTranslations('HomePage');
  return (
    <section className="flex flex-col items-start gap-8">
      <Heading as="h1" size="xxl">
        {t.rich('title', {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
      </Heading>
      <BodyText>
        {t.rich("description", {
          primary: (chunks) => <span className="font-semibold">{chunks}</span>
        })}
      </BodyText>
      <PrimaryButtonWithIcon icon={<DownloadIcon />} label="Download app" />
    </section>
  )
}