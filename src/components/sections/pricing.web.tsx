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
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const isYearly = billingCycle === 'yearly';
  const { isMobile, isTablet } = useBreakpoint();

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

          {/* Global Billing Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '32px' : '56px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(254, 250, 231, 0.05)',
                border: isMobile ? '2px solid var(--bg-white-pure)' : '2.5px solid var(--bg-white-pure)',
                borderRadius: '9999px',
                padding: '4px',
                position: 'relative',
                boxShadow: isMobile ? '3px 3px 0 0 var(--color-dark)' : '4px 4px 0 0 var(--color-dark)',
                minWidth: isMobile ? '220px' : '280px',
              }}
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                style={{
                  flex: 1,
                  padding: isMobile ? '6px 14px' : '8px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: !isYearly ? 'var(--color-yellow)' : 'transparent',
                  color: !isYearly ? 'var(--color-dark)' : 'var(--bg-white-pure)',
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: isMobile ? '12px' : '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '4px' : '8px',
                }}
              >
                Monthly
                {/* Invisible placeholder to match the Yearly button width */}
                <span
                  aria-hidden="true"
                  style={{
                    visibility: 'hidden',
                    fontSize: isMobile ? '7px' : '10px',
                    fontWeight: 800,
                    padding: isMobile ? '1px 4px' : '2px 8px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-satoshi)',
                  }}
                >
                  -30%
                </span>
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                style={{
                  flex: 1,
                  padding: isMobile ? '6px 14px' : '8px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: isYearly ? 'var(--color-yellow)' : 'transparent',
                  color: isYearly ? 'var(--color-dark)' : 'var(--bg-white-pure)',
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: isMobile ? '12px' : '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '4px' : '8px',
                  whiteSpace: 'nowrap',
                }}
              >
                Yearly
                <span
                  style={{
                    backgroundColor: 'var(--color-pink)',
                    color: 'var(--color-dark)',
                    fontSize: isMobile ? '7px' : '10px',
                    fontWeight: 800,
                    padding: isMobile ? '1px 4px' : '2px 8px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-satoshi)',
                    textTransform: 'none',
                  }}
                >
                  -30%
                </span>
              </button>
            </div>
          </div>

          {/* 3-Column Plan Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '32px' : '24px',
              alignItems: 'stretch',
            }}
          >
            {PLANS.map((plan) => {
              // Apply 30% discount for yearly billing
              const price = isYearly 
                ? Math.round(plan.basePrice * 0.7) 
                : plan.basePrice;
              const isFeatured = plan.id === 'growth';

              return (
                <div
                  key={plan.id}
                  className="neo-card pricing-card"
                  style={{
                    padding: isMobile ? '32px 20px' : '40px 28px',
                    backgroundColor: plan.cardBg,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'visible', // Change to visible to let the floating badge overlap the top border
                    borderRadius: '24px',
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

                  {/* Header / Info Section */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
                    
                    {/* Price at the Top */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                        <span style={{ fontSize: isMobile ? '48px' : '56px', fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1, color: 'var(--color-dark)' }}>
                          ${price}
                        </span>
                        <span style={{ fontSize: '16px', fontFamily: 'var(--font-oswald)', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, marginLeft: '4px', color: 'var(--color-dark)' }}>
                          /{plan.period}
                        </span>
                      </div>
                      {/* Always reserve space — just toggle visibility so card height never changes */}
                      <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-dark-purple)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', visibility: isYearly ? 'visible' : 'hidden' }}>
                        Billed annually (${Math.round(plan.basePrice * 0.7) * 12}/yr)
                      </div>
                    </div>

                    {/* Plan Badge Header */}
                    <div
                      className="badge-sticker"
                      style={{
                        backgroundColor: plan.badgeColor,
                        fontSize: '15px',
                        transform: 'rotate(2deg)',
                        color: 'var(--color-dark)',
                        fontWeight: 800,
                        border: '2px solid var(--color-dark)',
                        boxShadow: '2px 2px 0 0 var(--color-dark)',
                        alignSelf: 'center',
                      }}
                    >
                      {plan.title}
                    </div>

                    {/* Desc */}
                    <p style={{ fontSize: '13.5px', lineHeight: 1.45, opacity: 0.85, margin: 0, fontWeight: 500, color: 'var(--color-dark)' }}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Divider line between top section and features */}
                  <div style={{ height: '2.5px', backgroundColor: 'var(--color-dark)', opacity: 0.15, width: '100%' }} />

                  {/* Features & Button container */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '28px', flex: 1 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '14px', paddingLeft: 0, margin: 0 }}>
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            fontSize: isMobile ? '13px' : '14px',
                            fontWeight: 700,
                            lineHeight: 1.35,
                            color: 'var(--color-dark)',
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
                              marginTop: '2px',
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
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
