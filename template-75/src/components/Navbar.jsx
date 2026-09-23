import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/casalaData';

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1D20] group-hover:text-casala-teal transition-colors">
            casala
          </span>
          <span className="text-xs font-semibold text-gray-500 self-start mt-1">®</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#4B515D] hover:text-[#1A1D20] relative py-1 transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-casala-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center space-x-5">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-600 hover:text-casala-teal hover:bg-gray-100/80 rounded-full transition-all"
            aria-label="Search furniture"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Cart Button with Count Badge */}
          <button
            onClick={onOpenCart}
            className="p-2 text-gray-600 hover:text-casala-teal hover:bg-gray-100/80 rounded-full relative transition-all"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-casala-teal text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-casala-teal hover:bg-gray-100/80 rounded-full md:hidden transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-casala-teal flex items-center justify-between py-2 border-b border-gray-50"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
