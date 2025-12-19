'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CurvedLineRightLightDsk = (props: ComponentProps<'svg'>) => {
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
      const frictionSlower = 2000;
      const radius = path.r.baseVal.value;
      const length = 2 * Math.PI * radius;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length + frictionSlower / 2,
      });

      gsap.to(path, {
        strokeDashoffset: length * 2 - frictionSlower,
        ease: 'none',
        scrollTrigger: {
          trigger: svg,
          start: 'top 90%',
          end: 'top -20%',
          scrub: true,
        },
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
