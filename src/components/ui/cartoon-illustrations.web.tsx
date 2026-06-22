import React from 'react';

// Common SVG props
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// 1. Fast & Reliable Delivery (Character riding a clock)
export function DeliveryIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Background shape */}
      <path d="M15,50 C15,25 35,15 50,15 C75,15 85,35 85,50 C85,75 65,85 50,85 C25,85 15,75 15,50 Z" fill="var(--color-green)" opacity="0.3" />
      {/* Clock Face */}
      <circle cx="50" cy="60" r="22" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <circle cx="50" cy="60" r="17" stroke="var(--color-dark)" strokeWidth="1" strokeDasharray="3 3" />
      {/* Clock Hands */}
      <path d="M50,60 L50,48" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50,60 L62,60" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Character riding clock */}
      <path d="M35,32 C35,28 38,25 42,25 C46,25 49,28 49,32 C49,36 46,39 42,39 C38,39 35,36 35,32 Z" fill="var(--color-peach)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Character body */}
      <path d="M42,39 L42,50 L32,54" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42,44 L56,40 M42,42 L30,40" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42,50 L52,56" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Face details */}
      <circle cx="40" cy="30" r="1.5" fill="var(--color-dark)" />
      <circle cx="44" cy="30" r="1.5" fill="var(--color-dark)" />
      <path d="M38,34 Q42,37 45,34" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Little motion lines */}
      <path d="M12,25 L22,28 M15,35 L23,36" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 2. Clear, No-Surprise Pricing (Curtain open with tag/price)
export function PricingIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15,50 C15,25 25,15 50,15 C75,15 85,25 85,50 C85,75 75,85 50,85 C25,85 15,75 15,50 Z" fill="var(--color-pink)" opacity="0.3" />
      {/* Stage Curtains */}
      <path d="M25,20 L35,20 C32,35 30,55 20,80 L15,80 C15,50 20,30 25,20 Z" fill="var(--color-dark)" />
      <path d="M75,20 L65,20 C68,35 70,55 80,80 L85,80 C85,50 80,30 75,20 Z" fill="var(--color-dark)" />
      {/* Price tag */}
      <g transform="rotate(-10 50 50)">
        <rect x="35" y="35" width="30" height="40" rx="4" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
        <circle cx="50" cy="43" r="3" stroke="var(--color-dark)" strokeWidth="2" fill="var(--color-yellow)" />
        <text x="50" y="66" fill="var(--color-dark)" fontSize="18" fontWeight="bold" fontFamily="var(--font-oswald)" textAnchor="middle">$</text>
      </g>
      {/* Sparkles */}
      <path d="M28,25 L32,29 M72,25 L68,29" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3. Everything Under One Roof (Character with megaphone/tools under roof)
export function UnderOneRoofIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15,50 C15,25 35,15 50,15 C65,15 85,25 85,50 C85,75 65,85 50,85 C35,85 15,75 15,50 Z" fill="var(--color-yellow)" opacity="0.3" />
      {/* Roof */}
      <path d="M15,45 L50,15 L85,45" stroke="var(--color-dark)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Character */}
      <circle cx="50" cy="48" r="8" fill="var(--color-purple)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <path d="M50,56 L50,75 L42,85 M50,75 L58,85" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Left arm holding Megaphone */}
      <path d="M42,60 L32,56 M32,56 L24,62 L22,50 L32,56" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-pink)" />
      {/* Right arm holding Giant Pencil */}
      <path d="M58,60 L70,54" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Giant Pencil */}
      <g transform="rotate(35 70 54)">
        <rect x="65" y="30" width="8" height="35" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
        <path d="M65,30 L69,20 L73,30 Z" fill="var(--color-peach)" stroke="var(--color-dark)" strokeWidth="2" />
      </g>
    </svg>
  );
}

// 4. Creative Sparks (Magic casting wand)
export function CreativeSparksIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Background shape */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-dark)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      {/* Magic Wand */}
      <g transform="rotate(-25 50 50)">
        <rect x="47" y="25" width="6" height="50" rx="3" fill="var(--color-dark)" stroke="var(--color-dark)" strokeWidth="1" />
        {/* Wand Tip */}
        <rect x="47" y="25" width="6" height="12" rx="1" fill="var(--bg-white-pure)" />
      </g>
      {/* Big Star (Spark) */}
      <path d="M25,25 L29,35 L39,39 L29,43 L25,53 L21,43 L11,39 L21,35 Z" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" strokeLinejoin="round" />
      {/* Sparkles */}
      <path d="M65,20 L73,20 M69,16 L69,24" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      <path d="M75,45 L81,45 M78,42 L78,48" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="70" r="3" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <circle cx="60" cy="75" r="4" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="1.5" />
    </svg>
  );
}

// 5. Design That Delivers (Paper airplane rider)
export function DesignDeliversIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Paper airplane */}
      <path d="M15,55 L85,25 L45,75 L45,60 Z" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M45,60 L85,25" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Character sitting on top */}
      <circle cx="58" cy="35" r="7" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="2" />
      <path d="M58,42 C58,42 62,55 50,60" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Motion trails */}
      <path d="M10,68 C20,68 25,60 30,62" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5,50 C12,50 16,45 20,48" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. Adaptable & Flexible (Balancing acts)
export function AdaptableIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Heart */}
      <path d="M50,75 C50,75 25,58 25,42 C25,30 35,20 45,25 C50,27 50,27 55,25 C65,20 75,30 75,42 C75,58 50,75 50,75 Z" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="2" />
      {/* Laptop */}
      <rect x="25" y="65" width="22" height="14" rx="2" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2" />
      <line x1="20" y1="79" x2="52" y2="79" stroke="var(--color-dark)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Character balancing */}
      <circle cx="50" cy="18" r="6" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
      <path d="M50,24 L50,45 L35,48 M50,45 L65,48" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      <path d="M50,30 L32,24 M50,30 L68,24" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 7. Human-Centered Approach (Character sitting on a heart drinking coffee)
export function HumanCenteredIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Large heart background shape */}
      <path d="M50,85 C50,85 15,62 15,40 C15,22 28,12 45,18 C50,20 50,20 55,18 C72,12 85,22 85,40 C85,62 50,85 50,85 Z" fill="var(--color-peach)" opacity="0.4" />
      {/* Character Sitting */}
      <circle cx="50" cy="35" r="7" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Torso */}
      <path d="M50,42 L50,62 L38,70" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Coffee Cup */}
      <rect x="30" y="46" width="8" height="8" rx="1" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="2" />
      <path d="M38,48 Q42,50 38,52" stroke="var(--color-dark)" strokeWidth="1.5" />
      {/* Arm holding cup */}
      <path d="M50,48 L38,50" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs crossed */}
      <path d="M50,62 L64,62 L68,76" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Steam */}
      <path d="M32,41 Q34,38 32,35 M36,41 Q38,38 36,35" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 8. Global Vision, Local Focus (Globe holder)
export function GlobalVisionIllustration({ size = 180, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15,50 C15,25 35,15 50,15 C65,15 85,25 85,50 C85,75 65,85 50,85 C35,85 15,75 15,50 Z" fill="var(--color-purple)" opacity="0.3" />
      {/* Globe */}
      <circle cx="50" cy="38" r="20" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Continents outlines */}
      <path d="M36,30 Q42,28 44,38 Q46,48 38,50 M54,24 Q60,30 58,38 Q56,46 64,48 M42,52 Q50,55 54,48" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Character body lifting globe */}
      <path d="M50,58 L50,78 M40,88 L50,78 L60,88" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34,48 L44,58 L50,58 L56,58 L66,48" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 9. Process Step 1: Kickoff & Coffee Chats
export function ProcessStep1Illustration({ size = 220, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Spiky star shape background */}
      <path d="M60,10 L70,35 L95,30 L85,55 L105,70 L80,75 L85,100 L60,85 L35,100 L40,75 L15,70 L35,55 L25,30 L50,35 Z" fill="var(--color-yellow)" />
      {/* Table */}
      <ellipse cx="60" cy="75" rx="30" ry="12" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <line x1="60" y1="87" x2="60" y2="105" stroke="var(--color-dark)" strokeWidth="2.5" />
      <line x1="45" y1="105" x2="75" y2="105" stroke="var(--color-dark)" strokeWidth="3" strokeLinecap="round" />
      {/* Left Character */}
      <circle cx="38" cy="45" r="7" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="2" />
      <path d="M38,52 C38,62 48,68 48,72" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Right Character */}
      <circle cx="82" cy="45" r="7" fill="var(--color-green)" stroke="var(--color-dark)" strokeWidth="2" />
      <path d="M82,52 C82,62 72,68 72,72" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
      {/* Coffee Cups on table */}
      <rect x="48" y="70" width="6" height="6" rx="1" fill="var(--color-peach)" stroke="var(--color-dark)" strokeWidth="1.5" />
      <rect x="66" y="70" width="6" height="6" rx="1" fill="var(--color-purple)" stroke="var(--color-dark)" strokeWidth="1.5" />
    </svg>
  );
}

// 10. Process Step 2: Magic in Progress
export function ProcessStep2Illustration({ size = 220, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60,10 L70,35 L95,30 L85,55 L105,70 L80,75 L85,100 L60,85 L35,100 L40,75 L15,70 L35,55 L25,30 L50,35 Z" fill="var(--color-green)" />
      {/* Computer Monitor */}
      <rect x="30" y="35" width="60" height="40" rx="4" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      {/* Screen details */}
      <circle cx="40" cy="45" r="4" fill="var(--color-pink)" />
      <rect x="50" y="42" width="32" height="6" rx="1" fill="var(--color-dark)" />
      <rect x="40" y="55" width="42" height="12" rx="1" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1.5" />
      {/* Monitor Stand */}
      <path d="M53,75 L45,95 L75,95 L67,75 Z" fill="var(--color-dark)" stroke="var(--color-dark)" strokeWidth="1.5" />
      {/* Sparkles of ideas */}
      <path d="M22,25 L28,31 M98,25 L92,31" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 11. Process Step 3: Feedback & Finessing
export function ProcessStep3Illustration({ size = 220, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60,10 L70,35 L95,30 L85,55 L105,70 L80,75 L85,100 L60,85 L35,100 L40,75 L15,70 L35,55 L25,30 L50,35 Z" fill="var(--color-pink)" />
      {/* Giant Checkmark / Feedback bubble */}
      <rect x="35" y="35" width="50" height="40" rx="12" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <path d="M60,75 L50,88 L65,85 Z" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Checkmark inside */}
      <path d="M48,55 L56,63 L72,47" stroke="var(--color-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stars of approval */}
      <path d="M25,50 L28,53 L33,50 L30,55 L33,60 L28,57 L25,60 L27,55 Z" fill="var(--color-yellow)" stroke="var(--color-dark)" strokeWidth="1" />
    </svg>
  );
}

// 12. Process Step 4: Launch & High Fives
export function ProcessStep4Illustration({ size = 220, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60,10 L70,35 L95,30 L85,55 L105,70 L80,75 L85,100 L60,85 L35,100 L40,75 L15,70 L35,55 L25,30 L50,35 Z" fill="var(--color-purple)" />
      {/* Two hands high-fiving */}
      <g transform="translate(15 20)">
        {/* Left hand */}
        <path d="M25,55 L38,35 C38,35 44,25 46,36 C48,47 38,62 38,62 Z" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Right hand */}
        <path d="M65,55 L52,35 C52,35 46,25 44,36 C42,47 52,62 52,62 Z" fill="var(--bg-white-pure)" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      </g>
      {/* Impact lines */}
      <path d="M60,25 L60,15 M50,30 L42,24 M70,30 L78,24" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 13. Footer Quote: LET'S GO Button!
export function FooterIllustration({ size = 240, ...props }: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Background shape */}
      <path d="M10,75 C10,35 35,10 75,10 C115,10 140,35 140,75 C140,115 115,140 75,140 C35,140 10,115 10,75 Z" fill="var(--color-yellow)" opacity="0.2" />
      {/* Push Button base */}
      <rect x="35" y="65" width="80" height="40" rx="20" fill="var(--color-dark)" />
      {/* Push Button top */}
      <rect x="35" y="55" width="80" height="40" rx="20" fill="var(--color-pink)" stroke="var(--color-dark)" strokeWidth="3" />
      {/* Button Text */}
      <text x="75" y="81" fill="var(--color-dark)" fontSize="16" fontWeight="bold" fontFamily="var(--font-oswald)" textAnchor="middle" letterSpacing="1">LET'S GO!</text>
      {/* Character pressing it */}
      <circle cx="75" cy="28" r="10" fill="var(--color-peach)" stroke="var(--color-dark)" strokeWidth="2.5" />
      <path d="M75,38 L75,56" stroke="var(--color-dark)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Waving hand lines */}
      <path d="M60,28 L50,20 M90,28 L100,20" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
