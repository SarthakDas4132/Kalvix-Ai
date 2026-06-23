import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Section imports
import { Navbar } from '../components/sections/navbar.web';
import { Hero } from '../components/sections/hero.web';
import { WhyUs } from '../components/sections/whyus.web';
import { Features } from '../components/sections/features.web';
import { Services } from '../components/sections/services.web';
import { Benefits } from '../components/sections/benefits.web';
import { Portfolio } from '../components/sections/portfolio.web';
import { Process } from '../components/sections/process.web';
import { Comparison } from '../components/sections/comparison.web';
import { Testimonials } from '../components/sections/testimonials.web';
import { Pricing } from '../components/sections/pricing.web';
import { About } from '../components/sections/about.web';
import { FAQ } from '../components/sections/faq.web';
import { Footer } from '../components/sections/footer.web';
import { ScrollWheel } from '../components/ui/scroll-wheel.web';

export default function HomeScreenWeb() {
  // Initialize Lenis smooth scroll on page mount
  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window !== 'undefined') {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileOrTablet = window.innerWidth < 1024;

      // Disable Lenis on mobile/tablet or touchscreens to prioritize buttery-smooth native momentum touch scroll
      if (isTouchDevice || isMobileOrTablet) {
        const handleHashClick = (e: MouseEvent) => {
          const target = e.target as HTMLAnchorElement;
          if (target && target.hash && target.origin === window.location.origin) {
            e.preventDefault();
            const element = document.querySelector(target.hash);
            if (element) {
              const rect = element.getBoundingClientRect();
              const scrollTop = window.scrollY || document.documentElement.scrollTop;
              window.scrollTo({
                top: rect.top + scrollTop - 90,
                behavior: 'smooth'
              });
            }
          }
        };

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          (anchor as HTMLAnchorElement).addEventListener('click', handleHashClick);
        });

        return () => {
          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            (anchor as HTMLAnchorElement).removeEventListener('click', handleHashClick);
          });
        };
      }

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Expose globally so components can access scroll commands safely
      (window as any).lenis = lenis;

      let rafId: number;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      // Listen to body size changes and update Lenis to prevent scroll-locking or bottom clipping
      const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(document.body);

      // Intercept standard hash links to perform Lenis smooth scroll offset actions
      const handleHashClick = (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        if (target && target.hash && target.origin === window.location.origin) {
          e.preventDefault();
          const element = document.querySelector(target.hash);
          if (element) {
            lenis.scrollTo(element as HTMLElement, { offset: -90 });
          }
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        (anchor as HTMLAnchorElement).addEventListener('click', handleHashClick);
      });

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
      {/* Navbar navigation */}
      <Navbar />

      {/* Floating scroll wheel — right side */}
      <ScrollWheel />

      {/* Main page content sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Why Us — 3 illustrated feature cards */}
        <WhyUs />

        {/* Features & Logo Marquee & Stats numbers */}
        <Features />

        {/* Accordion Services list */}
        <Services />

        {/* Bento Benefits Grid */}
        <Benefits />

        {/* Portfolio mockup cards */}
        <Portfolio />

        {/* Process interactive switcher */}
        <Process />

        {/* Comparison Versus Table */}
        <Comparison />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Pricing stack */}
        <Pricing />

        {/* About team list */}
        <About />

        {/* FAQ chat bubbles */}
        <FAQ />
      </main>

      {/* Footer Form & Directory */}
      <Footer />
    </div>
  );
}
