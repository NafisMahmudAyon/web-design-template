import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, SunMedium } from 'lucide-react';
import { navLinks } from '../data/greenovaData';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 sm:py-5 px-4 sm:px-8 ${
          scrolled ? 'bg-[#0B1A13]/85 backdrop-blur-xl shadow-lg border-b border-white/10 py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight text-white font-display flex items-center gap-1.5">
              Greenova
              <span className="w-2 h-2 rounded-full bg-brand-lime inline-block group-hover:scale-125 transition-transform" />
            </span>
          </a>

          {/* Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/15 shadow-sm text-sm">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                  idx === 0
                    ? 'text-white font-semibold bg-white/15 shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-md hover:bg-brand-lime hover:text-gray-950 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-black/30 border border-white/20 text-white hover:bg-black/50 transition-colors"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#0B1A13]/95 backdrop-blur-2xl border border-white/15 shadow-2xl md:hidden text-white flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full bg-brand-lime text-gray-950 font-bold text-center shadow-lg hover:bg-brand-limeHover transition-colors"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
