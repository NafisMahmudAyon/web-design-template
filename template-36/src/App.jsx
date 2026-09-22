import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import AdvantageSection from './components/AdvantageSection';
import SolutionsSection from './components/SolutionsSection';
import MobileAppSection from './components/MobileAppSection';
import FeaturesBento from './components/FeaturesBento';
import TradeAnywhereSection from './components/TradeAnywhereSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [selectedPlan, setSelectedPlan] = useState('Pro Plan');

  const openAuth = (mode = 'signup', plan = '') => {
    setAuthMode(mode);
    if (plan) setSelectedPlan(plan);
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#00D287] selection:text-[#0B1A1C]">
      {/* 1. Fixed Floating Header Navigation */}
      <Navbar
        onSignIn={() => openAuth('signin')}
        onSignUp={() => openAuth('signup')}
      />

      {/* Main Landing Page Flow */}
      <main>
        {/* 2. Hero Section with Live Floating Web Dashboard */}
        <HeroSection onGetStarted={() => openAuth('signup', 'Pro Plan')} />

        {/* 3. Partner Brands Infinite Marquee */}
        <PartnersMarquee />

        {/* 4. "Our Advantage" Narrative & Key Metrics (250K+, 99.98%, $2.5B+) */}
        <AdvantageSection />

        {/* 5. "Our Solutions": Zero-CLS Polymorphic Web3 Solutions Cards */}
        <SolutionsSection
          onExploreSolution={(name) => openAuth('signup', name)}
        />

        {/* 6. Mobile App Showcase with High-Fidelity iPhone Mockup */}
        <MobileAppSection
          onDownloadClick={() => openAuth('wallet', 'Mobile Trading')}
        />

        {/* 7. "Features": 2x2 Bento Grid for Market Dominance */}
        <FeaturesBento />

        {/* 8. "Trade Smarter, Anytime, Anywhere" Live Mobile Chart & Accordions */}
        <TradeAnywhereSection />

        {/* 9. Zero-CLS Polymorphic Pricing Section with Switcher */}
        <PricingSection
          onSelectPlan={(plan) => openAuth('signup', plan.name)}
        />

        {/* 10. Verified Trader Testimonials (Featured Center Card + Controls) */}
        <TestimonialsSection />

        {/* 11. FAQ Section with Consultation Card & Expandable Questions */}
        <FaqSection
          onConsultationClick={() => openAuth('signup', 'Consultation')}
        />

        {/* 12. Bottom CTA Conversion Banner */}
        <CtaBanner
          onDownloadClick={() => openAuth('wallet', 'App Download')}
        />
      </main>

      {/* 13. Comprehensive Footer with Colossal Raxon Brand Watermark */}
      <Footer onLinkClick={(label) => openAuth('signup', label)} />

      {/* Interactive Authentication & Web3 Wallet Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={closeAuth}
        initialMode={authMode}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
