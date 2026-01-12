import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

type HookArgs = {
  container: RefObject<HTMLElement | null>;
  hasTrigger?: boolean;
};

export const useBlockContentAnimations = (args: HookArgs) => {
  const { container, hasTrigger = true } = args;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!container.current) return;

      const duration = 0.8;
      const ease = 'power2.out';

      let hSplit: SplitText | undefined;
      let dSplit: SplitText | undefined;

      const tl = gsap.timeline();

      if (hasTrigger) {
        ScrollTrigger.create({
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
          once: true,
          animation: tl,
        });
      }

      tl.addLabel('start');

      const kicker = container.current.querySelector('.kicker');
      if (kicker) {
        tl.fromTo(
          kicker,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: ease,
          },
          `start`
        );
      }


      const heading = container.current.querySelector('.heading');
      if (heading) {
        hSplit = new SplitText(heading, {
          type: 'words, chars',
          wordsClass: 'overflow-hidden',
        });
        gsap.set(hSplit.chars, { lineHeight: 1.2, yPercent: 110 });
        gsap.set(hSplit.words, {
          display: 'inline-block',
          verticalAlign: 'top',
          lineHeight: 1,
        });
        tl.to(
          hSplit.chars,
          {
            yPercent: 0,
            duration: duration,
            ease: ease,
            stagger: 0.02,
          },
          'start+=0.1'
        );
      }

      const description = container.current.querySelector('.description');
      if (description) {
        dSplit = new SplitText(description, {
          type: 'lines',
          linesClass: 'overflow-hidden',
        });
        gsap.set(dSplit.lines, {
          opacity: 0,
          y: 20,
          textAlign: 'inherit',
          display: 'block',
          width: '100%',
        });
        tl.to(
          dSplit.lines,
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
          [buttons, '.kicker'],
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
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === container.current) st.kill();
        });

        hSplit?.revert();
        dSplit?.revert();
      };
    },
    { scope: container }
  );
};
