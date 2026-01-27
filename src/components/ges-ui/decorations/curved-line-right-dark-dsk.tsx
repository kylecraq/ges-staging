'use client';
import { ComponentProps, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { getTotalCirclePath } from '@/lib/utils';

export const CurvedLineRightDarkDsk = (props: ComponentProps<'svg'>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (pathRef.current && svgRef.current) {
      const svg = svgRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
        },
      });
      tl.to(svg, {
        opacity: 1,
      });

      const path = pathRef.current;
      const length = getTotalCirclePath(path);

      const frictionSlower = 2400;

      const tlPath = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: 'top 130%',
          end: 'top 10%',
          scrub: true,
        },
      });

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length / 2 + frictionSlower,
      });

      tlPath.to(path, {
        //200 need to be rounded at the end
        strokeDashoffset: length * 2 - (frictionSlower + 200),
        ease: 'none',
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
      className="opacity-0"
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
