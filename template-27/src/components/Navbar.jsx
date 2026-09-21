import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenGetStarted }) {
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
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#blogs' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-sm'
          : 'bg-[#f8f9fc] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-[#090d16] text-white flex items-center justify-center font-black text-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-sky-400" />
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-[#090d16]">
              Paylio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-600 hover:text-[#090d16] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenGetStarted}
              className="text-xs font-bold text-gray-700 hover:text-[#090d16] transition-colors hidden sm:block"
            >
              Login
            </button>

            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-6 py-2.5 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#090d16] md:hidden rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#090d16] py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full bg-[#090d16] text-white font-extrabold text-xs py-3 rounded-full flex items-center justify-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
