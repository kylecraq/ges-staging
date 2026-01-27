import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalCirclePath(path: SVGCircleElement) {
  //path.getTotalLength() does not work on circles, so we calculate it manually
  const radius = path.r.baseVal.value;
  return 2 * Math.PI * radius;
}
