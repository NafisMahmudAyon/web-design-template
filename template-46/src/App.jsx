import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformOverviewSection from './components/PlatformOverviewSection';
import { BentoKpiSection } from './components/BentoKpiSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenAuth = (mode = 'signup', plan = null) => {
    setAuthMode(mode);
    setSelectedPlan(plan);
    setAuthModalOpen(true);
  };

  const handleOpenVideo = () => {
    setVideoModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    handleOpenAuth('signup', plan);
  };

  return (
    <div className="min-h-screen bg-finovia-dark text-white selection:bg-finovia-lime selection:text-finovia-dark font-sans relative">
      {/* Top Fixed / Sticky Navigation */}
      <Navbar
        onOpenAuth={(mode) => handleOpenAuth(mode)}
        onGetStarted={() => handleOpenAuth('signup')}
      />

      <main>
        {/* 1. Hero Section with Floating Financial Widgets */}
        <HeroSection
          onGetStarted={() => handleOpenAuth('signup')}
          onWatchDemo={handleOpenVideo}
          onOpenAuth={() => handleOpenAuth('signup')}
        />

        {/* 2. Platform Overview & Dynamic Interactive Accordion */}
        <PlatformOverviewSection
          onExploreServices={() => handleOpenAuth('signup')}
        />

        {/* 3. Bento Grid & 4 Metric KPI Pillars */}
        <BentoKpiSection
          onGetStarted={() => handleOpenAuth('signup')}
        />

        {/* 4. Tiered Pricing Plans with Monthly/Yearly Toggle */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 5. Client Testimonials & Asymmetric Banner */}
        <TestimonialsSection />

        {/* 6. Editorial Blog & Financial Insights */}
        <BlogSection
          onSelectArticle={(article) => handleOpenAuth('signup')}
        />
      </main>

      {/* 7. Comprehensive Fintech Footer */}
      <Footer
        onGetStarted={() => handleOpenAuth('signup')}
      />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        selectedPlan={selectedPlan}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
