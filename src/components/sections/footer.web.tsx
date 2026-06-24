import React, { useState } from 'react';
import { FooterIllustration } from '../ui/cartoon-illustrations.web';
import { useBreakpoint } from '../../hooks/use-breakpoint';

export function Footer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const { isMobile, isTablet } = useBreakpoint();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name || 'friend'}! Your request has been simulated.`);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    }
  };

  return (
    <>
      {/* Yellow dotted fence at the top of the footer */}
      <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <div
          className="scallop-up-mask"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: 'var(--color-yellow)',
          }}
        >
          {/* Dot grid overlay on fence */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(212, 160, 23, 0.4) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
        </div>
      </div>
      <footer style={{ background: 'linear-gradient(to bottom, var(--color-yellow) 0%, var(--bg-cream) 40%, var(--color-blue) 100%)', paddingTop: '32px', zIndex: 2, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(212, 160, 23, 0.4) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
      
      {/* 1. Large Quote Request Card Container */}
      <div id="footer-contact" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto 16px auto', padding: isMobile ? '0 16px' : '0 24px' }}>
        <div
          className="footer-card"
          style={{
            backgroundColor: 'var(--bg-cream)',
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : '64px',
            padding: isMobile ? '24px 16px' : isTablet ? '40px' : '64px 72px',
            borderRadius: '32px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Left illustration & texts */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Group image + text so image centers over the text width */}
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <FooterIllustration />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '24px' : '32px', fontWeight: 800, color: 'var(--color-dark)' }}>
                  Need a custom quote?
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.5, opacity: 0.8, marginTop: '8px', maxWidth: '300px' }}>
                  Don't let your ideas sit idle—slide into our inbox and let's make magic!
                </p>
              </div>
            </div>
          </div>

          {/* Right Form inputs */}
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: '14px', color: 'var(--color-dark)' }}>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={{
                  border: 'none',
                  borderBottom: '1px solid var(--color-pink)',
                  backgroundColor: 'transparent',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontFamily: 'var(--font-satoshi)',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-dark)'}
                onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(0,0,0,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: '14px', color: 'var(--color-dark)' }}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                style={{
                  border: 'none',
                  borderBottom: '1px solid var(--color-pink)',
                  backgroundColor: 'transparent',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontFamily: 'var(--font-satoshi)',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-dark)'}
                onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(0,0,0,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: '14px', color: 'var(--color-dark)' }}>Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={{
                  border: 'none',
                  borderBottom: '1px solid var(--color-pink)',
                  backgroundColor: 'transparent',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontFamily: 'var(--font-satoshi)',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-dark)'}
                onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(0,0,0,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600, fontSize: '14px', color: 'var(--color-dark)' }}>Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={2}
                style={{
                  border: 'none',
                  borderBottom: '1px solid var(--color-pink)',
                  backgroundColor: 'transparent',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontFamily: 'var(--font-satoshi)',
                  outline: 'none',
                  resize: 'none',
                }}
                onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-dark)'}
                onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(0,0,0,0.1)'}
              />
            </div>

            <button type="submit" className="neo-btn" style={{ width: '100%', marginTop: '8px' }}>
              Submit Message
            </button>
          </form>
        </div>
      </div>

      {/* 2. Deep Burgundy Footer Directory and Giant Logo Bottom */}
      <div
        style={{
          backgroundColor: 'var(--color-dark-purple)', // Dark burgundy footer
          color: 'var(--color-peach)',
          borderRadius: isMobile ? '24px' : '48px',
          margin: isMobile ? '32px 16px 16px 16px' : '48px 24px 24px 24px',
          padding: isMobile ? '48px 24px 48px 24px' : '80px 80px 60px 80px',
          minHeight: isMobile ? '500px' : '900px',
          position: 'relative',
          overflow: 'hidden',
          border: '3px solid var(--color-dark)',
          boxShadow: '4px 4px 0 0 var(--color-dark)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.8fr 1fr 1fr', gap: isMobile ? '32px' : '48px' }} className="footer-links-grid">
          {/* Col 1: Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: isMobile ? '20px' : '24px', textTransform: 'uppercase', color: 'var(--color-peach)', letterSpacing: '0.05em', marginBottom: '8px' }}>Phone</div>
              <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 500, color: 'var(--bg-white-pure)' }}>
                <a href="tel:2175550134" style={{ textDecoration: 'none', color: 'inherit' }}>(217) 555-0134</a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: isMobile ? '20px' : '24px', textTransform: 'uppercase', color: 'var(--color-peach)', letterSpacing: '0.05em', marginBottom: '8px' }}>Email</div>
              <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 500, color: 'var(--bg-white-pure)' }}>
                <a href="mailto:contact@kalvix.ai" style={{ textDecoration: 'none', color: 'inherit' }}>contact@kalvix.ai</a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: isMobile ? '20px' : '24px', textTransform: 'uppercase', color: 'var(--color-peach)', letterSpacing: '0.05em', marginBottom: '8px' }}>Address</div>
              <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', lineHeight: 1.5, fontWeight: 500, color: 'var(--bg-white-pure)' }}>
                123 Main Street, Suite 200,<br />Austin, TX 78701
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: isMobile ? '20px' : '24px', textTransform: 'uppercase', color: 'var(--color-peach)', letterSpacing: '0.05em', marginBottom: '8px' }}>Opening Hours</div>
              <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', lineHeight: 1.5, fontWeight: 500, color: 'var(--bg-white-pure)' }}>
                Mon to Sat: 9.00am - 8.30pm<br />Sun: Closed
              </div>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0, margin: 0 }}>
              {['services', 'benefits', 'portfolio', 'process', 'reviews', 'about'].map((item) => (
                <li key={item} style={{ lineHeight: 1 }}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleLinkClick(e, item)}
                    style={{
                      fontFamily: 'var(--font-oswald)',
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: 'var(--bg-white-pure)',
                      letterSpacing: '0.05em',
                      transition: 'opacity 0.2s ease',
                      opacity: 0.8,
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0, margin: 0 }}>
              {['Linkedin', 'Facebook', 'Twitter', 'Instagram', 'Youtube'].map((social) => (
                <li key={social} style={{ lineHeight: 1 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-oswald)',
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: 'var(--bg-white-pure)',
                      letterSpacing: '0.05em',
                      transition: 'opacity 0.2s ease',
                      opacity: 0.8,
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant bottom word mark "KALVIX" - fills container width edge-to-edge like agenius reference site */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '18vw' : '22vw',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              display: 'block',
              textAlign: 'center',
              margin: '0',
              padding: '0',
              lineHeight: 0.85,
              background: 'linear-gradient(180deg, rgba(250, 224, 190, 0.28) 0%, rgba(250, 224, 190, 0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: isMobile ? '0.02em' : '0.03em',
            }}
          >
            KALVIX
          </span>
        </div>

        {/* Bottom copyright and metadata info overlaid at the bottom - sits over the KALVIX watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '12px' : '24px',
            left: isMobile ? '24px' : '80px',
            right: isMobile ? '24px' : '80px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            fontFamily: 'var(--font-satoshi)',
            color: 'var(--color-peach)',
            opacity: 0.6,
            zIndex: 2,
            gap: isMobile ? '12px' : '0',
          }}
        >
          <div>© 2026 Kalvix.ai. All rights reserved.</div>
          <div>Built with passion.</div>
        </div>

      </div>
    </footer>
    </>
  );
}
