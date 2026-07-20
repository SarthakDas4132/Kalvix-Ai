import React from 'react';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

// ── Inline SVG illustrations ────────────────────────────────────────────────

function PublishEverywhere() {
  return (
    <svg viewBox="0 0 180 120" width="180" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central hub */}
      <circle cx="90" cy="60" r="22" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <text x="90" y="64" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="800" fontSize="10" fill="var(--color-dark)">HUB</text>
      {/* Spokes */}
      {[0, 52, 104, 156, 208, 260, 312].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 90 + Math.cos(rad) * 52;
        const y2 = 60 + Math.sin(rad) * 40;
        return <line key={i} x1="90" y1="60" x2={x2} y2={y2} stroke="var(--color-dark)" strokeWidth="1.5" strokeDasharray="4 3" />;
      })}
      {/* Platform dots */}
      {[
        { angle: 0, color: '#E1306C', label: 'IG' },
        { angle: 52, color: '#181a12', label: 'TT' },
        { angle: 104, color: '#FF0000', label: 'YT' },
        { angle: 156, color: '#0A66C2', label: 'LI' },
        { angle: 208, color: '#181a12', label: 'X' },
        { angle: 260, color: '#1877F2', label: 'FB' },
        { angle: 312, color: '#4285F4', label: 'GA' },
      ].map(({ angle, color, label }, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 90 + Math.cos(rad) * 52;
        const cy = 60 + Math.sin(rad) * 40;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill={color} stroke="var(--color-dark)" strokeWidth="2" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="7" fill="#fffef5">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function AiCrmVisual() {
  return (
    <svg viewBox="0 0 200 130" width="200" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pipeline stages */}
      {[
        { x: 10, label: 'Lead', color: 'var(--color-pink)' },
        { x: 58, label: 'Qual.', color: 'var(--color-peach)' },
        { x: 106, label: 'Nego.', color: 'var(--color-yellow)' },
        { x: 154, label: 'Closed', color: 'var(--color-green)' },
      ].map(({ x, label, color }, i) => (
        <g key={i}>
          <rect x={x} y="30" width="40" height="70" rx="8" fill={color} stroke="var(--color-dark)" strokeWidth="2" />
          <text x={x + 20} y="50" textAnchor="middle" fontFamily="var(--font-oswald)" fontSize="8" fontWeight="700" fill="var(--color-dark)">{label}</text>
          {/* Cards */}
          <rect x={x + 4} y="56" width="32" height="12" rx="4" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="1.5" />
          <rect x={x + 4} y="72" width="32" height="12" rx="4" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="1.5" />
          {i < 3 && (
            <path d={`M${x + 42} 65 l8 0 M${x + 46} 62 l4 3 -4 3`} stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
          )}
        </g>
      ))}
      {/* AI badge */}
      <rect x="72" y="4" width="56" height="20" rx="10" fill="var(--color-dark)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <text x="100" y="16" textAnchor="middle" fontFamily="var(--font-oswald)" fontSize="9" fontWeight="800" fill="var(--bg-cream)">AI ENGINE</text>
    </svg>
  );
}

function AnalyticsVisual() {
  const bars = [45, 65, 52, 80, 70, 90, 78];
  return (
    <svg viewBox="0 0 180 110" width="180" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="20" y1="10" x2="20" y2="90" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="90" x2="170" y2="90" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Bars */}
      {bars.map((h, i) => (
        <g key={i}>
          <rect
            x={26 + i * 21}
            y={90 - h}
            width="16"
            height={h}
            rx="4"
            fill={i === 5 ? 'var(--color-yellow)' : 'var(--color-purple)'}
            stroke="var(--color-dark)"
            strokeWidth="1.5"
          />
        </g>
      ))}
      {/* Trend line */}
      <polyline
        points="34,56 55,42 76,49 97,22 118,32 139,14 160,24"
        stroke="var(--color-pink)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* +124% badge */}
      <rect x="120" y="4" width="52" height="20" rx="10" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <text x="146" y="16" textAnchor="middle" fontFamily="var(--font-oswald)" fontSize="10" fontWeight="800" fill="var(--color-dark)">+124%</text>
    </svg>
  );
}

function CreatorNetworkVisual() {
  return (
    <svg viewBox="0 0 160 120" width="160" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central user */}
      <circle cx="80" cy="60" r="18" fill="var(--color-blue)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <circle cx="80" cy="54" r="7" fill="var(--color-dark)" />
      <path d="M65 72 Q80 80 95 72" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Surrounding creators */}
      {[
        { cx: 25, cy: 30, color: 'var(--color-pink)' },
        { cx: 135, cy: 30, color: 'var(--color-peach)' },
        { cx: 20, cy: 90, color: 'var(--color-green)' },
        { cx: 140, cy: 90, color: 'var(--color-yellow)' },
        { cx: 80, cy: 10, color: 'var(--color-purple)' },
      ].map(({ cx, cy, color }, i) => (
        <g key={i}>
          <line x1="80" y1="60" x2={cx} y2={cy} stroke="var(--color-dark)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
          <circle cx={cx} cy={cy} r="12" fill={color} stroke="var(--color-dark)" strokeWidth="2" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="var(--color-dark)">★</text>
        </g>
      ))}
    </svg>
  );
}

// ── Benefit card ─────────────────────────────────────────────────────────────

function BentoCard({
  children,
  color,
  style = {},
}: {
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
}) {
  const { isMobile } = useBreakpoint();
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '8px 8px 0 0 rgba(254,250,231,0.25)' }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        border: '2px solid rgba(254, 250, 231, 0.25)',
        borderRadius: '24px',
        backgroundColor: color,
        padding: isMobile ? '20px' : '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '5px 5px 0 0 rgba(254,250,231,0.15)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function Benefits() {
  const { isMobile, isTablet } = useBreakpoint();
  
  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-dark)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="benefits"
        style={{
          backgroundColor: 'var(--color-dark)',
          color: 'var(--bg-white-pure)',
          paddingTop: isMobile ? '48px' : '96px',
          paddingBottom: isMobile ? '60px' : '120px',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
        <div className="bg-dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} />

        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative', zIndex: 1 }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '64px' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker pink"
                style={{ display: 'inline-flex', marginBottom: '20px', transform: 'rotate(3deg)', color: 'var(--color-dark)' }}
              >
                Why M-Auxis
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
                color: 'var(--bg-white-pure)',
                maxWidth: '1300px',
                margin: '0 auto',
              }}
            >
              {"Stop paying for\nfive separate tools."}
            </TextReveal>
            <ScrollReveal delay={200}>
              <p
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: isMobile ? '15px' : '17px',
                  fontWeight: 500,
                  color: 'var(--bg-white-pure)',
                  opacity: 0.55,
                  maxWidth: '620px',
                  margin: '20px auto 0',
                  lineHeight: 1.65,
                }}
              >
                M-Auxis replaces your scheduling tool, creator marketplace, CRM, ad manager and payment platform — in one subscription.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Bento Grid ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Row 1 — 2 large cards */}
            <div
              className="bento-row-1"
              style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: '24px' }}
            >
              {/* Card: Publish Everywhere */}
              <BentoCard color="var(--color-yellow)">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '160px', marginBottom: '8px' }}>
                  <PublishEverywhere />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '22px' : '26px',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  Post to Every Platform at Once
                </h3>
                <p style={{
                  fontSize: isMobile ? '14px' : '15px',
                  lineHeight: 1.5,
                  opacity: 0.8,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  maxWidth: '340px',
                  margin: '0 auto',
                  minHeight: isMobile ? 'auto' : '72px',
                }}>
                  One click to publish across Instagram, TikTok, YouTube, LinkedIn, X, Facebook and Google — no more copy-pasting between apps.
                </p>
              </BentoCard>

              {/* Card: AI CRM Pipeline */}
              <BentoCard color="var(--color-purple)">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '160px', marginBottom: '8px', gap: '8px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      backgroundColor: 'var(--color-dark)',
                      color: 'var(--bg-cream)',
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      padding: '3px 12px',
                      borderRadius: '999px',
                    }}
                  >
                    AI Powered
                  </div>
                  <AiCrmVisual />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '22px' : '26px',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  Your CRM, Automated by AI
                </h3>
                <p style={{
                  fontSize: isMobile ? '14px' : '15px',
                  lineHeight: 1.5,
                  opacity: 0.8,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  maxWidth: '340px',
                  margin: '0 auto',
                  minHeight: isMobile ? 'auto' : '72px',
                }}>
                  AI scores leads, writes follow-ups, and moves deals through your pipeline automatically — so your team focuses on closing, not admin.
                </p>
              </BentoCard>
            </div>

            {/* Row 2 — 3 smaller cards */}
            <div
              className="bento-row-2"
              style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr 1fr', gap: '24px' }}
            >
              {/* Card: Creator discovery */}
              <BentoCard color="var(--color-green)">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '130px', marginBottom: '16px' }}>
                  <CreatorNetworkVisual />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  Find Creators Instantly
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.8,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '72px',
                }}>
                  Search 10M+ creators by niche, platform, engagement rate and audience demographics.
                </p>
              </BentoCard>

              {/* Card: Analytics */}
              <BentoCard color="var(--bg-white-pure)">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '130px', marginBottom: '16px' }}>
                  <AnalyticsVisual />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  Quantitative Analytics
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.8,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '72px',
                }}>
                  ROAS, CPM, reach, conversions — all in one unified dashboard across every channel and campaign.
                </p>
              </BentoCard>

              {/* Card: Contracts & Payments */}
              <BentoCard color="var(--color-peach)">
                {/* Icon wrapper aligned to same height */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '130px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--color-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid var(--color-dark)',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--bg-cream)" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  Contracts &amp; Payments
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.8,
                  color: 'var(--color-dark)',
                  textAlign: 'center',
                  minHeight: isMobile ? 'auto' : '72px',
                }}>
                  Sign contracts, manage collaboration deals and pay creators — no more juggling DocuSign, spreadsheets and bank transfers.
                </p>
              </BentoCard>
            </div>

            {/* Row 3 — full-width comparison bar */}
            <BentoCard 
              color="rgba(255,255,255,0.05)" 
              style={{ 
                border: '2px solid rgba(254,250,231,0.15)', 
                flexDirection: isMobile || isTablet ? 'column' : 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: '24px' 
              }}
            >
              {/* Before */}
              <div style={{ width: '100%', flex: 1, minWidth: isMobile || isTablet ? '100%' : '240px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--color-pink)',
                    marginBottom: '14px',
                  }}
                >
                  ✕ Without M-Auxis
                </div>
                {[
                  'Buffer / Hootsuite for scheduling',
                  'Grin / Aspire for creators',
                  'HubSpot / Pipedrive for CRM',
                  'Meta Ads Manager separately',
                  'Google Ads separately',
                  'DocuSign for contracts',
                  'Wise / bank for payments',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-satoshi)',
                      fontSize: '14px',
                      color: 'var(--bg-cream)',
                      opacity: 0.6,
                    }}
                  >
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--color-pink)', border: '1.5px solid var(--color-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 10 10" width="8" height="8"><path d="M2 2l6 6M8 2l-6 6" stroke="var(--color-dark)" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* VS divider */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '2px solid rgba(254,250,231,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '18px',
                  color: 'var(--bg-cream)',
                  flexShrink: 0,
                  margin: isMobile || isTablet ? '12px auto' : '0',
                }}
              >
                VS
              </div>

              {/* After */}
              <div style={{ width: '100%', flex: 1, minWidth: isMobile || isTablet ? '100%' : '240px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--color-green)',
                    marginBottom: '14px',
                    textAlign: isMobile || isTablet ? 'left' : 'right',
                  }}
                >
                  ✓ With M-Auxis
                </div>
                {[
                  'Schedule to every platform in one click',
                  'Discover & connect with top creators',
                  'AI CRM that works while you sleep',
                  'Run Meta Ads from the same dashboard',
                  'Run Google Ads from the same dashboard',
                  'Send & sign contracts in-app',
                  'Pay creators instantly, auto-invoice',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: isMobile || isTablet ? 'row' : 'row-reverse',
                      alignItems: 'center',
                      justifyContent: isMobile || isTablet ? 'flex-start' : 'flex-end',
                      gap: '10px',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-satoshi)',
                      fontSize: '14px',
                      color: 'var(--bg-cream)',
                    }}
                  >
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--color-green)', border: '1.5px solid var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 10 10" width="8" height="8"><path d="M2 5l2.5 2.5L8 3" stroke="var(--color-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ flex: isMobile || isTablet ? 'none' : 1, textAlign: isMobile || isTablet ? 'left' : 'right' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>
    </>
  );
}
