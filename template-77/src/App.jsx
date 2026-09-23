import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import BuildTrustSection from './components/BuildTrustSection';
import ProgramsSection from './components/ProgramsSection';
import RealResultsSection from './components/RealResultsSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleBookCall = () => {
    setBookingModalOpen(true);
  };

  const handleGetStarted = () => {
    const programs = document.getElementById('programs');
    if (programs) {
      programs.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (program) => {
    showToast(`Inquiring about ${program.name}! Scheduling consultation...`);
    setBookingModalOpen(true);
  };

  const handleWatchVideo = () => {
    showToast('Loading full 4K match footage highlight reel...');
  };

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-[#182623] selection:bg-[#2E5B53] selection:text-white flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E433C] text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs sm:text-sm border border-emerald-700/60 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section inside Forest Green Rounded Container */}
        <HeroSection
          onBookCall={handleBookCall}
          onGetStarted={handleGetStarted}
        />

        {/* 2. Sponsors Continuous Edge-Masked Marquee */}
        <PartnersMarquee />

        {/* 3. Build Trust Quickly 2-Card Visual Showcase */}
        <BuildTrustSection onExplorePrograms={handleGetStarted} />

        {/* 4. Programs Designed For Every Athlete (Accordion) */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* 5. Real Results, Real Growth (Zero CLS Stability) */}
        <RealResultsSection onWatchVideo={handleWatchVideo} />

        {/* 6. Why Athletes Choose Elevate Camp (3 Feature Cards) */}
        <WhyChooseSection />

        {/* 7. What Our Athletes Say & 4.8 Rating Bento */}
        <TestimonialsSection />
      </main>

      {/* 8. Bottom Dark Green Footer Container */}
      <Footer />

      {/* Booking / Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
