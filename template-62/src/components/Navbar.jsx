import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/homelyData';

// Gold architectural logo symbol
function ArchitecturalLogo() {
  return (
    <svg className="w-8 h-8 text-[#C88C48]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 34V14L20 4L34 14V34" />
      <path d="M14 34V20H26V34" />
      <path d="M20 4V34" />
      <path d="M10 18L10 34" />
      <path d="M30 18L30 34" />
    </svg>
  );
}

export default function Navbar({ onContactClick, onSignUpClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#15181C]/95 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <ArchitecturalLogo />
            <span className="text-xl font-extrabold text-white tracking-tight font-syne group-hover:text-[#C88C48] transition-colors">
              Homely
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              onClick={onSignUpClick}
              className="border border-neutral-700 hover:border-neutral-500 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              Sign up
            </button>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-900 fill-neutral-900" />
              <span>Let's talk</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#15181C] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C88C48] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignUpClick?.();
              }}
              className="w-full border border-neutral-700 text-white text-xs font-bold py-3 rounded-full"
            >
              Sign up
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick?.();
              }}
              className="w-full bg-white text-neutral-950 text-xs font-bold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Let's talk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
