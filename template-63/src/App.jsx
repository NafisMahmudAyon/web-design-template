import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import CartDrawer from './components/CartDrawer';
import ReviewsModal from './components/ReviewsModal';
import RepairModal from './components/RepairModal';
import { productData } from './data/productData';
import { Check, Shield, Compass, Mountain, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'tin-cloth-field-jacket-L-Dark Olive',
      name: 'Tin Cloth Field Jacket',
      price: 485,
      selectedSize: 'L',
      selectedColor: 'Dark Olive',
      quantity: 1,
      image: '/jacket-front.jpg',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Cart actions
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });

    setToastMessage(`Added 1× ${item.name} (${item.selectedSize} / ${item.selectedColor}) to your bag.`);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col antialiased">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRepair={() => setIsRepairOpen(true)}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-neutral-900 text-white text-xs font-mono px-4 py-3 shadow-2xl border border-neutral-700 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{toastMessage}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-2 underline hover:text-neutral-300 font-bold uppercase tracking-wider"
            >
              View Bag
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Product Section */}
      <main className="flex-1 max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Product Visuals & Thumbnails */}
          <div className="lg:col-span-7">
            <ProductGallery images={productData.images} />
          </div>

          {/* Right Column: Product Metadata, Buy Box & Specifications */}
          <div className="lg:col-span-5 lg:pl-2">
            <ProductInfo
              onAddToCart={handleAddToCart}
              onOpenReviews={() => setIsReviewsOpen(true)}
              onOpenRepair={() => setIsRepairOpen(true)}
            />
          </div>
        </div>

        {/* 4. Editorial Storytelling Block */}
        <section className="mt-20 pt-16 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F9F9F9] border border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                01 / BACKCOUNTRY HERITAGE
              </span>
              <h3 className="text-lg font-serif text-neutral-900 mb-2">
                Waxed Cotton Canvas
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Soaked in heavy paraffin wax, the 12oz tightly woven cotton deflects briar scratches, driving sleet, and bitter coastal gales. Builds a rich personal patina over decades of hard field use.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9F9] border border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                02 / THERMAL REGULATION
              </span>
              <h3 className="text-lg font-serif text-neutral-900 mb-2">
                Virgin Mackinaw Wool
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Lined with dense 8oz pure virgin wool that retains warmth even when damp. Breathable during strenuous pack-hauls while insulating against sub-zero mountain ridges.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9F9] border border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                03 / INDESTRUCTIBLE HARDWARE
              </span>
              <h3 className="text-lg font-serif text-neutral-900 mb-2">
                Solid Antique Brass
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Heavy-duty YKK two-way main zip with reinforced storm flap. Custom stamped brass snap closures and reinforced copper rivets at all primary stress points.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Slide-over Cart / Field Bag */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* 6. Customer Reviews Modal */}
      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />

      {/* 7. Lifetime Repair Service Modal */}
      <RepairModal
        isOpen={isRepairOpen}
        onClose={() => setIsRepairOpen(false)}
      />

      {/* 8. Editorial Footer */}
      <footer className="bg-[#1A1A1A] text-neutral-300 mt-24 border-t border-neutral-800">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Brand Manifesto */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-2xl font-serif text-white tracking-tight">
                Field & Form
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-sans">
                Outfitting backcountry rangers, timber cruisers, and expeditionary naturalists since 1897. Crafted in Seattle, Washington. Guaranteed for life.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-2">
                <button
                  onClick={() => setIsRepairOpen(true)}
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  Lifetime Repair Program
                </button>
                <span>•</span>
                <button
                  onClick={() => setIsReviewsOpen(true)}
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  Field Logs & Dispatches
                </button>
              </div>
            </div>

            {/* Expedition Lines */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Expeditions
              </h5>
              <ul className="space-y-2 text-xs font-sans text-neutral-300">
                {['Trail Outerwear', 'Camp Heavyweight', 'Alpine & Cold Weather', 'Expedition Packs', 'Field Accessories'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Heritage & Service */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Workshop
              </h5>
              <ul className="space-y-2 text-xs font-sans text-neutral-300">
                <li>
                  <button onClick={() => setIsRepairOpen(true)} className="hover:text-white transition-colors text-left">
                    Free Repairs for Life
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rewaxing & Care Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Seattle Factory Archives
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Retail Outposts
                  </a>
                </li>
              </ul>
            </div>

            {/* Dispatch Newsletter */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Field Dispatches
              </h5>
              <p className="text-xs text-neutral-400 font-sans">
                Sign up for seasonal outfitting journals, trail stories, and archive restocks.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Field Dispatches.'); }} className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full text-xs font-mono bg-neutral-900 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-white text-black hover:bg-neutral-200 transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
            <div>© {new Date().getFullYear()} Field & Form Co. Cut and sewn in Seattle, WA.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Equipment</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
