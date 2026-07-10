import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

const TEXT_TESTIMONIALS = [
  {
    quote: "The team at Kalvix.ai is incredibly creative, and just fun to talk to. They totally got our brand from day one.",
    author: "Founder, GreenSpark Innovations",
    color: 'var(--color-pink)',
  },
  {
    quote: "Everything feels cohesive, intentional, and us. We are obsessed with the final layouts.",
    author: "Managing Director, VentureVista",
    color: 'var(--color-green)',
  },
  {
    quote: "The design is simple yet modern and very easy to customize. Couldn't have asked for a better team.",
    author: "CEO, Lunar Lux Co.",
    color: 'var(--color-peach)',
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEXT_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-purple)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="reviews"
        style={{
          backgroundColor: 'var(--color-purple)',
          paddingTop: isMobile ? '48px' : '80px',
          paddingBottom: isMobile ? '48px' : '80px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px', position: 'relative' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker green"
                style={{
                  display: 'inline-flex',
                  marginBottom: '16px',
                  transform: 'rotate(-3deg)',
                }}
              >
                Reviews
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
              {"Real stories from\nbeloved clients"}
            </TextReveal>
          </div>

          {/* Text Testimonial Slider */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: isMobile ? '48px' : '64px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="neo-card"
                style={{
                  backgroundColor: TEXT_TESTIMONIALS[activeIndex].color,
                  color: 'var(--color-dark)',
                  padding: isMobile ? '24px 16px' : '40px',
                  width: '100%',
                  maxWidth: '650px',
                  textAlign: 'center',
                  minHeight: isMobile ? '250px' : '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <p style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.4 }}>
                  "{TEXT_TESTIMONIALS[activeIndex].quote}"
                </p>
                <div>
                  <div style={{ fontFamily: 'var(--font-oswald)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {TEXT_TESTIMONIALS[activeIndex].author}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator list */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TEXT_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--color-dark)',
                    backgroundColor: activeIndex === idx ? 'var(--color-dark)' : 'var(--bg-white-pure)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Video Reviews Mockup - Commented out for now */}
          {false && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '40px' }} className="video-grid">
            
            {/* Video 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                className="neo-card"
                style={{
                  padding: 0,
                  height: isMobile ? '200px' : '300px',
                  backgroundColor: 'var(--color-dark)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {/* Greyscale avatar mockup */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 50% 50%, #444 0%, #111 100%)`,
                    opacity: 0.85,
                  }}
                />

                {/* Character head shape outline */}
                <svg width="100" height="100" viewBox="0 0 100 100" opacity="0.4" fill="none" stroke="var(--bg-white-pure)" strokeWidth="2">
                  <circle cx="50" cy="40" r="18" />
                  <path d="M25,85 C25,65 35,58 50,58 C65,58 75,65 75,85" />
                </svg>

                {/* Play button */}
                <div
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-white-pure)',
                    border: '2px solid var(--color-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '3px 3px 0 0 var(--color-dark)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {/* Triangle Play icon */}
                  <div style={{ width: 0, height: 0, borderTop: '8px solid transparent',  borderLeft: '14px solid var(--color-dark)', marginLeft: '4px' }} />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="badge-sticker pink" style={{ fontSize: isMobile ? '12px' : '14px', textTransform: 'uppercase' }}>
                  Magnus Hawthorne - Owner, Bayleaf
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                className="neo-card"
                style={{
                  padding: 0,
                  height: isMobile ? '200px' : '300px',
                  backgroundColor: 'var(--color-dark)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 50% 50%, #444 0%, #111 100%)`,
                    opacity: 0.85,
                  }}
                />

                <svg width="100" height="100" viewBox="0 0 100 100" opacity="0.4" fill="none" stroke="var(--bg-white-pure)" strokeWidth="2">
                  <circle cx="50" cy="40" r="18" />
                  <path d="M25,85 C25,65 35,58 50,58 C65,58 75,65 75,85" />
                </svg>

                <div
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-white-pure)',
                    border: '2px solid var(--color-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '3px 3px 0 0 var(--color-dark)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div style={{ width: 0, height: 0, borderTop: '8px solid transparent',  borderLeft: '14px solid var(--color-dark)', marginLeft: '4px' }} />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="badge-sticker blue" style={{ fontSize: isMobile ? '12px' : '14px', textTransform: 'uppercase' }}>
                  Thaddeus Montgomery - Owner, Goldgarden
                </div>
              </div>
            </div>

          </div>
          )}

        </div>
      </section>
    </>
  );
}
