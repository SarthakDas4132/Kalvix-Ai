import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const mountedTimeRef = useRef(Date.now());
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    // Reset mount time on useEffect run to align with browser restoration window
    mountedTimeRef.current = Date.now();

    // Check initial scroll state on mount to prevent layout/state mismatch after refresh
    const checkInitialScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollYRef.current = currentScrollY;
    };
    checkInitialScroll();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const timeSinceMount = Date.now() - mountedTimeRef.current;

      // During the first 350ms, ignore scroll-down hiding to allow browser scroll restoration
      if (timeSinceMount > 350) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -90 });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        animate={{
          y: visible ? 0 : -100,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: 'relative',
            padding: isMobile 
              ? (scrolled ? '10px 16px' : '14px 16px') 
              : isTablet 
                ? (scrolled ? '14px 24px' : '18px 24px')
                : (scrolled ? '16px 0' : '24px 0'),
            backgroundColor: scrolled ? 'rgba(254, 250, 231, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '2.5px solid var(--color-dark)' : '2.5px solid transparent',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1720px',
              margin: '0 auto',
              padding: isMobile ? '0' : isTablet ? '0' : '0 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
                color: 'var(--color-dark)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                fontSize: isMobile ? '20px' : '28px',
                letterSpacing: '-1.5px',
              }}
            >
              {/* Clipping wrapper removes whitespace from logo PNG */}
              <div
                style={{
                  width: isMobile ? '36px' : '48px',
                  height: isMobile ? '36px' : '48px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={require('../../../assets/images/Kalvix.ai logo.png')}
                  alt="Kalvix.ai Logo"
                  style={{
                    width: '200%',
                    height: '200%',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>
              <span>Kalvix.ai</span>
            </a>

            {/* Desktop Nav Links */}
            <nav
              style={{
                display: 'none',
              }}
              className="md:flex"
            >
              <ul
                style={{
                  display: 'flex',
                  gap: '24px',
                  listStyle: 'none',
                  fontFamily: 'var(--font-satoshi), sans-serif',
                  fontWeight: 800,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0px',
                }}
              >
                {['services', 'benefits', 'portfolio', 'process', 'faq'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => handleNavClick(e, item)}
                      style={{
                        textDecoration: 'none',
                        color: 'var(--color-dark)',
                        opacity: 0.8,
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA / Menu Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  padding: isMobile ? '8px 16px' : '10px 24px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontFamily: 'var(--font-satoshi), sans-serif',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  backgroundColor: 'var(--color-green)',
                  border: isMobile ? '2px solid var(--color-dark)' : '3px solid var(--color-dark)',
                  borderRadius: isMobile ? '14px' : '18px',
                  boxShadow: isMobile ? '3px 3px 0 0 var(--color-dark)' : '4px 4px 0 0 var(--color-dark)',
                  cursor: 'pointer',
                  color: 'var(--color-dark)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: '0px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a9e1a8';
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = isMobile ? '5px 5px 0 0 var(--color-dark)' : '6px 6px 0 0 var(--color-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-green)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)';
                  e.currentTarget.style.boxShadow = isMobile ? '1px 1px 0 0 var(--color-dark)' : '2px 2px 0 0 var(--color-dark)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = isMobile ? '5px 5px 0 0 var(--color-dark)' : '6px 6px 0 0 var(--color-dark)';
                }}
              >
                MENU
              </button>
            </div>

            {/* Floating Dropdown Card Menu (Absolute relative to parent nav wrapper) */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    right: isMobile ? '0px' : isTablet ? '0px' : '48px',
                    width: isMobile ? 'calc(100% - 32px)' : '300px',
                    backgroundColor: '#fedc6a', // golden warm yellow from image
                    border: '2px solid var(--color-dark)',
                    borderRadius: isMobile ? '24px' : '32px',
                    boxShadow: '0px 12px 36px rgba(24, 26, 18, 0.16)', // soft blurry drop shadow
                    padding: isMobile ? '16px 20px' : '24px 32px',
                    zIndex: 999,
                  }}
                >
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', padding: 0, margin: 0 }}>
                    {[
                      { label: 'Services', target: 'services' },
                      { label: 'Benefits', target: 'benefits' },
                      { label: 'Portfolio', target: 'portfolio' },
                      { label: 'Process', target: 'process' },
                      { label: 'Testimonials', target: 'reviews' },
                      { label: 'Pricing', target: 'pricing' },
                      { label: 'FAQs', target: 'faq' }
                    ].map((item, index, arr) => {
                      return (
                        <li
                          key={index}
                          style={{
                            borderBottom: index < arr.length - 1 ? '2px solid var(--color-dark)' : 'none',
                          }}
                        >
                          <a
                            href={`#${item.target}`}
                            onClick={(e) => handleNavClick(e, item.target)}
                            className="menu-link"
                            style={{
                              textDecoration: 'none',
                              color: 'var(--color-dark)',
                              fontFamily: 'var(--font-oswald)',
                              fontWeight: 700,
                              fontSize: isMobile ? '24px' : '32px',
                              display: 'flex',
                              alignItems: 'center',
                              position: 'relative',
                              width: '100%',
                              paddingTop: '12px',
                              paddingBottom: '12px',
                              cursor: 'pointer',
                            }}
                          >
                            {/* Chevron (absolute positioned to the left) */}
                            <span
                              className="menu-chevron"
                              style={{
                                position: 'absolute',
                                left: 0,
                                display: 'inline-flex',
                                alignItems: 'center',
                                pointerEvents: 'none',
                              }}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width={isMobile ? "16" : "20"}
                                height={isMobile ? "16" : "20"}
                                style={{
                                  fill: '#e68fd8',
                                  display: 'inline-block',
                                  verticalAlign: 'middle',
                                }}
                              >
                                <path d="M8 5l6 7-6 7h3.5l6-7-6-7H8z" />
                                <path d="M14 5l6 7-6 7h3.5l6-7-6-7H14z" />
                              </svg>
                            </span>

                            {/* Text content (slides right) */}
                            <span
                              className="menu-text"
                              style={{
                                display: 'inline-block',
                              }}
                            >
                              {item.label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Scoped CSS for Menu Link Hover Transitions */}
      <style dangerouslySetInnerHTML={{ __html: `
        .menu-link .menu-chevron {
          opacity: 0 !important;
          transform: translateX(-15px) !important;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .menu-link:hover .menu-chevron {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .menu-link .menu-text {
          transform: translateX(0) !important;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .menu-link:hover .menu-text {
          transform: translateX(${isMobile ? 24 : 32}px) !important;
        }
      `}} />
    </>
  );
}
