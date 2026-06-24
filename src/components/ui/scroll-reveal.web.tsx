import React, { useEffect, useRef, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // ms delay for stagger
  className?: string;
  style?: CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Matches the agenius.framer.website slide-up text reveal style.
 * Animates once when the element first enters the viewport.
 */
export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  style = {},
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el); // Only animate once
        }
      },
      {
        threshold: 0.12, // Trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px', // Slight bottom offset
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = Tag as any;

  return (
    <Comp
      ref={ref}
      className={`reveal ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        ...style,
      } as CSSProperties}
    >
      {children}
    </Comp>
  );
}
