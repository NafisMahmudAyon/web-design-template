import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AuthenticFeatures from './components/AuthenticFeatures';
import AboutSection from './components/AboutSection';
import Showcase1 from './components/Showcase1';
import Showcase2 from './components/Showcase2';
import MetricsBar from './components/MetricsBar';
import TestimonialsSection from './components/TestimonialsSection';
import SpecialOffersSection from './components/SpecialOffersSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      title: 'Dust+Cream Core Facial Hydrator',
      price: '$280.00',
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    setToastMessage(`Added ${product.title} to your bag!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#5b7b99] selection:text-white font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-sm bg-[#121316] text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-slideDown">
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
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setToastMessage('Customer account portal active.')}
      />

      {/* Hero Section with Slate Blue Asymmetrical Frame */}
      <HeroSection
        onAddToCart={handleAddToCart}
      />

      {/* Authentic Product (4 Feature Cards) */}
      <AuthenticFeatures />

      {/* About US (3-Photo Gallery & Copy) */}
      <AboutSection
        onExploreMore={() => setToastMessage('Navigating to full brand formulation history.')}
      />

      {/* Product Showcase 1: SDA Overall Product */}
      <Showcase1
        onAddToCart={handleAddToCart}
      />

      {/* Product Showcase 2: The Internal Need */}
      <Showcase2
        onAddToCart={handleAddToCart}
      />

      {/* Dark Metrics Bar */}
      <MetricsBar />

      {/* Testimonials with Zero-CLS Polymorphism */}
      <TestimonialsSection />

      {/* Special Offers Newsletter */}
      <SpecialOffersSection />

      {/* Contact Banner & Dark Footer */}
      <Footer
        onOpenContact={() => setToastMessage('Our client care specialists will contact you shortly.')}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={(idx) =>
          setCartItems(cartItems.filter((_, i) => i !== idx))
        }
        onCheckout={() => setCartItems([])}
      />
    </div>
  );
}
