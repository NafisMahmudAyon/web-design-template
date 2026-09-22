import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/finexaData';

export default function Navbar({ onLogin, onSignUp }) {
  const [activeLink, setActiveLink] = useState('Home');
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09182A]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 text-white group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-sm">
            <div className="w-3.5 h-3.5 border-2 border-white rotate-45 rounded-[2px]" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-display">
            Finexa
          </span>
        </a>

        {/* Center Nav Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/15 text-white">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFinexaNav"
                    className="absolute inset-0 rounded-full bg-[#1D4ED8] shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onLogin}
            className="text-xs font-semibold text-gray-200 hover:text-white px-3 py-1.5 transition-colors"
          >
            Log in
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSignUp}
            className="text-xs font-bold text-[#09182A] bg-white hover:bg-gray-100 px-5 py-2 rounded-full shadow-sm transition-all"
          >
            Sign up
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#09182A] border-b border-white/10 px-6 py-6 shadow-2xl space-y-4"
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
                  className="text-sm font-semibold text-gray-300 hover:text-white py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogin();
                }}
                className="flex-1 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignUp();
                }}
                className="flex-1 py-2.5 rounded-full text-xs font-bold text-[#09182A] bg-white"
              >
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
