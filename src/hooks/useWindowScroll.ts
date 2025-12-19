import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 5;

export const useWindowScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(
    null
  );
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScroll = () => {
      const scrollY = window.pageYOffset;

      setIsAtTop(scrollY <= 0);

      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > SCROLL_THRESHOLD
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [scrollDirection]);

  return { scrollDirection, isAtTop };
};
