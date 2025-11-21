import { BodyText } from '@/components/nextcharge-ui/typography';

export const Kicker = ({ text }: { text: string }) => {
  return (
    <div className="border-primary rounded-full border px-5 py-2.5">
      <BodyText>{text}</BodyText>
    </div>
  );
};
