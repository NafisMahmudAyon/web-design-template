import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section1Hero from './components/Section1Hero';
import Section2FeaturedProperties from './components/Section2FeaturedProperties';
import Section3BuildingStories from './components/Section3BuildingStories';
import Section4WhyClientsTrustUs from './components/Section4WhyClientsTrustUs';
import Section5SmartInsights from './components/Section5SmartInsights';
import Section6ClientTestimonials from './components/Section6ClientTestimonials';
import Section7Footer from './components/Section7Footer';
import BookNowModal from './components/BookNowModal';
import PropertyQuickViewModal from './components/PropertyQuickViewModal';
import NotificationToast from './components/NotificationToast';
import { featuredProperties } from './data/properties';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [savedProperties, setSavedProperties] = useState(new Set(["prop-1", "prop-3"]));
  const [toast, setToast] = useState(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 3500);
  };

  const handleToggleSave = (property) => {
    setSavedProperties((prev) => {
      const next = new Set(prev);
      if (next.has(property.id)) {
        next.delete(property.id);
        showToast('info', 'Removed from Saved', property.title);
      } else {
        next.add(property.id);
        showToast('saved', 'Property Saved!', property.title);
      }
      return next;
    });
  };

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      
      {/* Sticky Header Navbar */}
      <Navbar
        onBookNow={() => setIsBookModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Section 1: Hero & Interactive Hotspots */}
      <Section1Hero
        onExplore={() => handleNavigate('featured')}
        onBookNow={() => setIsBookModalOpen(true)}
      />

      {/* Section 2: Featured Properties */}
      <Section2FeaturedProperties
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onToggleSave={handleToggleSave}
        savedSet={savedProperties}
      />

      {/* Section 3: Building Spaces That Tell Stories (Dark Section) */}
      <Section3BuildingStories
        onReadMore={() => handleNavigate('why-us')}
      />

      {/* Section 4: Why Clients Trust Us */}
      <Section4WhyClientsTrustUs
        onSeeAll={() => handleNavigate('featured')}
      />

      {/* Section 5: Smart Real Estate Insights */}
      <Section5SmartInsights
        onSelectInsight={(slide) => {
          showToast('info', slide.title, slide.desc);
        }}
      />

      {/* Section 6: Our Clients Speak Boldly */}
      <Section6ClientTestimonials />

      {/* Section 7: Start Your Journey & Footer */}
      <Section7Footer
        onExplore={() => handleNavigate('featured')}
        onNavigate={handleNavigate}
        onSubscribe={(email) => showToast('success', 'Subscribed!', `Updates will be sent to ${email}`)}
      />

      {/* Modals & Toasts */}
      <BookNowModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSubmitSuccess={(title, message) => showToast('success', title, message)}
      />

      <PropertyQuickViewModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookInspection={(prop) => {
          setIsBookModalOpen(true);
        }}
        onToggleSave={handleToggleSave}
        isSaved={selectedProperty && savedProperties.has(selectedProperty.id)}
      />

      <NotificationToast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
