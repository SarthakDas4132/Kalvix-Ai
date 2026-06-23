import { useState, useEffect } from 'react';

function getBreakpoint() {
  if (typeof window === 'undefined') {
    // SSR: default to desktop
    return { isMobile: false, isTablet: false, isDesktop: true };
  }
  const width = window.innerWidth;
  return {
    isMobile: width <= 639,
    isTablet: width >= 640 && width <= 1023,
    isDesktop: width >= 1024,
  };
}

export function useBreakpoint() {
  // Initialize directly from window so the very first render uses the correct values
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setBreakpoint(getBreakpoint());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
