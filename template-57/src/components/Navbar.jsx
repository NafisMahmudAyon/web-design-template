import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Leaf } from 'lucide-react';
import { navLinks } from '../data/evergreenData';

export const Navbar = ({ onOpenAuth, onOpenTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brandDark/85 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-brandLime flex items-center justify-center text-brandDark shadow-md group-hover:scale-105 transition-transform">
              <Leaf className="w-4 h-4 fill-brandDark" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white">
              EverGreen
            </span>
          </a>

          {/* Center Floating Capsule Menu */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-white/20 text-white border border-white/40 shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-medium px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 cursor-pointer transition-colors">
              <Globe className="w-3.5 h-3.5 text-brandLime" />
              <span>Eng</span>
            </div>

            {/* Vibrant Lime Sign Up Pill Button */}
            <button
              onClick={() => onOpenAuth?.()}
              className="px-6 py-2.5 rounded-full bg-brandLime hover:bg-brandLime-hover text-brandDark font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lime-glow hover:scale-105 active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenAuth?.()}
              className="px-3.5 py-1.5 rounded-full bg-brandLime text-brandDark text-xs font-bold shadow"
            >
              Sign Up
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brandDark/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMobileMenuOpen(false);
                }}
                className="text-white/90 hover:text-brandLime text-sm font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour?.();
                }}
                className="w-full py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20"
              >
                Schedule Private Tour
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth?.();
                }}
                className="w-full py-2.5 rounded-full bg-brandLime text-brandDark text-xs font-bold uppercase tracking-wider shadow"
              >
                Sign Up & Explore
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
