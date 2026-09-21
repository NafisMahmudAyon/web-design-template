import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight, Zap } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
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
          isScrolled ? 'bg-[#0b121b]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Vantage Logo */}
            <a href="#" className="font-display text-3xl font-bold tracking-wider text-white hover:text-vantageNeon transition-colors">
              VANTAGE
            </a>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-gray-300 tracking-wider uppercase">
              <a href="#" className="text-white hover:text-vantageNeon transition-colors">Academy</a>
              <a href="#tracks" className="hover:text-vantageNeon transition-colors">Programs</a>
              <a href="#coaches" className="hover:text-vantageNeon transition-colors">Coaches</a>
              <a href="#margins" className="hover:text-vantageNeon transition-colors">Training</a>
              <a href="#pricing" className="hover:text-vantageNeon transition-colors">Membership</a>
              <a href="#events" className="hover:text-vantageNeon transition-colors">Events</a>
            </nav>

            {/* Right: Join Now Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenJoin}
                className="px-5 py-2.5 rounded-full bg-transparent text-white border border-white/30 text-xs font-bold hover:bg-white hover:text-black transition-all shadow-md flex items-center gap-1.5 group"
              >
                <span>JOIN NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#080d14] text-white p-6 flex flex-col justify-between shadow-2xl border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="font-display text-2xl font-bold tracking-wider text-vantageNeon">
                    VANTAGE TENNIS
                  </span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="space-y-3 font-condensed tracking-wider uppercase text-sm">
                  {[
                    { label: 'Academy Overview', href: '#' },
                    { label: 'Training Programs', href: '#tracks' },
                    { label: 'Performance Coaches', href: '#coaches' },
                    { label: 'Data & Facilities', href: '#margins' },
                    { label: 'Upcoming Events', href: '#events' },
                    { label: 'Membership Tiers', href: '#pricing' },
                    { label: 'FAQ & Admissions', href: '#faq' },
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
                    onOpenJoin();
                  }}
                  className="w-full py-3 rounded-xl bg-vantageNeon text-black font-bold text-center hover:bg-[#b8e600] transition-colors flex items-center justify-center gap-2 font-condensed tracking-wider uppercase text-base"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Book Player Assessment</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
