import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { navLinks } from '../data/productData';

export default function Navbar({
  cartCount = 0,
  onOpenCart,
  onContactClick,
  onRepairClick,
  onSearchClick
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 sm:h-20 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Left Navigation Categories */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-sm font-medium text-neutral-700 font-sans tracking-wide">
            {navLinks.categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="hover:text-black transition-colors"
              >
                {cat}
              </a>
            ))}
          </nav>

          {/* Center Brand Wordmark */}
          <div className="flex-1 lg:flex-initial text-center">
            <a
              href="#"
              className="text-2xl sm:text-3xl lg:text-[28px] font-normal font-serif tracking-tight text-neutral-950 inline-block hover:opacity-85 transition-opacity"
            >
              {navLinks.brand}
            </a>
          </div>

          {/* Right Navigation & Utilities */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-700">
            {/* Utility links */}
            <div className="hidden md:flex items-center gap-5 tracking-wide">
              <button
                onClick={onContactClick}
                className="hover:text-black transition-colors"
              >
                Contact
              </button>
              <button
                onClick={onRepairClick}
                className="hover:text-black transition-colors"
              >
                Worn &amp; Repair
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-800">
              <button
                onClick={onSearchClick}
                className="p-1 hover:text-black transition-colors"
                aria-label="Search collection"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              </button>

              <button
                className="p-1 hover:text-black transition-colors hidden sm:block"
                aria-label="Account profile"
              >
                <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              </button>

              <button
                onClick={onOpenCart}
                className="p-1 hover:text-black transition-colors flex items-center gap-1 font-mono text-xs sm:text-sm font-semibold"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
                <span>({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-800">
            {navLinks.categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-black transition-colors py-1"
              >
                {cat}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-100 flex flex-col space-y-2.5 text-xs text-neutral-600">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick?.();
              }}
              className="text-left py-1 hover:text-black"
            >
              Contact Customer Care
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRepairClick?.();
              }}
              className="text-left py-1 hover:text-black"
            >
              Worn &amp; Repair Lifetime Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
