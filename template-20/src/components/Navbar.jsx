import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Leaf, Shield, BarChart3, Globe, Sparkles, ChevronRight, Mail, Phone } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
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
          isScrolled ? 'bg-[#f4f5f6]/90 backdrop-blur-md py-3 shadow-sm border-b border-black/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Menu Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-10 h-10 rounded-lg bg-[#18191c] text-white flex items-center justify-center hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center: Brand Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-[#18191c] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Leaf className="w-4 h-4 text-[#22c55e]" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#18191c]">
                EcoIntel
              </span>
            </a>

            {/* Right: Book a Demo CTA Button */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#18191c] text-white text-sm font-medium hover:bg-black transition-all shadow-sm group"
            >
              <span>Book a Demo</span>
              <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#18191c] transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer Modal */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-md bg-[#16181b] text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">
                      EcoIntel
                    </span>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4">
                  {[
                    { label: 'Platform Intelligence', href: '#hero', icon: BarChart3 },
                    { label: 'Environmental Risk Types', href: '#risk-categories', icon: Shield },
                    { label: 'Data to Decisions', href: '#complex-data', icon: Globe },
                    { label: 'Live Intelligence Engine', href: '#risk-changes', icon: Sparkles },
                    { label: 'Client Case Studies', href: '#testimonials', icon: Leaf },
                    { label: 'Business Impact', href: '#business-impact', icon: ArrowUpRight },
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="flex items-center justify-between p-3.5 rounded-xl hover:bg-white/5 transition-colors group text-gray-200 hover:text-white"
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-5 h-5 text-gray-400 group-hover:text-[#22c55e] transition-colors" />
                          <span className="text-base font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Quick Contact */}
              <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Need Direct Support?</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <Mail className="w-4 h-4 text-[#22c55e]" />
                    <span>contact@aerovista.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-[#22c55e]" />
                    <span>+1 (800) 555-ECO-INTEL</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Request Full Platform Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
