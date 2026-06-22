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
      <div id="footer-contact" style={{ width: '100%', maxWidth: '100%', margin: '0 auto 16px auto', padding: isMobile ? '0 16px' : '0 24px' }}>
        <div
          className="footer-card"
          style={{
            backgroundColor: 'var(--bg-cream)',
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1.2fr',
            gap: isMobile ? '32px' : '64px',
            padding: isMobile ? '24px 16px' : isTablet ? '40px' : '64px',
            borderRadius: '32px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Left illustration & texts */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
            <FooterIllustration />
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '24px' : '32px', fontWeight: 800, color: 'var(--color-dark)' }}>
                Need a custom quote?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.5, opacity: 0.8, marginTop: '8px', maxWidth: '300px', margin: '8px auto 0 auto' }}>
                Don't let your ideas sit idle—slide into our inbox and let's make magic!
              </p>
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
          paddingTop: isMobile ? '40px' : '64px',
          paddingBottom: '0',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px 24px 0 0',
          borderTop: '2px solid var(--color-dark)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 16px 40px 16px' : '0 24px 64px 24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: isMobile ? '32px' : '40px' }} className="footer-links-grid">
          {/* Col 1: Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>(217) 555-0134</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>contact@kalvix.ai</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '4px' }}>Address</div>
              <div style={{ fontSize: '14px', lineHeight: 1.3, fontWeight: 500 }}>123 Main Street, Suite 200,<br />Austin, TX 78701</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '4px' }}>Opening Hours</div>
              <div style={{ fontSize: '14px', lineHeight: 1.3, fontWeight: 500 }}>Mon to Sat: 9.00am - 8.30pm<br />Sun: Closed</div>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '20px', textTransform: 'uppercase', color: 'var(--bg-white-pure)', marginBottom: '16px' }}>
              Directory
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', fontWeight: 600, paddingLeft: 0, margin: 0 }}>
              {['services', 'benefits', 'portfolio', 'process', 'reviews', 'about'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleLinkClick(e, item)}
                    style={{ textDecoration: 'none', color: 'inherit', opacity: 0.85 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, fontSize: '20px', textTransform: 'uppercase', color: 'var(--bg-white-pure)', marginBottom: '16px' }}>
              Socials
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', fontWeight: 600, paddingLeft: 0, margin: 0 }}>
              {['Linkedin', 'Facebook', 'Twitter', 'Instagram', 'Youtube'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    style={{ textDecoration: 'none', color: 'inherit', opacity: 0.85 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant bottom word mark "KALVIX" flowing off screen */}
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0.7,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '80px' : 'min(22vw, 260px)',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              display: 'block',
              margin: '0',
              padding: '0',
              background: 'linear-gradient(180deg, rgba(254, 250, 231, 0.15) 0%, rgba(254, 250, 231, 0.01) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: isMobile ? '-3px' : '-10px',
              transform: isMobile ? 'translateY(12px)' : 'translateY(24px)',
            }}
          >
            Kalvix
          </span>
        </div>

      </div>
    </footer>
    </>
  );
}
