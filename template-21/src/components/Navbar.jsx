import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight, ChevronRight, Shield, Zap, Globe, Coins, UserPlus } from 'lucide-react';

export default function Navbar({ onOpenSignUp }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#08090a]/90 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00e699] to-[#06b6d4] text-black flex items-center justify-center shadow-neon-emerald group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4 fill-black" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Zypto
              </span>
            </a>

            {/* Center: Floating Navigation Pill (Desktop) */}
            <nav className="hidden md:flex items-center gap-1.5 bg-[#121417]/90 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium">
              <a href="#" className="px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-pulse" />
                <span>Home</span>
              </a>
              <a href="#markets" className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                Markets
              </a>
              <a href="#trade" className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                Trade
              </a>
              <a href="#earn" className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                Earn
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                About
              </a>
            </nav>

            {/* Right: Sign Up & Drawer Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSignUp}
                className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#121417] text-white border border-white/20 text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-[#00e699] transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Sign Up</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00e699] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="md:hidden w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Modal */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0e1012] text-white p-6 flex flex-col justify-between shadow-2xl border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#00e699] text-black flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 fill-black" />
                    </div>
                    <span className="font-display text-xl font-bold">Zypto Exchange</span>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {[
                    { label: 'Home', href: '#', icon: Sparkles },
                    { label: 'Markets & Assets', href: '#markets', icon: Coins },
                    { label: 'Trade Traditional Stocks', href: '#trade', icon: Zap },
                    { label: 'Mobile App Hub', href: '#carousel', icon: Globe },
                    { label: 'Commission-Free Trading', href: '#zero-fees', icon: Shield },
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-4 h-4 text-[#00e699]" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenSignUp();
                  }}
                  className="w-full py-3 rounded-xl bg-[#00e699] text-black font-bold text-center hover:bg-[#34d399] transition-colors flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create Free Account</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
