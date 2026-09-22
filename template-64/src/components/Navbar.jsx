import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import MonsterLogo from './MonsterLogo';
import { navData } from '../data/agencyData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
          ? 'bg-[#070908]/90 backdrop-blur-md border-b border-[#1B2B1F]/60 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <MonsterLogo />
        </a>

        {/* Center Nav Links (Pill Container) */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0D1510]/80 border border-[#1B2B1F] text-xs font-semibold tracking-wider">
          {navData.links.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-3.5 py-1.5 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180 text-[#25E575]' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl bg-[#0D1510] border border-[#1B2B1F] shadow-2xl z-50"
                      >
                        {link.sublinks.map((sub) => (
                          <a
                            key={sub.label}
                            href="#wordpress"
                            className="block p-2.5 rounded-lg hover:bg-[#142018] group transition-colors"
                          >
                            <div className="text-xs font-medium text-white group-hover:text-[#25E575] transition-colors flex items-center justify-between">
                              <span>{sub.label}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-[11px] text-neutral-400 mt-0.5">{sub.desc}</div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Phone / Whatsapp Trigger */}
          <button
            onClick={onOpenContact}
            aria-label="Call direct line"
            className="w-10 h-10 rounded-full bg-[#0D1510] border border-[#1B2B1F] hover:border-[#25E575] text-[#25E575] flex items-center justify-center transition-colors group cursor-pointer"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(37,229,117,0.35)] hover:shadow-[0_0_25px_rgba(37,229,117,0.55)] cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070908] border-b border-[#1B2B1F] px-4 py-6 space-y-4"
          >
            {navData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-neutral-200 hover:text-[#25E575] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1B2B1F] flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#25E575] text-black font-bold text-center text-xs tracking-wider"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
