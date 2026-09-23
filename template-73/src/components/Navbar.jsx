import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/casperData';

export default function Navbar({ onSignUpClick, onOffersClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="text-2xl font-condensed font-black tracking-wider text-black uppercase">
          CASPER
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold text-gray-600 tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOffersClick}
            className="text-xs font-semibold text-gray-500 hover:text-black transition-colors"
          >
            Offers
          </button>
          <button
            onClick={onSignUpClick}
            className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all active:scale-95"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-black text-gray-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOffersClick();
              }}
              className="text-xs font-semibold text-gray-500"
            >
              Offers
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignUpClick();
              }}
              className="px-6 py-2 bg-black text-white text-xs font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
