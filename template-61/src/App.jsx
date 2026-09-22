import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedCompanies from './components/TrustedCompanies';
import LatestCollectionSection from './components/LatestCollectionSection';
import MarqueeBanner from './components/MarqueeBanner';
import BestSellingSection from './components/BestSellingSection';
import ValuePropsSection from './components/ValuePropsSection';
import TopCollectionSection from './components/TopCollectionSection';
import FooterSection from './components/FooterSection';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

import { latestProducts } from './data/treadlyData';
import { CheckCircle, Heart, ShoppingBag, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([
    {
      ...latestProducts[0],
      quantity: 1,
      selectedSize: '42'
    }
  ]);
  const [wishlist, setWishlist] = useState(['prod-2']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, icon = <CheckCircle className="w-4 h-4 text-emerald-500" />) => {
    setToast({ message, icon });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (it) => it.id === product.id && it.selectedSize === (product.selectedSize || '42')
      );
      if (existing) {
        return prev.map((it) =>
          it.id === product.id && it.selectedSize === (product.selectedSize || '42')
            ? { ...it, quantity: it.quantity + 1 }
            : it
        );
      }
      return [
        ...prev,
        { ...product, quantity: 1, selectedSize: product.selectedSize || '42' }
      ];
    });
    showToast(
      `Added "${product.name}" (Size ${product.selectedSize || '42'}) to your bag!`,
      <ShoppingBag className="w-4 h-4 text-[#FF6B00]" />
    );
  };

  const handleUpdateQuantity = (id, size, delta) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.id === id && it.selectedSize === size) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.id === id && it.selectedSize === size))
    );
    showToast('Item removed from shopping bag');
  };

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist', <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />);
        return [...prev, productId];
      }
    });
  };

  const handleCheckout = () => {
    showToast('Order confirmed! Thank you for choosing Treadly.', <CheckCircle className="w-4 h-4 text-emerald-500" />);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-neutral-900 font-sans antialiased selection:bg-neutral-950 selection:text-white">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-6 left-1/2 z-50 flex items-center gap-2.5 bg-neutral-950 text-white px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-semibold border border-neutral-800 pointer-events-none"
          >
            {toast.icon}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          showToast(`You have ${wishlist.length} saved shoe${wishlist.length === 1 ? '' : 's'} in Wishlist`, <Heart className="w-4 h-4 text-rose-500" />);
        }}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onStartShopping={() => {
            const el = document.getElementById('collection');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Trusted By Top Companies */}
        <TrustedCompanies />

        {/* Explore Our Latest Collection (3x3 Grid) */}
        <LatestCollectionSection
          selectedFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          searchQuery={searchQuery}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setActiveModalProduct(prod)}
        />

        {/* Continuous Infinite Coupon Marquee */}
        <MarqueeBanner
          onCopyCoupon={(code) =>
            showToast(`Coupon "${code}" copied to clipboard! (50% OFF)`, <Tag className="w-4 h-4 text-amber-400" />)
          }
        />

        {/* Best Selling Shoes (Slide Track) */}
        <BestSellingSection
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setActiveModalProduct(prod)}
        />

        {/* We Supported By (Value Props) */}
        <ValuePropsSection />

        {/* Top Collection List (Category Showcase) */}
        <TopCollectionSection
          onSelectCategory={(catTitle) => {
            setActiveFilter('male');
            const el = document.getElementById('collection');
            el?.scrollIntoView({ behavior: 'smooth' });
            showToast(`Browsing ${catTitle}`);
          }}
        />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Quick View Modal */}
      <ProductModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        isFavorite={activeModalProduct ? wishlist.includes(activeModalProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />
    </div>
  );
}
