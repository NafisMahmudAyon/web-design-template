import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FlavorGridSection from './components/FlavorGridSection';
import OceanBannerSection from './components/OceanBannerSection';
import IngredientsSection from './components/IngredientsSection';
import StorySection from './components/StorySection';
import ReviewsSection from './components/ReviewsSection';
import InstagramGridSection from './components/InstagramGridSection';
import TealBannerSection from './components/TealBannerSection';
import SubscriptionSection from './components/SubscriptionSection';
import JournalSection from './components/JournalSection';
import FooterSection from './components/FooterSection';
import CartModal from './components/CartModal';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'lime-ginger',
      name: 'LIME & GINGER',
      price: '$3.20',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400&q=85',
    },
    {
      id: 'golden-hour',
      name: 'GOLDEN HOUR',
      price: '$3.40',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=400&q=85',
    },
  ]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#eae6df] font-sans antialiased text-[#0a4b5c] selection:bg-[#b8ff00] selection:text-[#0a4b5c]">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <HeroSection
          onExploreFlavors={() => {
            const elem = document.getElementById('flavors');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onAddToCart={handleAddToCart}
        />

        <FlavorGridSection onAddToCart={handleAddToCart} />

        <OceanBannerSection onOpenCart={() => setIsCartOpen(true)} />

        <IngredientsSection />

        <StorySection />

        <ReviewsSection />

        <InstagramGridSection />

        <TealBannerSection onOpenCart={() => setIsCartOpen(true)} />

        <SubscriptionSection onAddToCart={handleAddToCart} />

        <JournalSection />
      </main>

      <FooterSection />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
