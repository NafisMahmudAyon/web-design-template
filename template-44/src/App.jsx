import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionStatementSection from './components/MissionStatementSection';
import ThreeStepsSection from './components/ThreeStepsSection';
import ProjectsWithConfidenceSection from './components/ProjectsWithConfidenceSection';
import EverythingYouNeedSection from './components/EverythingYouNeedSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('signup'); // 'signup' | 'sales'
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenAuth = (type = 'signup', plan = null) => {
    setModalType(type);
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenAuth={(type) => handleOpenAuth(type)} />

      {/* Hero Section with Product Launch 2026 Workspace Mockup */}
      <HeroSection 
        onGetStarted={() => handleOpenAuth('signup')}
        onContactSales={() => handleOpenAuth('sales')}
      />

      {/* Mission Statement & Brand Logos Marquee */}
      <MissionStatementSection />

      {/* 3 Simple Steps Onboarding Section */}
      <ThreeStepsSection />

      {/* Manage Projects with Confidence 2x2 Feature Grid */}
      <ProjectsWithConfidenceSection />

      {/* Everything You Need to Manage Projects Smarter (Interactive Tabs & Tasks) */}
      <EverythingYouNeedSection />

      {/* Clear & Simple Pricing Plans */}
      <PricingSection 
        onSelectPlan={(plan) => handleOpenAuth(plan.id === 'enterprise' ? 'sales' : 'signup', plan.name)}
      />

      {/* Testimonials Stream */}
      <TestimonialsSection />

      {/* Frequently Asked Questions with Still Have a Question card */}
      <FaqSection onContactUs={() => handleOpenAuth('sales')} />

      {/* Pre-Footer Callout Banner */}
      <CtaSection 
        onGetStarted={() => handleOpenAuth('signup')}
        onContactSales={() => handleOpenAuth('sales')}
      />

      {/* Footer with Newsletter */}
      <Footer />

      {/* Interactive Modal */}
      <AuthModal 
        isOpen={modalOpen}
        type={modalType}
        planName={selectedPlan}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
