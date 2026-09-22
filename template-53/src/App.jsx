import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutBentoSection from './components/AboutBentoSection';
import WhyItWorksSection from './components/WhyItWorksSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import QuoteModal from './components/QuoteModal';
import ContactModal from './components/ContactModal';
import ServiceDetailModal from './components/ServiceDetailModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 selection:bg-brand-lime selection:text-gray-950">
      {/* Navigation */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Hero Section with Giant Greenova Typography */}
      <HeroSection
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        onOpenSessionModal={() => setContactModalOpen(true)}
      />

      {/* About Us & Asymmetrical Bento Grid */}
      <AboutBentoSection />

      {/* Why It Works & Interactive Feature Accordion */}
      <WhyItWorksSection />

      {/* Our Services Carousel */}
      <ServicesSection onSelectService={(svc) => setSelectedService(svc)} />

      {/* Testimonials 3-Card Showcase & Partner Logos */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection onOpenContactModal={() => setContactModalOpen(true)} />

      {/* High-Impact CTA Panoramic Banner */}
      <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Footer & Newsletter Subscription */}
      <FooterSection />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => setQuoteModalOpen(true)}
      />
    </div>
  );
}
