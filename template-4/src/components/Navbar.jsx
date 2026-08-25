import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Home as HomeIcon, Info, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { label: 'Home', action: () => { setActiveTab('Home'); onNavigate('hero'); } },
    { label: 'About Us', action: () => { setActiveTab('About Us'); onNavigate('story'); } },
    { label: 'Collection', action: () => { setActiveTab('Collection'); onNavigate('picks'); } },
    { label: "Let's Talk", action: () => onOpenContact() },
  ];

  return (
    <nav className="w-full relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between">
        {/* Left Nav Pills */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setActiveTab('Home'); onNavigate('hero'); }}
            className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'Home'
                ? 'bg-white text-zinc-900 shadow-md'
                : 'glass-pill text-white hover:bg-white/20'
            }`}
          >
            Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setActiveTab('About Us'); onNavigate('story'); }}
            className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'About Us'
                ? 'bg-white text-zinc-900 shadow-md'
                : 'glass-pill text-white hover:bg-white/20'
            }`}
          >
            About Us
          </motion.button>
        </div>

        {/* Center Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="cursor-pointer group flex items-center gap-2"
        >
          <span className="font-bebas text-3xl sm:text-4xl tracking-widest text-white transition-transform group-hover:scale-105 duration-300">
            REALWORLD
          </span>
        </div>

        {/* Right Nav Pills */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setActiveTab('Collection'); onNavigate('picks'); }}
            className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'Collection'
                ? 'bg-white text-zinc-900 shadow-md'
                : 'glass-pill text-white hover:bg-white/20'
            }`}
          >
            Collection
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenContact()}
            className="glass-pill px-7 py-2.5 rounded-full text-sm font-medium text-white hover:bg-white/30 flex items-center gap-1.5"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-pill p-2.5 rounded-full text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden absolute top-20 left-4 right-4 z-50 rounded-2xl glass-panel-dark p-6 border border-white/20 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-xl text-base font-medium transition-all ${
                    activeTab === item.label
                      ? 'bg-white text-zinc-900 font-semibold'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
