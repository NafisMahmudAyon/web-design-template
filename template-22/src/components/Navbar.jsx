import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, CompassIcon, Sparkles, User, Globe, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenPlanTrip }) {
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
          isScrolled ? 'bg-[#0b131c]/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-cyan-glow">
                🐱
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Travelynx
              </span>
            </a>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-300">
              <a href="#" className="text-white font-semibold hover:text-cyan-400 transition-colors">Home</a>
              <a href="#features" className="hover:text-cyan-400 transition-colors">About Us</a>
              <a href="#insights" className="hover:text-cyan-400 transition-colors">How It Works</a>
              <a href="#destinations" className="hover:text-cyan-400 transition-colors">Destinations</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">Contact</a>
            </nav>

            {/* Right: Login & Sign Up CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPlanTrip}
                className="hidden sm:inline-block px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Login
              </button>

              <button
                onClick={onOpenPlanTrip}
                className="inline-flex items-center gap-1.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#162334] text-white border border-white/20 text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-cyan-400 transition-all shadow-md group"
              >
                <span>Sign Up</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0b131c] text-white p-6 flex flex-col justify-between shadow-2xl border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🐱</span>
                    <span className="font-display text-xl font-bold">Travelynx AI</span>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="space-y-3 text-sm">
                  {[
                    { label: 'Home', href: '#' },
                    { label: 'AI Features', href: '#features' },
                    { label: 'Travel Insights', href: '#insights' },
                    { label: 'Popular Destinations', href: '#destinations' },
                    { label: 'Explorers Testimonials', href: '#testimonials' },
                    { label: 'FAQ Accordion', href: '#faq' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenPlanTrip();
                  }}
                  className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold text-center hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Start AI Trip Planning</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
