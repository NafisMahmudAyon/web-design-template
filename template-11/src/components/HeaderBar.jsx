import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Armchair } from 'lucide-react';

export default function HeaderBar({ activeTab, setActiveTab, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Product' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 mb-6">
      {/* Brand Icon & Name */}
      <motion.div 
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
          <Armchair className="w-5 h-5" />
        </div>
        <span className="font-display font-extrabold text-lg text-white tracking-widest uppercase">AURA</span>
      </motion.div>

      {/* Desktop Navigation Pill Container */}
      <nav className="hidden md:flex items-center gap-1 bg-[#1a1c22]/90 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/15 shadow-inner">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 relative ${
                isActive
                  ? 'bg-white/15 text-white shadow-sm border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeHeaderPill"
                  className="absolute inset-0 bg-white/15 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Top Right White Contact Button with Integrated Arrow Circle */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.04, shadow: '0 0 25px rgba(255, 255, 255, 0.4)' }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpenContact}
          className="bg-white hover:bg-gray-100 text-gray-950 font-bold pl-5 pr-2 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer group"
        >
          <span>Contact us</span>
          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </motion.button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
