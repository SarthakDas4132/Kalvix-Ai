import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

const FAQS = [
  {
    id: 1,
    question: "Which social media platforms does Kalvix.ai support for publishing?",
    answer: "We support direct publishing and scheduling to Instagram (Feed, Reels, Stories), TikTok, YouTube (Shorts & Videos), X (formerly Twitter), LinkedIn (Profiles & Pages), Facebook, and Pinterest. You can schedule content weeks in advance and check it all on a single unified drag-and-drop calendar."
  },
  {
    id: 2,
    question: "How does the Creator & Influencer Discovery tool search for profiles?",
    answer: "Kalvix.ai indexes over 10 million active creator profiles across all major networks. You can search by keywords, filter by engagement rates, location, niche, and audience demographics (like age/gender split). We also analyze engagement metrics to detect bot followers, ensuring your collaborations are authentic."
  },
  {
    id: 3,
    question: "Can I manage and sign collaboration contracts inside the app?",
    answer: "Yes! Kalvix.ai comes with a built-in contracts module. You can generate legally-binding creator agreements, customize templates, send them to creators, and have them e-signed instantly in-app. Once signed, the contracts are stored securely on your dashboard."
  },
  {
    id: 4,
    question: "Does Kalvix.ai integrate with my Meta and Google Ads accounts?",
    answer: "Absolutely. You can link your Meta Ads Manager and Google Ads directly. This allows you to launch paid campaigns, sync targeted CRM audiences, A/B test creatives, and track combined organic & paid ad analytics in a single unified dashboard."
  },
  {
    id: 5,
    question: "What payment methods are supported for paying creators?",
    answer: "Kalvix.ai facilitates direct creator payouts via bank transfer, Stripe, and UPI. You can trigger mass payments once creators submit their approved deliverables, auto-generate invoices, and track your total marketing expenditure automatically."
  },
  {
    id: 6,
    question: "Can I connect multiple accounts per social platform?",
    answer: "Yes! Depending on your plan, you can connect multiple brand channels or client accounts. You can easily categorize them by brand workspaces, so your social content calendars, CRM pipelines, and ads dashboards remain completely separate and organized."
  }
];

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const { isMobile, isTablet } = useBreakpoint();

  const toggleFAQ = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-pink)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="faq"
        style={{
          backgroundColor: 'var(--color-pink)', // Pink section background
          paddingTop: isMobile ? '48px' : '80px',
          paddingBottom: isMobile ? '48px' : '80px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="bg-dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }} />

        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '56px', position: 'relative' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker yellow"
                style={{
                  display: 'inline-flex',
                  marginBottom: '16px',
                  transform: 'rotate(5deg)',
                  color: 'var(--color-dark)',
                }}
              >
                FAQ
              </div>
            </ScrollReveal>
            <TextReveal
              delay={100}
              style={{
                fontSize: isMobile ? '36px' : isTablet ? '64px' : 'min(12vw, 110px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                color: 'var(--color-dark)',
              }}
            >
              Got questions?
            </TextReveal>
          </div>

          {/* Messaging Chat Thread */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '32px' }}>
            {FAQS.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div key={faq.id} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '16px', width: '100%' }}>
                  
                  {/* Question bubble (Yellow background, left aligned) */}
                  <div
                    onClick={() => toggleFAQ(faq.id)}
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: 'var(--color-yellow)',
                      color: 'var(--color-dark)',
                      padding: isMobile ? '16px 20px' : '20px 32px',
                      borderRadius: isMobile ? '24px' : '40px',
                      width: isMobile ? '100%' : '85%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <span style={{ fontSize: isMobile ? '15px' : '18px', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>{faq.question}</span>
                    
                    {/* Chevron circle */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                        transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                      }}
                    >
                      ▲
                    </div>
                  </div>

                  {/* Answer bubble (Green background, right aligned) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, scale: 0.95 }}
                        animate={{ height: 'auto', opacity: 1, scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                          alignSelf: 'flex-end',
                          width: isMobile ? '100%' : '85%',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: 'var(--color-green)',
                            color: 'var(--color-dark)',
                            padding: isMobile ? '16px 20px' : '24px 32px',
                            borderRadius: isMobile ? '20px' : '32px',
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: 1.5,
                            fontWeight: 500,
                            margin: '0',
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
    </>
  );
}
