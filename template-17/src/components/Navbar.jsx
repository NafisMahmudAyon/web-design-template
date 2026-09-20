import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import GolfioLogo from './GolfioLogo';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Course', href: '#courses' },
  { name: 'Lessons', href: '#lessons' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
];

export default function Navbar({ onOpenBooking, onOpenSignIn }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-[#0a1711]/85 backdrop-blur-lg shadow-xl shadow-black/20' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Golfio Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#102419]/90 border border-white/10 rounded-full px-4 py-2 flex items-center shadow-lg">
            <GolfioLogo />
          </div>
        </div>

        {/* Center: Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center bg-[#132a1e]/80 border border-white/10 backdrop-blur-md rounded-full px-2 py-1.5 shadow-xl shadow-black/30">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-[#0a1711] font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#E2F844] rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Sign in & Book Now */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenSignIn}
            className="text-white/90 hover:text-white text-sm font-medium transition-colors px-3 py-2 flex items-center gap-1.5"
          >
            <User className="w-4 h-4 text-white/70" />
            Sign in
          </button>
          <button
            onClick={onOpenBooking}
            className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md shadow-[#E2F844]/20 flex items-center gap-1.5"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-[#132a1e] border border-white/10 text-white hover:text-[#E2F844] transition-colors"
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
            className="md:hidden bg-[#0a1711]/95 border-b border-white/10 backdrop-blur-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeTab === link.name
                      ? 'bg-[#E2F844] text-[#0a1711] font-semibold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="flex-1 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/5"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 py-2.5 rounded-full bg-[#E2F844] text-[#0a1711] text-sm font-bold shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
