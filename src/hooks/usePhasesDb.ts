import { useMemo } from 'react';

export type Phase = {
  id: number;
  imageInfo: {
    url: string,
    alt: string
  }
  buttonInfo: {
    text?: string;
    position: string;
  };
};
export const usePhasesDb = () => {
  const phases: Phase[] = useMemo(
    () => [
      {
        id: 1,
        imageInfo: {
          url: '/onboarding/app-onboarding-01.png',
          alt: 'First'
        },
        buttonInfo: {
          text: 'Start',
          position: 'inset-0',
        },
      },
      {
        id: 2,
        imageInfo: {
          url: '/onboarding/app-onboarding-02.png',
          alt: 'Second'
        },
        buttonInfo: {
          position: 'bottom-[22%] left-1/2 -translate-x-1/2',
        },
      },
      {
        id: 3,
        imageInfo: {
          url: '/onboarding/app-onboarding-03.png',
          alt: 'Third'
        },
        buttonInfo: {
          position: 'bottom-[22%] right-[26%] md:right-[28%]',
        },
      },
      {
        id: 4,
        imageInfo: {
          url: '/onboarding/app-onboarding-04.png',
          alt: 'Fourth'
        },
        buttonInfo: {
          position: 'bottom-[12%] right-[20%]',
        },
      },
      {
        id: 5,
        imageInfo: {
          url: '/onboarding/app-onboarding-05.png',
          alt: 'Fifth'
        },
        buttonInfo: {
          position: 'bottom-[14%] md:bottom-[16%] right-[16%]',
        },
      },
      {
        id: 6,
        imageInfo: {
          url: '/onboarding/app-onboarding-06.png',
          alt: 'Last'
        },
        buttonInfo: {
          text: 'Restart',
          position: 'inset-0',
        },
      },
    ],
    []
  );
  return phases;
};
