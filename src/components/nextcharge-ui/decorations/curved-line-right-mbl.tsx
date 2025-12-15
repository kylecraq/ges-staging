'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CurvedLineRightMbl = (props: ComponentProps<'svg'>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (pathRef.current && svgRef.current) {
      const svg = svgRef.current;
      gsap.to(svg, {
        opacity: 1,
        scrollTrigger: {
          trigger: svg,
          start: 'top center',
        },
      });

      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: length * 2,
        ease: 'slow',
        scrollTrigger: {
          trigger: svg,
          start: 'top center',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={170}
      height={454}
      viewBox="0 0 170 454"
      fill="none"
      ref={svgRef}
      opacity={1}
      {...props}
    >
      <path
        ref={pathRef}
        stroke="#06EF00"
        strokeWidth={15}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M357.746 314.191C316.984 384.793 283.271 424.308 245.803 439.27C208.897 454.008 166.135 445.686 104.712 413.877C100.235 411.534 95.9418 409.388 91.5609 406.859C86.5115 403.943 81.7131 400.621 76.6247 397.203L76.618 397.2L76.6117 397.195C34.9721 369.362 13.7062 343.134 8.68636 311.478C3.66433 279.807 14.5312 240.787 42.4137 186.396L43.7547 183.794C50.152 171.546 57.0553 158.624 64.8654 145.097C72.6748 131.57 80.3126 119.306 87.7738 107.551L87.7733 107.552C121.67 54.5815 150.414 24.9895 180.796 13.3647C210.688 1.92771 244.012 7.24451 289.026 29.202C294.453 31.9764 299.709 34.568 304.805 37.5098C309.222 40.0603 313.401 42.6978 317.537 45.3199C375.755 82.6471 404.346 115.494 410.052 154.787C415.845 194.681 398.508 243.589 357.746 314.191Z"
      />
    </svg>
  );
};
