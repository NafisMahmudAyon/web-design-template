import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoreFeaturesSection from './components/CoreFeaturesSection';
import FinancialGrowthSection from './components/FinancialGrowthSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import DownloadAppSection from './components/DownloadAppSection';
import FooterSection from './components/FooterSection';
import SignUpModal from './components/SignUpModal';
import TransferModal from './components/TransferModal';

export default function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f9] font-sans antialiased text-[#090d16] selection:bg-[#b0f92b] selection:text-[#090d16]">
      <Navbar onOpenSignUp={() => setIsSignUpOpen(true)} />

      <main>
        <HeroSection
          onOpenSignUp={() => setIsSignUpOpen(true)}
          onOpenTransfer={() => setIsTransferOpen(true)}
        />

        <AboutSection onOpenSignUp={() => setIsSignUpOpen(true)} />

        <CoreFeaturesSection onOpenSignUp={() => setIsSignUpOpen(true)} />

        <FinancialGrowthSection onOpenTransfer={() => setIsTransferOpen(true)} />

        <HowItWorksSection />

        <TestimonialsSection />

        <PricingSection onOpenSignUp={() => setIsSignUpOpen(true)} />

        <FaqSection onOpenSignUp={() => setIsSignUpOpen(true)} />

        <DownloadAppSection />
      </main>

      <FooterSection />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />

      <TransferModal
        isOpen={isTransferOpen}
        onClose={() => setIsTransferOpen(false)}
      />
    </div>
  );
}
