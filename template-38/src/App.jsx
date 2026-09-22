import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricImpactSection from './components/MetricImpactSection';
import ThreePillarsSection from './components/ThreePillarsSection';
import HabitsSection from './components/HabitsSection';
import GlobalBankingBanner from './components/GlobalBankingBanner';
import PlatformClarityGrid from './components/PlatformClarityGrid';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import FaqGrid from './components/FaqGrid';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('trial'); // 'trial', 'exchange', 'contact'
  const [exchangeData, setExchangeData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('Professional Plan');

  const openTrial = (plan = 'Professional Plan') => {
    setSelectedPlan(plan);
    setModalMode('trial');
    setModalOpen(true);
  };

  const openExchange = (from, to) => {
    setExchangeData({ from, to });
    setModalMode('exchange');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#09182A] font-sans antialiased selection:bg-[#C5FF32] selection:text-black">
      {/* 1. Header Navigation */}
      <Navbar
        onLogin={() => openTrial('Login')}
        onSignUp={() => openTrial('Professional Plan')}
      />

      {/* Main Flow */}
      <main>
        {/* 2. Hero Section with Cloudscape Portrait & Floating Widgets */}
        <HeroSection onStartTrial={() => openTrial('Professional Plan')} />

        {/* 3. +90% Premium Analysis & Metric Impact Strip */}
        <MetricImpactSection />

        {/* 4. Three Pillars (Currency Converter, 30M+ Users, Instant Transfers) */}
        <ThreePillarsSection onExchangeClick={openExchange} />

        {/* 5. Building Smarter Financial Habits + Spending Analytics Card */}
        <HabitsSection onStartTrial={() => openTrial('Professional Plan')} />

        {/* 6. Global Banking Made Easy Cloudscape Banner */}
        <GlobalBankingBanner onCreateAccount={() => openTrial('Professional Plan')} />

        {/* 7. "One Platform. Financial Clarity" 6-Card Polymorphic Grid */}
        <PlatformClarityGrid onCardClick={(feature) => openTrial(feature)} />

        {/* 8. Zero-CLS Polymorphic Pricing Section with 65% OFF Toggle */}
        <PricingSection
          onSelectPlan={(plan) => openTrial(plan.name)}
          onCustomSolution={() => openTrial('Custom Solution')}
        />

        {/* 9. Trusted by Growing Businesses (Featured Card + Brand Tabs) */}
        <TestimonialSection />

        {/* 10. 10-Question 2-Column FAQ Grid */}
        <FaqGrid />

        {/* 11. Smarter Decisions, Better Finance CTA Banner */}
        <CtaBanner
          onStartTrial={() => openTrial('Professional Plan')}
          onRequestDemo={() => openTrial('Enterprise Demo')}
        />
      </main>

      {/* 12. Comprehensive Footer */}
      <Footer />

      {/* Interactive Account & Currency Exchange Modal */}
      <AccountModal
        isOpen={modalOpen}
        onClose={closeModal}
        initialMode={modalMode}
        exchangeData={exchangeData}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
