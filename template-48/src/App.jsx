import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutBentoSection } from './components/AboutBentoSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { SimpleStepsSection } from './components/SimpleStepsSection';
import { SmarterSolutionsSection } from './components/SmarterSolutionsSection';
import { GlobalQualityMetricsSection } from './components/GlobalQualityMetricsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LatestArticlesSection } from './components/LatestArticlesSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { InvestModal } from './components/InvestModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [investModalOpen, setInvestModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-terra-cream text-terra-dark font-sans selection:bg-terra-lime selection:text-terra-forest relative">
      {/* Fixed / Floating Top Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onGetStarted={() => setInvestModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section with Seed Photography & Giant Wordmark */}
        <HeroSection
          onStartInvesting={() => setInvestModalOpen(true)}
          onMeetFarmers={() => {
            const el = document.getElementById('testimonials');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Us Mission Statement & 4-Item Bento Grid */}
        <AboutBentoSection />

        {/* 3. Powerful Farming Tools Built for Smarter Agriculture */}
        <WhyChooseUsSection />

        {/* 4. Simple Steps Behind Smarter Farming */}
        <SimpleStepsSection />

        {/* 5. Smarter Farming Solutions Carousel */}
        <SmarterSolutionsSection
          onSelectSolution={(sol) => setContactModalOpen(true)}
        />

        {/* 6. Delivering Global Quality Farming Excellence Banner */}
        <GlobalQualityMetricsSection />

        {/* 7. Real Stories From Our Farmers */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions Numbered Accordion */}
        <FaqSection
          onContactUs={() => setContactModalOpen(true)}
        />

        {/* 9. Latest Articles & Agricultural Insights */}
        <LatestArticlesSection
          onSelectArticle={(art) => setContactModalOpen(true)}
        />
      </main>

      {/* 10. Dark Agricultural Footer */}
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
