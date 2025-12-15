import { cn } from '@/lib/utils';
import { OnBoardingButton } from '@/app/[locale]/(home-page)/_components/onboarding/OnboardingButton';
import { useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePhasesDb } from '@/hooks/usePhasesDb';

export const OnboardingImageAndButton = () => {
  const phases = usePhasesDb();

  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const onBoardingImg = useRef<HTMLImageElement>(null);

  const [activePhase, setActivePhase] = useState(0);

  const { imageData, buttonData } = useMemo(() => {
    const imageData = phases[activePhase].imageInfo;
    const buttonData = phases[activePhase].buttonInfo;
    return {
      imageData,
      buttonData,
    };
  }, [activePhase]);
  const handlePhaseChange = (index: number) => {
    const isLastPhase = index === phases.length - 1;

    if (onBoardingImg.current) gsap.killTweensOf(onBoardingImg.current);
    if (buttonWrapperRef.current) gsap.killTweensOf(buttonWrapperRef.current);

    if (isLastPhase && buttonWrapperRef.current && onBoardingImg.current) {
      gsap.fromTo(
        onBoardingImg.current,
        { filter: 'blur(0px)' },
        { filter: 'blur(2px)', duration: 1.5, delay: 1.5, ease: 'sine.inOut' }
      );
      gsap.fromTo(
        buttonWrapperRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1.5, delay: 1.5, ease: 'sine.inOut' }
      );
    } else {
      if (onBoardingImg.current) {
        gsap.to(onBoardingImg.current, {
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'none',
        });
      }
      if (buttonWrapperRef.current) {
        gsap.to(buttonWrapperRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: 'none',
        });
      }
    }
    setActivePhase(index);
  };

  return (
    <div className="relative w-fit">
      <img
        ref={onBoardingImg}
        src={imageData.url}
        alt={imageData.alt}
        className="aspect-[390/805] max-w-[300px] object-cover object-center lg:max-w-[375px] xl:max-w-[390px]"
      />
      <div
        className={cn(
          buttonData.position,
          'absolute z-10 flex items-center justify-center'
        )}
      >
        <div className="relative z-10 mx-auto" ref={buttonWrapperRef}>
          <OnBoardingButton
            onClick={() => {
              if (activePhase + 1 >= phases.length) {
                handlePhaseChange(0);
                return;
              }
              handlePhaseChange(activePhase + 1);
            }}
            label={buttonData?.text || ''}
          />
        </div>
      </div>
    </div>
  );
};
