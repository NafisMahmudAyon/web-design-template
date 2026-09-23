import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { InteriorCollection } from './components/InteriorCollection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { MembershipDiscount } from './components/MembershipDiscount';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { products } from './data/furnData';

export function App() {
  const [cartItems, setCartItems] = useState([
    {
      ...products[0],
      quantity: 1,
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const addQty = product.quantity || 1;
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addQty }
            : item
        );
      }
      return [...prev, { ...product, quantity: addQty }];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 font-sans selection:bg-furn-gold selection:text-white">
      {/* Floating Navbar with Cart Count and Search */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Section in Rich Deep Forest Green */}
      <HeroSection
        onShopAllClick={scrollToProducts}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Value Propositions / Best Service For You */}
      <ServicesSection />

      {/* Our Featured Products (Zero CLS Spacing Stability) */}
      <FeaturedProducts
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Editorial Bento: We Provide the Best Interior Collection */}
      <InteriorCollection onViewMore={scrollToProducts} />

      {/* Interactive Tabs: Our Best Recommendation */}
      <RecommendationsSection onSelectCategory={scrollToProducts} />

      {/* Membership 40% Discount CTA Banner */}
      <MembershipDiscount onJoinClick={() => setIsSearchOpen(true)} />

      {/* Dark Charcoal Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Search Catalog Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}

export default App;
