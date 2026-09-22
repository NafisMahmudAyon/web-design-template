import React, { useState } from 'react';
import {
  Menu,
  X,
  Heart,
  ShoppingBag,
  User,
  Search
} from 'lucide-react';
import { navCategories } from '../data/treadlyData';

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
  activeFilter = 'all',
  onSelectFilter,
  searchQuery = '',
  onSearchChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="py-3.5 flex items-center justify-between">
          {/* Left: Mobile/Sidebar Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center: Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-neutral-950 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 font-display">
              Treadly
            </span>
          </a>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-rose-600 hover:border-neutral-300 transition-all shadow-sm"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-neutral-950 hover:border-neutral-300 transition-all shadow-sm"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B00] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile Avatar */}
            <button
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition-all shadow-sm"
              aria-label="User account"
            >
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category & Search Filter Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-t border-neutral-100 gap-4 text-xs font-semibold">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {navCategories.map((cat) => {
              const isActive = activeFilter === cat.filter;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectFilter(cat.filter);
                    const el = document.getElementById('collection');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Capsule Input */}
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search sneakers..."
              className="w-full bg-[#F5F6F8] border border-neutral-200/80 rounded-full pl-4 pr-10 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              <Search className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Secondary Links */}
          <div className="flex items-center gap-2">
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
            >
              FAQ's
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search shoes..."
              className="w-full bg-neutral-100 rounded-full pl-4 pr-10 py-2.5 text-xs text-neutral-900"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectFilter(cat.filter);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-left transition-colors ${
                  activeFilter === cat.filter
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 px-1">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Help &amp; FAQ's</a>
          </div>
        </div>
      )}
    </header>
  );
}
