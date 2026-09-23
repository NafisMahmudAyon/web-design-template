import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/investaData';

export const Navbar = ({ onOpenSignUp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-neutral-100'
          : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-2xl font-serif font-bold tracking-tight text-neutral-900 flex items-center gap-1.5 group"
        >
          <span className="text-neutral-900 group-hover:text-investa-red transition-colors">
            Investa
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-investa-red inline-block mb-1" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenSignUp}
            className="px-7 py-2.5 bg-investa-red hover:bg-investa-redHover text-white text-sm font-semibold rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-neutral-950 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignUp();
                }}
                className="w-full py-3 bg-investa-red hover:bg-investa-redHover text-white text-sm font-semibold rounded-md shadow-sm transition-colors text-center"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
