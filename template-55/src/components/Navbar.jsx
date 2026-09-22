import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/finoraData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 sm:py-5 px-4 sm:px-8 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200/80 py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with geometric brand icon */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gray-950 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-brand-lime inline-block" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-950 font-display">
              Finora
            </span>
          </a>

          {/* Centered Desktop Navigation Capsule */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/90 shadow-sm text-xs font-semibold text-gray-600">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  idx === 0
                    ? 'text-gray-950 bg-gray-100 font-bold'
                    : 'hover:text-gray-950 hover:bg-gray-100/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Contact Us Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2 rounded-full bg-white hover:bg-gray-950 hover:text-white border border-gray-300 text-gray-950 text-xs sm:text-sm font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-gray-200 text-gray-900 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-2xl md:hidden flex flex-col gap-4 text-gray-900"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 text-gray-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-gray-950 text-white font-bold text-center text-sm shadow-md"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
