import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/rentalData';

export default function Navbar({ onTryNowClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between z-30 relative select-none">
      {/* Brand Logo */}
      <a href="#home" className="flex items-center gap-2 text-white group">
        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
          <Home className="w-4 h-4 text-white" />
        </div>
        <span className="font-extrabold text-base tracking-tight text-white">
          Rent H&U
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-white/80">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onTryNowClick}
          className="px-5 py-2 rounded-full text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-all active:scale-95 shadow-sm"
        >
          Try now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center"
      >
        {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-[#0f334c]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-50 flex flex-col gap-4 text-white text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white/80 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onTryNowClick();
            }}
            className="w-full mt-2 py-2.5 rounded-full text-xs font-bold text-[#0f334c] bg-white hover:bg-gray-100 transition-colors"
          >
            Try now
          </button>
        </div>
      )}
    </nav>
  );
}
