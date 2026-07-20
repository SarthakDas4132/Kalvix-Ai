import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

const FAQS = [
  {
    id: 1,
    question: "What can I do with Mauxis.ai?",
    answer: "Mauxis is an AI-powered Growth Operating System that helps businesses create content, publish across social platforms, run Meta & Google Ads, manage leads, automate follow-ups, track sales and collaborate with influencers—all from one dashboard."
  },
  {
    id: 2,
    question: "Which social media platforms does Mauxis support?",
    answer: "Mauxis supports Instagram, Facebook, LinkedIn, X (Twitter), YouTube, TikTok, Pinterest and more. You can publish, schedule and manage content across multiple platforms from a single content calendar."
  },
  {
    id: 3,
    question: "Can Mauxis create content using AI?",
    answer: "Yes. Mauxis can generate images, videos, captions, hashtags, ad creatives and marketing copy using AI. Simply describe your campaign and let Mauxis create content tailored to your brand."
  },
  {
    id: 4,
    question: "Does Mauxis support Meta and Google Ads?",
    answer: "Absolutely. You can create, launch and manage Meta Ads and Google Ads directly from Mauxis without navigating complex advertising dashboards. AI recommendations help optimize targeting, budgets and performance."
  },
  {
    id: 5,
    question: "How does the AI CRM work?",
    answer: "Mauxis automatically captures leads from forms, ads, websites, social media and WhatsApp. Leads are organized, scored, tracked and moved through your sales pipeline with AI-powered automation."
  },
  {
    id: 6,
    question: "Can Mauxis automate WhatsApp, SMS and follow-ups?",
    answer: "Yes. Mauxis helps automate customer communication through WhatsApp, SMS, email and AI-powered workflows, ensuring every lead receives timely follow-ups without manual effort."
  },
  {
    id: 7,
    question: "How does Influencer Marketing work on Mauxis?",
    answer: "Businesses can discover creators based on niche, audience size, engagement, location and budget. Mauxis helps manage outreach, collaborations, contracts, payments and campaign performance from one platform."
  },
  {
    id: 8,
    question: "Can I manage my sales team inside Mauxis?",
    answer: "Yes. Mauxis includes pipeline management, sales tracking, lead assignments, activity monitoring, conversion reporting and performance dashboards to help teams close more deals."
  },
  {
    id: 9,
    question: "Do I need multiple subscriptions for different tools?",
    answer: "No. Mauxis combines content creation, publishing, advertising, CRM, automation, influencer marketing and analytics into one platform, reducing the need for multiple software subscriptions."
  },
  {
    id: 10,
    question: "Who is Mauxis built for?",
    answer: "Mauxis is designed for agencies, ecommerce brands, real estate businesses, healthcare providers, educational institutions, local businesses, startups and growth-focused teams looking to scale efficiently."
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

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('footer-contact');
    if (contactSection) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(contactSection, { offset: -90 });
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
      <div style={{ width: '100%', color: 'var(--color-pink)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="faq"
        style={{
          backgroundColor: 'var(--color-pink)', // Pink section background
          paddingTop: isMobile ? '48px' : '80px',
          paddingBottom: isMobile ? '88px' : '120px',
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
                fontSize: isMobile ? '30px' : isTablet ? '52px' : 'min(6.5vw, 76px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                color: 'var(--color-dark)',
                maxWidth: '1300px',
                margin: '0 auto',
              }}
            >
              Got questions?
            </TextReveal>
          </div>

          {/* Messaging Chat Thread */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '32px' }}>
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
                      gap: '12px',
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

          {/* Still have questions CTA */}
          <div
            style={{
              marginTop: isMobile ? '48px' : '80px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-white-pure)',
              border: '2.5px solid var(--color-dark)',
              borderRadius: isMobile ? '24px' : '32px',
              padding: isMobile ? '32px 20px' : '48px 64px',
              boxShadow: isMobile ? '4px 4px 0 0 var(--color-dark)' : '8px 8px 0 0 var(--color-dark)',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? '26px' : '36px',
                fontWeight: 800,
                color: 'var(--color-dark)',
                margin: 0,
              }}
            >
              Still have questions?
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: isMobile ? '15px' : '18px',
                color: 'var(--color-dark)',
                opacity: 0.8,
                maxWidth: '550px',
                margin: '12px auto 24px',
                lineHeight: 1.6,
              }}
            >
              Our team is happy to help you understand how Mauxis can fit your business and growth goals.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                onClick={handleScrollToContact}
                className="neo-btn"
                style={{
                  fontSize: isMobile ? '15px' : '16px',
                  padding: isMobile ? '12px 24px' : '14px 32px',
                  cursor: 'pointer',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                Get Early Access
              </button>
              <button
                onClick={handleScrollToContact}
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: isMobile ? '15px' : '16px',
                  letterSpacing: '0.5px',
                  background: 'transparent',
                  border: '2px solid var(--color-dark)',
                  borderRadius: '999px',
                  padding: isMobile ? '12px 24px' : '14px 32px',
                  cursor: 'pointer',
                  color: 'var(--color-dark)',
                  width: isMobile ? '100%' : 'auto',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(24,26,18,0.07)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Book a Demo
              </button>
            </div>
          </div>

        </div>
      </section>
      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
    </>
  );
}
