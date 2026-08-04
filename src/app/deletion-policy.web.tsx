import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/sections/navbar.web';
import { Footer } from '../components/sections/footer.web';
import { useBreakpoint } from '../hooks/use-breakpoint';

export default function DeletionPolicyScreenWeb() {
  const { isMobile } = useBreakpoint();

  // Initialize Lenis smooth scroll on mount and scroll to top
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);

      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileOrTablet = window.innerWidth < 1024;

      if (isTouchDevice || isMobileOrTablet) {
        return;
      }

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      (window as any).lenis = lenis;
      lenis.scrollTo(0, { immediate: true });

      let rafId: number;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(document.body);

      return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        (window as any).lenis = undefined;
      };
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', position: 'relative' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main
        style={{
          paddingTop: isMobile ? '100px' : '140px',
          paddingBottom: '80px',
          maxWidth: '1000px',
          margin: '0 auto',
          paddingLeft: isMobile ? '16px' : '24px',
          paddingRight: isMobile ? '16px' : '24px',
        }}
      >
        <div
          className="neo-card"
          style={{
            backgroundColor: 'var(--bg-white-pure)',
            padding: isMobile ? '24px 16px' : '48px 48px',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? '32px' : '56px',
              fontWeight: 800,
              color: 'var(--color-dark)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Deletion Policy
          </h1>
          <div
            style={{
              fontFamily: 'var(--font-oswald)',
              fontSize: '14px',
              color: 'var(--color-dark)',
              opacity: 0.6,
              textTransform: 'uppercase',
              marginBottom: '40px',
              letterSpacing: '0.08em',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span>Last Updated: July 29, 2026</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              fontFamily: 'var(--font-satoshi)',
              color: 'var(--color-dark)',
              lineHeight: 1.7,
              fontSize: isMobile ? '15px' : '16px',
            }}
          >
            <p>
              M-Auxis allows users to log in and connect their accounts using third-party Meta services, including Facebook, Instagram, and Meta Ads Manager. We respect your privacy and give you full control over your data.
            </p>
            <p>
              If you wish to have your account and all associated data permanently deleted from M-Auxis, you can do so by following these steps:
            </p>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: 700,
                  borderBottom: '2.5px solid var(--color-dark)',
                  paddingBottom: '6px',
                  alignSelf: 'flex-start',
                }}
              >
                Option 1: Complete Account & Data Deletion via Email
              </h2>
              <p>
                To request the complete deletion of your M-Auxis account and all synced Meta data (including connected Instagram profiles, Facebook pages, and Meta Ads campaign data):
              </p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  Send an email to <a href="mailto:support@m-auxis.com" style={{ color: 'inherit', fontWeight: 700 }}>support@m-auxis.com</a> from the email address associated with your M-Auxis account.
                </li>
                <li>
                  Use the subject line: <strong>&quot;Data Deletion Request&quot;</strong>.
                </li>
                <li>
                  Briefly state that you would like your account and all associated data permanently removed from our systems.
                </li>
                <li>
                  Our team will process your request, completely sever the connection to your Meta services, and securely delete your data within 7 business days. We will notify you once it is complete.
                </li>
              </ol>
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: 700,
                  borderBottom: '2.5px solid var(--color-dark)',
                  paddingBottom: '6px',
                  alignSelf: 'flex-start',
                }}
              >
                Option 2: Revoke Access via Google Ads
              </h2>
              <p>
                If you wish to disconnect M-Auxis access from your connected Google Ads account:
              </p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  Go to your Google Account’s <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 700 }}>Third-party apps with account access</a> settings page.
                </li>
                <li>
                  Find and click on <strong>M-Auxis</strong> in the list of authorized apps.
                </li>
                <li>
                  Click <strong>Remove Access</strong> and confirm. M-Auxis will immediately lose all API permissions to access, view, or manage your Google Ads campaigns.
                </li>
              </ol>
            </section>

            <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: 700,
                  borderBottom: '2.5px solid var(--color-dark)',
                  paddingBottom: '6px',
                  alignSelf: 'flex-start',
                }}
              >
                Option 3: Revoke Access via Meta (Facebook / Instagram)
              </h2>
              <p>
                If you wish to keep your M-Auxis account but want to disconnect our access to your Facebook, Instagram, or Meta Ads accounts:
              </p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  Go to your Facebook account’s <strong>Settings & Privacy</strong>.
                </li>
                <li>
                  Click on <strong>Settings</strong>, then navigate to <strong>Apps and Websites</strong> (or <strong>Business Integrations</strong> depending on your account type).
                </li>
                <li>
                  Find <strong>M-Auxis</strong> in the list of active apps and click <strong>Remove</strong>.
                </li>
                <li>
                  This will immediately revoke M-Auxis&apos;s access to your Meta Ads, Facebook Pages, and Instagram accounts. No new data will be synced to our systems.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
