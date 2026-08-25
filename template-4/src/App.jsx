import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import TopPicksSection from './components/TopPicksSection';
import ServicesSection from './components/ServicesSection';
import EditorChoiceSection from './components/EditorChoiceSection';
import PortfolioGallerySection from './components/PortfolioGallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';
import PropertyModal from './components/PropertyModal';
import ContactModal from './components/ContactModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Luxury Acquisitions');
  const [lightboxData, setLightboxData] = useState({ isOpen: false, image: '', title: '', location: '' });
  const [searchFilter, setSearchFilter] = useState(null);

  // Smooth scroll handler to sections
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (topic = 'Luxury Acquisitions') => {
    setContactTopic(topic);
    setContactModalOpen(true);
  };

  const handleFilterSearch = (filters) => {
    setSearchFilter(filters);
    handleNavigate('picks');
  };

  const handleOpenLightbox = (image, title, location) => {
    setLightboxData({
      isOpen: true,
      image,
      title: title || 'RealWorld Luxury Estate',
      location: location || ''
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, image: '', title: '', location: '' });
  };

  return (
    <div className="min-h-screen bg-[#EAEFF4] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white relative">
      {/* Background Subtle Noise / Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Main Page Layout */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Hero Section */}
        <HeroSection
          onFilterSearch={handleFilterSearch}
          onOpenContact={handleOpenContact}
          onNavigate={handleNavigate}
        />

        {/* 2. Our Story Section */}
        <OurStorySection
          onImageClick={handleOpenLightbox}
        />

        {/* 3. Top Picks Section */}
        <TopPicksSection
          onSelectProperty={setSelectedProperty}
          activeFilter={searchFilter}
        />

        {/* 4. Services Section (Dark Container + DREAM HOME watermark) */}
        <ServicesSection
          onOpenContact={handleOpenContact}
          onImageClick={handleOpenLightbox}
        />

        {/* 5. Editor's Choice Section */}
        <EditorChoiceSection
          onSelectCard={(card) => handleOpenLightbox(card.image, card.title, "Editor's Choice Special")}
        />

        {/* 6. Explore Our Portfolio Gallery Section */}
        <PortfolioGallerySection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Testimonial Section */}
        <TestimonialsSection
          onImageClick={handleOpenLightbox}
        />

        {/* 8. Footer Section (Dark Container + REALWORLD watermark) */}
        <FooterSection
          onOpenContact={handleOpenContact}
          onNavigate={handleNavigate}
          onSearch={(query) => {
            handleNavigate('picks');
          }}
          onImageClick={handleOpenLightbox}
        />
      </div>

      {/* Interactive Modals */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultTopic={contactTopic}
      />

      <LightboxModal
        isOpen={lightboxData.isOpen}
        image={lightboxData.image}
        title={lightboxData.title}
        location={lightboxData.location}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
