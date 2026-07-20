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
            <span>Last Updated: July 17, 2026</span>
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
              The M-Auxis AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by The M-Auxis AI. This policy applies specifically to the services we offer through our application, including our integrations with Meta platforms (Facebook and Instagram).
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
                1. Information We Collect
              </h2>
              <p>We collect information that you provide directly to us or authorize us to access when you use our application:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Account Information:</strong> Name, email address, and basic profile details.</li>
                <li><strong>Meta Platform Data:</strong> When you connect your Facebook or Instagram accounts, we collect public profile information, Page access tokens, Instagram account IDs, and related media content necessary to provide our automated publishing and analysis services.</li>
                <li><strong>User-Generated Content:</strong> Campaign details, brand data, generated images, and textual content created or uploaded within our platform.</li>
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
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Provide, operate, and maintain our application, including scheduling and publishing posts to your connected Meta accounts.</li>
                <li>Generate AI-powered content and conduct brand DNA analysis based on the parameters you provide.</li>
                <li>Improve, personalize, and expand our application&apos;s functionality.</li>
                <li>Understand and analyze how you use our application.</li>
                <li>Communicate with you regarding updates, security alerts, and support messages.</li>
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
                3. Third-Party Data Sharing
              </h2>
              <p>We share your information only in the following specific circumstances:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>AI Service Providers:</strong> We utilize third-party AI models (such as Google Gemini and OpenAI) to generate images and text. Necessary context (like brand data and campaign parameters) may be shared securely with these services strictly for content generation purposes.</li>
                <li>
                  <strong>Meta Integration:</strong> Your content and necessary authentication tokens are transmitted securely to Meta&apos;s APIs (Graph API) for publishing and campaign management purposes in accordance with{' '}
                  <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    Meta&apos;s Platform Terms
                  </a>.
                </li>
                <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
              <p style={{ fontWeight: 700 }}>We do not sell, rent, or trade your personal information to third parties.</p>
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
                4. Data Retention and Deletion (Meta App Requirement)
              </h2>
              <p>We retain your data only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy.</p>
              <p style={{ fontWeight: 700 }}>Data Deletion Instructions:</p>
              <p>You have the right to request the deletion of your personal data. If you wish to revoke our app&apos;s access to your Meta account and delete your associated data, please follow these steps:</p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Log in to your Facebook account and go to <strong>Settings & Privacy</strong> &gt; <strong>Settings</strong>.</li>
                <li>Navigate to <strong>Apps and Websites</strong> in the left-hand menu.</li>
                <li>Find <strong>The M-Auxis AI</strong> in the list of active apps.</li>
                <li>Click <strong>Remove</strong> and confirm the removal.</li>
                <li>To ensure all your data is entirely wiped from our servers, please send a data deletion request to <a href="mailto:legal@m-auxis.ai" style={{ color: 'inherit', fontWeight: 700 }}>legal@m-auxis.ai</a> with the subject line &quot;Data Deletion Request&quot;. We will process your request within 7 days.</li>
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
                5. Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures (including encryption and secure token storage) to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
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
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last Updated&quot; date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
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
                7. Contact Us
              </h2>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <p style={{ fontWeight: 700, marginTop: '4px' }}>
                The M-Auxis AI<br />
                Email:{' '}
                <a href="mailto:legal@m-auxis.ai" style={{ color: 'inherit', textDecoration: 'none' }}>
                  legal@m-auxis.ai
                </a>
                <br />
                Website:{' '}
                <a href="https://m-auxis.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  https://m-auxis.ai
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
