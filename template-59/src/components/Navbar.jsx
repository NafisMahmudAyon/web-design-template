import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Leaf } from 'lucide-react';
import { navLinks } from '../data/evergreen59Data';

export const Navbar = ({ onOpenTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

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
          ? 'bg-slate-900/85 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo: EG EverGreen */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xs shadow-md">
              EG
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-white">
              EverGreen
            </span>
          </a>

          {/* Center Capsule Menu */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenTour?.()}
              className="px-6 py-2.5 rounded-full bg-brandLime hover:bg-brandLime-hover text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lime-glow hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenTour?.()}
              className="px-3.5 py-1.5 rounded-full bg-brandLime text-slate-950 text-xs font-bold shadow"
            >
              Start
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all shadow-2xl">
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
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour?.();
                }}
                className="w-full py-3 rounded-full bg-brandLime text-slate-950 text-xs font-bold uppercase tracking-wider shadow"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
