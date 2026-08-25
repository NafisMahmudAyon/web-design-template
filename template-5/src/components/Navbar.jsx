import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, Home, Building2, Layers, DollarSign } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="cursor-pointer group flex items-center gap-2"
        >
          <span className="font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Breeze
          </span>
        </div>

        {/* Center Frosted Glass Pill Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1 glass-nav-pill px-6 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg backdrop-blur-xl">
          <button
            onClick={() => onNavigate('hero')}
            className="px-4 py-1.5 rounded-full text-white hover:text-white/80 transition-colors font-semibold"
          >
            Home
          </button>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setResourcesOpen(false); }}
              className="px-4 py-1.5 rounded-full text-white/90 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full mt-2 left-0 w-48 rounded-2xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-2xl z-50">
                <button
                  onClick={() => { onNavigate('module-tech'); setSolutionsOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-white/15 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-zinc-400" /> Modular Tech
                </button>
                <button
                  onClick={() => { onNavigate('map-section'); setSolutionsOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-white/15 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Home className="w-3.5 h-3.5 text-zinc-400" /> City Residences
                </button>
                <button
                  onClick={() => { onNavigate('deluxe-condos'); setSolutionsOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-white/15 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-zinc-400" /> Deluxe Condos
                </button>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setResourcesOpen(!resourcesOpen); setSolutionsOpen(false); }}
              className="px-4 py-1.5 rounded-full text-white/90 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full mt-2 left-0 w-48 rounded-2xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-2xl z-50">
                <button
                  onClick={() => { onNavigate('faq'); setResourcesOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-white/15 rounded-xl transition-colors"
                >
                  Knowledge Base / FAQs
                </button>
                <button
                  onClick={() => { onNavigate('feedback'); setResourcesOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs text-zinc-200 hover:bg-white/15 rounded-xl transition-colors"
                >
                  Client Testimonials
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('deluxe-condos')}
            className="px-4 py-1.5 rounded-full text-white/90 hover:text-white transition-colors"
          >
            Pricing
          </button>
        </div>

        {/* Right Menu Button */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full glass-social-pill flex items-center justify-center text-white backdrop-blur-md shadow-md"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-4 right-4 z-50 rounded-2xl bg-zinc-900/95 border border-white/20 p-6 shadow-2xl backdrop-blur-2xl text-white"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { onNavigate('hero'); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => { onNavigate('module-tech'); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-medium"
              >
                Modular Tech
              </button>
              <button
                onClick={() => { onNavigate('map-section'); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-medium"
              >
                Residence Map
              </button>
              <button
                onClick={() => { onNavigate('deluxe-condos'); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-medium"
              >
                Deluxe Condos & Pricing
              </button>
              <button
                onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-medium"
              >
                FAQ & Custom Home
              </button>
              <button
                onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
                className="w-full text-center px-4 py-3 rounded-xl bg-white text-zinc-900 font-semibold text-sm mt-2"
              >
                Let's Build Your Dream House
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
