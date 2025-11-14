import Image from 'next/image';

export const Hero = () => {
  return (
    <header className="min-h-screen">
      <div className="relative aspect-[460/327]">
        <Image
          src="/hero/next-charge-hero.png"
          alt="Next charge hero"
          fill={true}
          objectFit="cover"
        />
      </div>
    </header>
  );
};
