import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProofLogos from './components/SocialProofLogos';
import FeaturesBentoGrid from './components/FeaturesBentoGrid';
import ImpactMetrics from './components/ImpactMetrics';
import DarkRevenueSection from './components/DarkRevenueSection';
import PlatformGrid from './components/PlatformGrid';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Professional Plan');

  const handleOpenContact = (planName = 'Professional Plan') => {
    setSelectedPlan(planName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#141814] font-sans antialiased selection:bg-[#C7F263] selection:text-black">
      {/* Floating Header */}
      <Navbar onContactClick={() => handleOpenContact('Professional Plan')} />

      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Hero Section with Meadow Backdrop & Floating Cards */}
        <HeroSection onGetStarted={() => handleOpenContact('Professional Plan')} />

        {/* 2. Rating & Partner Logos Marquee */}
        <SocialProofLogos />

        {/* 3. 4-Card Bento Grid Features */}
        <FeaturesBentoGrid onExploreBento={() => handleOpenContact('Professional Plan')} />

        {/* 4. Strategic Impact Metrics Bar (92%, 90%, 97%, 85%) */}
        <ImpactMetrics />

        {/* 5. Dark Section: Real-Time Recurring Revenue & Invoicing Showcase */}
        <DarkRevenueSection />

        {/* 6. 6-Feature Platform Capabilities Grid */}
        <PlatformGrid />

        {/* 7. Zero-CLS Polymorphic Pricing Section */}
        <PricingSection
          onSelectPlan={(plan) => handleOpenContact(plan.name)}
          onCustomSolutionClick={() => handleOpenContact('Custom Enterprise Plan')}
        />

        {/* 8. Verified Advisor Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ Section with Consultation Support Card */}
        <FaqSection onBookConsultation={() => handleOpenContact('Support Consultation')} />

        {/* 10. Floating Bottom Call-To-Action Meadow Banner */}
        <CtaBanner onGetStarted={() => handleOpenContact('Professional Plan')} />
      </main>

      {/* 11. Multi-Column Footer with Newsletter & Office Locations */}
      <Footer onContactClick={() => handleOpenContact('General Inquiry')} />

      {/* Interactive Consultation / Demo Booking Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        preselectedPlan={selectedPlan}
      />
    </div>
  );
}
