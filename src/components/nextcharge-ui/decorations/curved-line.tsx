'use client';
import { HTMLAttributes, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CurvedLine = (props: HTMLAttributes<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
      const path = pathRef.current;

      const length = path.getTotalLength() * 2;

      gsap.to(svgRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 50%',
        },
      });

      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: pathRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          markers: true,
          scrub: true,
        },
      });
    }
  }, []);

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={175}
    height={733}
    fill="none"
    ref={svgRef}
    opacity={0}
    {...props}
  >
    <path
      ref={pathRef}
      stroke="#06EF00"
      strokeWidth={25}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M-225.41 774.246c-177.233 47.489-295.111 57.162-380.06 20.698-84.012-36.062-139.337-118.966-186.55-267.59v-.001c-3.373-10.781-6.85-21.205-9.834-32.342-3.445-12.858-5.829-25.976-8.471-39.422l-.006-.027c-22.066-111.033-14.382-188.11 29.066-247.934 43.958-60.527 126.397-106.165 261.204-148.983 29.708-9.322 61.336-18.926 95.391-28.05 34.048-9.124 65.795-16.501 96.406-23.342C-189.881-23.13-95.838-24.78-27.62 5.681 39.815 35.793 84.956 98.717 121.808 205.81c4.191 12.956 8.479 25.59 11.94 38.507 2.992 11.167 5.458 22.074 7.862 32.805 33.33 152.39 26.927 251.852-27.727 325.076C58.63 676.223-48.176 726.756-225.41 774.246Z"
    />
  </svg>;
};