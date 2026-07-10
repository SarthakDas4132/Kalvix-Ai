import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

const SERVICES = [
  {
    id: 'publishing',
    number: '01',
    title: 'AI Content Studio',
    subtitle: 'Create images, videos, reels, captions, hashtags, ad creatives, and marketing content from a single prompt.',
    color: 'var(--color-yellow)',
    tag: 'Core',
    items: [
      'AI image generation',
      'AI video creation',
      'Captions & hashtags',
      'Ad copy generation',
      'Brand content templates',
      'Multi-platform content formats',
    ],
  },
  {
    id: 'creators',
    number: '02',
    title: 'Cross-Platform Publishing',
    subtitle: 'Publish, schedule, and manage content across every major social platform from one dashboard.',
    color: 'var(--color-purple)',
    tag: 'Discover',
    items: [
      'Instagram publishing',
      'Facebook publishing',
      'LinkedIn publishing',
      'X (Twitter) publishing',
      'YouTube scheduling',
      'Content calendar & approvals',
    ],
  },
  {
    id: 'contracts',
    number: '03',
    title: 'Creator Marketplace',
    subtitle: 'Discover, connect, and collaborate with creators who match your audience, goals, and budget.',
    color: 'var(--color-peach)',
    tag: 'Legal',
    items: [
      'Creator discovery',
      'AI creator matching',
      'Category-based search',
      'Engagement analytics',
      'Campaign management',
      'Contract & payment workflows ',
    ],
  },
  {
    id: 'ads',
    number: '04',
    title: 'Meta & Google Ads',
    subtitle: 'Launch, manage, and optimize ad campaigns without navigating complicated ad managers.',
    color: 'var(--color-blue)',
    tag: 'Ads',
    items: [
      'Meta Ads integration',
      'Google Ads integration',
      'AI campaign creation',
      'Audience targeting',
      'A/B testing',
      'Unified performance reporting',
    ],
  },
  {
    id: 'crm',
    number: '05',
    title: 'AI CRM & Lead Management',
    subtitle: 'Capture, qualify, nurture, and convert leads automatically with AI-powered workflows.',
    color: 'var(--color-green)',
    tag: 'AI',
    items: [
      'Lead capture automation',
      'AI lead scoring',
      'WhatsApp automation',
      'SMS automation',
      'AI calling workflows',
      'Sales pipeline management',
    ],
  },
  {
    id: 'analytics',
    number: '06',
    title: 'Revenue & Analytics Hub',
    subtitle: 'Track every campaign, lead, sale, creator collaboration, and marketing dollar from a single source of truth.',
    color: 'var(--color-pink)',
    tag: 'Data',
    items: [
      'Marketing analytics',
      'Sales analytics',
      'ROI tracking',
      'Conversion reporting',
      'Revenue attribution',
      'Business performance dashboards',
    ],
  },
  {
    id: 'marketplace',
    number: '07',
    title: 'Influencer Marketing Platform',
    subtitle: 'Launch creator campaigns, connect with the right influencers, automate outreach, and track results from one place.',
    color: 'var(--color-pink)',
    tag: 'Marketplace',
    items: [
      'Creator discovery & search',
      'AI creator recommendations',
      'Budget-based creator matching',
      'Campaign management',
      'Outreach & collaboration workflows',
      'Contract management',
      'Payment management',
      'Campaign performance tracking',
      'ROI & sales attribution'
    ],
  },
];

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { isMobile, isTablet } = useBreakpoint();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as any, { once: true, margin: '-100px' });

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setExpandedId('publishing');
      }, 1400); // Trigger smooth opening after staggered entrance slide-up is complete
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <>
      <div style={{ width: '100%', color: 'var(--bg-cream)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="services"
        style={{
          backgroundColor: 'var(--bg-cream)',
          paddingTop: isMobile ? '48px' : '96px',
          paddingBottom: isMobile ? '48px' : '96px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '64px' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker blue"
                style={{ display: 'inline-block', marginBottom: '20px', transform: 'rotate(-3deg)' }}
              >
                What's inside
              </div>
            </ScrollReveal>
            <TextReveal
              delay={100}
              style={{
                fontSize: isMobile ? '30px' : isTablet ? '52px' : 'min(6.5vw, 76px)',
                fontFamily: 'var(--font-satoshi), sans-serif',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: isMobile ? '-1.5px' : isTablet ? '-2.5px' : '-3.5px',
                wordSpacing: '-0.05em',
                color: 'var(--color-dark)',
                maxWidth: '1300px',
                margin: '0 auto',
              }}
            >
              {"Everything your business needs\n- built in."}
            </TextReveal>
            <p
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: isMobile ? '15px' : '17px',
                fontWeight: 500,
                opacity: 0.65,
                maxWidth: '650px',
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}
            >
              From content creation to customer acquisition, sales automation and creator partnerships, Kalvix brings your entire growth engine into one AI-powered platform.
            </p>
          </div>

          {/* ── Accordion List ── */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {SERVICES.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                 <motion.div
                   key={service.id}
                   variants={itemVariants}
                   whileHover={{
                     y: -5,
                     boxShadow: isExpanded
                       ? (isMobile ? '6px 6px 0 0 var(--color-dark)' : '12px 12px 0 0 var(--color-dark)')
                       : (isMobile ? '6px 6px 0 0 var(--color-dark)' : '8px 8px 0 0 var(--color-dark)'),
                   }}
                   transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                   style={{
                     border: 'var(--border-width) solid var(--color-dark)',
                     borderRadius: isMobile ? '18px' : '24px',
                     backgroundColor: isExpanded ? service.color : 'var(--bg-white-pure)',
                     boxShadow: isExpanded
                       ? (isMobile ? '4px 4px 0 0 var(--color-dark)' : '8px 8px 0 0 var(--color-dark)')
                       : (isMobile ? '3px 3px 0 0 var(--color-dark)' : '4px 4px 0 0 var(--color-dark)'),
                     overflow: 'hidden',
                     cursor: 'pointer',
                   }}
                   onClick={() => toggle(service.id)}
                 >
                  {/* ── Header Row ── */}
                  <div
                    style={{
                      padding: isMobile ? '16px' : '24px 32px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : '20px',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Number + Text */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '20px', flex: 1, minWidth: 0 }}>
                      {/* Numbered circle */}
                      <div
                        style={{
                          width: isMobile ? '36px' : '48px',
                          height: isMobile ? '36px' : '48px',
                          borderRadius: '50%',
                          border: 'var(--border-width) solid var(--color-dark)',
                          backgroundColor: isExpanded ? 'var(--bg-white-pure)' : service.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-oswald)',
                          fontWeight: 800,
                          fontSize: isMobile ? '14px' : '16px',
                          color: 'var(--color-dark)',
                          flexShrink: 0,
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        {service.number}
                      </div>

                      {/* Title + subtitle */}
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h3
                            style={{
                              fontFamily: 'var(--font-satoshi), sans-serif',
                              fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
                              fontWeight: 900,
                              color: 'var(--color-dark)',
                              margin: 0,
                              lineHeight: 1.2,
                            }}
                          >
                            {service.title}
                          </h3>
                          {/* Tag pill */}
                          <span
                            style={{
                              backgroundColor: 'var(--color-dark)',
                              color: 'var(--bg-cream)',
                              fontFamily: 'var(--font-oswald)',
                              fontWeight: 700,
                              fontSize: isMobile ? '9px' : '11px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              padding: isMobile ? '1px 6px' : '2px 10px',
                              borderRadius: '999px',
                            }}
                          >
                            {service.tag}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: isMobile ? '13px' : '14px',
                            fontWeight: 500,
                            color: 'var(--color-dark)',
                            opacity: 0.7,
                            marginTop: '4px',
                            margin: '4px 0 0',
                            lineHeight: 1.3,
                          }}
                        >
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div
                      style={{
                        width: isMobile ? '30px' : '40px',
                        height: isMobile ? '30px' : '40px',
                        borderRadius: '50%',
                        border: 'var(--border-width) solid var(--color-dark)',
                        backgroundColor: 'var(--bg-white-pure)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: isMobile ? '18px' : '24px',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </div>
                  </div>

                  {/* ── Expanded panel ── */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: isMobile ? '0 16px 20px 16px' : '0 32px 32px 32px',
                            borderTop: '2px dashed rgba(24, 26, 18, 0.2)',
                            paddingTop: isMobile ? '16px' : '24px',
                          }}
                        >
                          <p
                            style={{
                              fontFamily: 'var(--font-oswald)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              letterSpacing: '1px',
                              opacity: 0.6,
                              marginBottom: '16px',
                            }}
                          >
                            What's included
                          </p>

                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
                              gap: '12px',
                            }}
                          >
                            {service.items.map((item, index) => (
                              <div
                                key={index}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '10px',
                                  fontSize: isMobile ? '13px' : '15px',
                                  fontWeight: 500,
                                  fontFamily: 'var(--font-satoshi)',
                                  lineHeight: 1.4,
                                }}
                              >
                                {/* Checkmark bullet */}
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-dark)',
                                    border: 'var(--border-width) solid var(--color-dark)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    marginTop: '1px',
                                  }}
                                >
                                  <svg viewBox="0 0 12 12" width="10" height="10" fill="none">
                                    <path d="M2 6l3 3 5-5" stroke="var(--bg-cream)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Bottom CTA ── */}
          <div style={{ textAlign: 'center', marginTop: isMobile ? '36px' : '56px' }}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: isMobile ? '14px' : '16px', fontWeight: 500, opacity: 0.65, marginBottom: '20px' }}>
              Ready to run everything from one place?
            </p>
            <button
              className="neo-btn"
              onClick={() => {
                const el = document.getElementById('footer-contact');
                if (el) {
                  if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(el, { offset: -90 });
                  } else {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              style={{ fontSize: isMobile ? '15px' : '17px', padding: isMobile ? '12px 28px' : '14px 40px' }}
            >
              Get Early Access →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
