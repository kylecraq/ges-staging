import { Logo } from '@/components/nextcharge-ui/logo';
import { Link } from '@/i18n/navigation';

export const Footer = () => {
  return (
    <footer
      className="mt-80 h-[353px] px-3 md:px-9 lg:text-sm xl:text-base"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="flex h-full flex-col justify-between rounded-t-4xl bg-neutral-100 px-5 md:px-24 xl:px-28 pt-20 pb-5">
        <Logo variant="primary" />

        <div className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
          <Link
            href="/privacy"
            className="hover:decoration-primary underline underline-offset-4 transition-all duration-500 shrink-0"
          >
            Terms & Conditions
          </Link>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p>
      © Copyright {currentYear}.{' '}
      <span itemProp="name">Go Electric Stations SRLS </span> - All Rights
      Reserved
    </p>
  );
};
