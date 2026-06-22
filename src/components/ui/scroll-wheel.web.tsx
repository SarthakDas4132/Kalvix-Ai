import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useBreakpoint } from '../../hooks/use-breakpoint';

// ── Scroll Bar — full-height, glued to right edge of screen ──────────────────
export function ScrollWheel() {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  // ── Real-time scroll tracking via rAF loop ───────────────────────────────
  // This reads scrollY every frame so it's perfectly in sync with Lenis
  useEffect(() => {
    let lastScrollY = -1;

    const tick = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop !== lastScrollY) {
        lastScrollY = scrollTop;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(Math.min(1, Math.max(0, progress)));

        // Show bar when scrolled past 80px
        if (scrollTop > 80) {
          setIsVisible(true);

          // Reset the 3-second auto-hide timer on every scroll
          if (!isHovered) {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            hideTimerRef.current = setTimeout(() => {
              if (!isHovered) setIsVisible(false);
            }, 3000);
          }
        } else {
          // At the very top — hide immediately
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          setIsVisible(false);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isHovered]);

  // ── When hovering, cancel hide timer. When leaving, restart it ──────────
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Show bar immediately when hovered (even if hidden)
    if (window.scrollY > 80) setIsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDragging) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  // ── Scroll to position from click/drag on track ─────────────────────────
  const scrollToRatio = useCallback((ratio: number, immediate = false) => {
    const clamped = Math.min(1, Math.max(0, ratio));
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = clamped * docHeight;
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(targetScroll, { immediate });
    } else {
      window.scrollTo({ top: targetScroll, behavior: immediate ? 'auto' : 'smooth' });
    }
  }, []);

  const getRatioFromEvent = (e: React.MouseEvent | MouseEvent) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    return (e.clientY - rect.top) / rect.height;
  };

  // ── Click track ──────────────────────────────────────────────────────────
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    scrollToRatio(getRatioFromEvent(e), false);
  };

  // ── Drag thumb ───────────────────────────────────────────────────────────
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    // Cancel hide timer while dragging
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    const onMove = (ev: MouseEvent) => {
      scrollToRatio(getRatioFromEvent(ev), true);
    };
    const onUp = () => {
      setIsDragging(false);
      setIsHovered(false);
      // Restart hide timer 3s after drag ends
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // ── Thumb geometry ───────────────────────────────────────────────────────
  const viewportRatio =
    typeof window !== 'undefined'
      ? window.innerHeight / document.documentElement.scrollHeight
      : 0.2;
  const thumbHeightPercent = Math.max(5, viewportRatio * 100);
  const thumbTopPercent = scrollProgress * (100 - thumbHeightPercent);

  if (isMobile || isTablet) return null;

  return (
    <>
      {/* ── Invisible hover trigger zone — always active on right edge ── */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100vh',
          width: '32px', // wider trigger zone so it's easy to hit
          zIndex: 9998,
          pointerEvents: window.scrollY > 80 ? 'auto' : 'none',
          cursor: 'default',
        }}
      />

      {/* ── Visible scrollbar ── */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100vh',
          width: isHovered || isDragging ? '14px' : '8px',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.35s ease, width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          pointerEvents: 'auto', // always on so hover works even when faded
          cursor: 'default',
        }}
      >
      {/* ── Track ── */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor:
            isHovered || isDragging
              ? 'rgba(250, 245, 230, 0.97)'
              : 'rgba(250, 245, 230, 0.55)',
          borderLeft: `1.5px solid ${
            isHovered || isDragging
              ? 'var(--color-dark)'
              : 'rgba(24,26,18,0.25)'
          }`,
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(24, 26, 18, 0.22) 1.5px, transparent 1.5px)',
            backgroundSize: '5px 5px',
            pointerEvents: 'none',
          }}
        />

        {/* Progress fill */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: `${scrollProgress * 100}%`,
            background:
              'linear-gradient(to bottom, var(--color-pink), var(--color-yellow))',
            opacity: 0.32,
            pointerEvents: 'none',
            // No transition — follows scroll in real-time
          }}
        />

        {/* ── Thumb ── */}
        <div
          onMouseDown={handleThumbMouseDown}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            left: '2px',
            right: '2px',
            // No transition on top so it moves with scroll frame-by-frame
            top: `${thumbTopPercent}%`,
            height: `${thumbHeightPercent}%`,
            backgroundColor: isDragging
              ? 'var(--color-pink)'
              : 'var(--color-dark)',
            borderRadius: '4px',
            cursor: 'default',
            transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
            boxShadow: isDragging
              ? '0 3px 12px rgba(0,0,0,0.35)'
              : '0 1px 4px rgba(0,0,0,0.2)',
          }}
        />
      </div>
      </div>
    </>
  );
}
