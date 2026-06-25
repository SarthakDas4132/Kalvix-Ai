import React, { useState } from 'react';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import { ScrollReveal } from '../ui/scroll-reveal.web';
import { TextReveal } from '../ui/text-reveal.web';

const PLANS = [
  {
    id: 'starter',
    title: 'Starter',
    basePrice: 29,
    period: 'month',
    badgeColor: 'var(--color-pink)',
    cardBg: 'var(--color-green)',
    desc: 'Perfect for content creators and growing brands looking to automate publishing and kickstart discovery.',
    features: [
      'Cross-Platform Publishing (up to 3 social accounts)',
      'Core Drag & Drop Content Calendar',
      'Basic Campaign Analytics & KPI Reports',
      'Creator Discovery (up to 50 profile searches/month)',
      'Meta & Google Ads basic tracking',
      '1 Brand Workspace & 1 Team Seat included',
    ]
  },
  {
    id: 'growth',
    title: 'Growth Pro',
    basePrice: 79,
    period: 'month',
    badgeColor: 'var(--color-green)',
    cardBg: 'var(--color-pink)',
    desc: 'For active marketing teams and agencies scaling collaborations, contracts, and paid ad campaigns.',
    features: [
      'Cross-Platform Publishing (up to 10 social accounts)',
      'Advanced Creator Search & Demographics (1,000 searches/mo)',
      'In-App Collaboration Contracts & E-Signatures',
      'Direct Ads Builder (Meta & Google Ads campaigns)',
      'AI CRM & Automated Follow-Up Leads',
      'Direct Creator Payouts & Mass Payments',
      '3 Brand Workspaces & 5 Team Seats included',
    ]
  },
  {
    id: 'scale',
    title: 'Enterprise Scale',
    basePrice: 199,
    period: 'month',
    badgeColor: 'var(--color-yellow)',
    cardBg: 'var(--color-purple)',
    desc: 'For enterprises and large agencies managing massive campaigns, unlimited accounts, and custom workflows.',
    features: [
      'Unlimited Social Accounts & Content Queues',
      'Unlimited Creator Search, Auditing & Bot Detection',
      'Custom Contract Templates & Approval Workflows',
      'Advanced Multi-Account Ad Campaigns & Audience Sync',
      'Full AI Sales Forecasting & Advanced Analytics CRM',
      'Direct UPI/Bank Payout Integrations',
      'Unlimited Workspaces, Seats, & Dedicated API Access',
    ]
  }
];

export function Pricing() {
  const [billingCycles, setBillingCycles] = useState<Record<string, 'monthly' | 'yearly'>>({
    starter: 'monthly',
    growth: 'monthly',
    scale: 'monthly',
  });
  const { isMobile, isTablet } = useBreakpoint();

  const toggleCycle = (planId: string, value: 'monthly' | 'yearly') => {
    setBillingCycles((prev) => ({ ...prev, [planId]: value }));
  };

  return (
    <>
      <div style={{ width: '100%', color: 'var(--color-dark)', position: 'relative', zIndex: 10 }}>
        <div className="scallop-up-mask" style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </div>
      <section
        id="pricing"
        style={{
          backgroundColor: 'var(--color-dark)', // Dark background
          color: 'var(--bg-white-pure)',
          paddingTop: isMobile ? '48px' : '80px',
          paddingBottom: isMobile ? '48px' : '100px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="bg-dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} />

        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '40px', position: 'relative' }}>
            <ScrollReveal delay={0}>
              <div
                className="badge-sticker purple"
                style={{
                  display: 'inline-flex',
                  marginBottom: '16px',
                  transform: 'rotate(-4deg)',
                  color: 'var(--color-dark)',
                }}
              >
                Pricing
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
                color: 'var(--bg-white-pure)',
              }}
            >
              Pick your flavor
            </TextReveal>
          </div>

          {/* 3-Column Plan Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '32px' : '24px',
              alignItems: 'stretch',
              marginTop: isMobile ? '32px' : '56px',
            }}
          >
            {PLANS.map((plan) => {
              const cycle = billingCycles[plan.id] || 'monthly';
              const isYearly = cycle === 'yearly';
              const price = isYearly 
                ? Math.round(plan.basePrice * 0.7) 
                : plan.basePrice;
              const isFeatured = plan.id === 'growth';

              return (
                <div
                  key={plan.id}
                  className="neo-card pricing-card"
                  style={{
                    padding: isMobile ? '20px' : '28px',
                    backgroundColor: plan.cardBg,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '32px',
                    border: isFeatured ? '3px solid var(--color-dark)' : '2.5px solid var(--color-dark)',
                    boxShadow: isMobile 
                      ? '4px 4px 0 0 var(--color-dark)' 
                      : isFeatured 
                        ? '8px 8px 0 0 var(--color-dark)' 
                        : '6px 6px 0 0 var(--color-dark)',
                    transform: (!isMobile && !isTablet && isFeatured) ? 'scale(1.03)' : 'none',
                    zIndex: isFeatured ? 2 : 1,
                    position: 'relative',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  {/* Floating Best Value Badge for Featured Card */}
                  {isFeatured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-2deg)',
                        backgroundColor: 'var(--color-yellow)',
                        color: 'var(--color-dark)',
                        border: '2.5px solid var(--color-dark)',
                        borderRadius: '9999px',
                        padding: '6px 16px',
                        fontSize: '11px',
                        fontWeight: 900,
                        fontFamily: 'var(--font-oswald)',
                        textTransform: 'uppercase',
                        boxShadow: '3px 3px 0 0 var(--color-dark)',
                        whiteSpace: 'nowrap',
                        zIndex: 10,
                        letterSpacing: '1px',
                      }}
                    >
                      🔥 Most Popular
                    </div>
                  )}

                  {/* Inner White Container Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-white-pure)',
                      border: '2.5px solid var(--color-dark)',
                      borderRadius: '24px',
                      padding: isMobile ? '20px 16px' : '28px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '16px',
                    }}
                  >
                    {/* Plan Badge Header */}
                    <div
                      className="badge-sticker"
                      style={{
                        backgroundColor: plan.badgeColor,
                        fontSize: '14px',
                        transform: 'rotate(-2deg)',
                        color: 'var(--color-dark)',
                        fontWeight: 800,
                        border: '2px solid var(--color-dark)',
                        boxShadow: '2px 2px 0 0 var(--color-dark)',
                        alignSelf: 'center',
                      }}
                    >
                      {plan.title}
                    </div>

                    {/* Price */}
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                      <span style={{ fontSize: isMobile ? '44px' : '52px', fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1, color: 'var(--color-dark)' }}>
                        ${price}
                      </span>
                      <span style={{ fontSize: '15px', fontFamily: 'var(--font-oswald)', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, marginLeft: '4px', color: 'var(--color-dark)' }}>
                        /{plan.period}
                      </span>
                    </div>

                    {/* Switcher capsule */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: 'var(--bg-white-pure)',
                        border: '2px solid var(--color-dark)',
                        borderRadius: '9999px',
                        padding: '3px',
                        position: 'relative',
                        minWidth: '160px',
                      }}
                    >
                      <button
                        onClick={() => toggleCycle(plan.id, 'monthly')}
                        style={{
                          flex: 1,
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          border: !isYearly ? '1.5px solid var(--color-dark)' : '1.5px solid transparent',
                          backgroundColor: !isYearly ? 'var(--color-yellow)' : 'transparent',
                          color: 'var(--color-dark)',
                          fontFamily: 'var(--font-oswald)',
                          fontWeight: 700,
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => toggleCycle(plan.id, 'yearly')}
                        style={{
                          flex: 1,
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          border: isYearly ? '1.5px solid var(--color-dark)' : '1.5px solid transparent',
                          backgroundColor: isYearly ? 'var(--color-yellow)' : 'transparent',
                          color: 'var(--color-dark)',
                          fontFamily: 'var(--font-oswald)',
                          fontWeight: 700,
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Yearly
                      </button>
                    </div>

                    {/* Helper text */}
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-dark-purple)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.3px', minHeight: '14px' }}>
                      {isYearly 
                        ? `Billed annually ($${price * 12}/yr)` 
                        : 'Save up to 30% by paying yearly'
                      }
                    </span>

                    {/* Dashed divider */}
                    <div style={{ borderTop: '2px dashed var(--color-dark)', opacity: 0.15, width: '100%', margin: '4px 0' }} />

                    {/* Desc */}
                    <p style={{ fontSize: '13.5px', lineHeight: 1.45, opacity: 0.85, margin: 0, fontWeight: 500, color: 'var(--color-dark)', minHeight: isMobile ? 'auto' : '60px', display: 'flex', alignItems: 'center' }}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Features & Button container */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px', flex: 1 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0', paddingLeft: 0, margin: 0, minHeight: isMobile ? 'auto' : '330px' }}>
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: isMobile ? '13px' : '14px',
                            fontWeight: 700,
                            lineHeight: 1.35,
                            color: 'var(--color-dark)',
                            padding: '12px 0',
                            borderBottom: idx < plan.features.length - 1 ? '1.5px solid rgba(24, 26, 18, 0.15)' : 'none',
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-dark)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <svg viewBox="0 0 12 12" width="8" height="8" fill="none">
                              <path d="M2 6l3 3 5-5" stroke={plan.cardBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div style={{ transform: (isFeatured && !isMobile && !isTablet) ? 'translateY(-11px)' : 'none' }}>
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
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--color-yellow)',
                          border: '2.5px solid var(--color-dark)',
                          boxShadow: '0 4px 0 0 var(--color-dark)',
                          padding: '12px 24px',
                          borderRadius: '9999px',
                          fontFamily: 'var(--font-oswald)',
                          fontSize: '15px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                        }}
                      >
                        Start Free Trial
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
