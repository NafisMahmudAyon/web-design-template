import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Menu, X, ShoppingBag } from 'lucide-react';

export default function HeaderNav({ activeNav, setActiveNav, onOpenOrder }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'order', label: 'Order Now', isCTA: true },
  ];

  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-4 mb-4">
      {/* Brand Logo - Grov with Sprout Icon */}
      <motion.a 
        href="#home"
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-1.5 text-gray-900 font-display font-extrabold text-2xl md:text-3xl tracking-tight cursor-pointer"
      >
        <span>Grov</span>
        <Sprout className="w-6 h-6 text-[#2c4b2e] stroke-[2.5]" />
      </motion.a>

      {/* Desktop Pill Navigation Bar */}
      <nav className="hidden md:flex items-center gap-1 bg-[#cde2c7]/80 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-inner">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveNav(item.id);
                if (item.isCTA) onOpenOrder();
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 relative ${
                isActive
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-[#203621] hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div 
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Right Quick Cart / Order Button (Mobile) */}
      <div className="flex items-center gap-2 md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onOpenOrder}
          className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
        </motion.button>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 rounded-full bg-white/80 text-gray-900 flex items-center justify-center"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
