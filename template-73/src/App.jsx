import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturedListingsSection from './components/FeaturedListingsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import PropertyDetailModal from './components/PropertyDetailModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenProperty = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleDiscover = () => {
    const listingsElem = document.getElementById('listings');
    if (listingsElem) {
      listingsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-sm bg-black text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-slideDown">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="font-medium">{toastMessage}</p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white shrink-0 ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onSignUpClick={() => setToastMessage('VIP membership registration open.')}
        onOffersClick={() => setToastMessage('Exclusive luxury investment concessions available.')}
      />

      {/* Hero Section */}
      <HeroSection
        onDiscoverClick={handleDiscover}
      />

      {/* Explore Our Services (Buying 01 & Selling 02) */}
      <ServicesSection
        onServiceClick={(service) =>
          setToastMessage(`Advisors for ${service} are ready to assist.`)
        }
      />

      {/* Our Featured Listings (6-Card Grid with Filter Pills) */}
      <FeaturedListingsSection
        onSelectListing={handleOpenProperty}
      />

      {/* Keep Update With Us (Newsletter) */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Property Detail & Booking Modal */}
      <PropertyDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}
