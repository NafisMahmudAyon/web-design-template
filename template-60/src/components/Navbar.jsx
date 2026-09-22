import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/catalogData';

export const Navbar = ({ cartCount = 0, wishlistCount = 0, onOpenCart, onOpenWishlist, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo: Yellow Pill with Catalog */}
          <a href="#home" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandYellow text-slate-950 font-bold text-sm tracking-tight shadow-md hover:scale-105 transition-transform group">
            <div className="w-5 h-5 rounded-full bg-slate-950 text-brandYellow flex items-center justify-center text-xs font-black">
              ⚡
            </div>
            <span className="font-display font-extrabold tracking-tight">Catalog</span>
          </a>

          {/* Center Floating Capsule Navigation */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons Capsule */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
            {/* Search */}
            <button
              onClick={() => onOpenSearch?.()}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              aria-label="Search Catalog"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => onOpenWishlist?.()}
              className="relative w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:text-rose-600 hover:bg-slate-100 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={() => onOpenCart?.()}
              className="relative w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:text-brandYellow-dark hover:bg-slate-100 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brandYellow text-slate-950 text-[9px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Avatar Pill */}
            <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 ml-0.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                alt="User profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
