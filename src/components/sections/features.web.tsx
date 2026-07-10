import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { TextReveal } from '../ui/text-reveal.web';

// ── Platform cards with inline SVG icons ───────────────────────────────────
const PLATFORM_CARDS = [
  {
    name: 'Instagram',
    bg: '#fce4ec',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect x="5" y="5" width="30" height="30" rx="9" fill="#e91e8c" />
        <circle cx="20" cy="20" r="7" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="29" cy="11" r="2.2" fill="white" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    bg: '#e8f5e9',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#010101" />
        <path d="M28 11a6 6 0 01-6-6h-4v18a3 3 0 11-3-3v-4a7 7 0 107 7V18a10 10 0 006 2v-4a6 6 0 01-3-1v-4h-3z" fill="white" />
        <path d="M22 5a6 6 0 006 6v4a10 10 0 01-6-2v9a7 7 0 11-7-7v4a3 3 0 103 3V5h4z" fill="#fe2c55" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    bg: '#fff3e0',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#ff0000" />
        <path d="M32 14s-.3-2.4-1.4-3.4c-1.3-1.4-2.8-1.4-3.5-1.5C23.6 9 18 9 18 9s-5.6 0-9.1.1c-.7.1-2.2.1-3.5 1.5C4.3 11.6 4 14 4 14S3.7 16.7 3.7 19.5v2.5c0 2.7.3 5.5.3 5.5s.3 2.4 1.4 3.4c1.3 1.4 3.1 1.3 3.9 1.5 2.8.3 12 .3 12 .3s5.6 0 9.1-.2c.7-.1 2.2-.1 3.5-1.5 1.1-1 1.4-3.4 1.4-3.4s.3-2.7.3-5.5v-2.5c0-2.7-.3-5.5-.3-5.5zM16 24V14l9 5-9 5z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    bg: '#e3f2fd',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#0a66c2" />
        <path d="M12 16h4v12h-4V16zM14 14.5a2 2 0 110-4 2 2 0 010 4zM18 16h3.8v1.7h.1A4.2 4.2 0 0126 16c3.9 0 4.6 2.6 4.6 6v7h-4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.6-2.3 3.1V29H18V16z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    bg: '#fce4f0',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#000000" />
        <path d="M22.5 18.5L30 10h-2l-6.6 7.7L16.5 10H10l8 11.5L10 30h2l7-8.2 5.6 8.2H32l-9.5-11.5zm-2.5 2.9l-.8-1.1-6.3-9h2.7l5 7.2.8 1.1 6.6 9.4h-2.7l-5.3-7.6z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Meta Ads',
    bg: '#e8eaf6',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#0165e1" />
        <path d="M20 10C14.5 10 10 14.5 10 20s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1 14.5v-9l7.5 4.5-7.5 4.5z" fill="white"/>
        <circle cx="20" cy="20" r="6" fill="none" stroke="white" strokeWidth="1.5"/>
        <path d="M17 20c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Google Ads',
    bg: '#fffde7',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="white" />
        <path d="M20 10a10 10 0 100 20A10 10 0 0020 10z" fill="#4285f4"/>
        <path d="M20 13a7 7 0 017 7h-7v-7z" fill="#ea4335"/>
        <path d="M13 20a7 7 0 017-7v7H13z" fill="#fbbc05"/>
        <path d="M20 27a7 7 0 01-7-7h7v7z" fill="#34a853"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    bg: '#fce4ec',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#e60023"/>
        <path d="M20 8C13.4 8 8 13.4 8 20c0 5.1 3.1 9.4 7.6 11.2-.1-1-.2-2.5.1-3.6.2-.9 1.6-6.7 1.6-6.7s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.7.9 1.7 1.9 0 1.2-.7 2.9-1.1 4.5-.3 1.3.7 2.4 2 2.4 2.3 0 4.1-2.5 4.1-6 0-3.2-2.3-5.4-5.5-5.4-3.8 0-6 2.8-6 5.7 0 1.1.4 2.3 1 3 .1.1.1.2.1.4l-.4 1.5c-.1.3-.3.4-.5.3-1.8-.8-2.9-3.4-2.9-5.5 0-4.5 3.3-8.6 9.4-8.6 5 0 8.8 3.5 8.8 8.2 0 4.9-3.1 8.8-7.3 8.8-1.4 0-2.8-.7-3.2-1.6l-.9 3.3c-.3 1.2-1.2 2.7-1.8 3.6.4.1.9.2 1.4.2C26.6 32 32 26.6 32 20S26.6 8 20 8z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    bg: '#fffde7',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#fffc00"/>
        <path d="M20 8c-3.7 0-6.7 3-6.7 6.7v1.3c-.7.3-1.3.5-2 .5-.3 0-.6 0-.9-.1 0 1 .6 1.9 1.5 2.4-.3 1.1-.8 2-1.7 2.5.6.4 1.2.7 1.9.8-.4.8-.5 1.1-1.2 1.2 1.2.7 2.6 1.1 4 1.1.7.6 1.5 1 2.3 1.1l.8 1.5h2l.8-1.5c.8-.1 1.6-.5 2.3-1.1 1.4 0 2.8-.4 4-1.1-.7-.1-.8-.4-1.2-1.2.7-.1 1.3-.4 1.9-.8-.9-.5-1.4-1.4-1.7-2.5.9-.5 1.5-1.4 1.5-2.4-.3.1-.6.1-.9.1-.7 0-1.3-.2-2-.5v-1.3C26.7 11 23.7 8 20 8z" fill="#181a12"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    bg: '#e3f2fd',
    icon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#1877f2"/>
        <path d="M28 20h-4v-3c0-1.1.9-2 2-2h2v-4h-2c-3.3 0-6 2.7-6 6v3h-4v4h4v12h4V24h4l1-4z" fill="white"/>
      </svg>
    ),
  },
];

// ── Stats data ──────────────────────────────────────────────────────────────
const STATS = [
  { num: '50K+', label: 'Creators Indexed' },
  { num: '15+',   label: 'Platforms Integrated' },
  { num: '3×',   label: 'Faster Campaign launches' },
  { num: '40%',  label: 'higher team productivity' },
];

function parseStatValue(numStr: string) {
  const match = numStr.match(/^([\d.]+)(.*)$/);
  if (match) {
    return {
      value: parseFloat(match[1]),
      suffix: match[2],
    };
  }
  return { value: 0, suffix: numStr };
}

function AnimatedStatNumber({ valueStr }: { valueStr: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as any, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  const [trigger, setTrigger] = useState(0);
  const { value, suffix } = parseStatValue(valueStr);

  useEffect(() => {
    if (isInView) {
      let timeoutId: any;
      const controls = animate(0, value, {
        duration: 2.2,
        ease: 'easeOut', // smooth deceleration towards the end
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest).toString());
        },
        onComplete: () => {
          timeoutId = setTimeout(() => {
            setDisplayValue('0');
            setTrigger((prev) => prev + 1);
          }, 4000); // 4-second timeout before starting the next loop
        },
      });
      return () => {
        controls.stop();
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [isInView, value, trigger]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}


// ── Platform card — larger, rollercoaster-style ───────────────────────────
function PlatformCard({
  name,
  bg,
  icon,
}: {
  name: string;
  bg: string;
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: isMobile ? '64px' : '140px',
        height: isMobile ? '50px' : '108px',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      {/* Card body */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: bg,
          borderRadius: isMobile ? '12px' : '26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 12px 40px rgba(0,0,0,0.18)'
            : '0 4px 18px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'box-shadow 0.3s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {/* Icon — scaled up */}
        <div style={{ transform: isMobile ? 'scale(0.75)' : 'scale(1.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>

        {/* Frosted-glass brand name overlay on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: isMobile ? '12px' : '26px',
            backdropFilter: hovered ? 'blur(12px) saturate(1.4)' : 'blur(0px)',
            backgroundColor: hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.25s ease, backdrop-filter 0.25s ease, background-color 0.25s ease',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: isMobile ? '8px' : '13px',
              color: '#181a12',
              textAlign: 'center',
              padding: '0 10px',
              letterSpacing: '-0.3px',
              lineHeight: 1.2,
            }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Feature card (bottom section) ─────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  description,
  accentColor,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  tag?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="neo-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: 'var(--bg-white-pure)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', backgroundColor: accentColor }} />
      <div
        style={{
          width: '48px', height: '48px', borderRadius: '12px',
          backgroundColor: accentColor, border: '2px solid var(--color-dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginTop: '8px', flexShrink: 0, boxShadow: '2px 2px 0 0 var(--color-dark)',
        }}
      >
        {icon}
      </div>
      {tag && (
        <span
          style={{
            position: 'absolute', top: '16px', right: '16px',
            backgroundColor: 'var(--color-yellow)', border: '1.5px solid var(--color-dark)',
            borderRadius: '999px', padding: '2px 10px',
            fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase',
          }}
        >
          {tag}
        </span>
      )}
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--color-dark)', marginBottom: '8px' }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-dark)', opacity: 0.75 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}


// ── Track Card — animates its position along the stationary sine wave track ──
function TrackCard({
  card,
  index,
  containerX,
  itemWidth,
  setWidth,
}: {
  card: { name: string; bg: string; icon: React.ReactNode };
  index: number;
  containerX: any;
  itemWidth: number;
  setWidth: number;
}) {
  const { isMobile } = useBreakpoint();
  const amplitude = isMobile ? 16 : 60;
  const maxRotate = isMobile ? 6 : 14;

  // Global screen X position of the card.
  const screenX = useTransform(containerX, (v: number) => v + index * itemWidth);
  // Y goes up and down strictly based on its position on the screen, creating a stationary track.
  const y = useTransform(screenX, (x: number) => Math.sin((x / setWidth) * Math.PI * 2) * amplitude);
  // Leans into the slope.
  const rotate = useTransform(screenX, (x: number) => Math.cos((x / setWidth) * Math.PI * 2) * maxRotate);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: index * itemWidth,
        y,
        rotate,
      }}
    >
      <PlatformCard name={card.name} bg={card.bg} icon={card.icon} />
    </motion.div>
  );
}

// ── Main Features component ────────────────────────────────────────────────
export function Features() {
  const { isMobile, isTablet } = useBreakpoint();
  const containerX = useMotionValue(0);
  const itemWidth = isMobile ? 72 : 158; // 64px card width + 8px gap vs 140px card width + 18px gap
  const setWidth = itemWidth * PLATFORM_CARDS.length;

  useEffect(() => {
    const controls = animate(containerX, [0, -setWidth], {
      ease: 'linear',
      duration: 18,
      repeat: Infinity,
      repeatType: 'loop',
    });
    return controls.stop;
  }, [containerX, setWidth]);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef as any, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: Gradient Brands Marquee (A-Genius style)
          ═══════════════════════════════════════════════════════════ */}
      <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <div
          className="scallop-up-mask"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            background: 'linear-gradient(to right, #b6efb4 0%, #c3d8f7 50%, #d8c4f5 100%)',
          }}
        >
          {/* Dot grid overlay on fence */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(24, 26, 18, 0.15) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
        </div>
      </div>
      <section
        id="features"
        style={{
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          background: 'linear-gradient(to right, #b6efb4 0%, #c3d8f7 50%, #d8c4f5 100%)',
          paddingTop: isMobile ? '40px' : '80px',
          paddingBottom: isMobile ? '40px' : '80px',
          
        }}
      >
        {/* Dot grid overlay */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(24, 26, 18, 0.15) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />

        {/* ── Headline ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            marginBottom: isMobile ? '36px' : '56px',
            padding: '0 24px',
          }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>


            {/* The Text (z-index 1 so it's behind the lens) */}
            <TextReveal
              as="h2"
              delay={100}
              stagger={20}
              style={{
                position: 'relative',
                zIndex: 1,
                fontSize: isMobile ? '30px' : isTablet ? '52px' : 'min(6.5vw, 76px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                color: '#26091c',
                lineHeight: 1.02,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                margin: 0,
              }}
            >
              {"One Dashboard,\nEvery Growth Channel."}
            </TextReveal>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-satoshi), sans-serif',
              fontSize: isMobile ? '16px' : '20px',
              color: '#26091c',
              opacity: 0.8,
              maxWidth: '650px',
              margin: '24px auto 0',
              lineHeight: 1.6,
            }}
          >
            Most businesses use 5–10 different tools to manage marketing and sales, Kalvix brings everything together into one intelligent growth platform.
          </p>
        </div>

        {/* ── Rollercoaster sine-wave track (A-Genius style) ── */}
        {/*
          Cars move independently along a stationary sine-wave track.
        */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: isMobile ? '120px' : '320px',
            paddingTop: isMobile ? '30px' : '90px',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <motion.div
            style={{
              x: containerX,
              position: 'absolute',
              top: isMobile ? '30px' : '90px',
              left: 0,
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            {[...PLATFORM_CARDS, ...PLATFORM_CARDS, ...PLATFORM_CARDS, ...PLATFORM_CARDS].map((card, i) => (
              <TrackCard
                key={i}
                card={card}
                index={i}
                containerX={containerX}
                itemWidth={itemWidth}
                setWidth={setWidth}
              />
            ))}
          </motion.div>
        </div>

        {/* ── Stats banner ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1400px',
            margin: isMobile ? '16px auto 0' : '32px auto 0',
            padding: isMobile ? '0 16px' : '0 24px',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-pink)',
              border: '2px solid var(--color-dark)',
              borderRadius: isMobile ? '24px' : '999px',
              padding: isMobile ? '28px 16px' : isTablet ? '28px 32px' : '28px 48px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '20px' : '0',
              boxShadow: '4px 4px 0 0 var(--color-dark)',
              position: 'relative',
            }}
          >
            {/* "Numbers" blob badge */}
            <div
              className="badge-sticker green"
              style={{
                position: 'absolute',
                top: '-18px',
                left: isMobile ? '50%' : '32px',
                transform: isMobile ? 'translateX(-50%) rotate(-3deg)' : 'rotate(-5deg)',
                fontSize: '13px',
              }}
            >
              By the numbers
            </div>

            {STATS.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  borderRight: !isMobile && !isTablet && idx < STATS.length - 1
                    ? '2px solid rgba(24,26,18,0.18)'
                    : isTablet && (idx === 0 || idx === 2)
                      ? '2px solid rgba(24,26,18,0.18)'
                      : 'none',
                  borderBottom: isMobile && idx < STATS.length - 1
                    ? '2px solid rgba(24,26,18,0.12)'
                    : isTablet && idx < 2
                      ? '2px solid rgba(24,26,18,0.12)'
                      : 'none',
                  padding: isMobile ? '0 0 16px' : isTablet ? '10px 12px' : '0 12px',
                }}
                className="stat-col"
              >
                <div
                  style={{
                    fontSize: isMobile ? '40px' : isTablet ? '44px' : 'min(7vw, 52px)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    color: '#26091c',
                    lineHeight: 1,
                  }}
                >
                  <AnimatedStatNumber valueStr={stat.num} />
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#26091c',
                    opacity: 0.75,
                    marginTop: '6px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyframes + responsive */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes brands-marquee-single {
            0%   { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.333%, 0, 0); }
          }
          @keyframes spin-star {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
        `}} />
      </section>

      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="services"
        style={{
          backgroundColor: 'var(--bg-cream)',
          paddingTop: isMobile ? '48px' : '96px',
          paddingBottom: isMobile ? '48px' : '96px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '56px' }}>
            <div className="badge-sticker blue" style={{ display: 'inline-block', marginBottom: '16px', transform: 'rotate(2deg)' }}>
              The Complete AI Growth OS
            </div>
            <TextReveal
              as="h2"
              delay={100}
              style={{
                fontSize: isMobile ? '28px' : isTablet ? '48px' : 'min(5.5vw, 68px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                color: 'var(--color-dark)',
                maxWidth: '1300px',
                margin: '0 auto',
              }}
            >
              {"Everything your marketing, sales,\nand growth teams need to scale."}
            </TextReveal>
          </div>

          <motion.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '28px' }}
          >
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-yellow)" tag="Core"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>}
                title="AI Content Studio"
                description="Create images, videos, captions and marketing copy from a single prompt using AI."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-purple)" tag="Publish"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8a3 3 0 100 6 3 3 0 000-6z"/></svg>}
                title="Cross-Platform Publishing"
                description="Publish and schedule content to Instagram, TikTok, YouTube, LinkedIn, X and Facebook from one calendar."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-green)" tag="AI"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>}
                title="AI CRM & Lead Management"
                description="Capture leads automatically and run WhatsApp, SMS, email and calling automations to close more deals."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-pink)" tag="Creators"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>}
                title="Creator Marketplace"
                description="Discover top creators, manage contracts, automate outreach and handle payments directly inside the platform."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-blue)" tag="Ads"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                title="Meta & Google Ads"
                description="Launch, optimize and manage your paid campaigns without switching to complex ad managers."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <FeatureCard
                accentColor="var(--color-peach)" tag="Analytics"
                icon={<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>}
                title="Revenue & Analytics Hub"
                description="Track campaign performance, conversion rates, creator ROI and marketing spend from one unified dashboard."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
