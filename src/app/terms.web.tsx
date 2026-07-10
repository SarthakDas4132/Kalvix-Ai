import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/sections/navbar.web';
import { Footer } from '../components/sections/footer.web';
import { useBreakpoint } from '../hooks/use-breakpoint';

export default function TermsScreenWeb() {
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
            Terms & Conditions
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
            <span>Effective Date: July 1, 2026</span>
            <span>Last Updated: July 1, 2026</span>
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
                Welcome to Kalvix.ai (“Kalvix”, “Platform”, “Company”, “we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern your access to and use of Kalvix.ai, including our website, applications, software, APIs, dashboards, AI tools, creator marketplace, advertising services, CRM, automation tools, analytics, payment features, and all related products and services. By accessing or using the Platform, creating an account, or subscribing to our services, you agree to be legally bound by these Terms. If you do not agree, you must stop using the Platform right away.
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
                2. Eligibility
              </h2>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>You must be at least eighteen (18) years old.</li>
                <li>If you are registering on behalf of a company, you confirm that you have the authority to bind that entity.</li>
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
                3. Services
              </h2>
              <p>Kalvix.ai provides AI-powered marketing and business growth solutions, including:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>AI Content Studio, Image and Video Generation</li>
                <li>AI Copywriting, Caption and Hashtag Generation</li>
                <li>Cross-Platform Publishing</li>
                <li>Creator Marketplace and Influencer Discovery</li>
                <li>CRM and Automation</li>
                <li>Revenue Analytics and Business Intelligence Dashboard</li>
              </ul>
              <p>Kalvix reserves the right to modify, suspend, or stop services at its discretion.</p>
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
                4. Subscription and Billing
              </h2>
              <p>
                Paid features require a subscription. Fees are charged in advance and renew automatically unless cancelled. Non-payment may lead to suspension or termination.
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
                5. AI Services
              </h2>
              <p>
                You understand that AI-generated outputs may have errors, need human review, and should not be considered legal, financial, medical, or professional advice.
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
                6. User Content
              </h2>
              <p>
                You keep ownership of the content you upload. By uploading, you give Kalvix a limited license to operate and improve services.
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
                7. Intellectual Property
              </h2>
              <p>
                Kalvix owns all rights to its software, APIs, AI models, branding, databases, and proprietary workflows. Nothing in these Terms transfers ownership.
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
                8. Acceptable Use
              </h2>
              <p>
                You agree not to break laws, upload harmful content, infringe on intellectual property, reverse engineer, impersonate others, or abuse the Platform. Violations may result in immediate suspension or termination.
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
                9. Advertising and Integrations
              </h2>
              <p>
                Kalvix may connect with Meta Ads, Google Ads, and social platforms. Third-party providers decide on campaign approval and costs. Kalvix is not responsible for campaign performance or outages.
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
                10. Limitation of Liability
              </h2>
              <p>
                Kalvix is not liable for indirect, incidental, or consequential damages. Aggregate liability will not exceed the fees paid in the last 12 months.
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
                11. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms are governed by the laws of India. Disputes will be under the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
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
                12. Contact Information
              </h2>
              <p style={{ fontWeight: 700, marginTop: '4px' }}>
                Kalvix.ai<br />
                Email:{' '}
                <a href="mailto:legal@kalvix.ai" style={{ color: 'inherit', textDecoration: 'none' }}>
                  legal@kalvix.ai
                </a>
                <br />
                Registered Address: Kalvix Technologies Pvt. Ltd., Pune, Maharashtra, India<br />
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
