'use client';
import { HTMLAttributes, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CurvedLeftLinesDsk = (props: HTMLAttributes<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
      gsap.to(svgRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 50%',
        },
      });

      const path = pathRef.current;
      const length = path.getTotalLength() * 2;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: pathRef.current,
          start: 'top 80%',
          markers: false,
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <svg
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
    </svg>
  );
};
export const CurvedRightLineDsk = (props: HTMLAttributes<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
      gsap.to(svgRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 50%',
        },
      });

      const path = pathRef.current;
      const length = path.getTotalLength() * 2;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: 0
      });
      gsap.to(path, {
        strokeDashoffset: length,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        },
      });
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={555}
      height={1029}
      fill="none"
      ref={svgRef}
      opacity={0}
      {...props}
    >
      <path
        // ref={pathRef}
        strokeDasharray={3000}
        strokeDashoffset={1000}
        stroke="#06EF00"
        strokeWidth={20}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M638.24 46.752C812.165 93.355 916.139 148.18 967.153 235.723c51.087 87.665 50.807 211.085 7.491 399.946-3.129 13.427-6.075 26.968-9.818 40.938-4.348 16.227-9.751 32.154-14.962 48.112l-.003.009-.003.008c-43.563 134.173-93.646 215.799-164.657 257.741-70.409 41.583-163.839 45.593-298.095 18.143l-3.136-.641c-29.958-6.341-61.671-13.44-95.142-22.409-33.47-8.968-64.051-18.56-93.389-28.108-132.018-43.648-211.674-94.013-252.06-165.749C2.954 711.912.448 616.195 29.376 478.094c3.674-16.327 7.177-32.783 11.535-49.048 3.751-14.001 7.796-27.394 11.748-40.416C109.687 203.436 171.103 96.395 259.1 45.997c87.868-50.324 205.213-45.849 379.14.755Z"
      />
    </svg>
  );
};
