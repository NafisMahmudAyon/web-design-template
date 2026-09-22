import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import DealsSection from './components/DealsSection';
import DestinationsSection from './components/DestinationsSection';
import StaysFeatureSection from './components/StaysFeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTABanner from './components/CTABanner';
import FooterSection from './components/FooterSection';
import BookingModal from './components/BookingModal';
import DestinationModal from './components/DestinationModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingPrefill, setBookingPrefill] = useState('');

  const handleOpenBooking = (destinationName = '') => {
    setBookingPrefill(destinationName || 'Kyoto, Japan');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-gray-900 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Hero Section with Search & Booking Widget */}
      <HeroSection
        onSearchSubmit={(searchParams) => handleOpenBooking(searchParams.destination)}
      />

      {/* Who We Are & Achievements */}
      <WhoWeAreSection />

      {/* Exclusive Deals */}
      <DealsSection
        onSelectDeal={(deal) => handleOpenBooking('Exclusive Luxury Villa Offer')}
      />

      {/* Best Travel Destinations */}
      <DestinationsSection
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />

      {/* Handpicked Stays & Live Statistics */}
      <StaysFeatureSection />

      {/* Customer Stories & Video Showcase */}
      <TestimonialsSection />

      {/* High-Impact CTA Banner */}
      <CTABanner onOpenBookingModal={() => handleOpenBooking()} />

      {/* Footer with Watermark Display Typography */}
      <FooterSection />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialDestination={bookingPrefill}
        onClose={() => setBookingModalOpen(false)}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBook={(destTitle) => {
          setSelectedDestination(null);
          handleOpenBooking(destTitle);
        }}
      />
    </div>
  );
}
