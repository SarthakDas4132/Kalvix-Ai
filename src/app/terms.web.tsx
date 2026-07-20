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
              Welcome to The M-Auxis AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using our application, website, and associated services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must not use our Service.
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
                1. Description of Service
              </h2>
              <p>
                The M-Auxis AI provides an AI-powered content marketing platform that enables users to generate branding materials, textual content, and imagery, and schedule/publish this content directly to connected third-party social media platforms, including Meta (Facebook and Instagram).
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
                2. User Accounts and Third-Party Integrations
              </h2>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Account Responsibility:</strong> You are responsible for safeguarding your account credentials and for all activities that occur under your account.
                </li>
                <li>
                  <strong>Meta Integration:</strong> To utilize publishing features, you must link your Facebook and/or Instagram accounts. By doing so, you agree to comply strictly with the{' '}
                  <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    Meta Platform Terms
                  </a>{' '}
                  and{' '}
                  <a href="https://transparency.fb.com/policies/community-standards/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    Community Standards
                  </a>
                  . We reserve the right to suspend your account if your linked Meta profiles are found to be violating these terms.
                </li>
                <li>
                  <strong>Permissions:</strong> You grant us permission to access, store (temporarily), and transmit your Meta Page tokens and relevant media solely for the purpose of executing the publishing actions you initiate.
                </li>
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
                3. Acceptable Use Policy
              </h2>
              <p>You agree <strong>not</strong> to use the Service to:</p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Generate, publish, or distribute content that is illegal, defamatory, harassing, abusive, obscene, or discriminatory.</li>
                <li>Violate any third-party intellectual property rights, copyrights, or trademarks.</li>
                <li>Automate spam, artificially inflate engagement metrics, or manipulate Meta&apos;s algorithms.</li>
                <li>Generate misleading information, deepfakes, or content designed to deceive the public.</li>
              </ul>
              <p style={{ fontWeight: 700 }}>
                Failure to adhere to this Acceptable Use Policy will result in immediate termination of your account and revocation of API access.
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
                4. AI-Generated Content
              </h2>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>No Guarantee of Accuracy:</strong> The Service utilizes third-party artificial intelligence models (such as Google Gemini and OpenAI). We do not guarantee the accuracy, reliability, or appropriateness of the generated content.
                </li>
                <li>
                  <strong>User Liability:</strong> You are solely responsible for reviewing all AI-generated text and imagery before publishing it to your social media channels. You assume all liability and responsibility for the content you choose to publish.
                </li>
                <li>
                  <strong>Intellectual Property of Outputs:</strong> While you own the rights to the specific inputs (Brand DNA) you provide, the generated outputs are provided &quot;as-is.&quot; You are responsible for ensuring that the generated outputs do not infringe on existing copyrights before commercial use.
                </li>
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
                5. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise stated, The M-Auxis AI and its original content, features, and functionality (excluding user-generated content and third-party AI models) are and will remain the exclusive property of The M-Auxis AI and its licensors.
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
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall The M-Auxis AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Loss of profits, data, use, goodwill, or other intangible losses.</li>
                <li>Actions taken by Meta (e.g., shadow-banning, account suspension, or API restriction) resulting from the content you publish using our Service.</li>
                <li>Errors, hallucinations, or copyright infringements present in AI-generated content.</li>
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
                7. Termination
              </h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms or violate Meta&apos;s Platform Terms. Upon termination, your right to use the Service will immediately cease.
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
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by updating the &quot;Last Updated&quot; date. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
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
                9. Contact Us
              </h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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
