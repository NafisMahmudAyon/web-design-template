import React, { useState, useEffect } from 'react';
import { Compass, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/wanderlustData';

export const Navbar = ({ onOpenBooking, onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('ENG');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brandForestDark/85 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brandEmerald to-brandAmber flex items-center justify-center text-white shadow-md shadow-brandEmerald/20 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-serif">
              Wanderlust
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandAmber transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer px-2.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors">
              <Globe className="w-3.5 h-3.5 text-brandAmber" />
              <span>{selectedLang}</span>
              <span className="text-[10px] text-white/50">▾</span>
            </div>

            {/* Log In Button */}
            <button
              onClick={() => onOpenAuth?.('login')}
              className="text-white/85 hover:text-white text-sm font-medium transition-colors px-3 py-1.5"
            >
              Log In
            </button>

            {/* Sign Up / Book Pill Button */}
            <button
              onClick={() => onOpenBooking?.()}
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-brandForest font-semibold text-sm shadow-md hover:bg-brandAmber hover:text-white hover:shadow-brandAmber/30 transition-all duration-300 group"
            >
              <span>Sign Up</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenBooking?.()}
              className="px-3.5 py-1.5 rounded-full bg-brandAmber text-white text-xs font-semibold shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brandAmber"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brandForestDark/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-brandAmber text-base font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth?.('login');
                }}
                className="w-full text-center py-2.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking?.();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-brandAmber to-amber-600 text-white font-semibold shadow-lg"
              >
                Sign Up & Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
