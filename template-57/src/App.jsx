import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrimaryHomeSection } from './components/PrimaryHomeSection';
import { StatsBar } from './components/StatsBar';
import { MapSection } from './components/MapSection';
import { PremierHousesSection } from './components/PremierHousesSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTABanner } from './components/CTABanner';
import { FooterSection } from './components/FooterSection';
import { PropertyModal } from './components/PropertyModal';
import { TourModal } from './components/TourModal';
import { AuthModal } from './components/AuthModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [tourPropertyTitle, setTourPropertyTitle] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenTour = (propertyOrTitle = '') => {
    const title = typeof propertyOrTitle === 'object' ? propertyOrTitle?.title : propertyOrTitle;
    setTourPropertyTitle(title || 'The Pinnacle at Highland Park');
    setTourModalOpen(true);
  };

  const handleSearch = (searchParams) => {
    if (searchParams?.category) {
      setActiveFilter(searchParams.category);
    }
    const propSection = document.getElementById('properties');
    propSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-brandLime selection:text-brandDark">
      {/* Top Floating Glass Capsule Navbar */}
      <Navbar
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenTour={() => handleOpenTour()}
      />

      <main>
        {/* Hero Section with Architectural Retreat & Search Bar */}
        <HeroSection
          onSearch={handleSearch}
          activeFilter={activeFilter}
          onFilterChange={(cat) => setActiveFilter(cat)}
        />

        {/* Primary Home Bento Section */}
        <PrimaryHomeSection
          onOpenProperty={(prop) => setSelectedProperty(prop)}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 4 Metrics Stats Divider */}
        <StatsBar />

        {/* Interactive Map Feature Section */}
        <MapSection
          onFindNearest={() => {
            const propSection = document.getElementById('properties');
            propSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Premier Houses 6-Card Grid */}
        <PremierHousesSection
          activeCategory={activeFilter}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Client Testimonials Spotlight */}
        <TestimonialsSection />

        {/* High-Impact CTA Banner */}
        <CTABanner onGetStarted={() => handleOpenTour()} />
      </main>

      {/* Pre-Footer & Global Directory Footer */}
      <FooterSection onOpenTour={() => handleOpenTour()} />

      {/* Interactive Modals */}
      <PropertyModal
        isOpen={Boolean(selectedProperty)}
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleTour={(prop) => handleOpenTour(prop)}
      />

      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        initialPropertyTitle={tourPropertyTitle}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
