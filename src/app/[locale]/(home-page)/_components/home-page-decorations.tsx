'use client';
import { BlobSquare } from '@/components/ges-ui/decorations/blob-square';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import { CurvedLineLeftDsk } from '@/components/ges-ui/decorations/curved-line-left-dsk';
import { CurvedLineRightDsk } from '@/components/ges-ui/decorations/curved-line-right-dsk';
import { CurvedLineLeftMbl } from '@/components/ges-ui/decorations/curved-line-left-mbl';
import { CurvedLineRightMbl } from '@/components/ges-ui/decorations/curved-line-right-mbl';

export const HomePageDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full">
      {/*---MOBILE---*/}
      {/*HERO*/}
      <span className="absolute top-[6%] md:hidden">
        <CurvedLineLeftMbl />
      </span>
      {/*MAP*/}
      <span className="absolute top-[54%] md:hidden">
        <CurvedLineLeftMbl />
      </span>

      {/*FEATURE*/}
      <span className="absolute top-[68%] md:hidden right-0">
        <CurvedLineRightMbl />
      </span>

      {/*---DESKTOP---*/}
      {/*HERO*/}
      <span className="absolute hidden md:inline lg:top-[64%]">
        <CurvedLineLeftDsk />
      </span>
      {/*MAP*/}
      <span className="absolute top-[90%] hidden md:inline">
        <CurvedLineLeftDsk />
      </span>
      {/*FEATURE*/}
      <span className="absolute md:top-[70%] lg:top-[92%] right-0">
        <CurvedLineRightDsk className="hidden md:inline" />
      </span>
    </div>
  );
};
