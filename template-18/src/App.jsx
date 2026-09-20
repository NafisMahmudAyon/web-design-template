import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeDivider from './components/MarqueeDivider';
import StudioOverlapSection from './components/StudioOverlapSection';
import ManifestoSection from './components/ManifestoSection';
import BoardShowcaseSection from './components/BoardShowcaseSection';
import BeyondWavesSection from './components/BeyondWavesSection';
import FeatureCollectionAccordion from './components/FeatureCollectionAccordion';
import EditorialMagazineSection from './components/EditorialMagazineSection';
import CtaFooterSection from './components/CtaFooterSection';
import BoardModal from './components/BoardModal';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cart, setCart] = useState([
    {
      id: 'coastal-cruiser',
      name: 'Coastal Cruiser',
      price: 620,
      dimensions: `9'2" x 23" x 3.1"`,
      image: '/assets/board-arch-cruiser.jpg',
      quantity: 1,
    }
  ]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (board) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === board.id);
      if (existing) {
        return prev.map((item) =>
          item.id === board.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...board, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (boardId) => {
    setCart((prev) => prev.filter((item) => item.id !== boardId));
  };

  const handleOpenBoardModal = (board) => {
    setSelectedBoard(board);
    setIsModalOpen(true);
  };

  const scrollToBoards = () => {
    const el = document.getElementById('boards');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStories = () => {
    const el = document.getElementById('stories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#0F1E1B] antialiased selection:bg-[#009E96] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Landing Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onExploreClick={scrollToBoards} />

        {/* 2. Infinite Continuous Marquee Divider with Edge Fades */}
        <MarqueeDivider text="LETS BUILD SOMETHING GREAT" />

        {/* 3. Studio Craftsmanship & Overlapping Photography */}
        <StudioOverlapSection />

        {/* 4. Typographical Manifesto & Core Pillars */}
        <ManifestoSection />

        {/* 5. Board Showcase with Zero-CLS Fixed Height Cards */}
        <BoardShowcaseSection
          onOpenModal={handleOpenBoardModal}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Beyond Waves Dark Marine Aerial Section */}
        <BeyondWavesSection onStoryClick={scrollToStories} />

        {/* 7. Zero-CLS Feature Collection Accordion */}
        <FeatureCollectionAccordion />

        {/* 8. Editorial Magazine & Field Notes */}
        <EditorialMagazineSection />

        {/* 9. Secondary Marquee Divider in Reverse */}
        <MarqueeDivider reverse={true} text="HANDCRAFTED IN CALIFORNIA // SHAPED FOR OCEAN SWELLS" />

        {/* 10. CTA & Footer */}
        <CtaFooterSection />
      </main>

      {/* Interactive Modals & Drawers */}
      <BoardModal
        board={selectedBoard}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}
