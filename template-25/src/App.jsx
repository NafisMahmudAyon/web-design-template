import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import ScaleTrustSection from './components/ScaleTrustSection';
import BentoFeaturesSection from './components/BentoFeaturesSection';
import GlobalBorderSection from './components/GlobalBorderSection';
import FourThingsSection from './components/FourThingsSection';
import CashflowRadarSection from './components/CashflowRadarSection';
import CardsShowcaseSection from './components/CardsShowcaseSection';
import SecuritySection from './components/SecuritySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';
import OpenAccountModal from './components/OpenAccountModal';
import CurrencyTransferModal from './components/CurrencyTransferModal';

export default function App() {
  const [isOpenAccountModalOpen, setIsOpenAccountModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eff1e8] font-sans antialiased text-[#0b2416] selection:bg-[#bef264] selection:text-[#0b2416]">
      <Navbar onOpenAccount={() => setIsOpenAccountModalOpen(true)} />

      <main>
        <HeroSection onOpenAccount={() => setIsOpenAccountModalOpen(true)} />

        <LogoMarquee />

        <ScaleTrustSection />

        <BentoFeaturesSection />

        <GlobalBorderSection onOpenTransferModal={() => setIsTransferModalOpen(true)} />

        <FourThingsSection onOpenTransferModal={() => setIsTransferModalOpen(true)} />

        <CashflowRadarSection />

        <CardsShowcaseSection onOpenAccount={() => setIsOpenAccountModalOpen(true)} />

        <SecuritySection />

        <PricingSection onOpenAccount={() => setIsOpenAccountModalOpen(true)} />

        <TestimonialsSection />
      </main>

      <FooterSection onOpenAccount={() => setIsOpenAccountModalOpen(true)} />

      <OpenAccountModal
        isOpen={isOpenAccountModalOpen}
        onClose={() => setIsOpenAccountModalOpen(false)}
      />

      <CurrencyTransferModal
        isOpen={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
      />
    </div>
  );
}
