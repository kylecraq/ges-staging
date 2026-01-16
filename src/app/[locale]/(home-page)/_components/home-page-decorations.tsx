'use client';
import { CurvedLineLeftLightDsk } from '@/components/ges-ui/decorations/curved-line-left-light-dsk';
import { CurvedLineRightDarkDsk } from '@/components/ges-ui/decorations/curved-line-right-dark-dsk';
import { CurvedLineRightLightDsk } from '@/components/ges-ui/decorations/curved-line-right-light-dsk';
import { CurvedLineLeftLightMbl } from '@/components/ges-ui/decorations/curved-line-left-light-mbl';

export const HomePageDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full overflow-x-clip">
      {/*---MOBILE---*/}
      {/*FEATURES*/}
      <span className="absolute top-[56%] md:hidden">
        <CurvedLineLeftLightMbl />
      </span>
      {/*FAQ*/}
      <span className="absolute top-[92%] scale-125 md:hidden">
        <CurvedLineLeftLightMbl />
      </span>
      {/*FAQ*/}
      <span className="absolute top-[96%] -right-28 scale-75 md:hidden">
        <CurvedLineRightDarkDsk />
      </span>

      {/*---TABLET/DESKTOP---*/}
      {/*FEATURES*/}
      <span className="absolute top-[51.5%] right-14 hidden scale-125 md:inline lg:top-[61%] xl:top-[64%]">
        <CurvedLineRightLightDsk />
      </span>
      {/*FAQ*/}
      <span className="absolute top-[92%] -left-20 hidden md:inline lg:top-[91%] lg:left-0">
        <CurvedLineLeftLightDsk />
      </span>
      {/*FAQ*/}
      <span className="absolute -right-10 hidden md:top-[95%] md:inline lg:top-[94%] lg:right-0">
        <CurvedLineRightDarkDsk />
      </span>
    </div>
  );
};
