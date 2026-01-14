import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export * from 'gsap';
export * from 'gsap/ScrollTrigger';
export * from 'gsap/SplitText';
export { gsap };
