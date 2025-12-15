'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const CurvedLineLeftMbl = (props: ComponentProps<'svg'>) => {
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
          invalidateOnRefresh: true
        },
      });

      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'slow',
        scrollTrigger: {
          trigger: svg,
          start: 'top 40%',
          scrub: true,
          invalidateOnRefresh: true
        },
      });
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={110}
      height={321}
      fill="none"
      ref={svgRef}
      opacity={0}
      {...props}
    >
      <path
        ref={pathRef}
        stroke="#06EF00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        d="M-131.266 7.2064C-88.0099-15.15-58.5842-20.6439-33.468-10.6298-7.7876-.3906 15.6859 26.853 44.475 76.7172 73.264 126.581 85.1404 160.565 81.1789 187.95 77.304 214.737 57.8333 237.491 16.8102 263.748 13.756 265.684 10.998 267.507 7.9585 269.262 4.4747 271.273.8382 272.992-3.0901 274.918L-3.0982 274.921-3.105 274.925C-34.6177 290.459-57.4735 293.907-77.7648 286.123-98.5445 278.15-118.551 257.735-142.417 220.446-147.642 212.22-153.089 203.466-158.582 193.952-164.074 184.44-168.86 175.47-173.409 166.767L-173.408 166.768C-193.804 127.392-201.451 99.9086-197.951 77.9621-194.533 56.5347-180.123 38.4849-151.002 18.8417-147.358 16.482-143.991 14.232-140.46 12.1934-137.384 10.4176-134.333 8.813-131.266 7.2078Z"
      />
    </svg>
  );
};
