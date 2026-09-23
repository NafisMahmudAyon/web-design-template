import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnerLogos from './components/PartnerLogos';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import StatsBar from './components/StatsBar';
import DiscoverySetSection from './components/DiscoverySetSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      title: 'Empress Facial Gua Sha Oil',
      price: '$68.00',
      image: '/assets/hero-skincare.jpg',
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    setToastMessage(`Added ${product.title} to your bag!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleBuyNow = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf8f5] text-[#2e1d1b] selection:bg-[#2e1d1b] selection:text-[#fbeee6] font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-sm bg-[#2e1d1b] text-white text-xs px-4 py-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-slideDown">
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
        onOpenAuth={() => setToastMessage('Member portal access initialized.')}
      />

      {/* Hero Section with Botanical Shadowbox */}
      <HeroSection
        onOpenDetail={handleOpenDetail}
      />

      {/* Partner & Retailer Logos */}
      <PartnerLogos />

      {/* About Us & Botanical Packaging */}
      <AboutSection
        onBuyNow={() =>
          handleBuyNow({
            title: 'Gua Sha Empress Ritual Set',
            price: '$120.00',
            image: '/assets/hero-skincare.jpg',
          })
        }
        onReadMore={() =>
          handleOpenDetail({
            title: 'Our Clean Science Formulation Philosophy',
            price: '$0.00',
            description:
              'Crafted through ancient Chinese herbalism and modern dermatological botanical science to rejuvenate cellular matrixes.',
            image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
          })
        }
      />

      {/* Products Showcase */}
      <ProductsSection
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Statistics Counter */}
      <StatsBar />

      {/* Discovery Gift Set */}
      <DiscoverySetSection
        onBuySet={() =>
          handleBuyNow({
            title: 'WILDLING Complete Discovery Ritual Set',
            price: '$148.00',
            image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
          })
        }
      />

      {/* Customer Testimonials with Polymorphic Stability */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer
        onOpenContact={() =>
          setToastMessage('Our customer care specialists are available 24/7.')
        }
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={(idx) =>
          setCartItems(cartItems.filter((_, i) => i !== idx))
        }
        onCheckout={() => setCartItems([])}
      />

      {/* Product Detail Modal */}
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
