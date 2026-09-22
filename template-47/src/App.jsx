import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnersBanner } from './components/PartnersBanner';
import { MissionStatementSection } from './components/MissionStatementSection';
import { SolutionsAccordionSection } from './components/SolutionsAccordionSection';
import { PlatformDashboardSection } from './components/PlatformDashboardSection';
import { SmartSolutionsCardsSection } from './components/SmartSolutionsCardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { PreFooterCtaSection } from './components/PreFooterCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { InvestModal } from './components/InvestModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [investModalOpen, setInvestModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-agro-cream text-agro-dark font-sans selection:bg-agro-lime selection:text-agro-forest relative">
      {/* Fixed / Floating Top Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onGetStarted={() => setInvestModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section with Wheat Field Panorama & Dual CTAs */}
        <HeroSection
          onStartInvesting={() => setInvestModalOpen(true)}
          onMeetFarmers={() => {
            const el = document.getElementById('testimonials');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Partner Brands Marquee / Banner */}
        <PartnersBanner />

        {/* 3. Cultiva Legacy Mission Statement with Inline Image Pill */}
        <MissionStatementSection />

        {/* 4. Smart Farming Solutions Accordion & Irrigated Field Media */}
        <SolutionsAccordionSection />

        {/* 5. How It Works - Platform Dashboard & 4 Telemetry Stats */}
        <PlatformDashboardSection />

        {/* 6. Smart Solutions 3-Cards Showcase */}
        <SmartSolutionsCardsSection
          onSelectSolution={(sol) => setContactModalOpen(true)}
        />

        {/* 7. Real Stories Shared by Our Farmers & Brand Badges */}
        <TestimonialsSection />

        {/* 8. Common Farmer Questions FAQ Accordion */}
        <FaqSection
          onContactSupport={() => setContactModalOpen(true)}
        />

        {/* 9. Pre-Footer Call to Action Banner */}
        <PreFooterCtaSection
          onContactUs={() => setContactModalOpen(true)}
        />
      </main>

      {/* 10. Floating Glassmorphic Footer */}
      <Footer
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <InvestModal
        isOpen={investModalOpen}
        onClose={() => setInvestModalOpen(false)}
      />
    </div>
  );
}
