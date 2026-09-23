import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import PartnerLogos from './components/PartnerLogos';
import PartnershipsBento from './components/PartnershipsBento';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaFooter from './components/CtaFooter';
import AuthModal from './components/AuthModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleGetStarted = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    showToast(`Selected ${plan.name} plan! Starting checkout...`);
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleDiscover = () => {
    const pricing = document.getElementById('pricing');
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllServices = () => {
    const reviews = document.getElementById('reviews');
    if (reviews) {
      reviews.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#7C3AED] selection:text-white flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111319] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs sm:text-sm border border-gray-800 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section inside Dark Card */}
        <HeroSection
          onGetStarted={handleGetStarted}
          onLoginClick={handleLoginClick}
        />

        {/* 2. Partner Logos Continuous Edge-Masked Marquee */}
        <PartnerLogos />

        {/* 3. 25,000+ Partnerships Built On Results (Lavender Bento) */}
        <PartnershipsBento onDiscover={handleDiscover} />

        {/* 4. Our Pricing Section (Zero CLS Spacing Stability) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 5. Driving Growth Through Innovation And Expertise (Accordion) */}
        <ServicesSection onViewAllServices={handleViewAllServices} />

        {/* 6. Hear From Those We've Helped Grow (Dark Card Twitter Ticker) */}
        <TestimonialsSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 8. Bottom Dark CTA Card & Footer */}
      <CtaFooter />

      {/* Auth Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
