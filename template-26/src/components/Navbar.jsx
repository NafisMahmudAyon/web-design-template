import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenSignUp }) {
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
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features', hasDropdown: true },
    { name: 'Solutions', href: '#growth' },
    { name: 'Analytics', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-sky-900/90 backdrop-blur-md border-b border-white/10 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-xl bg-[#b0f92b] text-[#090d16] flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              Finexa
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-white/80 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-white/60" />}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenSignUp}
              className="text-xs font-bold text-white/90 hover:text-white transition-colors hidden sm:block"
            >
              Login
            </button>

            <button
              onClick={onOpenSignUp}
              className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-6 py-2.5 rounded-full border border-white/20 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Sign Up</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white md:hidden rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignUp();
              }}
              className="w-full bg-[#b0f92b] text-[#090d16] font-extrabold text-xs py-3 rounded-full flex items-center justify-center space-x-2"
            >
              <span>GET STARTED FREE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
