import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';

// ── Illustrated SVG characters (inline, hand-drawn style) ──────────────────

function IlloRocket() {
  return (
    <svg viewBox="0 0 200 200" width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green blob background */}
      <ellipse cx="100" cy="115" rx="72" ry="62" fill="var(--color-green)" opacity="0.7" />
      {/* Rocket body */}
      <rect x="86" y="48" width="28" height="70" rx="14" fill="#181a12" />
      {/* Rocket tip */}
      <polygon points="100,22 86,55 114,55" fill="#181a12" />
      {/* Rocket window */}
      <circle cx="100" cy="82" r="8" fill="var(--bg-cream)" stroke="#181a12" strokeWidth="2" />
      {/* Fins */}
      <polygon points="86,100 74,120 86,115" fill="#181a12" />
      <polygon points="114,100 126,120 114,115" fill="#181a12" />
      {/* Flames */}
      <ellipse cx="94" cy="125" rx="5" ry="10" fill="#ffe878" opacity="0.9" />
      <ellipse cx="100" cy="128" rx="6" ry="13" fill="#f09fa8" opacity="0.9" />
      <ellipse cx="106" cy="125" rx="5" ry="10" fill="#ffe878" opacity="0.9" />
      {/* Stars */}
      <circle cx="52" cy="58" r="3" fill="#181a12" />
      <circle cx="148" cy="70" r="2.5" fill="#181a12" />
      <circle cx="62" cy="148" r="2" fill="#181a12" />
      <circle cx="144" cy="145" r="3" fill="#181a12" />
      {/* Speed lines */}
      <line x1="60" y1="90" x2="78" y2="90" stroke="#181a12" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="100" x2="74" y2="100" stroke="#181a12" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="110" x2="78" y2="110" stroke="#181a12" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IlloPricing() {
  return (
    <svg viewBox="0 0 200 200" width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Purple blob background */}
      <ellipse cx="100" cy="115" rx="65" ry="58" fill="var(--color-purple)" opacity="0.6" />
      {/* Price tag */}
      <rect x="70" y="55" width="64" height="80" rx="8" fill="var(--bg-cream)" stroke="#181a12" strokeWidth="2.5" />
      {/* Price tag hole */}
      <circle cx="102" cy="68" r="5" fill="#181a12" />
      {/* Dollar sign */}
      <text x="102" y="108" textAnchor="middle" fontFamily="Georgia, serif" fontSize="32" fontWeight="800" fill="#181a12">$</text>
      {/* Checkmark lines */}
      <line x1="80" y1="125" x2="124" y2="125" stroke="#181a12" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="133" x2="110" y2="133" stroke="#181a12" strokeWidth="2" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="55" cy="60" r="3" fill="#181a12" />
      <circle cx="150" cy="65" r="2.5" fill="#181a12" />
      <circle cx="145" cy="148" r="3" fill="#181a12" />
      <circle cx="56" cy="145" r="2" fill="#181a12" />
      {/* Sparkles */}
      <path d="M48 95 L50 88 L52 95 L58 97 L52 99 L50 106 L48 99 L42 97 Z" fill="#ffe878" stroke="#181a12" strokeWidth="1.5" />
      <path d="M152 100 L153.5 95 L155 100 L160 101.5 L155 103 L153.5 108 L152 103 L147 101.5 Z" fill="#f09fa8" stroke="#181a12" strokeWidth="1.5" />
    </svg>
  );
}

function IlloOnStop() {
  return (
    <svg viewBox="0 0 200 200" width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Yellow blob background */}
      <ellipse cx="100" cy="118" rx="68" ry="56" fill="var(--color-yellow)" opacity="0.7" />
      {/* Monitor / roof shape */}
      <polygon points="50,100 100,55 150,100" fill="#181a12" />
      <rect x="60" y="100" width="80" height="55" rx="4" fill="#181a12" />
      {/* Window inside monitor */}
      <rect x="70" y="108" width="28" height="30" rx="3" fill="var(--bg-cream)" />
      <rect x="104" y="108" width="28" height="13" rx="3" fill="var(--color-pink)" />
      <rect x="104" y="125" width="28" height="13" rx="3" fill="var(--color-green)" />
      {/* Chimney */}
      <rect x="110" y="70" width="12" height="30" fill="#181a12" />
      {/* Stars */}
      <circle cx="44" cy="68" r="3" fill="#181a12" />
      <circle cx="155" cy="72" r="2.5" fill="#181a12" />
      <circle cx="40" cy="152" r="2" fill="#181a12" />
      <circle cx="156" cy="148" r="3" fill="#181a12" />
      {/* Floating icons */}
      <circle cx="165" cy="95" r="10" fill="var(--color-pink)" stroke="#181a12" strokeWidth="2" />
      <text x="165" y="100" textAnchor="middle" fontSize="12" fill="#181a12">✦</text>
      <circle cx="36" cy="110" r="10" fill="var(--color-purple)" stroke="#181a12" strokeWidth="2" />
      <text x="36" y="115" textAnchor="middle" fontSize="11" fill="#181a12">★</text>
      {/* Music note */}
      <text x="155" y="130" fontSize="18" fill="#181a12">♪</text>
    </svg>
  );
}

// ── Card data ─────────────────────────────────────────────────────────────

const CARDS = [
  {
    id: 'fast-delivery',
    title: 'Faster Execution',
    description:
      'Generate content, launch campaigns, automate follow-ups and close deals in minutes instead of days.',
    illustration: (
      <img
        src={require('../../../images/illustrations/faster_execution.png')}
        alt="Faster Execution"
        style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
      />
    ),
    accentColor: 'var(--color-green)',
  },
  {
    id: 'clear-pricing',
    title: 'AI Does The Heavy Lifting',
    description:
      'From captions and creatives to lead qualification and sales automation, AI works behind the scenes so your team can focus on growth.',
    illustration: (
      <img
        src={require('../../../images/illustrations/ai_does_the_heavy_lifting.png')}
        alt="AI Does The Heavy Lifting"
        style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
      />
    ),
    accentColor: 'var(--color-purple)',
  },
  {
    id: 'one-platform',
    title: 'One Platform. Complete Visibility',
    description:
      'Track every post, ad, lead, conversation, deal and creator collaboration from a single dashboard.',
    illustration: (
      <img
        src={require('../../../images/illustrations/one_platform_complete_visibility.png')}
        alt="One Platform. Complete Visibility"
        style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
      />
    ),
    accentColor: 'var(--color-yellow)',
  },
];

// ── Component ─────────────────────────────────────────────────────────────

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { isMobile, isTablet } = useBreakpoint();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="why-us"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-cream)',
          paddingTop: isMobile ? '20px' : '40px',
          paddingBottom: isMobile ? '40px' : '80px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isMobile ? '40px 16px 0' : '60px 32px 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Section eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '56px' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--color-pink)',
                border: '2px solid var(--color-dark)',
                borderRadius: '999px',
                padding: '6px 20px',
                fontFamily: 'var(--font-oswald)',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '2px 2px 0 0 var(--color-dark)',
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
              Why M-Auxis
            </span>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: '0',
            }}
            className="whyus-grid"
          >
            {CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: isMobile ? '0 16px 32px' : isTablet ? '20px 20px 40px' : '0 40px 40px',
                  borderRight: !isMobile && !isTablet && i < CARDS.length - 1
                    ? '2px solid rgba(24,26,18,0.12)' 
                    : isTablet && i === 0 
                      ? '2px solid rgba(24,26,18,0.12)'
                      : 'none',
                  borderBottom: isMobile && i < CARDS.length - 1
                    ? '2px solid rgba(24,26,18,0.12)'
                    : isTablet && i < 2
                      ? '2px solid rgba(24,26,18,0.12)'
                      : 'none',
                  gridColumn: isTablet && i === 2 ? 'span 2' : 'span 1',
                  position: 'relative',
                  marginTop: isMobile && i > 0 ? '24px' : '0',
                }}
              >
                {/* Illustration */}
                <div style={{ marginBottom: '28px' }}>
                  {card.illustration}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: isMobile ? '24px' : '30px',
                    color: 'var(--color-dark)',
                    letterSpacing: '-0.5px',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                    minHeight: isMobile ? 'auto' : '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: isMobile ? '16px' : '20px',
                    fontWeight: 500,
                    color: 'var(--color-dark)',
                    opacity: 0.65,
                    lineHeight: 1.6,
                    maxWidth: isMobile ? '100%' : '340px',
                    minHeight: isMobile ? 'auto' : '120px',
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
