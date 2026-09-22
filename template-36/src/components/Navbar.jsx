import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers } from 'lucide-react';
import { navLinks } from '../data/cryptoData';

export default function Navbar({ onSignIn, onSignUp }) {
  const [activeLink, setActiveLink] = useState('About');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1A1C]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-2.5 text-white group">
          <div className="w-8 h-8 rounded-lg bg-[#163337] border border-[#00D287]/30 flex items-center justify-center text-[#00D287] shadow-sm group-hover:border-[#00D287] transition-colors">
            {/* Custom 3-bar stack glyph */}
            <div className="flex flex-col gap-1 w-4">
              <span className="h-0.5 w-full bg-[#00D287] rounded-full"></span>
              <span className="h-0.5 w-3/4 bg-[#00D287] rounded-full"></span>
              <span className="h-0.5 w-full bg-[#00D287] rounded-full"></span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight font-display text-white">
            Raxon
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? 'text-[#00D287]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeRaxonNav"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-[#00D287] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onSignIn}
            className="text-sm font-medium text-gray-200 hover:text-white px-4 py-2 rounded-full transition-colors"
          >
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSignUp}
            className="text-sm font-semibold text-[#0B1A1C] bg-white hover:bg-gray-100 px-5 py-2 rounded-full shadow-sm transition-all"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0F2527] border-b border-white/10 px-6 py-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className="text-base font-medium text-gray-300 hover:text-[#00D287] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignIn();
                }}
                className="w-full text-center py-2.5 rounded-full text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignUp();
                }}
                className="w-full text-center py-2.5 rounded-full text-sm font-semibold text-[#0B1A1C] bg-white hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
