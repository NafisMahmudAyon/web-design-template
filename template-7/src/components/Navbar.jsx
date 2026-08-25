import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Home, Building2, Info, Briefcase, Users, PhoneCall } from 'lucide-react';

export default function Navbar({ onBookNow, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Properties', id: 'featured' },
    { name: 'About', id: 'stories' },
    { name: 'Services', id: 'why-us' },
    { name: 'Agents', id: 'testimonials' },
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.name);
    onNavigate(link.id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick({ name: 'Home', id: 'hero' })}
          className="flex items-center space-x-2 text-white group cursor-pointer"
        >
          {/* Stylized House Icon */}
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#F8BA8B] transition-colors">
            <svg className="w-5 h-5 text-white group-hover:text-[#F8BA8B] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
              <path d="M9 21V12h6v9" />
            </svg>
          </div>
          <span className="font-serif italic text-2xl font-bold tracking-tight text-white">
            Housen
          </span>
        </button>

        {/* Center Floating Glass Pill Navbar (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 glass-pill rounded-full px-5 py-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? 'text-black bg-[#F8BA8B] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mr-1.5 align-middle" />
                )}
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Call To Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookNow}
            className="bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-[#F8BA8B]/20 hover:scale-105 cursor-pointer group"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white glass-pill rounded-full"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-left py-2.5 px-4 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8BA8B]" />
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full py-3 bg-[#F8BA8B] text-black font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
