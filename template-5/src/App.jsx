import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ModuleHouseSection from './components/ModuleHouseSection';
import CityMapSection from './components/CityMapSection';
import DeluxeCondosSection from './components/DeluxeCondosSection';
import FeedbackSection from './components/FeedbackSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import PropertyModal from './components/PropertyModal';
import ContactModal from './components/ContactModal';
import TourModal from './components/TourModal';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Custom Modular Construction');
  const [tourOpen, setTourOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (topic = 'Custom Modular Construction') => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#D2DDE6] py-3 sm:py-6 px-2 sm:px-4 md:px-6 flex justify-center text-zinc-900 selection:bg-zinc-800 selection:text-white font-sans antialiased">
      {/* Outer Floating Main Application Canvas */}
      <div className="w-full max-w-[1480px] bg-[#F8FAFC] rounded-[36px] sm:rounded-[56px] shadow-2xl overflow-hidden border border-white/60 relative">
        {/* Subtle Ambient Background Mesh */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Section 1: Hero Section */}
          <HeroSection
            onOpenTour={() => setTourOpen(true)}
            onOpenContact={() => handleOpenContact('General Inquiries')}
            onNavigate={handleNavigate}
          />

          {/* Section 2: Module House Tech */}
          <ModuleHouseSection
            onSelectModule={(item) => setSelectedProperty(item)}
          />

          {/* Section 3: Interactive Location & City Map */}
          <CityMapSection
            onSelectHotspot={(spot) => setSelectedProperty(spot)}
          />

          {/* Section 4: Deluxe Condos */}
          <DeluxeCondosSection
            onSelectCondo={(condo) => setSelectedProperty(condo)}
          />

          {/* Section 5: Feedback & Partner Brands */}
          <FeedbackSection />

          {/* Section 6: Discover Frequently Asked Questions */}
          <FaqSection />

          {/* Section 7: Let's Build Your Dream House & Footer */}
          <FooterSection
            onOpenContact={(topic) => handleOpenContact(topic)}
            onNavigate={handleNavigate}
          />
        </div>
      </div>

      {/* Interactive Modals */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />

      <TourModal
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
      />
    </div>
  );
}
