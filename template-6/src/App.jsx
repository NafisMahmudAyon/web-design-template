import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section1Hero from './components/Section1Hero';
import Section2Bestsellers from './components/Section2Bestsellers';
import Section3ExclusiveDeal from './components/Section3ExclusiveDeal';
import Section4ExploreCategories from './components/Section4ExploreCategories';
import Section5TimelessAccessories from './components/Section5TimelessAccessories';
import Section6FeaturedProducts from './components/Section6FeaturedProducts';
import Section7WhyChooseUs from './components/Section7WhyChooseUs';
import Section8Footer from './components/Section8Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import NotificationToast from './components/NotificationToast';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: "hero-1",
      title: "Urban Carry Backpack",
      price: 110,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    }
  ]);
  const [wishlist, setWishlist] = useState(new Set(["hero-2", "best-4"]));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 3500);
  };

  const handleAddToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast('cart', 'Added to Cart', `${product.title} (x${qty})`);
  };

  const handleUpdateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveCartItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('info', 'Item Removed', 'Product removed from your cart.');
  };

  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast('info', 'Removed from Wishlist', product.title);
      } else {
        next.add(product.id);
        showToast('wishlist', 'Added to Wishlist', product.title);
      }
      return next;
    });
  };

  const isWishlisted = (id) => wishlist.has(id);

  const handleSelectCategory = (categoryName) => {
    const el = document.getElementById('explore-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    showToast('info', 'Order Placed!', 'Thank you for testing ORVIA template demo.');
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#121212] font-sans">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Section 1: Hero & Brand Marquee */}
      <Section1Hero
        onQuickView={(product) => setQuickViewProduct(product)}
        onShopNow={() => {
          const el = document.getElementById('bestsellers');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Section 2: Bestselling Essentials */}
      <div id="bestsellers">
        <Section2Bestsellers
          onQuickView={(product) => setQuickViewProduct(product)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
        />
      </div>

      {/* Section 3: Exclusive Featured Deal */}
      <Section3ExclusiveDeal
        onSubscribe={(email) => showToast('info', 'Subscribed!', `Deals newsletter sent to ${email}`)}
        onExploreDeals={() => {
          const el = document.getElementById('featured-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Section 4: Explore Categories */}
      <div id="explore-categories">
        <Section4ExploreCategories
          onQuickView={(product) => setQuickViewProduct(product)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </div>

      {/* Section 5: Timeless Accessories Split Editorial */}
      <Section5TimelessAccessories
        onShopCollection={() => {
          const el = document.getElementById('featured-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Section 6: Featured Products 4x2 Grid */}
      <div id="featured-products">
        <Section6FeaturedProducts
          onQuickView={(product) => setQuickViewProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
        />
      </div>

      {/* Section 7: Why Customers Choose ORVIA */}
      <Section7WhyChooseUs
        onSeeMore={() => {
          showToast('info', 'ORVIA Commitment', 'Verified products with 100% money-back guarantee.');
        }}
      />

      {/* Section 8: Footer & Giant Watermark */}
      <Section8Footer
        onSubscribe={(email) => showToast('info', 'Subscribed!', `Deals newsletter sent to ${email}`)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product, qty) => {
          handleAddToCart(product, qty);
          setQuickViewProduct(null);
        }}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isWishlisted}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      <NotificationToast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
