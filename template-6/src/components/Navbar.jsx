import React, { useState, useEffect } from 'react';
import { Menu, Search, User, ShoppingBag, Heart, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { topTickerCategories } from '../data/products';

export default function Navbar({ cartCount, wishlistCount, onOpenCart, onOpenSearch, onSelectCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-40 bg-[#F5F5F5] border-b border-[#E2E2E2] transition-shadow duration-300">
      {/* Top Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between border-b border-[#E2E2E2]">
        
        {/* Left: Hamburger menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 -ml-2 text-[#121212] hover:bg-[#EAEAEA] transition-colors rounded-md border border-[#E2E2E2] md:border-none"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
          <span className="hidden lg:inline-block text-xs font-medium text-[#666666] tracking-wider uppercase">
            Menu
          </span>
        </div>

        {/* Center: Brand Logo */}
        <a href="#" className="group flex items-center justify-center">
          <span className="font-display font-extrabold text-2xl md:text-3xl tracking-[0.25em] text-[#121212] transition-transform group-hover:scale-105 duration-300">
            ORVIA
          </span>
        </a>

        {/* Right: Search, Account, Wishlist, Cart */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2.5 text-[#121212] hover:bg-[#EAEAEA] transition-colors rounded-full relative"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            aria-label="User Account"
            className="p-2.5 text-[#121212] hover:bg-[#EAEAEA] transition-colors rounded-full hidden sm:flex"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="p-2.5 text-[#121212] hover:bg-[#EAEAEA] transition-colors rounded-full relative"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Sub Navigation Bar - Ticker Grid */}
      <div className="hidden md:block bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-6 divide-x divide-[#E2E2E2] border-b border-[#E2E2E2] text-xs font-medium tracking-wide">
            {topTickerCategories.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onSelectCategory(item.name)}
                className="py-3 px-4 flex items-center justify-between text-[#121212] hover:bg-[#EAEAEA] transition-colors group cursor-pointer"
              >
                <span className="truncate">{item.name}</span>
                <span className="text-[#999999] group-hover:text-black transition-transform group-hover:translate-x-0.5 duration-200">
                  »
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#F5F5F5] z-50 border-r border-[#E2E2E2] flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E2E2E2]">
                  <span className="font-display font-extrabold text-xl tracking-[0.2em]">ORVIA</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#121212] hover:bg-[#EAEAEA] rounded-full"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-xs uppercase font-bold text-[#888888] tracking-widest mb-2">Categories</p>
                  {topTickerCategories.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onSelectCategory(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between py-2 text-base font-medium text-[#121212] hover:pl-2 transition-all border-b border-[#ECECEC]"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#888888]" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E2E2E2] pt-6 space-y-3">
                <button
                  onClick={() => {
                    onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-black text-white text-sm font-semibold rounded-none flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search Store
                </button>
                <p className="text-xs text-center text-[#888888]">© 2026 ORVIA. All Rights Reserved.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
