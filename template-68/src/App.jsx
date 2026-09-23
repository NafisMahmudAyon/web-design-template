import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProducts from './components/FeaturedProducts';
import CountdownBanner from './components/CountdownBanner';
import DealsOfDay from './components/DealsOfDay';
import BestSellers from './components/BestSellers';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import TrustBadges from './components/TrustBadges';
import GalleryStrip from './components/GalleryStrip';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { FEATURED_PRODUCTS } from './data/groceryData';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      name: 'Fresh Strawberry',
      weight: '500 g',
      price: 8.0,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80',
    },
  ]);
  const [wishlistItems, setWishlistItems] = useState(['prod-1', 'deal-1']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart');
  };

  const handleToggleWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
    showToast(
      wishlistItems.includes(productId)
        ? 'Removed from wishlist'
        : 'Added to wishlist!'
    );
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-gray-800 antialiased selection:bg-[#0c6b3e] selection:text-white">
      {/* 1. Top Yellow Notification Bar */}
      <TopBar onSignUpClick={() => scrollToSection('products')} />

      {/* 2. Main Emerald Header & Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenWishlist={() => showToast(`You have ${wishlistItems.length} items in your wishlist.`)}
      />

      {/* 3. Hero Section */}
      <main id="home">
        <HeroSection onShopNowClick={() => scrollToSection('products')} />

        {/* 4. Featured Categories & Promotional Banners */}
        <CategoriesSection
          onCategoryClick={(cat) => showToast(`Filtered by ${cat.name}`)}
          onShopNowClick={() => scrollToSection('products')}
        />

        {/* 5. Featured Products */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />

        {/* 6. Limited-Time Summer Discount Countdown Banner */}
        <CountdownBanner onShopNowClick={() => scrollToSection('products')} />

        {/* 7. Deals of the Day & Weekly Specials */}
        <DealsOfDay
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onShopNowClick={() => scrollToSection('products')}
        />

        {/* 8. Best Seller Products */}
        <BestSellers
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />

        {/* 9. Testimonials Carousel */}
        <TestimonialsSection />

        {/* 10. Latest News & Blogs */}
        <BlogSection />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. Trust Badges (Free shipping, etc.) */}
        <TrustBadges />

        {/* 13. Customer Lifestyle Gallery Strip */}
        <GalleryStrip />

        {/* 14. Newsletter Subscription Banner */}
        <NewsletterSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gray-900 text-white text-xs font-bold shadow-2xl flex items-center gap-2 border border-gray-700 animate-bounce">
          <span>🌿</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
