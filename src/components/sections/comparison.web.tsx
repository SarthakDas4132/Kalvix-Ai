import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';

// ── Row-level comparison data ─────────────────────────────────────────────────

const ROWS = [
  {
    feature: 'Cross-Platform Publishing',
    them: 'Need Buffer, Hootsuite or Later',
    us: 'Built-in — post to 7+ platforms at once',
  },
  {
    feature: 'Creator / Influencer Discovery',
    them: 'Separate tool (Grin, Aspire, Upfluence)',
    us: '10M+ creators searchable inside Kalvix.ai',
  },
  {
    feature: 'CRM & Lead Management',
    them: 'HubSpot / Pipedrive add-on required',
    us: 'AI CRM built in — auto-scores & routes leads',
  },
  {
    feature: 'Meta & Google Ads',
    them: 'Switch to Ads Manager & Google Ads separately',
    us: 'Manage both ad platforms from one dashboard',
  },
  {
    feature: 'Contracts & E-Signatures',
    them: 'DocuSign, PandaDoc or email PDF back-and-forth',
    us: 'Send, sign & manage creator contracts in-app',
  },
  {
    feature: 'Creator Payments',
    them: 'Bank transfers, Wise or PayPal manually',
    us: 'Pay creators instantly, auto-generate invoices',
  },
  {
    feature: 'Unified Analytics',
    them: 'Separate dashboards per platform — no single view',
    us: 'One unified analytics view: reach, ROAS, CPM & more',
  },
  {
    feature: 'AI Sales & Automation',
    them: 'Not offered or requires expensive add-ons',
    us: 'AI drafts follow-ups, moves deals, forecasts revenue',
  },
];

// ── Feature matrix data ───────────────────────────────────────────────────────

type MatrixStatus = 'yes' | 'no' | 'partial';

interface MatrixRow {
  feature: string;
  agenius: MatrixStatus;
  hootsuite: MatrixStatus;
  grin: MatrixStatus;
  hubspot: MatrixStatus;
}

const MATRIX: MatrixRow[] = [
  { feature: 'Cross-Platform Scheduling',     agenius: 'yes', hootsuite: 'yes',     grin: 'no',      hubspot: 'no'      },
  { feature: 'Creator Discovery (10M+)',       agenius: 'yes', hootsuite: 'no',      grin: 'yes',     hubspot: 'no'      },
  { feature: 'Creator Contracts & Signing',   agenius: 'yes', hootsuite: 'no',      grin: 'partial', hubspot: 'no'      },
  { feature: 'In-App Creator Payments',       agenius: 'yes', hootsuite: 'no',      grin: 'partial', hubspot: 'no'      },
  { feature: 'AI CRM & Lead Pipeline',        agenius: 'yes', hootsuite: 'no',      grin: 'no',      hubspot: 'yes'     },
  { feature: 'Meta Ads Integration',          agenius: 'yes', hootsuite: 'partial', grin: 'no',      hubspot: 'partial' },
  { feature: 'Google Ads Integration',        agenius: 'yes', hootsuite: 'no',      grin: 'no',      hubspot: 'partial' },
  { feature: 'Unified Analytics Dashboard',   agenius: 'yes', hootsuite: 'partial', grin: 'partial', hubspot: 'partial' },
  { feature: 'AI Sales & Automation',         agenius: 'yes', hootsuite: 'no',      grin: 'no',      hubspot: 'partial' },
  { feature: 'Multi-Account Management',      agenius: 'yes', hootsuite: 'yes',     grin: 'partial', hubspot: 'partial' },
];

const TOOLS = ['Kalvix.ai', 'Hootsuite', 'Grin', 'HubSpot'] as const;
const TOOL_COLORS: Record<string, string> = {
  'Kalvix.ai': 'var(--color-yellow)',
  Hootsuite: 'var(--color-peach)',
  Grin: 'var(--color-purple)',
  HubSpot: 'var(--color-green)',
};

function StatusIcon({ status, isAgenius }: { status: MatrixStatus; isAgenius: boolean }) {
  if (status === 'yes') {
    return (
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        backgroundColor: isAgenius ? 'var(--color-dark)' : 'var(--color-green)',
        border: '2px solid var(--color-dark)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto',
      }}>
        <svg viewBox="0 0 12 12" width="12" height="12">
          <path d="M2 6l3 3 5-5" stroke={isAgenius ? 'var(--bg-cream)' : 'var(--color-dark)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === 'partial') {
    return (
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        backgroundColor: 'var(--color-yellow)',
        border: '2px solid var(--color-dark)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto',
        fontFamily: 'var(--font-oswald)',
        fontWeight: 800,
        fontSize: '14px',
        color: 'var(--color-dark)',
      }}>
        ~
      </div>
    );
  }
  return (
    <div style={{
      width: '28px', height: '28px', borderRadius: '50%',
      backgroundColor: 'rgba(24,26,18,0.06)',
      border: '2px solid rgba(24,26,18,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto',
    }}>
      <svg viewBox="0 0 12 12" width="10" height="10">
        <path d="M2 2l8 8M10 2L2 10" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </svg>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [matrixHover, setMatrixHover] = useState<number | null>(null);
  const { isMobile, isTablet } = useBreakpoint();

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
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '64px' }}>
            <div
              className="badge-sticker yellow"
              style={{ display: 'inline-flex', marginBottom: '16px', transform: 'rotate(4deg)' }}
            >
              Differences
            </div>
            <h2
              style={{
                fontSize: isMobile ? '36px' : isTablet ? '64px' : 'min(12vw, 110px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                color: 'var(--color-dark)',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Why switch to<br />Kalvix.ai?
            </h2>
            <p style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: isMobile ? '15px' : '17px',
              fontWeight: 500,
              opacity: 0.65,
              maxWidth: '480px',
              margin: '16px auto 0',
              lineHeight: 1.6,
            }}>
              Compare what you're paying for today vs. what Kalvix.ai gives you — in one subscription.
            </p>
          </div>

          {/* ── Split comparison panel ── */}
          <div
            style={{
              border: '2px solid var(--color-dark)',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: isMobile || isTablet ? 'column' : 'row',
              boxShadow: isMobile ? '4px 4px 0 0 var(--color-dark)' : '6px 6px 0 0 var(--color-dark)',
              position: 'relative',
              marginBottom: '48px',
            }}
            className="comparison-box"
          >
            {/* Left — Separate Tools */}
            <div style={{ flex: 1, backgroundColor: 'var(--color-purple)', padding: '0' }}>
              {/* Column header */}
              <div style={{
                padding: isMobile ? '16px 20px' : '24px 32px',
                textAlign: 'center',
                backgroundColor: 'rgba(24,26,18,0.12)',
              }}>
                <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, marginBottom: '6px' }}>
                  The old way
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '20px' : '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                  Separate Tools
                </h3>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', opacity: 0.65, marginTop: '4px' }}>
                  5–7 subscriptions, context switching all day
                </p>
              </div>

              {ROWS.map((row, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredRow(i)}
                  onHoverEnd={() => setHoveredRow(null)}
                  style={{
                    padding: isMobile ? '12px 16px' : '16px 28px',
                    borderBottom: i < ROWS.length - 1 ? '1px solid rgba(24,26,18,0.12)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: isMobile ? '8px' : '12px',
                    backgroundColor: hoveredRow === i ? 'rgba(24,26,18,0.08)' : 'transparent',
                    transition: 'background-color 0.15s ease',
                    cursor: 'default',
                  }}
                >
                  {/* X icon */}
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    backgroundColor: 'var(--color-pink)',
                    border: '2px solid var(--color-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <svg viewBox="0 0 10 10" width="8" height="8">
                      <path d="M2 2l6 6M8 2L2 8" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', opacity: 0.5, marginBottom: '2px', letterSpacing: '0.3px' }}>
                      {row.feature}
                    </div>
                    <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '13px' : '14px', fontWeight: 500, color: 'var(--color-dark)', opacity: 0.8, lineHeight: 1.4 }}>
                      {row.them}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Zigzag divider */}
            {!(isMobile || isTablet) && (
              <div style={{ width: '16px', backgroundColor: 'var(--color-purple)', position: 'relative', zIndex: 1 }} className="zigzag-sep">
                <div style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0, width: '16px',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 20' width='10' height='20'%3E%3Cpath d='M10,0 L0,10 L10,20 Z' fill='%23fefae7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat-y',
                  backgroundSize: '16px 32px',
                }} />
              </div>
            )}

            {/* Right — Agenius */}
            <div style={{ flex: 1, backgroundColor: 'var(--color-yellow)', padding: '0' }}>
              {/* Column header */}
              <div style={{
                padding: isMobile ? '16px 20px' : '24px 32px',
                textAlign: 'center',
                backgroundColor: 'rgba(24,26,18,0.08)',
              }}>
                <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, marginBottom: '6px' }}>
                  The Kalvix.ai way
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '20px' : '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                  Kalvix.ai
                </h3>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', opacity: 0.65, marginTop: '4px' }}>
                  One platform, one subscription, everything included
                </p>
              </div>

              {ROWS.map((row, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredRow(i)}
                  onHoverEnd={() => setHoveredRow(null)}
                  style={{
                    padding: isMobile ? '12px 16px' : '16px 28px',
                    borderBottom: i < ROWS.length - 1 ? '1px solid rgba(24,26,18,0.12)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: isMobile ? '8px' : '12px',
                    backgroundColor: hoveredRow === i ? 'rgba(24,26,18,0.08)' : 'transparent',
                    transition: 'background-color 0.15s ease',
                    cursor: 'default',
                  }}
                >
                  {/* Check icon */}
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    backgroundColor: 'var(--color-dark)',
                    border: '2px solid var(--color-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <svg viewBox="0 0 10 10" width="8" height="8">
                      <path d="M2 5l2.5 2.5L8 3" stroke="var(--bg-cream)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', opacity: 0.5, marginBottom: '2px', letterSpacing: '0.3px' }}>
                      {row.feature}
                    </div>
                    <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '13px' : '14px', fontWeight: 600, color: 'var(--color-dark)', lineHeight: 1.4 }}>
                      {row.us}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* VS badge */}
            {!(isMobile || isTablet) && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(-8deg)',
                  width: '72px',
                  height: '72px',
                  backgroundColor: 'var(--color-dark-purple)',
                  color: 'var(--color-peach)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-oswald)',
                  fontSize: '15px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  border: '2px solid var(--color-dark)',
                  boxShadow: '3px 3px 0 0 var(--color-dark)',
                  zIndex: 10,
                }}
                className="vs-badge"
              >
                VS
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
