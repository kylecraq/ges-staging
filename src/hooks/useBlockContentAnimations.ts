import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const useBlockContentAnimations = (
  container: RefObject<HTMLElement | null>,
  hasTrigger: boolean = true
) => {
  useGSAP(
    () => {
      if (!container.current) return;
      const tl = gsap.timeline({
        scrollTrigger: hasTrigger
          ? {
            trigger: container.current,
            start: 'top 85%',
            end: 'bottom center',
            scrub: 1,
            invalidateOnRefresh: true,
            once: true,
            markers: false,
          }
          : null,
      });
      tl.addLabel('start');

      const duration = 0.8;
      const ease = 'power2.out';

      const kicker = container.current.querySelector('.kicker');
      if (kicker) {
        tl.fromTo(
          kicker,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: duration, ease }
        );
      }

      const heading = container.current.querySelector('.heading');
      let headingSplit: SplitText | undefined;
      if (heading) {
        const headingSplit = new SplitText(heading, {
          type: 'words, chars',
          wordsClass: 'overflow-hidden',
        });
        gsap.set(headingSplit.chars, {
          lineHeight: 1.2,
          yPercent: 110,
        });
        gsap.set(headingSplit.words, {
          display: 'inline-block',
          verticalAlign: 'top',
          lineHeight: 1
        });
        tl.to(
          headingSplit.chars,
          {
            yPercent: 0,
            duration: duration,
            ease: 'power3.out',
            stagger: 0.02,
          },
          'start'
        );
      }

      const description = container.current.querySelector('.description');
      let descriptionSplit: SplitText | undefined;

      if (description) {
        descriptionSplit = new SplitText(description, {
          type: 'lines',
          linesClass: 'overflow-hidden',
        });
        gsap.set(descriptionSplit.lines, {
          textAlign: 'inherit',
          display: 'block',
          width: '100%',
        });
        tl.fromTo(
          descriptionSplit.lines,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: duration,
            ease: ease,
          },
          '>-=0.4'
        );
      }

      const buttons = container.current.querySelector('.buttons');
      if (buttons) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: ease,
          },
          `>-=0.6`
        );
      }

      return () => {
        headingSplit?.revert();
        descriptionSplit?.revert();
      };
    },
    { scope: container, dependencies: [] }
  );
};
