import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

// ── Case study data ───────────────────────────────────────────────────────────

const CASES = [
  {
    id: 'nova',
    brand: 'Nova Skincare',
    handle: '@novaskincare',
    industry: 'Beauty & Wellness',
    bgColor: 'var(--color-pink)',
    tagColor: 'var(--color-dark)',
    platforms: ['IG', 'TT', 'YT'],
    challenge: 'Nova was posting manually across 3 platforms, missing peak times and spending 6+ hours a week on scheduling.',
    result: 'Using Kalvix.ai campaign automation and creator discovery, they scaled to 7 platforms, partnered with 14 micro-influencers and tripled their reach in 60 days.',
    stats: [
      { value: '3.1M', label: 'Total Reach' },
      { value: '14', label: 'Creators Linked' },
      { value: '+218%', label: 'Engagement Rate' },
      { value: '60', label: 'Days' },
    ],
    mockup: () => (
      <svg viewBox="0 0 280 180" style={{ width: '100%', height: 'auto', maxWidth: '280px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone frame */}
        <rect x="90" y="10" width="100" height="160" rx="16" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
        <rect x="130" y="16" width="20" height="4" rx="2" fill="var(--color-dark)" opacity="0.3" />
        {/* Screen content */}
        <rect x="94" y="26" width="92" height="50" rx="4" fill="var(--color-pink)" opacity="0.6" />
        <circle cx="140" cy="51" r="18" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="2" />
        <text x="140" y="55" textAnchor="middle" fontFamily="serif" fontSize="14" fill="var(--color-dark)">✿</text>
        {/* Stats row */}
        <rect x="94" y="82" width="28" height="28" rx="6" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="108" y="101" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="10" fill="var(--color-dark)">3.1M</text>
        <rect x="126" y="82" width="28" height="28" rx="6" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="140" y="101" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="10" fill="var(--color-dark)">+218%</text>
        <rect x="158" y="82" width="28" height="28" rx="6" fill="var(--color-purple)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="172" y="101" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="10" fill="var(--color-dark)">14</text>
        {/* Bar chart */}
        {[20, 35, 28, 50, 42, 60].map((h, i) => (
          <rect key={i} x={98 + i * 14} y={148 - h} width="10" height={h} rx="3" fill={i === 5 ? 'var(--color-dark)' : 'var(--color-pink)'} stroke="var(--color-dark)" strokeWidth="1" opacity="0.9" />
        ))}
        <line x1="94" y1="148" x2="186" y2="148" stroke="var(--color-dark)" strokeWidth="1.5" />
        {/* Second phone (tilted) */}
        <g transform="translate(185, 20) rotate(15)">
          <rect x="0" y="0" width="70" height="120" rx="12" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2" />
          <rect x="4" y="8" width="62" height="50" rx="3" fill="var(--color-pink)" opacity="0.5" />
          <circle cx="35" cy="33" r="14" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="1.5" />
          <text x="35" y="37" textAnchor="middle" fontSize="10" fill="var(--color-dark)">✿</text>
          <rect x="8" y="64" width="54" height="6" rx="3" fill="var(--color-dark)" opacity="0.15" />
          <rect x="8" y="74" width="40" height="6" rx="3" fill="var(--color-dark)" opacity="0.1" />
          <rect x="8" y="88" width="54" height="24" rx="6" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
          <text x="35" y="104" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="9" fill="var(--color-dark)">FOLLOW</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'peak',
    brand: 'Peak Performance',
    handle: '@peakperformance',
    industry: 'Sports & Fitness',
    bgColor: 'var(--color-blue)',
    tagColor: 'var(--color-dark)',
    platforms: ['YT', 'IG', 'LI'],
    challenge: 'Peak had ad budgets spread across Meta and Google with no unified view of ROAS, and a CRM running on spreadsheets.',
    result: 'Kalvix.ai connected both ad accounts, auto-tracked conversions and moved leads into a structured AI CRM pipeline — cutting CAC by 38%.',
    stats: [
      { value: '−38%', label: 'Cost Per Acquisition' },
      { value: '4.8×', label: 'ROAS' },
      { value: '240+', label: 'Leads (30 days)' },
      { value: '91%', label: 'Pipeline Accuracy' },
    ],
    mockup: () => (
      <svg viewBox="0 0 280 180" style={{ width: '100%', height: 'auto', maxWidth: '280px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dashboard card */}
        <rect x="20" y="10" width="240" height="160" rx="16" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
        {/* Header bar */}
        <rect x="20" y="10" width="240" height="30" rx="16" fill="var(--color-dark)" />
        <rect x="20" y="30" width="240" height="10" fill="var(--color-dark)" />
        <text x="140" y="30" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="10" fill="var(--bg-cream)">kalvix.ai / ads-dashboard</text>
        {/* Stat pills */}
        <rect x="30" y="50" width="60" height="36" rx="10" fill="var(--color-blue)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="60" y="66" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="13" fill="var(--color-dark)">4.8×</text>
        <text x="60" y="79" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="var(--color-dark)" opacity="0.7">ROAS</text>
        <rect x="100" y="50" width="60" height="36" rx="10" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="130" y="66" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="12" fill="var(--color-dark)">−38%</text>
        <text x="130" y="79" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="var(--color-dark)" opacity="0.7">CAC</text>
        <rect x="170" y="50" width="70" height="36" rx="10" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
        <text x="205" y="66" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="12" fill="var(--color-dark)">240+</text>
        <text x="205" y="79" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="var(--color-dark)" opacity="0.7">LEADS</text>
        {/* CRM pipeline */}
        <text x="30" y="105" fontFamily="monospace" fontWeight="700" fontSize="8" fill="var(--color-dark)" opacity="0.6">AI CRM PIPELINE</text>
        {['Lead', 'Qualified', 'Negotiation', 'Closed'].map((stage, i) => (
          <g key={i}>
            <rect x={30 + i * 56} y={112} width="48" height="40" rx="8" fill={['var(--color-pink)', 'var(--color-peach)', 'var(--color-yellow)', 'var(--color-green)'][i]} stroke="var(--color-dark)" strokeWidth="1.5" />
            <text x={30 + i * 56 + 24} y={127} textAnchor="middle" fontFamily="monospace" fontSize="7" fontWeight="700" fill="var(--color-dark)">{stage}</text>
            <rect x={34 + i * 56} y={132} width="40" height="8" rx="3" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="1" />
            <rect x={34 + i * 56} y={144} width="28" height="4" rx="2" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="1" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 'midas',
    brand: 'Midas Jewellery',
    handle: '@midasjewels',
    industry: 'Luxury Retail',
    bgColor: 'var(--color-yellow)',
    tagColor: 'var(--color-dark)',
    platforms: ['IG', 'TT', 'FB'],
    challenge: 'Midas needed to partner with luxury lifestyle creators but had no efficient way to vet, outreach, sign contracts and pay them.',
    result: 'With Kalvix.ai creator discovery + contract + payment workflow, they signed 6 influencer deals and went live in under a week — something that used to take a month.',
    stats: [
      { value: '6', label: 'Deals Signed' },
      { value: '< 1wk', label: 'Time to Go Live' },
      { value: '820K', label: 'Campaign Reach' },
      { value: '2.4×', label: 'Conversion Lift' },
    ],
    mockup: () => (
      <svg viewBox="0 0 280 180" style={{ width: '100%', height: 'auto', maxWidth: '280px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Contract card */}
        <rect x="30" y="15" width="160" height="150" rx="12" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
        <text x="110" y="40" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="10" fill="var(--color-dark)">COLLABORATION</text>
        <text x="110" y="52" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="10" fill="var(--color-dark)">CONTRACT</text>
        {/* Lines */}
        {[65, 76, 87, 98, 109].map((y, i) => (
          <rect key={i} x="44" y={y} width={i % 2 === 0 ? 110 : 80} height="5" rx="2" fill="var(--color-dark)" opacity="0.12" />
        ))}
        {/* Signature line */}
        <line x1="44" y1="130" x2="140" y2="130" stroke="var(--color-dark)" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="44" y="142" fontFamily="monospace" fontSize="7" fill="var(--color-dark)" opacity="0.5">Signature</text>
        {/* Signed tick */}
        <circle cx="152" cy="130" r="12" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="2" />
        <path d="M147 130 l3 3 6-6" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Creator profile card */}
        <g transform="translate(175, 10)">
          <rect x="0" y="0" width="80" height="100" rx="12" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
          <circle cx="40" cy="32" r="18" fill="var(--color-dark)" />
          <circle cx="40" cy="26" r="8" fill="var(--color-peach)" />
          <path d="M24 44 Q40 52 56 44" stroke="var(--color-peach)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="40" y="62" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="9" fill="var(--color-dark)">@luxelife</text>
          <rect x="8" y="68" width="64" height="16" rx="8" fill="var(--color-dark)" />
          <text x="40" y="80" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="8" fill="var(--bg-cream)">820K followers</text>
        </g>
        {/* Payment badge */}
        <g transform="translate(175, 120)">
          <rect x="0" y="0" width="80" height="40" rx="10" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="2" />
          <text x="40" y="14" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="8" fill="var(--color-dark)">PAID</text>
          <text x="40" y="28" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="12" fill="var(--color-dark)">₹45,000</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'solarcycle',
    brand: 'SolarCycle Energy',
    handle: '@solarcycleenergy',
    industry: 'Clean Tech',
    bgColor: 'var(--color-green)',
    tagColor: 'var(--color-dark)',
    platforms: ['LI', 'YT', 'X'],
    challenge: 'SolarCycle had inconsistent posting and zero analytics visibility. Their LinkedIn and YouTube lived in completely separate workflows.',
    result: 'Kalvix.ai unified all channels, automated weekly content publishing and surfaced unified analytics — growing LinkedIn followers 4× in 90 days.',
    stats: [
      { value: '4×', label: 'LinkedIn Growth' },
      { value: '90', label: 'Days' },
      { value: '52K', label: 'New Followers' },
      { value: '−6hrs', label: 'Saved / Week' },
    ],
    mockup: () => (
      <svg viewBox="0 0 280 180" style={{ width: '100%', height: 'auto', maxWidth: '280px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Content calendar grid */}
        <rect x="20" y="10" width="240" height="160" rx="14" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
        <text x="140" y="28" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="9" fill="var(--color-dark)" opacity="0.6">CONTENT CALENDAR — JUNE</text>
        {/* Day headers */}
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d, i) => (
          <text key={i} x={36 + i * 32} y={44} textAnchor="middle" fontFamily="monospace" fontSize="7" fontWeight="700" fill="var(--color-dark)" opacity="0.5">{d}</text>
        ))}
        {/* Calendar cells */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((cell, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const scheduled = [1,3,5,7,8,10,12].includes(i);
          const platforms = [['LI','YT'], ['X'], ['LI'], ['YT','X'], ['LI'], ['X','LI'], ['YT']];
          const platIdx = [1,3,5,7,8,10,12].indexOf(i);
          return (
            <g key={i}>
              <rect x={22 + col * 32} y={50 + row * 46} width="28" height="38" rx="6"
                fill={scheduled ? 'var(--color-green)' : 'var(--color-dark)'}
                stroke="var(--color-dark)" strokeWidth="1.5" opacity={scheduled ? 1 : 0.08} />
              {scheduled && platIdx >= 0 && platforms[platIdx].map((pl, pi) => (
                <rect key={pi} x={24 + col * 32} y={54 + row * 46 + pi * 12} width="24" height="10" rx="3"
                  fill="var(--color-dark)" opacity="0.25" />
              ))}
              {scheduled && platIdx >= 0 && platforms[platIdx].map((pl, pi) => (
                <text key={pi} x={36 + col * 32} y={62 + row * 46 + pi * 12}
                  textAnchor="middle" fontFamily="monospace" fontSize="6" fontWeight="800" fill="var(--color-dark)">{pl}</text>
              ))}
            </g>
          );
        })}
        {/* Follower growth badge */}
        <rect x="188" y="100" width="60" height="60" rx="12" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
        <text x="218" y="122" textAnchor="middle" fontFamily="monospace" fontWeight="800" fontSize="16" fill="var(--color-dark)">4×</text>
        <text x="218" y="134" textAnchor="middle" fontFamily="monospace" fontSize="7" fontWeight="700" fill="var(--color-dark)" opacity="0.7">GROWTH</text>
        <text x="218" y="148" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="var(--color-dark)" opacity="0.6">in 90 days</text>
      </svg>
    ),
  },
];

// ── Tag pill ──────────────────────────────────────────────────────────────────

function PlatformPill({ label }: { label: string }) {
  return (
    <span style={{
      backgroundColor: 'var(--color-dark)',
      color: 'var(--bg-cream)',
      fontFamily: 'var(--font-oswald)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      padding: '3px 10px',
      borderRadius: '999px',
    }}>{label}</span>
  );
}

export function Portfolio() {
  const [activeId, setActiveId] = useState<string>(CASES[0].id);
  const activeCase = CASES.find((c) => c.id === activeId)!;
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-yellow)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="portfolio"
        style={{
          backgroundColor: 'var(--color-yellow)',
          paddingTop: isMobile ? '48px' : '96px',
          paddingBottom: isMobile ? '48px' : '96px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '60px' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker purple"
                style={{ display: 'inline-flex', marginBottom: '16px', transform: 'rotate(-3deg)' }}
              >
                Case Studies
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
              {"Real brands.\nReal results."}
            </TextReveal>
            <ScrollReveal delay={200}>
              <p style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: isMobile ? '15px' : '17px',
                fontWeight: 500,
                opacity: 0.65,
                maxWidth: '460px',
                margin: '16px auto 0',
                lineHeight: 1.6,
              }}>
                See how teams use Kalvix.ai to grow faster, save time and run campaigns that actually convert.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Tab selector with Arrows ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '12px' : '20px',
            marginBottom: isMobile ? '24px' : '40px',
          }}>
            {/* Left Arrow Button */}
            <button
              onClick={() => {
                const currentIndex = CASES.findIndex((c) => c.id === activeId);
                const prevIndex = (currentIndex - 1 + CASES.length) % CASES.length;
                setActiveId(CASES[prevIndex].id);
              }}
              aria-label="Previous Case Study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '38px' : '44px',
                height: isMobile ? '38px' : '44px',
                border: '2px solid var(--color-dark)',
                borderRadius: '50%',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-white-pure)',
                color: 'var(--color-dark)',
                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '3px 3px 0 0 var(--color-dark)',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '5px 5px 0 0 var(--color-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--color-dark)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(2px)';
                e.currentTarget.style.boxShadow = '1px 1px 0 0 var(--color-dark)';
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Tab selector pills */}
            <div style={{
              display: 'flex',
              gap: isMobile ? '8px' : '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {CASES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    fontSize: isMobile ? '13px' : '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    border: '2px solid var(--color-dark)',
                    borderRadius: '999px',
                    padding: isMobile ? '8px 16px' : '10px 22px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: activeId === c.id ? 'var(--color-dark)' : 'transparent',
                    color: activeId === c.id ? 'var(--bg-cream)' : 'var(--color-dark)',
                    boxShadow: activeId === c.id ? '3px 3px 0 0 rgba(24,26,18,0.3)' : 'none',
                  }}
                >
                  {c.brand}
                </button>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => {
                const currentIndex = CASES.findIndex((c) => c.id === activeId);
                const nextIndex = (currentIndex + 1) % CASES.length;
                setActiveId(CASES[nextIndex].id);
              }}
              aria-label="Next Case Study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '38px' : '44px',
                height: isMobile ? '38px' : '44px',
                border: '2px solid var(--color-dark)',
                borderRadius: '50%',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-white-pure)',
                color: 'var(--color-dark)',
                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '3px 3px 0 0 var(--color-dark)',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '5px 5px 0 0 var(--color-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--color-dark)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(2px)';
                e.currentTarget.style.boxShadow = '1px 1px 0 0 var(--color-dark)';
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* ── Active case study ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                  gap: isMobile ? '24px' : '32px',
                  alignItems: 'stretch',
                }}
                className="case-grid"
              >
                {/* ── Left: Mockup card ── */}
                <div
                  style={{
                    border: '2px solid var(--color-dark)',
                    borderRadius: '24px',
                    backgroundColor: activeCase.bgColor,
                    boxShadow: isMobile ? '4px 4px 0 0 var(--color-dark)' : '6px 6px 0 0 var(--color-dark)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '24px 16px' : '40px 24px',
                    gap: '20px',
                    minHeight: isMobile ? '260px' : '340px',
                  }}
                >
                  {/* Brand identifier */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', flexWrap: 'wrap' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: 'var(--color-dark)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px', color: activeCase.bgColor }}>
                        {activeCase.brand[0]}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: 'var(--color-dark)' }}>{activeCase.brand}</div>
                      <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '12px', color: 'var(--color-dark)', opacity: 0.6 }}>{activeCase.handle}</div>
                    </div>
                    <div style={{ marginLeft: isMobile ? '0' : 'auto', display: 'flex', gap: '6px' }}>
                      {activeCase.platforms.map((p) => <PlatformPill key={p} label={p} />)}
                    </div>
                  </div>

                  {/* Mockup SVG */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <activeCase.mockup />
                  </div>
                </div>

                {/* ── Right: Story + stats ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px' }}>

                  {/* Industry tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      backgroundColor: activeCase.bgColor,
                      border: '2px solid var(--color-dark)',
                      borderRadius: '999px',
                      padding: '4px 14px',
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 700,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      color: 'var(--color-dark)',
                      boxShadow: '2px 2px 0 0 var(--color-dark)',
                    }}>
                      {activeCase.industry}
                    </span>
                  </div>

                  {/* Challenge */}
                  <div style={{ border: '2px solid var(--color-dark)', borderRadius: '16px', padding: isMobile ? '16px 20px' : '20px 24px', backgroundColor: 'var(--bg-white-pure)', boxShadow: '3px 3px 0 0 var(--color-dark)' }}>
                    <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5, marginBottom: '8px' }}>The Challenge</div>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '14px' : '15px', lineHeight: 1.6, color: 'var(--color-dark)' }}>
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* Result */}
                  <div style={{ border: '2px solid var(--color-dark)', borderRadius: '16px', padding: isMobile ? '16px 20px' : '20px 24px', backgroundColor: activeCase.bgColor, boxShadow: '3px 3px 0 0 var(--color-dark)' }}>
                    <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, marginBottom: '8px' }}>The Result</div>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '14px' : '15px', lineHeight: 1.6, color: 'var(--color-dark)' }}>
                      {activeCase.result}
                    </p>
                  </div>

                  {/* Stats grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '8px' : '12px' }}>
                    {activeCase.stats.map((stat, i) => (
                      <div
                        key={i}
                        style={{
                          border: '2px solid var(--color-dark)',
                          borderRadius: '16px',
                          padding: isMobile ? '12px 14px' : '16px 20px',
                          backgroundColor: i % 2 === 0 ? 'var(--color-dark)' : 'var(--bg-white-pure)',
                          boxShadow: '3px 3px 0 0 ' + (i % 2 === 0 ? 'rgba(24,26,18,0.3)' : 'var(--color-dark)'),
                          textAlign: 'center',
                        }}
                      >
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontSize: isMobile ? '22px' : '28px',
                          color: i % 2 === 0 ? 'var(--bg-cream)' : 'var(--color-dark)',
                        }}>
                          {stat.value}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-oswald)',
                          fontWeight: 700,
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          color: i % 2 === 0 ? 'var(--bg-cream)' : 'var(--color-dark)',
                          opacity: 0.7,
                          marginTop: '4px',
                        }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Dot navigation ── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: isMobile ? '24px' : '40px' }}>
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                style={{
                  width: activeId === c.id ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: activeId === c.id ? 'var(--color-dark)' : 'rgba(24,26,18,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
