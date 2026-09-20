import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, User, Lock } from 'lucide-react';

export default function Navbar({ onSignInClick, onGetStartedClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Market', href: '#features' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Collection', href: '#collection' },
    { name: 'Vault', href: '#vault' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#05070A]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-sans font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Center Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group cursor-pointer select-none"
            >
              <div className="w-7 h-7 rounded-full border border-gold-500/50 flex items-center justify-center bg-gold-500/10 group-hover:border-gold-400 transition-colors shadow-gold-subtle">
                <span className="text-gold-400 text-xs font-serif font-bold">✦</span>
              </div>
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-gold-200 transition-colors">
                Chronova
              </span>
            </a>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onSignInClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-medium text-gray-300 hover:text-white transition-colors"
              >
                <User className="w-3.5 h-3.5 text-gold-400" />
                <span>Sign In</span>
              </button>

              <button
                onClick={onGetStartedClick}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-sans font-semibold text-xs tracking-wide shadow-gold-subtle transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-[#0A0D12]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignInClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold"
                >
                  <User className="w-3.5 h-3.5 text-gold-400" />
                  <span>Sign In To Vault</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGetStartedClick();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold shadow-gold-subtle"
                >
                  Start Building Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
