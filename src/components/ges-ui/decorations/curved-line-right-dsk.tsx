'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CurvedLineRightDsk = (props: ComponentProps<'svg'>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (pathRef.current && svgRef.current) {
      const svg = svgRef.current;
      gsap.to(svg, {
        opacity: 1,
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
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
        ease: 'none',
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
          scrub: true
        },
      });
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      width="582"
      height="767.5"
      viewBox="0 0 582 641"
      fill="none"
      {...props}
    >
      <circle
        ref={pathRef}
        cx="894.5"
        cy="843.5"
        r="767.5"
        stroke="#124C37"
        strokeWidth="156"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-elem-2"
      />
    </svg>
  );
};
