import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import TickerMarqueeSection from './components/TickerMarqueeSection';
import BuiltOnSimplicitySection from './components/BuiltOnSimplicitySection';
import StockTradingSection from './components/StockTradingSection';
import PhoneCarouselSection from './components/PhoneCarouselSection';
import CommissionFreeSection from './components/CommissionFreeSection';
import FooterSection from './components/FooterSection';
import SignUpModal from './components/SignUpModal';

export default function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenSignUp = () => setIsSignUpOpen(true);
  const handleCloseSignUp = () => setIsSignUpOpen(false);

  return (
    <div className="min-h-screen bg-[#08090a] text-white font-sans selection:bg-[#00e699] selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenSignUp={handleOpenSignUp} />

      {/* Main Content Layout */}
      <main>
        {/* Section 1: Hero Typography & Cyber Grid Floating App Showcase */}
        <HeroSection onOpenSignUp={handleOpenSignUp} />

        {/* Section 2: Global Reach Proven Reliability Statistics Grid */}
        <StatsSection />

        {/* Section 3: Dual Edge-Masked Crypto Ticker Marquees */}
        <TickerMarqueeSection />

        {/* Section 4: Built On Simplicity Ring Feature Hub */}
        <BuiltOnSimplicitySection onOpenSignUp={handleOpenSignUp} />

        {/* Section 5: Traditional Stocks & xStocks Trading Feature Cards */}
        <StockTradingSection onOpenSignUp={handleOpenSignUp} />

        {/* Section 6: 5-Phone Horizontal Slider Carousel Stack */}
        <PhoneCarouselSection onOpenSignUp={handleOpenSignUp} />

        {/* Section 7: Commission-Free Trading & Live Market Rates */}
        <CommissionFreeSection onOpenSignUp={handleOpenSignUp} />
      </main>

      {/* Section 8: Final CTA Box & Footer with Decorative ZYPTO Logo */}
      <FooterSection onOpenSignUp={handleOpenSignUp} />

      {/* Account Registration & Wallet Demo Modal */}
      <SignUpModal isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    </div>
  );
}
