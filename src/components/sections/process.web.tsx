import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

// ── Per-step inline SVG illustrations ────────────────────────────────────────

function ConnectIllustration() {
  return (
    <svg viewBox="-25 -25 310 270" style={{ width: '100%', height: '100%', maxWidth: '260px', maxHeight: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Agenius node */}
      <circle cx="130" cy="110" r="36" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <text x="130" y="106" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="800" fontSize="10" fill="var(--color-dark)">Mauxis.ai</text>
      <text x="130" y="120" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="9" fill="var(--color-dark)" opacity="0.6">Dashboard</text>

      {/* Connection lines */}
      {[
        { cx: 40,  cy: 40,  label: 'IG',  color: 'var(--color-pink)' },
        { cx: 220, cy: 40,  label: 'TT',  color: 'var(--color-dark)' },
        { cx: 20,  cy: 130, label: 'YT',  color: '#ff6b6b' },
        { cx: 240, cy: 130, label: 'LI',  color: 'var(--color-blue)' },
        { cx: 55,  cy: 200, label: 'X',   color: 'var(--color-dark)' },
        { cx: 205, cy: 200, label: 'GA',  color: 'var(--color-purple)' },
        { cx: 130, cy: 10,  label: 'FB',  color: 'var(--color-blue)' },
      ].map(({ cx, cy, label, color }, i) => (
        <g key={i}>
          <line
            x1="130" y1="110" x2={cx} y2={cy}
            stroke="var(--color-dark)" strokeWidth="1.5"
            strokeDasharray="5 4" opacity="0.35"
          />
          {/* Animated dot on line */}
          <circle cx={130 + (cx - 130) * 0.6} cy={110 + (cy - 110) * 0.6} r="3"
            fill="var(--color-dark)" opacity="0.4"
          />
          <circle cx={cx} cy={cy} r="22"
            fill={color} stroke="var(--color-dark)" strokeWidth="2.5"
          />
          <text x={cx} y={cy + 4}
            textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="800"
            fontSize="10" fill={color === 'var(--color-dark)' ? 'var(--bg-cream)' : 'var(--color-dark)'}
          >
            {label}
          </text>
          {/* Connected tick */}
          <circle cx={cx + 14} cy={cy - 14} r="8"
            fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5"
          />
          <path d={`M${cx + 10} ${cy - 14} l2.5 2.5 4.5-4.5`}
            stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}

function DiscoverIllustration() {
  const creators = [
    { x: 30,  y: 20,  name: '@luxelife',  followers: '820K', score: 98, color: 'var(--color-pink)' },
    { x: 150, y: 10,  name: '@fitnation', followers: '1.2M', score: 95, color: 'var(--color-purple)' },
    { x: 30,  y: 130, name: '@solardiy',  followers: '440K', score: 89, color: 'var(--color-green)' },
    { x: 150, y: 120, name: '@techsavvy', followers: '2.1M', score: 97, color: 'var(--color-yellow)' },
  ];
  return (
    <svg viewBox="0 -10 280 280" style={{ width: '100%', height: '100%', maxWidth: '280px', maxHeight: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Search bar */}
      <rect x="10" y="0" width="260" height="32" rx="16" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2" />
      <text x="26" y="20" fontFamily="var(--font-oswald)" fontSize="10" fontWeight="700" fill="var(--color-dark)" opacity="0.5">Search creators by niche, platform, reach...</text>
      <circle cx="256" cy="16" r="10" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <circle cx="254" cy="14" r="4" fill="none" stroke="var(--color-dark)" strokeWidth="1.5" />
      <line x1="257" y1="17" x2="261" y2="21" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Filter pills */}
      {['Fitness', 'Beauty', '>500K', 'ER > 5%'].map((f, i) => (
        <g key={i}>
          <rect x={10 + i * 64} y={40} width={56} height={18} rx={9}
            fill={i === 0 ? 'var(--color-dark)' : 'var(--bg-white-pure)'}
            stroke="var(--color-dark)" strokeWidth="1.5"
          />
          <text x={10 + i * 64 + 28} y={52} textAnchor="middle"
            fontFamily="var(--font-oswald)" fontWeight="700" fontSize="8"
            fill={i === 0 ? 'var(--bg-cream)' : 'var(--color-dark)'}
          >
            {f}
          </text>
        </g>
      ))}

      {/* Creator cards */}
      {creators.map(({ x, y, name, followers, score, color }, i) => (
        <g key={i} transform={`translate(${x}, ${y + 65})`}>
          <rect x="0" y="0" width="118" height="78" rx="12"
            fill={color} stroke="var(--color-dark)" strokeWidth="2"
          />
          {/* Avatar */}
          <circle cx="20" cy="20" r="13" fill="var(--color-dark)" />
          <circle cx="20" cy="16" r="6" fill={color} />
          <path d={`M8 28 Q20 34 32 28`} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Info */}
          <text x="38" y="16" fontFamily="var(--font-oswald)" fontWeight="800" fontSize="9" fill="var(--color-dark)">{name}</text>
          <text x="38" y="27" fontFamily="monospace" fontSize="8" fill="var(--color-dark)" opacity="0.7">{followers} followers</text>
          {/* Score bar */}
          <rect x="8" y="38" width="102" height="8" rx="4" fill="rgba(24,26,18,0.15)" />
          <rect x="8" y="38" width={score} height="8" rx="4" fill="var(--color-dark)" opacity="0.7" />
          <text x="114" y="46" textAnchor="end" fontFamily="monospace" fontWeight="800" fontSize="8" fill="var(--color-dark)">{score}</text>
          {/* CTA */}
          <rect x="8" y="54" width="102" height="16" rx="8" fill="var(--color-dark)" />
          <text x="59" y="65" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="8" fill="var(--bg-cream)">Outreach →</text>
        </g>
      ))}
    </svg>
  );
}

function CampaignIllustration() {
  return (
    <svg viewBox="0 0 280 220" style={{ width: '100%', height: '100%', maxWidth: '280px', maxHeight: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main compose window */}
      <rect x="10" y="10" width="185" height="195" rx="14" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Title bar */}
      <rect x="10" y="10" width="185" height="28" rx="14" fill="var(--color-dark)" />
      <rect x="10" y="28" width="185" height="10" fill="var(--color-dark)" />
      <text x="102" y="27" textAnchor="middle" fontFamily="var(--font-oswald)" fontSize="9" fontWeight="700" fill="var(--bg-cream)">New Campaign</text>

      {/* Post content area */}
      <rect x="18" y="46" width="170" height="80" rx="8" fill="var(--bg-cream)" stroke="var(--color-dark)" strokeWidth="1.5" />
      {[55, 68, 80, 92, 104].map((y, i) => (
        <rect key={i} x="24" y={y} width={i % 3 === 2 ? 80 : 148} height="6" rx="3"
          fill="var(--color-dark)" opacity={0.12 + i * 0.03}
        />
      ))}
      {/* Image placeholder */}
      <rect x="18" y="132" width="80" height="56" rx="8" fill="var(--color-peach)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <text x="58" y="164" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="var(--color-dark)" opacity="0.4">🖼</text>

      {/* Publish to platforms row */}
      <text x="110" y="144" fontFamily="var(--font-oswald)" fontSize="9" fontWeight="700" fill="var(--color-dark)" opacity="0.5">PUBLISH TO</text>
      {[
        { label: 'IG', on: true, color: 'var(--color-pink)' },
        { label: 'TT', on: true, color: 'var(--color-dark)' },
        { label: 'YT', on: false, color: '#ff6b6b' },
        { label: 'LI', on: true, color: 'var(--color-blue)' },
      ].map(({ label, on, color }, i) => (
        <g key={i}>
          <circle cx={110 + i * 22} cy={160} r="9"
            fill={on ? color : 'rgba(24,26,18,0.08)'}
            stroke="var(--color-dark)" strokeWidth="1.5"
          />
          <text x={110 + i * 22} y={164} textAnchor="middle"
            fontFamily="monospace" fontWeight="800" fontSize="7"
            fill={on && color === 'var(--color-dark)' ? 'var(--bg-cream)' : on ? 'var(--color-dark)' : 'var(--color-dark)'}
            opacity={on ? 1 : 0.3}
          >
            {label}
          </text>
        </g>
      ))}

      {/* Schedule row */}
      <rect x="18" y="178" width="175" height="22" rx="8" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <text x="105" y="192" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="800" fontSize="9" fill="var(--color-dark)">Schedule — Mon 9:00 AM</text>

      {/* Right panel: Scheduled queue */}
      <rect x="205" y="10" width="68" height="195" rx="12" fill="var(--bg-cream)" stroke="var(--color-dark)" strokeWidth="2" />
      <text x="239" y="26" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="7" fill="var(--color-dark)" opacity="0.5">QUEUE</text>
      {[
        { color: 'var(--color-pink)', day: 'MON' },
        { color: 'var(--color-purple)', day: 'TUE' },
        { color: 'var(--color-green)', day: 'WED' },
        { color: 'var(--color-yellow)', day: 'THU' },
      ].map(({ color, day }, i) => (
        <g key={i} transform={`translate(212, ${34 + i * 42})`}>
          <rect x="0" y="0" width="54" height="34" rx="8" fill={color} stroke="var(--color-dark)" strokeWidth="1.5" />
          <text x="27" y="14" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="800" fontSize="8" fill="var(--color-dark)">{day}</text>
          <rect x="4" y="18" width="46" height="5" rx="2" fill="var(--color-dark)" opacity="0.2" />
          <rect x="4" y="26" width="30" height="4" rx="2" fill="var(--color-dark)" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

function AnalyticsIllustration() {
  const bars = [30, 48, 40, 65, 55, 80, 72, 90, 82, 95];
  return (
    <svg viewBox="0 0 280 220" style={{ width: '100%', height: '100%', maxWidth: '280px', maxHeight: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main dashboard card */}
      <rect x="10" y="10" width="260" height="200" rx="14" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Header */}
      <rect x="10" y="10" width="260" height="26" rx="14" fill="var(--color-dark)" />
      <rect x="10" y="26" width="260" height="10" fill="var(--color-dark)" />
      <text x="140" y="26" textAnchor="middle" fontFamily="var(--font-oswald)" fontSize="9" fontWeight="700" fill="var(--bg-cream)">Unified Analytics Dashboard</text>

      {/* KPI row */}
      {[
        { label: 'Total Reach', value: '4.2M', color: 'var(--color-yellow)' },
        { label: 'ROAS', value: '4.8×', color: 'var(--color-green)' },
        { label: 'New Leads', value: '240', color: 'var(--color-purple)' },
        { label: 'Conversions', value: '91%', color: 'var(--color-pink)' },
      ].map(({ label, value, color }, i) => (
        <g key={i}>
          <rect x={18 + i * 60} y={44} width="52" height="36" rx="8"
            fill={color} stroke="var(--color-dark)" strokeWidth="1.5"
          />
          <text x={44 + i * 60} y={60} textAnchor="middle"
            fontFamily="var(--font-display)" fontWeight="800" fontSize="13"
            fill="var(--color-dark)"
          >
            {value}
          </text>
          <text x={44 + i * 60} y={72} textAnchor="middle"
            fontFamily="monospace" fontSize="6" fill="var(--color-dark)" opacity="0.65"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Bar chart */}
      <line x1="18" y1="188" x2="262" y2="188" stroke="var(--color-dark)" strokeWidth="1.5" opacity="0.2" />
      {bars.map((h, i) => (
        <g key={i}>
          <rect
            x={18 + i * 24} y={188 - h} width="18" height={h} rx="4"
            fill={i === 9 ? 'var(--color-dark)' : 'var(--color-purple)'}
            stroke="var(--color-dark)" strokeWidth="1" opacity={0.85}
          />
        </g>
      ))}

      {/* Trend line over bars */}
      <polyline
        points={bars.map((h, i) => `${27 + i * 24},${188 - h}`).join(' ')}
        stroke="var(--color-pink)" strokeWidth="2.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Growth badge */}
      <rect x="205" y="92" width="58" height="28" rx="10"
        fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5"
      />
      <text x="234" y="110" textAnchor="middle"
        fontFamily="var(--font-oswald)" fontWeight="800" fontSize="11"
        fill="var(--color-dark)"
      >
        +124% ↑
      </text>

      {/* Platform labels */}
      {['IG','TT','YT','LI','X','FB','GA','IG','TT','YT'].map((pl, i) => (
        <text key={i} x={27 + i * 24} y={200}
          textAnchor="middle" fontFamily="monospace" fontSize="6"
          fill="var(--color-dark)" opacity="0.4"
        >
          {pl}
        </text>
      ))}
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 280 220" style={{ width: '100%', height: '100%', maxWidth: '280px', maxHeight: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket */}
      <g transform="translate(100, 20) rotate(-20)">
        <ellipse cx="40" cy="60" rx="22" ry="50" fill="var(--color-dark)" stroke="var(--color-dark)" strokeWidth="2" />
        <polygon points="40,0 18,30 62,30" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
        <ellipse cx="40" cy="62" rx="12" ry="12" fill="var(--color-blue)" stroke="var(--color-dark)" strokeWidth="2" />
        <polygon points="18,90 0,115 40,100" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="2" />
        <polygon points="62,90 80,115 40,100" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="2" />
        {/* Flame */}
        <ellipse cx="40" cy="116" rx="10" ry="18" fill="var(--color-yellow)" opacity="0.8" />
        <ellipse cx="40" cy="118" rx="6" ry="12" fill="#ff6b6b" opacity="0.7" />
      </g>
      {/* Stars / particles */}
      {[
        [30, 40], [240, 60], [20, 140], [255, 100], [60, 180],
        [220, 170], [140, 10], [80, 90], [200, 130]
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.5}
          fill={['var(--color-yellow)', 'var(--color-pink)', 'var(--color-purple)', 'var(--color-green)'][i % 4]}
          stroke="var(--color-dark)" strokeWidth="1.5"
        />
      ))}
      {/* Upward metrics */}
      <g transform="translate(10, 140)">
        <rect x="0" y="0" width="110" height="70" rx="12" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
        <text x="55" y="22" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="9" fill="var(--color-dark)" opacity="0.6">MONTHLY REACH</text>
        <text x="55" y="44" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="24" fill="var(--color-dark)">10M+</text>
        <text x="55" y="59" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="9" fill="var(--color-dark)" opacity="0.7">across all platforms ↑</text>
      </g>
      <g transform="translate(155, 155)">
        <rect x="0" y="0" width="110" height="55" rx="12" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="2" />
        <text x="55" y="18" textAnchor="middle" fontFamily="var(--font-oswald)" fontWeight="700" fontSize="9" fill="var(--color-dark)" opacity="0.6">SAVED / WEEK</text>
        <text x="55" y="40" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="22" fill="var(--color-dark)">6+ hrs</text>
      </g>
    </svg>
  );
}

// ── Step data ─────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: 1,
    label: 'Connect',
    title: 'Connect All Your Accounts',
    accentColor: 'var(--color-yellow)',
    description:
      'Link your social media accounts, advertising platforms, WhatsApp, website and CRM to create a single source of truth for your growth operations.',
    detail: [
      'Connect Instagram, Facebook, LinkedIn & YouTube',
      'Connect Meta Ads & Google Ads',
      'Connect WhatsApp Business',
      'Import existing leads & customers',
    ],
    illustration: (
      <img
        src={require('../../../images/illustrations/connect_all_your_accounts.png')}
        alt="Connect All Your Accounts"
        style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
      />
    ),
  },
  {
    num: 2,
    label: 'Create',
    title: 'Create Content & Campaigns',
    accentColor: 'var(--color-purple)',
    description:
      'Generate images, videos, captions, ads and marketing campaigns using AI. Build weeks of content in minutes.',
    detail: [
      'AI image generation',
      'AI video creation',
      'Captions & hashtags',
      'Ad creatives & copy',
      'Content calendar',
    ],
    illustration: (
      <img
        src={require('../../../images/illustrations/create_content_campaigns.png')}
        alt="Create Content & Campaigns"
        style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
      />
    ),
  },
  {
    num: 3,
    label: 'Publish',
    title: 'Launch Across Every Channel',
    accentColor: 'var(--color-green)',
    description:
      'Publish content, activate ad campaigns and collaborate with creators from one dashboard.',
    detail: [
      'Cross-platform publishing',
      'Meta & Google Ads',
      'Influencer campaign management',
      'Campaign scheduling',
      'Performance tracking',
    ],
    illustration: (
      <img
        src={require('../../../images/illustrations/launch_across_every_channel.png')}
        alt="Launch Across Every Channel"
        style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
      />
    ),
  },
  {
    num: 4,
    label: 'Convert',
    title: 'Turn Engagement Into Revenue',
    accentColor: 'var(--color-blue)',
    description:
      'Automatically collect leads, qualify prospects and follow up through AI-powered automation.',
    detail: [
      'Lead capture automation',
      'AI lead scoring',
      'WhatsApp automation',
      'SMS & email follow-ups',
      'AI calling workflows',
    ],
    illustration: (
      <img
        src={require('../../../images/illustrations/turn_engagement_into_revenue.webp')}
        alt="Turn Engagement Into Revenue"
        style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
      />
    ),
  },
  {
    num: 5,
    label: 'Scale',
    title: 'Optimize What Works',
    accentColor: 'var(--color-pink)',
    description:
      'Track revenue, campaign performance, creator ROI and sales activity to continuously improve results.',
    detail: [
      'Revenue analytics',
      'Sales dashboards',
      'Creator performance tracking',
      'Marketing attribution',
      'Growth recommendations',
    ],
    illustration: (
      <img
        src={require('../../../images/illustrations/optimize_what_works.png')}
        alt="Optimize What Works"
        style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
      />
    ),
  },
];

// ── Main export ───────────────────────────────────────────────────────────────

export function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const { isMobile, isTablet, isTabletLarge } = useBreakpoint();
  const isTabletAny = isTablet || isTabletLarge;

  useEffect(() => {
    // Programmatically preload all illustrations into browser memory
    const imagesToPreload = [
      require('../../../images/illustrations/connect_all_your_accounts.png'),
      require('../../../images/illustrations/create_content_campaigns.png'),
      require('../../../images/illustrations/launch_across_every_channel.png'),
      require('../../../images/illustrations/turn_engagement_into_revenue.webp'),
      require('../../../images/illustrations/optimize_what_works.png'),
    ];

    imagesToPreload.forEach((src) => {
      if (typeof window !== 'undefined') {
        const img = new window.Image();
        const resolvedSrc = typeof src === 'string' ? src : (src.default || src.uri || src);
        if (resolvedSrc) {
          img.src = resolvedSrc;
        }
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev % STEPS.length) + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const current = STEPS[activeStep - 1];

  return (
    <>
      {/* Preload images to prevent flashing on switch */}
      <div style={{ display: 'none' }}>
        <img src={require('../../../images/illustrations/connect_all_your_accounts.png')} alt="" />
        <img src={require('../../../images/illustrations/create_content_campaigns.png')} alt="" />
        <img src={require('../../../images/illustrations/launch_across_every_channel.png')} alt="" />
        <img src={require('../../../images/illustrations/turn_engagement_into_revenue.webp')} alt="" />
        <img src={require('../../../images/illustrations/optimize_what_works.png')} alt="" />
      </div>
      <div style={{ width: '100%', color: 'var(--color-blue)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="process"
        style={{
          backgroundColor: 'var(--color-blue)',
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
                className="badge-sticker green"
                style={{ display: 'inline-flex', marginBottom: '16px', transform: 'rotate(-4deg)' }}
              >
                How it works
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
              {"Up and running\nin five steps."}
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
                From your first campaign to automated lead generation and sales growth, Mauxis helps you launch, manage, and scale from one platform.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Step number switcher ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '8px' : '0px',
              marginBottom: isMobile ? '32px' : '48px',
              position: 'relative',
            }}
          >
            {/* Connecting line behind pills */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '18px' : '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: '2px',
              backgroundColor: 'var(--color-dark)',
              opacity: 0.12,
              zIndex: 0,
            }} />

            {STEPS.map((step) => {
              const isActive = activeStep === step.num;
              const isPast = activeStep > step.num;
              const circleSize = isMobile ? '36px' : '48px';
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: isMobile ? '0 4px' : '0 20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Circle */}
                  <div style={{
                    width: circleSize,
                    height: circleSize,
                    borderRadius: '50%',
                    border: '2px solid var(--color-dark)',
                    backgroundColor: isActive ? 'var(--color-dark)' : isPast ? step.accentColor : 'var(--bg-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: isActive ? '3px 3px 0 0 rgba(24,26,18,0.3)' : 'none',
                  }}>
                    {isPast && !isActive ? (
                      <svg viewBox="0 0 16 16" width={isMobile ? '12' : '16'} height={isMobile ? '12' : '16'}>
                        <path d="M3 8l3.5 3.5L13 5" stroke="var(--color-dark)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span style={{
                        fontFamily: 'var(--font-oswald)',
                        fontWeight: 800,
                        fontSize: isMobile ? '14px' : '18px',
                        color: isActive ? 'var(--bg-cream)' : 'var(--color-dark)',
                      }}>
                        {step.num}
                      </span>
                    )}
                  </div>
                  {/* Label */}
                  {!isMobile && (
                    <span style={{
                      fontFamily: 'var(--font-oswald)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: 'var(--color-dark)',
                      opacity: isActive ? 1 : 0.45,
                      transition: 'opacity 0.2s ease',
                    }}>
                      {step.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Interactive card ── */}
          <div
            className="neo-card"
            style={{
              backgroundColor: 'var(--bg-white-pure)',
              display: 'grid',
              gridTemplateColumns: isMobile || isTabletAny ? '1fr' : '1.1fr 1fr',
              gap: isMobile ? '32px' : isTabletAny ? '24px' : '48px',
              padding: isMobile ? '24px 16px' : isTabletAny ? '36px' : '52px',
              alignItems: isMobile || isTabletAny ? 'start' : 'center',
              height: 'auto',
              minHeight: isMobile ? '700px' : isTabletAny ? '760px' : '520px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent stripe */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '6px',
              backgroundColor: current.accentColor,
              transition: 'background-color 0.4s ease',
            }} />

            {/* ── Left: Text ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Step tag */}
                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: current.accentColor,
                    border: '2px solid var(--color-dark)',
                    borderRadius: '999px',
                    padding: '4px 16px',
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '2px 2px 0 0 var(--color-dark)',
                  }}>
                    Step {current.num} — {current.label}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '24px' : 'min(4vw, 34px)',
                  fontWeight: 800,
                  color: 'var(--color-dark)',
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  {current.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: isMobile ? '14px' : '15px',
                  lineHeight: 1.65,
                  color: 'var(--color-dark)',
                  opacity: 0.75,
                  margin: 0,
                }}>
                  {current.description}
                </p>

                {/* Detail bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {current.detail.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        backgroundColor: current.accentColor,
                        border: '2px solid var(--color-dark)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <svg viewBox="0 0 10 10" width="10" height="10">
                          <path d="M2 5l2 2 4-4" stroke="var(--color-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '13px' : '14px', fontWeight: 600, color: 'var(--color-dark)' }}>
                        {d}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Next step button */}
                <button
                  onClick={() => setActiveStep(activeStep === STEPS.length ? 1 : activeStep + 1)}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                    border: '2px solid var(--color-dark)',
                    borderRadius: '999px',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    color: 'var(--color-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(24,26,18,0.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {activeStep === STEPS.length ? 'Restart Tour' : `Next: ${STEPS[activeStep].label}`}
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* ── Right: Illustration ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: isMobile ? '220px' : isTabletAny ? '260px' : '320px',
              overflow: 'hidden',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.88, rotate: 4 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  {current.illustration}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
