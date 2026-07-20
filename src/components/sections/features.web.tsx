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
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none">
        <defs>
          <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagram-grad)" />
        <g transform="translate(4.8, 4.8) scale(0.6)">
          <path
            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
            fill="white"
          />
        </g>
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
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none">
        <rect width="24" height="24" rx="6" fill="white" />
        <g transform="translate(3, 3) scale(0.75)">
          <path
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
            fill="#ff0000"
          />
          <path
            d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            fill="white"
          />
        </g>
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
      <svg viewBox="0 0 16 16" width="38" height="38" fill="none">
        <rect width="16" height="16" rx="4" fill="#0165e1" />
        <g transform="translate(3.2, 3.2) scale(0.6)">
          <path
            fillRule="evenodd"
            d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
            fill="white"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'Google Ads',
    bg: '#fffde7',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none">
        <rect width="24" height="24" rx="6" fill="white" />
        <g transform="translate(3.6, 3.6) scale(0.7)">
          <path
            d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z"
            fill="#4285F4"
          />
          <path
            d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z"
            fill="#F9BC05"
          />
          <path
            d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"
            fill="#34A853"
          />
        </g>
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
      <svg viewBox="0 0 16 16" width="38" height="38" fill="none">
        <rect width="16" height="16" rx="4" fill="#fffc00"/>
        <g transform="translate(2.4, 2.4) scale(0.7)">
          <path
            d="M 15.943 11.526 c -.111 -.303 -.323 -.465 -.564 -.599 a 1 1 0 0 0 -.123 -.064 l -.219 -.111 c -.752 -.399 -1.339 -.902 -1.746 -1.498 a 3.4 3.4 0 0 1 -.3 -.531 c -.034 -.1 -.032 -.156 -.008 -.207 a .3 .3 0 0 1 .097 -.1 c .129 -.086 .262 -.173 .352 -.231 c .162 -.104 .289 -.187 .371 -.245 c .309 -.216 .525 -.446 .66 -.702 a 1.4 1.4 0 0 0 .069 -1.16 c -.205 -.538 -.713 -.872 -1.329 -.872 a 1.8 1.8 0 0 0 -.487 .065 c .006 -.368 -.002 -.757 -.035 -1.139 c -.116 -1.344 -.587 -2.048 -1.077 -2.61 a 4.3 4.3 0 0 0 -1.095 -.881 C 9.764 .216 8.92 0 7.999 0 s -1.76 .216 -2.505 .641 c -.412 .232 -.782 .53 -1.097 .883 c -.49 .562 -.96 1.267 -1.077 2.61 c -.033 .382 -.04 .772 -.036 1.138 a 1.8 1.8 0 0 0 -.487 -.065 c -.615 0 -1.124 .335 -1.328 .873 a 1.4 1.4 0 0 0 .067 1.161 c .136 .256 .352 .486 .66 .701 c .082 .058 .21 .14 .371 .246 l .339 .221 a .4 .4 0 0 1 .109 .11 c .026 .053 .027 .11 -.012 .217 a 3.4 3.4 0 0 1 -.295 .52 c -.398 .583 -.968 1.077 -1.696 1.472 c -.385 .204 -.786 .34 -.955 .8 c -.128 .348 -.044 .743 .28 1.075 q .18 .189 .409 .31 a 4.4 4.4 0 0 0 1 .4 a .7 .7 0 0 1 .202 .09 c .118 .104 .102 .26 .259 .488 q .12 .178 .296 .3 c .33 .229 .701 .243 1.095 .258 c .355 .014 .758 .03 1.217 .18 c .19 .064 .389 .186 .618 .328 c .55 .338 1.305 .802 2.566 .802 c 1.262 0 2.02 -.466 2.576 -.806 c .227 -.14 .424 -.26 .609 -.321 c .46 -.152 .863 -.168 1.218 -.181 c .393 -.015 .764 -.03 1.095 -.258 a 1.14 1.14 0 0 0 .336 -.368 c .114 -.192 .11 -.327 .217 -.42 a .6 .6 0 0 1 .19 -.087 a 4.5 4.5 0 0 0 1.014 -.404 c .16 -.087 .306 -.2 .429 -.336 l .004 -.005 c .304 -.325 .38 -.709 .256 -1.047 z"
            fill="white"
            stroke="#181a12"
            strokeWidth="1.0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
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
            Most businesses use 5–10 different tools to manage marketing and sales, Mauxis brings everything together into one intelligent growth platform.
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
