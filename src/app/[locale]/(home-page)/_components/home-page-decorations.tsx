import { CurvedLeftLinesDsk, CurvedRightLineDsk } from '@/components/nextcharge-ui/decorations/curved-lines-dsk';

export const HomePageDecorations = () => {
  return (
    <div className="absolute inset-0 h-full pointer-events-none">
      <span className="absolute top-[13%]">
        <CurvedLeftLinesDsk />
      </span>
      <span className="absolute top-[35%]">
        <CurvedLeftLinesDsk />
      </span>
      <span className="absolute top-[55%] right-0 -z-10">
        <CurvedRightLineDsk />
      </span>
    </div>
  );
};
