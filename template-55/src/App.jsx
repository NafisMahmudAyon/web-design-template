import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import FeaturesBento from './components/FeaturesBento';
import SuccessStatsSection from './components/SuccessStatsSection';
import RecurringRevenueSection from './components/RecurringRevenueSection';
import InvoicesSection from './components/InvoicesSection';
import PlatformVisibilityGrid from './components/PlatformVisibilityGrid';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('Custom Financial Solution');

  const handleOpenConsultation = (planName = 'Institutional Wealth Advisory') => {
    setSelectedPlanName(planName);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-brand-lime selection:text-gray-950 font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenConsultation('General Advisory & Support')} />

      {/* Hero Section with Floating Savings & Transfer Widgets */}
      <HeroSection onOpenTransferModal={() => handleOpenConsultation('Smart Wealth Growth Plan')} />

      {/* Social Proof & Partners Marquee */}
      <PartnersMarquee />

      {/* Powerful Finance 2x2 Bento Features */}
      <FeaturesBento />

      {/* Success Metrics & Statement */}
      <SuccessStatsSection />

      {/* Real-Time Recurring Revenue (Dark Charcoal Block) */}
      <RecurringRevenueSection />

      {/* Professional Invoices Made Simple (Light Block) */}
      <InvoicesSection />

      {/* Total Financial Visibility 6-Card Grid */}
      <PlatformVisibilityGrid />

      {/* Pricing Plans with Zero CLS */}
      <PricingSection
        onSelectPlan={(plan) => handleOpenConsultation(plan)}
        onOpenCustomModal={() => handleOpenConsultation('Custom Enterprise Financial Solution')}
      />

      {/* Testimonials Customer Stories */}
      <TestimonialsSection />

      {/* Quick Answers & FAQ with Support Specialist */}
      <FAQSection onOpenConsultation={() => handleOpenConsultation('Personal Financial Consultation')} />

      {/* High-Impact CTA Banner */}
      <CTASection onOpenGetStarted={() => handleOpenConsultation('Get Started with Finora')} />

      {/* Footer & Multi-Column Directory */}
      <FooterSection />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        initialPlan={selectedPlanName}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
