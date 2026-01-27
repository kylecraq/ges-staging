'use client';
import * as React from 'react';
import { ComponentProps, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { getTotalCirclePath } from '@/lib/utils';

export const CurvedLineLeftLightDsk = (props: ComponentProps<'svg'>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (pathRef.current && svgRef.current) {
      const svg = svgRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
          end: 'top center',
        },
      });

      tl.to(svg, {
        opacity: 1,
      });

      const path = pathRef.current;
      const frictionSlower = 124;
      const length = getTotalCirclePath(path);

      const tlPath = gsap.timeline({
        scrollTrigger: {
          trigger: path,
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
        strokeDashoffset: frictionSlower,
        ease: 'none',
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width={446}
      height={582.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-0"
      {...props}
    >
      <circle
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={pathRef}
        cx="-226.5"
        cy="645.5"
        r="582.5"
        stroke="#D9EFD8"
        strokeWidth={116}
      />
    </svg>
  );
};
