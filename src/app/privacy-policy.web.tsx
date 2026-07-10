import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/sections/navbar.web';
import { Footer } from '../components/sections/footer.web';
import { useBreakpoint } from '../hooks/use-breakpoint';

export default function PrivacyPolicyScreenWeb() {
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
            Privacy Policy
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
            <span>Date of Effectiveness: July 1, 2026</span>
            <span>Date of Update: July 1, 2026</span>
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
                1. Introduction
              </h2>
              <p>
                The Kalvix ("Kalvix", "Platform", "Company", "we", "our" or "us") values your privacy. This Privacy Policy contains information concerning collecting, using, storing and protecting of your data during using our website, apps, software, APIs, dashboards, and other services. The use of the Platform means that you accept all of the terms stated in this Privacy Policy.
              </p>
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
                2. Information We Collect
              </h2>
              <p>We collect information including the following:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Account information (name, email, phone number, company information).</li>
                <li>Uploaded content (logos, brand assets, product images, video, document).</li>
                <li>Customer data imported to CRM or automation systems.</li>
                <li>Payment and billing information.</li>
                <li>Usage information (log files, analytics, device information, IP address).</li>
              </ul>
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
                3. How We Use Information
              </h2>
              <p>We use information for:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Providing and improving of our services.</li>
                <li>Personalization of user experience.</li>
                <li>Processing of payment and subscriptions.</li>
                <li>Enabling of integration with third-party platforms.</li>
                <li>Communication with the users concerning any updates, promotions and support.</li>
                <li>Compliance with any legal or regulatory requirements.</li>
              </ul>
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
                4. Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We share your data solely in the following situations:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>With third-party service providers (payment processors, hosting partners);</li>
                <li>In case of compliance with legal or governmental obligations;</li>
                <li>To protect the rights, property, and safety of Kalvix, its users, or the general public.</li>
              </ul>
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
                5. Data Security
              </h2>
              <p>
                We adopt technical and organizational measures to ensure the security of your information from any illegal access, loss, misuse, or leakage. But please note that any system is vulnerable, and we cannot ensure your information safety at 100%.
              </p>
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
                6. User Responsibilities
              </h2>
              <p>The responsibilities of users include:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Ensuring that customer data uploaded to Kalvix is collected legally;</li>
                <li>Getting necessary consents for marketing communication;</li>
                <li>Safeguarding of login details and making regular backups of data.</li>
              </ul>
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
                7. Third-Party Integrations
              </h2>
              <p>
                Kalvix can work with platforms like Meta Ads, Google Ads, Instagram, Facebook, LinkedIn, X (Twitter), TikTok, YouTube, and WhatsApp. Such integrations are governed by privacy policies of third parties.
              </p>
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
                8. Data Retention
              </h2>
              <p>
                We store user information for the period required for providing our services, complying with legal or governmental obligations, and resolving any disputes. User can ask for deleting the data according to relevant laws.
              </p>
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
                9. Your Rights
              </h2>
              <p>As per applicable laws, you may have rights to:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Access, rectify or delete your personal data.</li>
                <li>Object or restrict certain processing.</li>
                <li>Withdrawing consent for marketing purposes.</li>
              </ul>
              <p>
                These requests can be sent to{' '}
                <a href="mailto:legal@kalvix.ai" style={{ color: 'inherit', fontWeight: 700 }}>
                  legal@kalvix.ai
                </a>
                .
              </p>
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
                10. Amendments to this Policy
              </h2>
              <p>
                This Privacy Policy may be modified from time to time by Kalvix. The modified policy will be posted on our website, and using the Platform will mean that you accept such modification.
              </p>
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
                11. Contact Information
              </h2>
              <p>For any privacy-related queries:</p>
              <p style={{ fontWeight: 700, marginTop: '4px' }}>
                Kalvix.ai<br />
                Email:{' '}
                <a href="mailto:legal@kalvix.ai" style={{ color: 'inherit', textDecoration: 'none' }}>
                  legal@kalvix.ai
                </a>
                <br />
                Registered Office: Kalvix Technologies Pvt. Ltd., Pune, Maharashtra, India<br />
                Website:{' '}
                <a href="https://kalvix.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  https://kalvix.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
