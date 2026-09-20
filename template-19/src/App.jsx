import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformFeaturesSection from './components/PlatformFeaturesSection';
import CollectionCarouselSection from './components/CollectionCarouselSection';
import PortfolioAnalyticsSection from './components/PortfolioAnalyticsSection';
import DigitalVaultSection from './components/DigitalVaultSection';
import MarketplaceSection from './components/MarketplaceSection';
import CollectorTestimonialsSection from './components/CollectorTestimonialsSection';
import CtaPortfolioCard from './components/CtaPortfolioCard';
import LuxuryFooter from './components/LuxuryFooter';
import WatchModal from './components/WatchModal';
import SignInModal from './components/SignInModal';

export default function App() {
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleOpenWatchModal = (watch) => {
    setSelectedWatch(watch);
    setIsWatchModalOpen(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F3F4F6] selection:bg-gold-500 selection:text-black antialiased relative">
      {/* Top Luxury Navigation */}
      <Navbar
        onSignInClick={() => setIsSignInModalOpen(true)}
        onGetStartedClick={() => setIsSignInModalOpen(true)}
      />

      <main>
        {/* Section 1: Hero with Macro Dial & Floating Valuation Cards */}
        <HeroSection onExploreClick={() => scrollToSection('collection')} />

        {/* Section 2: Platform Features with Interactive Floating Preview */}
        <PlatformFeaturesSection />

        {/* Section 3: Every Timepiece One Private Collection (Zero-CLS Cards) */}
        <CollectionCarouselSection onSelectWatch={handleOpenWatchModal} />

        {/* Section 4: Watch Portfolio At A Glance (Donut Allocation Gauge) */}
        <PortfolioAnalyticsSection />

        {/* Section 5: A Digital Vault For Your Collection */}
        <DigitalVaultSection onExploreVault={() => scrollToSection('marketplace')} />

        {/* Section 6: Marketplace (Buy With Insight, Sell With Confidence) */}
        <MarketplaceSection
          onSelectWatch={handleOpenWatchModal}
          onExploreMarketplace={() => scrollToSection('collection')}
        />

        {/* Section 7: Trusted by Serious Collectors (Zero-CLS Testimonials Carousel) */}
        <CollectorTestimonialsSection />

        {/* Section 8: CTA High-Performance Portfolio Card */}
        <CtaPortfolioCard onStartClick={() => setIsSignInModalOpen(true)} />

        {/* Section 9: Luxury Footer */}
        <LuxuryFooter />
      </main>

      {/* Interactive Timepiece Inspection Modal */}
      <WatchModal
        watch={selectedWatch}
        isOpen={isWatchModalOpen}
        onClose={() => setIsWatchModalOpen(false)}
      />

      {/* Collector Vault Sign-in Modal */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </div>
  );
}
