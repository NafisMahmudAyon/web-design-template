import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsImpactSection from './components/StatsImpactSection';
import TrustedWorldwideSection from './components/TrustedWorldwideSection';
import SmarterHabitsSection from './components/SmarterHabitsSection';
import GlobalBankingBanner from './components/GlobalBankingBanner';
import FinancialClaritySection from './components/FinancialClaritySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('signup'); // 'signup' | 'login' | 'trial' | 'demo' | 'contact'

  const openAuth = (type = 'signup') => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-lime-400 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenAuth={(type) => openAuth(type)} />

      {/* Hero Section with Sky Gradient & Floating Glass Cards */}
      <HeroSection onStartTrial={() => openAuth('trial')} />

      {/* Stats & Growth Impact with Premium Analysis Card and Marquee */}
      <StatsImpactSection />

      {/* Trust Indicator & 3 Key Showcase Cards (Converter, Users, Transfers) */}
      <TrustedWorldwideSection />

      {/* Smarter Habits Feature Section with Coffee Desk Shot & Spending Card */}
      <SmarterHabitsSection onStartTrial={() => openAuth('trial')} />

      {/* Global Banking Callout Banner */}
      <GlobalBankingBanner onCreateAccount={() => openAuth('signup')} />

      {/* 6 Platform Pillars with Zero-CLS Dynamic Active Highlight */}
      <FinancialClaritySection />

      {/* Transparent Pricing Plans (Monthly/Yearly) & Enterprise Banner */}
      <PricingSection 
        onSelectPlan={() => openAuth('signup')}
        onContactUs={() => openAuth('contact')}
      />

      {/* Customer Testimonials Carousel (Square, Nextfin, Payzen, etc.) */}
      <TestimonialsSection />

      {/* Frequently Asked Questions 2-Column Accordion */}
      <FaqSection />

      {/* Final Bottom CTA Banner with Partner Logos */}
      <CtaBanner 
        onStartTrial={() => openAuth('trial')}
        onRequestDemo={() => openAuth('demo')}
      />

      {/* Comprehensive Footer with Newsletter Subscription */}
      <Footer />

      {/* Global Interactive Auth & Action Modal */}
      <AuthModal 
        isOpen={authModalOpen}
        type={authType}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
