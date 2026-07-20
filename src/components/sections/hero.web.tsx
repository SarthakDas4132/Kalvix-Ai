import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { TextReveal } from '../ui/text-reveal.web';

// Rotating words for the sub-headline typewriter effect
const ROTATING_WORDS = ['Campaigns', 'Creators', 'Analytics', 'Contracts', 'Payments', 'Ads'];

// ── Floating sticker badge with spring pop-in ──────────────────────────────
function StickerBadge({
  label,
  color,
  shape,
  delay,
  style,
  scale = 1,
}: {
  label: string;
  color: string;
  shape: 'blob' | 'flower' | 'star';
  delay: number;
  style?: React.CSSProperties;
  scale?: number;
}) {
  const getBorderRadius = () => {
    if (shape === 'blob') return '60% 40% 55% 45% / 45% 55% 45% 55%';
    if (shape === 'flower') return '50% 50% 50% 50% / 30% 70% 30% 70%';
    return '40% 60% 40% 60% / 60% 40% 60% 40%';
  };

  return (
    <motion.div
      animate={{
        y: [0, -5 * scale, 0, -3 * scale, 0],
        rotate: [0, 2, -2, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay + 0.5,
      }}
      style={{
        position: 'absolute',
        zIndex: 3,
        ...style,
      }}
    >
      <motion.div
        // Entrance: spring pop-in from scale 0 → target scale with slight rotation
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale, rotate: 0, opacity: 1 }}
        transition={{
          delay,
          type: 'spring',
          stiffness: 380,
          damping: 18,
        }}
        style={{
          backgroundColor: color,
          border: '2px solid var(--color-dark)',
          borderRadius: getBorderRadius(),
          padding: '8px 18px',
          fontFamily: 'var(--font-satoshi), sans-serif',
          fontWeight: 900,
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0px',
          color: 'var(--color-dark)',
          boxShadow: '2px 2px 0 0 var(--color-dark)',
          whiteSpace: 'nowrap',
          transformOrigin: style?.transformOrigin || 'center center',
        }}
      >
        <span style={{ display: 'inline-block' }}>{label}</span>
      </motion.div>
    </motion.div>
  );
}

// ── Clip reveal: text rises from behind a mask ────────────────────────────
const clipReveal = {
  hidden: { y: '105%', opacity: 0 },
  visible: (delay: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Standard fade+slide up
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const { isMobile, isTablet } = useBreakpoint();

  // Typewriter animation (starts after entrance delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = ROTATING_WORDS[wordIdx];
      let timeout: ReturnType<typeof setTimeout>;

      const tick = () => {
        setDisplayed((prev) => {
          if (typing) {
            if (prev.length < currentWord.length) {
              timeout = setTimeout(tick, 80);
              return currentWord.slice(0, prev.length + 1);
            } else {
              timeout = setTimeout(() => {
                setTyping(false);
              }, 1600);
              return prev;
            }
          } else {
            if (prev.length > 0) {
              timeout = setTimeout(tick, 45);
              return prev.slice(0, -1);
            } else {
              setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
              setTyping(true);
              return prev;
            }
          }
        });
      };
      tick();

      return () => clearTimeout(timeout);
    }, 100);
    return () => clearTimeout(timer);
  }, [wordIdx, typing]);

  // Scroll-driven 3D tilt for product preview
  const { scrollY } = useScroll();
  const archY = useTransform(scrollY, [0, 600], [0, 60]);
  const rotateX = useTransform(scrollY, [0, 600], [14, 0]);
  const scale = useTransform(scrollY, [0, 600], [0.94, 1]);

  const handleScrollToQuote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('footer-contact');
    if (el) {
      if ((window as any).lenis) (window as any).lenis.scrollTo(el, { offset: -90 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      if ((window as any).lenis) (window as any).lenis.scrollTo(el, { offset: -90 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: isMobile ? '80px' : '110px',
        paddingBottom: '0',
        backgroundColor: 'var(--bg-cream)',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >

      {/* ── Animated concentric ring background (Deactivated) ── */}
      {false && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1100px',
            height: '1100px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {[0, 80, 160, 240, 320, 400, 480, 560].map((inset, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: `${inset}px`,
                borderRadius: '50%',
                border: '1.5px solid',
                borderColor:
                  i < 4
                    ? `rgba(224, 142, 216, ${0.3 - i * 0.05})`
                    : `rgba(200, 180, 240, ${0.2 - (i - 4) * 0.03})`,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          marginTop: isMobile ? '40px' : '70px',
        }}
      >


        {/* ── 1. Eyebrow pill — clips up first ── */}
        <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
          <motion.div
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--color-yellow)',
                border: '2px solid var(--color-dark)',
                borderRadius: '999px',
                padding: isMobile ? '4px 12px' : '6px 20px',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                fontSize: isMobile ? '12px' : '14px',
                textTransform: 'uppercase',
                letterSpacing: '0px',
                boxShadow: isMobile ? '2.5px 2.5px 0 0 var(--color-dark)' : '4px 4px 0 0 var(--color-dark)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-dark)',
                  display: 'inline-block',
                }}
              />
              All-in-One Marketing & Creators Platform
            </span>
          </motion.div>
        </div>

        {/* ── 2. Giant brand name + stickers ── */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '28px',
            overflow: 'visible',
          }}
        >
          {/* Clip mask for text rise */}
          <TextReveal
            as="h1"
            delay={100}
            stagger={25}
            style={{
              fontSize: isMobile ? '48px' : isTablet ? '84px' : 'min(15vw, 180px)',
              fontWeight: 900,
              fontFamily: 'var(--font-satoshi), sans-serif',
              color: 'var(--color-dark)',
              lineHeight: 0.88,
              letterSpacing: isMobile ? '-2px' : isTablet ? '-4px' : '-6px',
              textTransform: 'uppercase',
              margin: 0,
              display: 'block',
              textAlign: 'center',
              userSelect: 'none',
            }}
          >
            Kalvix.ai
          </TextReveal>

          {/* Sticker 1 — left (AI-Powered) — pops in at 0.55s */}
          {!isMobile && !isTablet && (
            <StickerBadge
              label="AI-Powered"
              color="var(--color-green)"
              shape="flower"
              delay={0.55}
              style={{ top: '50%', left: '-145px', transform: 'translateY(-50%) rotate(-8deg)' }}
            />
          )}

          {/* Sticker 2 — top center (Multi-Platform) — pops in at 0.72s */}
          {!isMobile && !isTablet && (
            <StickerBadge
              label="Multi-Platform"
              color="var(--color-pink)"
              shape="blob"
              delay={0.72}
              style={{ top: '-14px', left: '36%', transform: 'rotate(5deg)' }}
            />
          )}

          {/* Sticker 3 — right (Smart CRM) — pops in at 0.9s */}
          {!isMobile && !isTablet && (
            <StickerBadge
              label="Smart CRM"
              color="var(--color-purple)"
              shape="star"
              delay={0.9}
              style={{ top: '55%', right: '-130px', transform: 'translateY(-50%) rotate(6deg)' }}
            />
          )}
        </div>

        {/* ── 3. Sub-headline ── */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.38}
          style={{
            fontFamily: 'var(--font-satoshi), sans-serif',
            fontSize: isMobile ? '20px' : isTablet ? '28px' : '38px',
            fontWeight: 900,
            color: 'var(--color-dark)',
            textTransform: 'none',
            maxWidth: '760px',
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
           Create. Advertise. Sell. Scale. Connect {' '}
          <span
            style={{
              color: 'var(--color-dark)',
              backgroundColor: 'var(--color-yellow)',
              paddingLeft: '8px',
              paddingRight: '8px',
              borderRadius: '8px',
              display: 'inline-block',
              width: isMobile ? '160px' : isTablet ? '220px' : '290px',
              textAlign: 'left',
              borderBottom: '3px solid var(--color-dark)',
              fontStyle: 'italic',
            }}
          >
            {displayed}
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '0.85em',
                backgroundColor: 'var(--color-dark)',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </span>
        </motion.h2>

        {/* ── 4. Body copy ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
            fontWeight: 500,
            color: 'var(--color-dark)',
            opacity: 0.65,
            maxWidth: '560px',
            lineHeight: 1.6,
            marginBottom: isMobile ? '24px' : '40px',
            textAlign: 'center',
          }}
        >
          Generate content, publish everywhere, launch ads, capture leads, automate follow-ups, manage sales and collaborate with creators - all from one AI-powered platform.
        </motion.p>

        {/* ── 5. CTA Buttons ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.62}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '320px' : 'none',
            marginBottom: isMobile ? '40px' : '64px',
          }}
        >
          <button
            onClick={handleScrollToQuote}
            className="neo-btn"
            style={{
              fontSize: isMobile ? '16px' : '18px',
              padding: isMobile ? '12px 28px' : '16px 36px',
              width: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            Get Early Access
          </button>
          <button
            onClick={handleScrollToFeatures}
            style={{
              fontFamily: 'var(--font-oswald)',
              fontWeight: 700,
              textTransform: 'uppercase',
              fontSize: isMobile ? '16px' : '18px',
              letterSpacing: '0.5px',
              background: 'transparent',
              border: '2px solid var(--color-dark)',
              borderRadius: '999px',
              padding: isMobile ? '12px 28px' : '16px 36px',
              cursor: 'pointer',
              color: 'var(--color-dark)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(24,26,18,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            See Features
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </motion.div>

      </div>

      {/* ── Pink Radial Video Wrapper (Deactivated) ── */}
      {false && (
        <div style={{
          width: '100%',
          position: 'relative',
          paddingTop: isMobile ? '40px' : '100px',
          paddingBottom: isMobile ? '60px' : '100px',
          overflow: 'hidden',
          marginTop: '20px',
        }}>
          {/* Background Layer with fade mask */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-radial-gradient(circle at center, #f8e8c1 0px, #fef8e7 12px, #eea0d9 13px, #f6cde0 24px, #f8e8c1 25px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, black 100%)',
            zIndex: 0,
          }} />

          {/* Circular Video Placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.78}
            style={{
              width: isMobile ? '280px' : isTablet ? '400px' : '520px',
              height: isMobile ? '280px' : isTablet ? '400px' : '520px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-white-pure)',
              border: 'var(--border-width) solid var(--color-dark)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isMobile ? '6px 6px 0 0 var(--color-dark)' : '12px 12px 0 0 var(--color-dark)',
              margin: '0 auto',
              zIndex: 2,
            }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-dark)', opacity: 0.8, zIndex: 1 }} />

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <div style={{
                width: isMobile ? '60px' : '80px', height: isMobile ? '60px' : '80px', borderRadius: '50%', backgroundColor: 'var(--color-pink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'var(--border-width) solid var(--color-dark)'
              }}>
                <svg viewBox="0 0 24 24" width={isMobile ? "24" : "32"} height={isMobile ? "24" : "32"} fill="var(--color-dark)">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '14px' : '18px', fontWeight: 900, color: 'var(--bg-cream)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Watch Reel
              </span>
            </div>
          </motion.div>

          {/* Scallop divider */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 10 }}>
            <div className="scallop-divider-large-up" />
          </div>
        </div>
      )}
    </section>
  );
}
