import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { StatsBar } from './components/StatsBar';
import { CustomersSection } from './components/CustomersSection';
import { BlogSection } from './components/BlogSection';
import { NewsletterBanner } from './components/NewsletterBanner';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { ArticleModal } from './components/ArticleModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState('login');

  const handleOpenBooking = (destination = '') => {
    setSelectedDestination(destination);
    setBookingOpen(true);
  };

  const handleOpenAuth = (tab = 'login') => {
    setAuthDefaultTab(tab);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brandAmber selection:text-brandForestDark">
      {/* Top Floating Glass Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* About Section with Carousel */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Popular Visiting Place And Gallery */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* FAQ Accordion Section */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* Key Metrics Stats Band */}
        <StatsBar />

        {/* Customer Testimonials Grid */}
        <CustomersSection />

        {/* News & Blog Journal */}
        <BlogSection onOpenArticle={(post) => setActiveArticle(post)} />

        {/* Newsletter Callout Banner */}
        <NewsletterBanner />
      </main>

      {/* Deep Emerald Global Footer */}
      <FooterSection onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialDestination={selectedDestination}
      />

      <ArticleModal
        isOpen={Boolean(activeArticle)}
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onBookTrip={(topic) => handleOpenBooking(topic)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    </div>
  );
}
