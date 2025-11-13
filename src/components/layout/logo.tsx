import {
  NextChargeIcon,
  NextChargeIconText,
} from '@/components/nextcharge-ui/icons/Logo';
import { Link } from '@/i18n/navigation';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className="flex duration-700 items-center space-x-3 text-sm font-medium transition"
    >
      <span aria-hidden="true">
        <NextChargeIcon />
      </span>
      <span>
        <NextChargeIconText />
      </span>
    </Link>
  );
};
