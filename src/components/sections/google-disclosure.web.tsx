import React from 'react';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';

export function GoogleDisclosure() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <>
      <section
        id="google-integration"
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '60px 16px' : '100px 48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span
              style={{
                fontFamily: 'var(--font-oswald)',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                backgroundColor: 'var(--color-blue)',
                color: 'var(--color-dark)',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '2px solid var(--color-dark)',
                display: 'inline-block',
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}
            >
              Google Integration &amp; Safety
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? '36px' : '54px',
                fontWeight: 700,
                color: 'var(--color-dark)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 auto',
                maxWidth: '800px',
              }}
            >
              How M-Auxis Integrates with Google Ads
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: 500,
                color: 'var(--color-dark)',
                opacity: 0.8,
                marginTop: '16px',
                maxWidth: '640px',
                margin: '16px auto 0 auto',
                lineHeight: 1.5,
              }}
            >
              M-Auxis provides direct automation for launching and managing Google Ads. We prioritize security and transparency, using official Google OAuth APIs.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
            gap: '32px',
          }}
        >
          {/* Card 1: Why Google Sign-In? */}
          <ScrollReveal delay={0.1}>
            <div
              className="neo-card"
              style={{
                backgroundColor: 'var(--bg-white-pure)',
                padding: isMobile ? '24px' : '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--color-yellow)',
                  border: '2.5px solid var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--color-dark)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.09 11.5c-2.1 0-3.9-1.3-4.6-3.2h9.2c-.7 1.9-2.5 3.2-4.6 3.2z" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '24px' : '28px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-dark)',
                }}
              >
                Why Google Sign-In?
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'var(--color-dark)',
                }}
              >
                M-Auxis utilizes Google Sign-In to allow users to securely authenticate and link their own Google Ads accounts. This eliminates the need to share any password credentials directly with our platform.
              </p>

              <div style={{ borderTop: '2px dashed var(--color-dark)', paddingTop: '16px', marginTop: 'auto', minHeight: isMobile || isTablet ? 'auto' : '260px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  After authorization, you can:
                </h4>
                <ul
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <li>View your connected Google Ads accounts directly from our dashboard.</li>
                  <li>Import and view campaigns, performance, and key metrics.</li>
                  <li>Create new search, display, and video campaigns using AI recommendations.</li>
                  <li>Generate detailed, custom performance reports with one click.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Google Ads Permissions */}
          <ScrollReveal delay={0.2}>
            <div
              className="neo-card"
              style={{
                backgroundColor: 'var(--bg-white-pure)',
                padding: isMobile ? '24px' : '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--color-pink)',
                  border: '2.5px solid var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--color-dark)">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-3-3 1.41-1.41L11 13.17l4.59-4.59L17 10l-6 6z" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '24px' : '28px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-dark)',
                }}
              >
                Ads Permissions &amp; Data Usage
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'var(--color-dark)',
                }}
              >
                We only request Google Ads API permissions after you explicitly choose to connect your account. All requests are handled via official Google scopes securely.
              </p>

              <div style={{ borderTop: '2px dashed var(--color-dark)', paddingTop: '16px', marginTop: 'auto', minHeight: isMobile || isTablet ? 'auto' : '260px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  How we use these permissions:
                </h4>
                <ul
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <li><strong>Read Campaigns:</strong> Sync active campaign lists and parameters.</li>
                  <li><strong>Create &amp; Edit:</strong> Allow you to push updates to bids, budgets, and text ad copy directly from our platform.</li>
                  <li><strong>Performance Stats:</strong> Retrieve clicks, impressions, conversion rates, and spend tracking for analytics dashboards.</li>
                  <li><strong>Strict Privacy:</strong> Only your authenticated account data is accessed. No advertising or personal data is ever shared with third parties.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
