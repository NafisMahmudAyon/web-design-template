import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import OnboardingSteps from './components/OnboardingSteps';
import ConfidenceGrid from './components/ConfidenceGrid';
import InteractiveTabsSection from './components/InteractiveTabsSection';
import PricingSection from './components/PricingSection';
import DualTestimonialMarquee from './components/DualTestimonialMarquee';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import TaskModal from './components/TaskModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('sales'); // 'task' or 'sales'
  const [selectedPlan, setSelectedPlan] = useState('Professional');

  const openSalesModal = (plan = 'Professional') => {
    setSelectedPlan(plan);
    setModalMode('sales');
    setModalOpen(true);
  };

  const openTaskModal = () => {
    setModalMode('task');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#7C3AED] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onGetStarted={() => openSalesModal('Professional')} />

      {/* Main Flow */}
      <main>
        {/* 2. Hero Section with Floating Product Launch 2026 Dashboard */}
        <HeroSection
          onGetStarted={() => openSalesModal('Professional')}
          onContactSales={() => openSalesModal('Enterprise')}
          onCreateTask={openTaskModal}
        />

        {/* 3. Partner Brand Logos & Narrative */}
        <PartnersMarquee />

        {/* 4. Three-Step Onboarding Process Cards */}
        <OnboardingSteps />

        {/* 5. "Manage Projects with Confidence" 2x2 Feature Grid */}
        <ConfidenceGrid />

        {/* 6. "Everything You Need to Manage Projects Smarter" Tabbed Showcase */}
        <InteractiveTabsSection />

        {/* 7. Zero-CLS Polymorphic Pricing Section */}
        <PricingSection onSelectPlan={(plan) => openSalesModal(plan.name)} />

        {/* 8. Dual Row Infinite Scrolling Review Marquee */}
        <DualTestimonialMarquee />

        {/* 9. FAQ Section with Consultation Card */}
        <FaqSection onContactSales={() => openSalesModal('Consultation')} />

        {/* 10. Bottom CTA Banner */}
        <CtaBanner
          onGetStarted={() => openSalesModal('Professional')}
          onContactSales={() => openSalesModal('Enterprise')}
        />
      </main>

      {/* 11. Multi-Column Footer with Newsletter */}
      <Footer onAction={(action) => openSalesModal(action)} />

      {/* Interactive Modal (Task Creator or Sales Inquiry) */}
      <TaskModal
        isOpen={modalOpen}
        onClose={closeModal}
        initialMode={modalMode}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
