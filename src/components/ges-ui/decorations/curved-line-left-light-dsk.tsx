'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as React from 'react';

export const CurvedLineLeftLightDsk = (props: ComponentProps<'svg'>) => {
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
          end: 'top center'
        },
      });

      const path = pathRef.current
      const frictionSlower = 124;
      const radius = path.r.baseVal.value
      const length = 2 * Math.PI * radius;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: radius + frictionSlower,
      });

      gsap.to(path, {
        strokeDashoffset: frictionSlower,
        ease: 'none',
        scrollTrigger: {
          trigger: path,
          start: 'top bottom',
          end: 'top 20%',
          scrub: true
        },
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
