import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/contentData';

export default function Navbar({ onContactClick }) {
  const [activeLink, setActiveLink] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-black/[0.06] shadow-sm">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            <span className="w-2 h-2 rounded-[2px] bg-[#141814] rotate-45"></span>
            <span className="w-2 h-2 rounded-[2px] bg-[#141814] rotate-45"></span>
            <span className="w-2 h-2 rounded-[2px] bg-[#141814] rotate-45"></span>
            <span className="w-2 h-2 rounded-[2px] bg-[#141814] rotate-45"></span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#141814] font-display">
            Finora
          </span>
        </div>

        {/* Center Pill Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141814]/85 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg text-white">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isActive
                    ? 'text-[#141814]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFinoraNav"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Contact Us */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContactClick}
            className="px-5 py-2 rounded-full bg-white text-[#141814] text-xs font-bold shadow-sm hover:bg-gray-50 border border-black/[0.06] transition-all focus:outline-none"
          >
            Contact Us
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white md:hidden flex items-center justify-center border border-black/[0.06] text-[#141814]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 bg-[#141814] rounded-3xl p-4 text-white shadow-2xl border border-white/10"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-bold ${
                    activeLink === link.label ? 'bg-white text-[#141814]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
