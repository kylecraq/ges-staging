'use client';
import { ComponentProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CurvedLineRightDsk = (props: ComponentProps<'svg'>) => {
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
        strokeDashoffset: length * 1.6,
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
      width={555}
      height={1029}
      viewBox="0 0 555 1029"
      fill="none"
      ref={svgRef}
      opacity={1}
      {...props}
    >
      <path
        ref={pathRef}
        stroke="#06EF00"
        strokeWidth={20}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M638.24 46.752C812.165 93.355 916.139 148.18 967.153 235.723c51.087 87.665 50.807 211.085 7.491 399.946-3.129 13.427-6.075 26.968-9.818 40.938-4.348 16.227-9.751 32.154-14.962 48.112l-.003.009-.003.008c-43.563 134.173-93.646 215.799-164.657 257.741-70.409 41.583-163.839 45.593-298.095 18.143l-3.136-.641c-29.958-6.341-61.671-13.44-95.142-22.409-33.47-8.968-64.051-18.56-93.389-28.108-132.018-43.648-211.674-94.013-252.06-165.749C2.954 711.912.448 616.195 29.376 478.094c3.674-16.327 7.177-32.783 11.535-49.048 3.751-14.001 7.796-27.394 11.748-40.416C109.687 203.436 171.103 96.395 259.1 45.997c87.868-50.324 205.213-45.849 379.14.755Z"
      />
    </svg>
  );
};
