import React, { useState } from 'react';
import {
  ShoppingBag,
  MapPin,
  ChevronDown,
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from 'lucide-react';

export default function Navbar({
  cartCount = 0,
  wishlistCount = 2,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  onOpenWishlist,
}) {
  const [selectedLocation, setSelectedLocation] = useState('New York, USA');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Shop', href: '#products' },
    { label: 'Fruits', href: '#categories' },
    { label: 'Vegetable', href: '#categories' },
    { label: 'Beverages', href: '#categories' },
    { label: 'About Us', href: '#about' },
    { label: 'Blogs', href: '#blogs' },
  ];

  return (
    <header className="w-full bg-[#0c6b3e] text-white shadow-md sticky top-0 z-40">
      {/* 1. Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo & Location */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#fed700] text-emerald-900 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
              <ShoppingBag className="w-5 h-5 fill-emerald-900" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Grocery<span className="text-[#fed700]">.</span>
            </span>
          </a>

          {/* Location Selector */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-white/90 bg-[#09522f] px-3 py-1.5 rounded-full border border-white/10 cursor-pointer hover:bg-[#074526] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#fed700]" />
            <div className="flex items-center gap-1">
              <span className="text-white/70">Location:</span>
              <span className="font-semibold">{selectedLocation}</span>
              <ChevronDown className="w-3 h-3 text-white/70 ml-0.5" />
            </div>
          </div>
        </div>

        {/* Search Bar with Category Dropdown */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="w-full flex items-center bg-white rounded-full overflow-hidden p-1 shadow-inner border border-emerald-900/20">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 border-r border-gray-200 whitespace-nowrap"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 text-xs font-medium">
                  {['All Categories', 'Vegetables', 'Fresh Fruits', 'Milk & Eggs', 'Bakery', 'Drinks'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategoriesDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-emerald-50 hover:text-[#0c6b3e] transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="flex-1 px-3 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />

            {/* Search Button */}
            <button
              type="button"
              aria-label="Search"
              className="w-8 h-8 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white flex items-center justify-center transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Actions: Wishlist, Cart, Profile */}
        <div className="flex items-center gap-3 sm:gap-4 select-none">
          {/* Wishlist */}
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative w-9 h-9 rounded-full bg-[#09522f] hover:bg-[#074526] flex items-center justify-center text-white transition-all active:scale-95"
          >
            <Heart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#fed700] text-gray-900 font-bold text-[10px] flex items-center justify-center shadow-sm">
              {wishlistCount}
            </span>
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative w-9 h-9 rounded-full bg-[#09522f] hover:bg-[#074526] flex items-center justify-center text-white transition-all active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#fed700] text-gray-900 font-bold text-[10px] flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* User Account */}
          <button
            type="button"
            aria-label="User Account"
            className="w-9 h-9 rounded-full bg-[#09522f] hover:bg-[#074526] flex items-center justify-center text-white transition-all active:scale-95"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-[#09522f] flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. Secondary Navigation Bar */}
      <div className="border-t border-[#09522f] bg-[#09522f]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Left: Browse Categories Button */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#fed700] text-gray-900 font-bold text-xs hover:bg-[#eed300] transition-colors"
            >
              <Menu className="w-4 h-4 stroke-[2.5]" />
              <span>Browse All Categories</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`py-3 hover:text-[#fed700] transition-colors ${
                  link.active ? 'text-[#fed700] font-bold border-b-2 border-[#fed700]' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Recently Viewed */}
          <div className="hidden lg:flex items-center gap-1 text-xs text-white/80 hover:text-white cursor-pointer py-3">
            <span>Recently Viewed</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#085430] border-t border-white/10 px-6 py-4 flex flex-col gap-3 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white hover:text-[#fed700]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
