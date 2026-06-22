import React from 'react';
import { useBreakpoint } from '../../hooks/use-breakpoint';

const TEAM = [
  {
    firstName: 'Zephyr',
    lastName: 'Callahan',
    role: 'CEO, CREATIVE DIRECTOR',
    sticker: 'Idea Squeezer',
    cardBg: '#f9e1c3', // Light orange
    stickerColor: '#cfcbff', // Light blue
    maskElements: (
      <g transform="rotate(45 50 50)">
        <circle cx="50" cy="24" r="30" fill="white" />
        <circle cx="76" cy="50" r="30" fill="white" />
        <circle cx="50" cy="76" r="30" fill="white" />
        <circle cx="24" cy="50" r="30" fill="white" />
      </g>
    ),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  },
  {
    firstName: 'Leander',
    lastName: 'Frost',
    role: 'DESIGNER / ART DIRECTOR',
    sticker: 'Pixel Wizard',
    cardBg: '#fac2f8', // Pink
    stickerColor: '#bbf1b6', // Light green
    maskPath: 'M50,10 L58,22 L72,16 L74,30 L88,32 L82,46 L90,58 L78,66 L78,80 L64,80 L56,90 L44,90 L36,80 L22,80 L22,66 L10,58 L18,46 L12,32 L26,30 L28,16 L42,22 Z',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80',
  },
  {
    firstName: 'Thane',
    lastName: 'Vesper',
    role: 'CONTENT CREATOR',
    sticker: 'Detail Ninja',
    cardBg: '#ccb1f5', // Purple
    stickerColor: '#f9e1c3', // Light orange
    maskPath: 'M35,12 L65,12 L65,35 L88,35 L88,65 L65,65 L65,88 L35,88 L35,65 L12,65 L12,35 L35,35 Z',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
  },
  {
    firstName: 'Maybe You',
    lastName: 'Cause we are hiring',
    role: 'SR. GRAPHIC DESIGNER',
    sticker: '!!!!',
    cardBg: '#bbf1b6', // Light green
    stickerColor: '#ffe96b', // Yellow
    maskPath: 'M50,12 C60,10 75,18 78,32 C81,46 92,52 86,66 C80,80 68,88 50,86 C32,88 20,80 14,66 C8,52 19,46 22,32 C25,18 40,10 50,12 Z',
    isHiring: true,
  }
];

export function About() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <>
      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="about"
        style={{
          backgroundColor: 'var(--bg-cream)',
          paddingTop: isMobile ? '48px' : '80px',
          paddingBottom: isMobile ? '48px' : '80px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
          
          {/* Header Text block */}
          <div style={{ textAlign: 'left', marginBottom: isMobile ? '32px' : '56px', position: 'relative' }}>
            <div
              className="badge-sticker pink"
              style={{
                display: 'inline-flex',
                marginBottom: '20px',
                transform: 'rotate(-3deg)',
              }}
            >
              About us
            </div>
            <h2
              style={{
                fontSize: isMobile ? '18px' : isTablet ? '24px' : 'min(5.5vw, 36px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                lineHeight: 1.35,
                color: 'var(--color-dark)',
                maxWidth: '1200px',
                margin: 0,
              }}
            >
              We started at a kitchen table with coffee, chaos, and a shared love for bold ideas. Now we’re a small team doing big things—branding, designing, and creating work that actually makes people feel something. No fluff, no fuss, just fun, friendly, scroll-stopping creativity.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '24px' : '16px' }} className="team-grid">
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: member.cardBg,
                  borderRadius: '32px',
                  padding: isMobile ? '20px 16px' : '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Sticker overlay */}
                <div
                  className="badge-sticker"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '-12px',
                    backgroundColor: member.stickerColor,
                    color: 'var(--color-dark)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    border: 'none',
                    boxShadow: 'none',
                    transform: 'rotate(-12deg)',
                    padding: '6px 16px',
                    zIndex: 5,
                  }}
                >
                  {member.sticker}
                </div>

                {/* Masked Photo Placeholder */}
                <div
                  style={{
                    width: isMobile ? '180px' : '240px',
                    height: isMobile ? '180px' : '240px',
                    position: 'relative',
                    marginBottom: '24px',
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <mask id={`mask-avatar-${idx}`}>
                        {member.maskElements ? member.maskElements : <path d={member.maskPath} fill="white" />}
                      </mask>
                    </defs>
                    {member.isHiring ? (
                      <g mask={`url(#mask-avatar-${idx})`}>
                        <rect width="100" height="100" fill="#f8cfb3" />
                        <circle cx="50" cy="50" r="24" fill="white" opacity="0.5" />
                        <path d="M40,65 Q50,75 60,65" stroke="var(--color-dark)" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <circle cx="42" cy="45" r="4" fill="var(--color-dark)" />
                        <circle cx="58" cy="45" r="4" fill="var(--color-dark)" />
                      </g>
                    ) : (
                      <image
                        href={member.image}
                        width="100"
                        height="100"
                        preserveAspectRatio="xMidYMid slice"
                        mask={`url(#mask-avatar-${idx})`}
                      />
                    )}
                  </svg>
                </div>

                {/* Info Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, color: 'var(--color-dark)', lineHeight: 1 }}>
                    {member.firstName}
                  </h3>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', lineHeight: 1.2, marginBottom: '12px' }}>
                    {member.lastName}
                  </h4>
                  
                  <p style={{ fontSize: '10px', fontFamily: 'var(--font-oswald)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', letterSpacing: '0.5px' }}>
                    {member.role}
                  </p>

                  {member.isHiring ? (
                    <button
                      className="primary-btn"
                      style={{
                        marginTop: '20px',
                        backgroundColor: 'var(--color-yellow)',
                        color: 'var(--color-dark)',
                        border: '2px solid var(--color-dark)',
                        borderRadius: '999px',
                        padding: '10px 24px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      Join our team
                    </button>
                  ) : (
                    <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', paddingTop: '20px' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
