import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop for SSR / initial render
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      const width = window.innerWidth;
      setBreakpoint({
        isMobile: width <= 639,
        isTablet: width >= 640 && width <= 1023,
        isDesktop: width >= 1024,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
