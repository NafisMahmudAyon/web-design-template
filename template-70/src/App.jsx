import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MostViewedSection from './components/MostViewedSection';
import EasiestMethodSection from './components/EasiestMethodSection';
import StepsSection from './components/StepsSection';
import AgentTrustSection from './components/AgentTrustSection';
import AppPromoBanner from './components/AppPromoBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleOpenBooking = (property = null) => {
    setSelectedProperty(property);
    setIsBookingModalOpen(true);
  };

  const handleSearchSubmit = (searchParams) => {
    setNotification(
      `Showing verified luxury rentals matching: ${searchParams.propertyType || 'Villa'} in ${searchParams.cityStreet || '123Street'}`
    );
    setTimeout(() => {
      setNotification(null);
    }, 4500);

    // Smooth scroll down to property listings
    const elem = document.getElementById('location');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f334c] selection:bg-[#0f334c] selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 max-w-md bg-[#0f334c] text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between gap-3 animate-slideDown">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="leading-relaxed">{notification}</p>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-white/60 hover:text-white shrink-0 ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Hero Section with Integrated Navbar and Overlapping Search Bar */}
      <HeroSection
        onSearchSubmit={handleSearchSubmit}
        onTryNowClick={() => handleOpenBooking(null)}
      />

      {/* Most Viewed Section with 3 Luxury Properties & Custom Geometry */}
      <MostViewedSection
        onSelectProperty={(prop) => handleOpenBooking(prop)}
      />

      {/* The Easiest Method To Find a House */}
      <EasiestMethodSection
        onTryNowClick={() => handleOpenBooking(null)}
      />

      {/* Our Work In 3 Steps - Polymorphic Zero-CLS Cards */}
      <StepsSection />

      {/* Get the house in trust by working with our agents */}
      <AgentTrustSection
        onContactAgent={() => handleOpenBooking(null)}
      />

      {/* Discover us in our app - App Promo Banner */}
      <AppPromoBanner />

      {/* Clean Modern Footer */}
      <Footer
        onOpenContact={() => handleOpenBooking(null)}
      />

      {/* Property Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedProperty={selectedProperty}
      />
    </div>
  );
}
