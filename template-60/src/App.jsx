import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularProductsSection from './components/PopularProductsSection';
import BestCollectionSection from './components/BestCollectionSection';
import NewArrivalsSection from './components/NewArrivalsSection';
import AccentBanner from './components/AccentBanner';
import PreFooterSection from './components/PreFooterSection';
import FooterSection from './components/FooterSection';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

import {
  popularProducts,
  bestCollection,
  newArrivals
} from './data/catalogData';
import { CheckCircle, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      ...popularProducts[0],
      quantity: 1,
      selectedSize: 'US 9'
    }
  ]);
  const [wishlist, setWishlist] = useState(['pop-2']);
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
        (it) => it.id === product.id && it.selectedSize === (product.selectedSize || 'US 9')
      );
      if (existing) {
        return prev.map((it) =>
          it.id === product.id && it.selectedSize === (product.selectedSize || 'US 9')
            ? { ...it, quantity: it.quantity + 1 }
            : it
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: product.selectedSize || 'US 9' }];
    });
    showToast(`Added "${product.name}" to your cart`, <ShoppingBag className="w-4 h-4 text-orange-500" />);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.id === id) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
    showToast('Item removed from cart');
  };

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist', <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />);
        return [...prev, productId];
      }
    });
  };

  const handleCheckout = () => {
    showToast('Order placed successfully! Thank you.', <CheckCircle className="w-4 h-4 text-emerald-500" />);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-[#FF5722] selection:text-white">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-6 left-1/2 z-50 flex items-center gap-2.5 bg-neutral-900 text-white px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-semibold border border-neutral-700 pointer-events-none"
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
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onViewProducts={() => {
            const el = document.getElementById('popular');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Popular Products */}
        <PopularProductsSection
          products={popularProducts}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(prod) => setActiveModalProduct(prod)}
        />

        {/* Best Shoes Collection Showcase */}
        <BestCollectionSection
          collection={bestCollection}
          onExplore={() => {
            const el = document.getElementById('arrivals');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* New Arrivals (3x3 Grid) */}
        <NewArrivalsSection
          products={newArrivals}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(prod) => setActiveModalProduct(prod)}
        />

        {/* Elegance Craft Accent Shoes Banner */}
        <AccentBanner
          onStartShopping={() => {
            const el = document.getElementById('arrivals');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Pre-Footer Newsletter */}
        <PreFooterSection
          onSubscribeSuccess={() =>
            showToast('Thank you for subscribing to Catalog drops!', <CheckCircle className="w-4 h-4 text-emerald-500" />)
          }
        />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Quick View Product Modal */}
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
