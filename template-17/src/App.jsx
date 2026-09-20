import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CourseShowcaseSection from './components/CourseShowcaseSection';
import AboutGolfioSection from './components/AboutGolfioSection';
import SessionsSection from './components/SessionsSection';
import ConfidenceSection from './components/ConfidenceSection';
import ShopSection from './components/ShopSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaFooterSection from './components/CtaFooterSection';

import BookingModal from './components/BookingModal';
import SignInModal from './components/SignInModal';
import AlexDetailsModal from './components/AlexDetailsModal';
import ProductModal from './components/ProductModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [alexModalOpen, setAlexModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleOpenSignIn = () => setSignInModalOpen(true);
  const handleOpenAlexModal = () => setAlexModalOpen(true);

  const handleOpenShopModal = (item) => {
    setSelectedProduct(item);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a1711] text-white selection:bg-[#E2F844] selection:text-[#0a1711] overflow-x-hidden font-sans">
      {/* 1. Sticky Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenSignIn={handleOpenSignIn}
      />

      {/* 2. Hero Section */}
      <HeroSection
        onOpenBooking={handleOpenBooking}
        onOpenLessons={() => {
          const el = document.getElementById('lessons');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAlexModal={handleOpenAlexModal}
      />

      {/* 3. How It Works Section */}
      <HowItWorksSection
        onOpenBooking={handleOpenBooking}
      />

      {/* 4. Course Showcase & Carousel Section */}
      <CourseShowcaseSection
        onOpenBooking={handleOpenBooking}
        onSelectCourse={handleSelectCourse}
      />

      {/* 5. About Golfio & Circular Metrics Mosaic */}
      <AboutGolfioSection />

      {/* 6. Sessions 5 Cards Section */}
      <SessionsSection
        onOpenBooking={handleOpenBooking}
        onOpenDetails={handleOpenBooking}
      />

      {/* 7. Confidence & Interactive Accordion Section */}
      <ConfidenceSection
        onOpenBooking={handleOpenBooking}
        onOpenLessonModal={handleOpenBooking}
      />

      {/* 8. Shop & Equipment Visual Gallery */}
      <ShopSection
        onOpenShopModal={handleOpenShopModal}
      />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. CTA Banner & Mega Footer */}
      <CtaFooterSection />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />

      <AlexDetailsModal
        isOpen={alexModalOpen}
        onClose={() => setAlexModalOpen(false)}
        onBookWithAlex={() => {
          setAlexModalOpen(false);
          setBookingModalOpen(true);
        }}
      />

      <ProductModal
        item={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
