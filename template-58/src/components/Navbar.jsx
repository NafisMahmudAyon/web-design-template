import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, CreditCard, Sparkles } from 'lucide-react';
import { navLinks } from '../data/catalxgData';

export const Navbar = ({ onOpenTrial }) => {
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
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-brandOrange flex items-center justify-center text-white shadow-md shadow-brandOrange/25 group-hover:scale-105 transition-transform">
              <span className="font-bold text-sm font-sans tracking-tighter">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
              Catalxg
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-brandOrange text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenTrial?.()}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow hover:shadow-md hover:scale-105 active:scale-95 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenTrial?.()}
              className="px-4 py-1.5 rounded-full bg-brandOrange text-white text-xs font-semibold shadow"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 transition-all shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-brandOrange text-sm font-medium py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial?.();
                }}
                className="w-full py-3 rounded-full bg-brandOrange text-white text-xs font-bold uppercase tracking-wider shadow"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
