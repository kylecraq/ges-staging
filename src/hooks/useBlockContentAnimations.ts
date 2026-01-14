import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from '../lib/gsap';

type HookArgs = {
  container: RefObject<HTMLElement | null>;
  removeScrollTrigger?: boolean;
};

export const useBlockContentAnimations = (args: HookArgs) => {
  const { container, removeScrollTrigger } = args;

  useGSAP(
    () => {
      if (!container.current) return;

      const duration = 0.8;
      const ease = 'power2.out';

      let headingSplit: SplitText | undefined;
      let descriptionSplit: SplitText | undefined;

      const tl = gsap.timeline({
        onComplete: () => {
          headingSplit?.revert();
          descriptionSplit?.revert();
        },
        scrollTrigger: removeScrollTrigger
          ? null
          : {
              trigger: container.current,
              start: 'top 80%',
              end: 'bottom 80%',
              scrub: 1,
              once: true,
              markers: false,
            },
      });

      tl.addLabel('start');

      // Kicker
      const kicker = container.current.querySelector('.kicker');
      if (kicker) {
        tl.fromTo(
          kicker,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: duration, ease: ease },
          'start'
        );
      }

      // Heading
      const heading = container.current.querySelector('.heading');
      if (heading) {
        headingSplit = new SplitText(heading, {
          type: 'words, chars',
          mask: 'words',
          aria: 'auto',
        });

        gsap.set(headingSplit.chars, { yPercent: 110 });

        tl.to(
          headingSplit.chars,
          {
            yPercent: 0,
            duration: duration,
            ease: ease,
            stagger: 0.02,
          },
          `>-${duration * 0.3}`
        );
      }

      // Description
      const description = container.current.querySelector('.description');
      if (description) {
        descriptionSplit = new SplitText(description, {
          type: 'lines',
          aria: 'auto',
        });

        gsap.set(descriptionSplit.lines, {
          opacity: 0,
          y: 20,
          display: 'block',
          width: '100%',
          textAlign: 'inherit',
        });

        tl.to(
          descriptionSplit.lines,
          {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: ease,
            stagger: 0.06,
          },
          `>-${duration * 0.3}`
        );
      }

      // Buttons
      const buttons = container.current.querySelector('.buttons');
      if (buttons) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: duration, ease: ease },
          `>-${duration * 0.3}`
        );
      }

      return () => {
        headingSplit?.revert();
        descriptionSplit?.revert();
      };
    },
    { scope: container }
  );
};
