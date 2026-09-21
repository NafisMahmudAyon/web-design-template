import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DataSourcesMarquee from './components/DataSourcesMarquee';
import RiskCategoriesSection from './components/RiskCategoriesSection';
import ComplexDataSection from './components/ComplexDataSection';
import RiskChangesSection from './components/RiskChangesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BusinessImpactSection from './components/BusinessImpactSection';
import FooterSection from './components/FooterSection';
import BookDemoModal from './components/BookDemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-[#f4f5f6] text-[#1a1d20] font-sans selection:bg-[#18191c] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Page Layout */}
      <main>
        {/* Section 1: Hero & Interactive Dashboard */}
        <HeroSection onOpenDemo={handleOpenDemo} />

        {/* Enterprise Data Partners Infinite Marquee */}
        <DataSourcesMarquee />

        {/* Section 2: Environmental Risk Categories Grid (Zero CLS Polymorphism) */}
        <RiskCategoriesSection onOpenDemo={handleOpenDemo} />

        {/* Section 3: Data to Decisions Accordion & Dynamic Line Graph */}
        <ComplexDataSection onOpenDemo={handleOpenDemo} />

        {/* Section 4: Live Risk Changes Canyon & Intelligence Radar */}
        <RiskChangesSection onOpenDemo={handleOpenDemo} />

        {/* Section 5: Dark Testimonials Carousel Slider ("Client Says") */}
        <TestimonialsSection />

        {/* Section 6: Business Impact 3-Card Grid */}
        <BusinessImpactSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Section 7: Final CTA & Multi-Column Footer */}
      <FooterSection onOpenDemo={handleOpenDemo} />

      {/* Interactive Book a Demo & Platform Simulation Modal */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
