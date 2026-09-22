import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/flowzyData';

export default function Navbar({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Features');
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-purple-100/60 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#features" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center text-white shadow-sm shadow-purple-400/30 group-hover:scale-105 transition-transform">
            {/* Minimal dual-curved wave/layers symbol */}
            <div className="w-4 h-4 rounded-sm border-2 border-white rotate-12 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0F172A] font-display">
            Flowzy
          </span>
        </a>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive ? 'text-[#6D28D9]' : 'text-gray-600 hover:text-[#0F172A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeFlowzyNav"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-[#6D28D9] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetStarted}
            className="px-5 py-2.5 rounded-full bg-[#4C1D95] hover:bg-[#3B0764] text-white text-xs font-bold tracking-wide shadow-md shadow-purple-900/20 transition-all flex items-center gap-1.5"
          >
            <span>Get Started</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#0F172A] hover:bg-purple-50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-purple-100 px-6 py-6 shadow-xl space-y-4"
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
                  className="text-base font-semibold text-gray-700 hover:text-[#6D28D9] py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="w-full py-3 rounded-full bg-[#4C1D95] text-white text-sm font-bold text-center shadow-md"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
