import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'FLAVORS', href: '#flavors' },
    { name: 'INGREDIENTS', href: '#ingredients' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'SUBSCRIPTION', href: '#subscribe' },
    { name: 'JOURNAL', href: '#journal' },
  ];

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-[#0a4b5c] text-white py-2 text-xs font-semibold text-center tracking-widest uppercase flex items-center justify-center space-x-2 px-4">
        <Sparkles className="w-3.5 h-3.5 text-[#b8ff00] animate-pulse" />
        <span>FREE SHIPPING ON ALL ORDERS OVER $40 • USE CODE <strong className="text-[#b8ff00]">FRESHSUMMER</strong></span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#eae6df]/90 backdrop-blur-md shadow-sm border-b border-[#0a4b5c]/10 py-3'
            : 'bg-[#eae6df] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <span className="font-display-title text-3xl sm:text-4xl font-black text-[#0a4b5c] tracking-tight group-hover:text-emerald-700 transition-colors">
                VERDA
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#b8ff00] border border-[#0a4b5c]/30"></span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold text-[#0a4b5c]/80 hover:text-[#0a4b5c] tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#b8ff00] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button
                aria-label="Search"
                className="p-2 text-[#0a4b5c] hover:bg-[#0a4b5c]/5 rounded-full transition-colors hidden sm:block"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenCart}
                className="relative p-2 text-[#0a4b5c] hover:bg-[#0a4b5c]/5 rounded-full transition-colors flex items-center"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#b8ff00] text-[#0a4b5c] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-[#0a4b5c]">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={onOpenCart}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#0a4b5c] hover:bg-emerald-900 text-white text-xs font-extrabold px-5 py-2.5 rounded-full tracking-wider transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b8ff00]" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0a4b5c] md:hidden rounded-lg"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#eae6df] border-b border-[#0a4b5c]/10 px-6 py-6 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-[#0a4b5c] hover:text-emerald-700 py-2 border-b border-[#0a4b5c]/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full bg-[#0a4b5c] text-white text-xs font-extrabold py-3 rounded-full flex items-center justify-center space-x-2"
              >
                <span>EXPLORE STORE</span>
                <ArrowRight className="w-4 h-4 text-[#b8ff00]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
