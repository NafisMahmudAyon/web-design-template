import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { navLinks } from '../data/furnData';

export const Navbar = ({ cartCount, onOpenCart, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-full px-5 sm:px-8 py-3.5 shadow-sm border border-neutral-200/70 flex items-center justify-between">
        {/* Left: Hamburger & Navigation Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-800 hover:text-furn-forest transition-colors p-1"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-neutral-700 hover:text-furn-forest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <a
          href="#"
          className="font-serif text-2xl font-bold tracking-wider text-neutral-900 flex items-center"
        >
          <span>FURN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-furn-gold inline-block ml-0.5 mb-1" />
        </a>

        {/* Right: Search & Cart Button */}
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-neutral-700 hover:text-furn-forest transition-colors"
          >
            <Search className="w-4 h-4 text-neutral-500" />
            <span className="hidden sm:inline">SEARCH</span>
          </button>

          <div className="w-px h-4 bg-neutral-200 hidden sm:block" />

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-800 hover:text-furn-forest transition-colors group"
          >
            <span className="hidden sm:inline">CART</span>
            <div className="w-6 h-6 rounded-full bg-furn-gold/30 text-neutral-900 flex items-center justify-center text-[11px] font-bold group-hover:bg-furn-gold group-hover:text-white transition-colors">
              {cartCount}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-neutral-700 hover:text-furn-forest transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center gap-2 text-xs font-semibold text-neutral-600"
              >
                <Search className="w-4 h-4" /> Search catalog
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="flex items-center gap-2 text-xs font-semibold text-furn-forest"
              >
                <ShoppingBag className="w-4 h-4" /> View Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
