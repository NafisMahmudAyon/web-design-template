import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onGetConnected={() => setQuoteOpen(true)} />

      {/* Hero Section with Massive Container Ship Visual */}
      <HeroSection 
        onCollaborate={() => setQuoteOpen(true)}
        onOpenVideo={() => setVideoOpen(true)}
      />

      {/* About Section with Ship Silhouette & 3 Big KPIs */}
      <AboutSection />

      {/* Explore Our Services Carousel with Manager Spotlight */}
      <ServicesSection onGetQuote={() => setQuoteOpen(true)} />

      {/* Why Businesses Choose Us Container Yard Showcase */}
      <WhyChooseUsSection onGetQuote={() => setQuoteOpen(true)} />

      {/* Customer Testimonials & Partner Brands */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Ready to Move Your Business Forward Banner */}
      <CtaSection onCollaborate={() => setQuoteOpen(true)} />

      {/* Industrial Dark Footer */}
      <Footer />

      {/* Interactive Freight Quote Generator Modal */}
      <QuoteModal 
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

      {/* Video Preview Modal */}
      <VideoModal 
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}
