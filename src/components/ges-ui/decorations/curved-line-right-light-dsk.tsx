'use client';
import { ComponentProps, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { getTotalCirclePath } from '@/lib/utils';
import { gsap } from '@/lib/gsap';

export const CurvedLineRightLightDsk = (props: ComponentProps<'svg'>) => {
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
      const frictionSlower = 2000;
      const length = getTotalCirclePath(path);

      const tlPath = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: 'top 140%',
          end: 'top top',
          scrub: true,
        },
      });

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length / 2 + frictionSlower,
      });

      tlPath.to(path, {
        strokeDashoffset: length * 2 - frictionSlower,
        ease: 'none',
      });
    }
  }, []);

  return (
    <svg
      width="446"
      height="528"
      viewBox="0 0 446 528"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      className="opacity-0"
      {...props}
    >
      <circle
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="672.5"
        cy="623.5"
        r="582.5"
        stroke="#D9EFD8"
        strokeWidth="116"
        ref={pathRef}
      />
    </svg>
  );
};
