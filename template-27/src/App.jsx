import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PlatformFeaturesSection from './components/PlatformFeaturesSection';
import SolutionsSection from './components/SolutionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import BlogSection from './components/BlogSection';
import DownloadAppBanner from './components/DownloadAppBanner';
import FooterSection from './components/FooterSection';
import GetStartedModal from './components/GetStartedModal';
import TransferModal from './components/TransferModal';

export default function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans antialiased text-[#090d16] selection:bg-sky-400 selection:text-[#090d16]">
      <Navbar onOpenGetStarted={() => setIsGetStartedOpen(true)} />

      <main>
        <HeroSection
          onOpenGetStarted={() => setIsGetStartedOpen(true)}
          onOpenTransfer={() => setIsTransferOpen(true)}
        />

        <LogoMarquee />

        <WhyChooseUsSection onOpenTransfer={() => setIsTransferOpen(true)} />

        <PlatformFeaturesSection onOpenGetStarted={() => setIsGetStartedOpen(true)} />

        <SolutionsSection />

        <TestimonialsSection />

        <PricingSection onOpenGetStarted={() => setIsGetStartedOpen(true)} />

        <FaqSection onOpenGetStarted={() => setIsGetStartedOpen(true)} />

        <BlogSection />

        <DownloadAppBanner />
      </main>

      <FooterSection />

      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />

      <TransferModal
        isOpen={isTransferOpen}
        onClose={() => setIsTransferOpen(false)}
      />
    </div>
  );
}
