import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

// ── Row-level comparison data (10 single-line rows matching aghenius style) ──

const ROWS = [
  {
    them: 'Multiple subscriptions',
    us: 'One Platform. One Login. One Subscription',
    bg: '#cbf7db', // pastel green
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    them: 'Separate content creation tools',
    us: 'AI Content Studio',
    bg: '#ffd5e5', // pastel pink
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    them: 'Manual cross-platform posting',
    us: 'Unified Social Publishing',
    bg: '#cbf7db', // pastel green
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    them: 'Complex Meta & Google Ads dashboards',
    us: 'Simplified Meta & Google Ads',
    bg: '#fff0b3', // pastel yellow
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    them: 'Disconnected CRM systems',
    us: 'Smart CRM & Lead Management',
    bg: '#d0e1fd', // pastel blue
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    them: 'Manual lead follow-ups',
    us: 'AI Calling, WhatsApp & SMS Automation',
    bg: '#ffe2cc', // pastel orange
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    them: 'Creator search through DMs & spreadsheets',
    us: 'Influencer Marketing Platform',
    bg: '#e8dbfc', // pastel purple
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    them: 'Manual contract drafting & PayPal fees',
    us: 'Creator Contracts & Payments',
    bg: '#d2f7f1', // pastel teal
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    them: 'Multiple reporting dashboards',
    us: 'Unified Analytics & Revenue Tracking',
    bg: '#d5f8c8', // pastel lime
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    them: 'Data scattered across platforms',
    us: 'End-to-End Sales Pipeline Visibility',
    bg: '#ffd5e5', // pastel pink
    icon: (color: string, size: number) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 12.45 14.55 7 9.1" />
        <polyline points="17 4 23 4 23 10" />
        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      </svg>
    ),
  },
];

export function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const { isMobile, isTablet } = useBreakpoint();
  const circleSize = isMobile ? 24 : 28;

  const tableRef = React.useRef<HTMLDivElement>(null);
  const isTableInView = useInView(tableRef as any, { once: true, margin: '-100px' });

  const tableVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-peach)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="comparison"
        style={{
          backgroundColor: 'var(--color-peach)',
          paddingTop: isMobile ? '48px' : '96px',
          paddingBottom: isMobile ? '48px' : '96px',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '64px' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker yellow"
                style={{ display: 'inline-flex', marginBottom: '16px', transform: 'rotate(4deg)' }}
              >
                Differences
              </div>
            </ScrollReveal>
            <TextReveal
              delay={100}
              style={{
                fontSize: isMobile ? '30px' : isTablet ? '52px' : 'min(6.5vw, 76px)',
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
              {"Why switch to\nM-Auxis?"}
            </TextReveal>
            <ScrollReveal delay={200}>
              <p style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: isMobile ? '15px' : '17px',
                fontWeight: 500,
                opacity: 0.65,
                maxWidth: '480px',
                margin: '16px auto 0',
                lineHeight: 1.6,
              }}>
                Compare what you're paying for today vs. what M-Auxis gives you — in one subscription.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Column Headers above the container on desktop ── */}
          {!(isMobile || isTablet) && (
            <div style={{ display: 'flex', width: '100%', marginBottom: '24px' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <TextReveal
                  as="h3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 800,
                    color: '#26091c',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  Traditional Growth Stack
                </TextReveal>
              </div>
              {/* spacer matching the zigzag separator */}
              <div style={{ width: '16px' }} />
              <div style={{ flex: 1, textAlign: 'center' }}>
                <TextReveal
                  as="h3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 800,
                    color: '#26091c',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  M-Auxis AI Growth OS
                </TextReveal>
              </div>
            </div>
          )}

          {/* ── Split comparison panel ── */}
          <motion.div
            ref={tableRef}
            variants={tableVariants}
            initial="hidden"
            animate={isTableInView ? 'visible' : 'hidden'}
          >
            {isMobile || isTablet ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {/* Left — Separate Tools */}
              <div
                style={{
                  border: '2.5px solid var(--color-dark)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#ecd2f9', // light pinkish lavender matching aghenius
                  padding: '16px 20px 24px 20px',
                  boxShadow: '4px 4px 0 0 var(--color-dark)',
                }}
              >
                <div style={{ padding: '8px 0 16px 0', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#26091c', margin: 0 }}>
                    Other Platforms
                  </h3>
                  <div style={{ height: '2.5px', backgroundColor: 'var(--color-dark)', marginTop: '12px' }} />
                </div>

                {ROWS.map((row, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '14px 0',
                      borderBottom: i < ROWS.length - 1 ? '1.5px solid rgba(38, 9, 28, 0.15)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    {/* Sad face circle (Transparent cutouts mask) */}
                    <div style={{ flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width={circleSize} height={circleSize} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <mask id={`sad-face-mask-mobile-${i}`}>
                            <rect x="0" y="0" width="24" height="24" fill="white" />
                            <circle cx="8.5" cy="10.5" r="1.8" fill="black" />
                            <circle cx="15.5" cy="10.5" r="1.8" fill="black" />
                            <path d="M8.5 17 Q12 14.2 15.5 17" stroke="black" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                          </mask>
                        </defs>
                        <circle cx="12" cy="12" r="11" fill="var(--color-dark)" mask={`url(#sad-face-mask-mobile-${i})`} />
                      </svg>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-satoshi)',
                          fontSize: '15px',
                          fontWeight: 750,
                          color: '#26091c',
                        }}
                      >
                        {row.them}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Versus badge */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transform: 'rotate(-8deg)',
                  }}
                  className="vs-badge"
                >
                  <svg
                    viewBox="0 0 100 100"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      filter: 'drop-shadow(2px 2px 0px var(--color-dark))',
                    }}
                  >
                    <path
                      d="M50,12 C58,3 74,8 74,20 C85,18 94,32 86,42 C94,54 83,69 74,65 C72,78 56,81 50,71 C44,81 28,78 26,65 C17,69 6,54 14,42 C6,32 15,18 26,20 C26,8 42,3 50,12 Z"
                      fill="#26091c" // dark burgundy
                      stroke="var(--color-dark)"
                      strokeWidth="2.5"
                    />
                  </svg>
                  <span
                    style={{
                      position: 'relative',
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 800,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      color: 'var(--color-peach)',
                      letterSpacing: '0.5px',
                      transform: 'rotate(-4deg)',
                    }}
                  >
                    Versus
                  </span>
                </div>
              </div>

              {/* Right — M-Auxis */}
              <div
                style={{
                  border: '2.5px solid var(--color-dark)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#fefbc6', // light yellow matching aghenius
                  padding: '16px 20px 24px 20px',
                  boxShadow: '4px 4px 0 0 var(--color-dark)',
                }}
              >
                <div style={{ padding: '8px 0 16px 0', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#26091c', margin: 0 }}>
                    M-Auxis
                  </h3>
                  <div style={{ height: '2.5px', backgroundColor: 'var(--color-dark)', marginTop: '12px' }} />
                </div>

                {ROWS.map((row, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '14px 0',
                      borderBottom: i < ROWS.length - 1 ? '1.5px solid rgba(38, 9, 28, 0.15)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    {/* Custom colored icon circle */}
                    <div
                      style={{
                        width: `${circleSize}px`,
                        height: `${circleSize}px`,
                        borderRadius: '50%',
                        backgroundColor: row.bg,
                        border: '2px solid var(--color-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {row.icon('var(--color-dark)', 12)}
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-satoshi)',
                          fontSize: '15px',
                          fontWeight: 750,
                          color: '#26091c',
                        }}
                      >
                        {row.us}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                border: '2.5px solid var(--color-dark)',
                borderRadius: '32px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                boxShadow: '8px 8px 0 0 var(--color-dark)',
                position: 'relative',
                marginBottom: '48px',
              }}
              className="comparison-box"
            >
              {ROWS.map((row, i) => (
                <React.Fragment key={i}>
                  {/* Left — Separate Tools */}
                  <motion.div
                    onHoverStart={() => setHoveredRow(i)}
                    onHoverEnd={() => setHoveredRow(null)}
                    style={{
                      gridColumn: 1,
                      backgroundColor: hoveredRow === i ? '#e5c9f5' : '#ecd2f9',
                      paddingTop: i === 0 ? '52px' : '20px',
                      paddingBottom: i === ROWS.length - 1 ? '52px' : '20px',
                      paddingLeft: '48px',
                      paddingRight: '48px',
                      borderBottom: i < ROWS.length - 1 ? '1.5px solid rgba(38, 9, 28, 0.15)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'background-color 0.15s ease',
                      cursor: 'default',
                    }}
                  >
                    {/* Sad face circle (Transparent cutouts mask) */}
                    <div style={{ flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width={circleSize} height={circleSize} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <mask id={`sad-face-mask-${i}`}>
                            <rect x="0" y="0" width="24" height="24" fill="white" />
                            <circle cx="8.5" cy="10.5" r="1.8" fill="black" />
                            <circle cx="15.5" cy="10.5" r="1.8" fill="black" />
                            <path d="M8.5 17 Q12 14.2 15.5 17" stroke="black" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                          </mask>
                        </defs>
                        <circle cx="12" cy="12" r="11" fill="var(--color-dark)" mask={`url(#sad-face-mask-${i})`} />
                      </svg>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-satoshi)',
                          fontSize: '18px',
                          fontWeight: 750,
                          color: '#26091c',
                        }}
                      >
                        {row.them}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right — M-Auxis */}
                  <motion.div
                    onHoverStart={() => setHoveredRow(i)}
                    onHoverEnd={() => setHoveredRow(null)}
                    style={{
                      gridColumn: 2,
                      backgroundColor: hoveredRow === i ? '#fcf8b0' : '#fefbc6',
                      paddingTop: i === 0 ? '52px' : '20px',
                      paddingBottom: i === ROWS.length - 1 ? '52px' : '20px',
                      paddingLeft: '48px',
                      paddingRight: '48px',
                      borderBottom: i < ROWS.length - 1 ? '1.5px solid rgba(38, 9, 28, 0.15)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: '16px',
                      transition: 'background-color 0.15s ease',
                      cursor: 'default',
                    }}
                  >
                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-satoshi)',
                          fontSize: '18px',
                          fontWeight: 750,
                          color: '#26091c',
                        }}
                      >
                        {row.us}
                      </span>
                    </div>
                    {/* Custom colored icon circle */}
                    <div
                      style={{
                        width: `${circleSize}px`,
                        height: `${circleSize}px`,
                        borderRadius: '50%',
                        backgroundColor: row.bg,
                        border: '2px solid var(--color-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                      }}
                    >
                      {row.icon('var(--color-dark)', 14)}
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}

              {/* Zigzag divider */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  bottom: 0, 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  width: '16px', 
                  backgroundColor: '#ecd2f9', 
                  zIndex: 3,
                  pointerEvents: 'none',
                }} 
                className="zigzag-sep"
              >
                <div style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0, width: '16px',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 20' width='10' height='20'%3E%3Cpath d='M10,0 L0,10 L10,20 Z' fill='%23fefbc6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat-y',
                  backgroundSize: '16px 32px',
                }} />
              </div>

              {/* Versus badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(-8deg)',
                  width: '92px',
                  height: '92px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                }}
                className="vs-badge"
              >
                <svg
                  viewBox="0 0 100 100"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'drop-shadow(3px 3px 0px var(--color-dark))',
                  }}
                >
                  <path
                    d="M50,12 C58,3 74,8 74,20 C85,18 94,32 86,42 C94,54 83,69 74,65 C72,78 56,81 50,71 C44,81 28,78 26,65 C17,69 6,54 14,42 C6,32 15,18 26,20 C26,8 42,3 50,12 Z"
                    fill="#26091c" // dark burgundy
                    stroke="var(--color-dark)"
                    strokeWidth="2.5"
                  />
                </svg>
                <span
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 800,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    color: 'var(--color-peach)',
                    letterSpacing: '0.5px',
                    transform: 'rotate(-4deg)',
                  }}
                >
                  Versus
                </span>
              </div>
            </div>
          )}
          </motion.div>

        </div>
      </section>
    </>
  );
}
