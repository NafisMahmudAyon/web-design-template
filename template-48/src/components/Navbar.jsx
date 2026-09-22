import React, { useState } from 'react';
import { Sprout, Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../data/terraFarmData';

export const Navbar = ({ onOpenContact, onGetStarted }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-terra-lime flex items-center justify-center text-terra-forest shadow-md group-hover:scale-105 transition-transform duration-200">
            <Sprout className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white drop-shadow-sm font-sans">
            TerraFarm
          </span>
        </a>

        {/* Center Glass Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full glass-pill border border-white/30 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-terra-forest shadow-sm font-bold'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-white text-terra-forest text-xs font-bold hover:bg-terra-lime hover:text-terra-dark transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white border border-white/30"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-3xl bg-terra-forest/95 backdrop-blur-xl border border-white/20 shadow-2xl text-white animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  activeLink === link.id
                    ? 'bg-white/20 text-terra-lime'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-terra-lime text-terra-forest text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
