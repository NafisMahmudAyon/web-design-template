import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandMarquee from './components/BrandMarquee';
import ServicesSection from './components/ServicesSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import ValueSection from './components/ValueSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { X, Play } from 'lucide-react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [authNotification, setAuthNotification] = useState(null);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleLoginClick = () => {
    setAuthNotification('Investor & Client portal login is ready. Please contact your account manager for direct access.');
    setTimeout(() => {
      setAuthNotification(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#ffe875] selection:text-gray-900">
      {/* Toast Notification */}
      {authNotification && (
        <div className="fixed top-24 right-6 z-50 max-w-sm bg-gray-900 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-start justify-between gap-3 animate-slideDown">
          <p className="leading-relaxed">{authNotification}</p>
          <button
            onClick={() => setAuthNotification(null)}
            className="text-gray-400 hover:text-white shrink-0 mt-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        onRequestCallClick={handleOpenContact}
        onLoginClick={handleLoginClick}
      />

      {/* Hero Section with Interactive Property Filter */}
      <HeroSection
        onGetStartedClick={handleOpenContact}
        onWatchVideoClick={() => setIsVideoModalOpen(true)}
      />

      {/* Edge-faded Brand Marquee */}
      <BrandMarquee />

      {/* Our Excellent Services */}
      <ServicesSection />

      {/* What Make Us Different - Polymorphic Floating Cards */}
      <DifferentiatorsSection
        onSelectDifferentiator={handleOpenContact}
      />

      {/* Value Proposition & Architectural Collage */}
      <ValueSection
        onRequestCall={handleOpenContact}
      />

      {/* Newsletter Subscription with Split Layout */}
      <NewsletterSection />

      {/* Modern Black Footer */}
      <Footer
        onOpenContact={handleOpenContact}
      />

      {/* Contact & Valuation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Video Modal Preview */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-video w-full bg-neutral-900 flex flex-col items-center justify-center text-white p-8 text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#0052ff] flex items-center justify-center mb-4 shadow-xl shadow-blue-500/30">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
              <h3 className="text-xl font-bold mb-2">SaleHouse Architectural Tour</h3>
              <p className="text-xs text-neutral-400 max-w-sm">
                Watch our 4K video showcase of contemporary residential developments and 3D laser-scanned masterplans.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
