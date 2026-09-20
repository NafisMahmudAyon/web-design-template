import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount = 0, onOpenCart, onNavigate }) {
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
    { name: 'Boards', href: '#boards' },
    { name: 'Studio', href: '#studio' },
    { name: 'Collections', href: '#collections' },
    { name: 'Stories', href: '#stories' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/85 backdrop-blur-md shadow-sm border-b border-[#0F1E1B]/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group cursor-pointer select-none"
            >
              <span className="w-7 h-7 rounded-full bg-[#009E96] text-white flex items-center justify-center font-bold text-xs group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                ✦
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#0F1E1B]">
                  Tideline
                </span>
                <span className="font-mono text-xs text-[#009E96] font-semibold tracking-wider">
                  © 17-26
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-[#0F1E1B]/10 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#2C3E3A] hover:text-[#009E96] transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009E96] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions (Cart & Custom Order) */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F1E1B]/10 text-[#0F1E1B] hover:border-[#009E96] hover:text-[#009E96] transition-all duration-200 shadow-sm text-xs font-mono font-medium"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Cart</span>
                <span className="bg-[#009E96] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  {cartCount}
                </span>
              </button>

              <a
                href="#boards"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#009E96] hover:bg-[#028B84] text-white text-xs font-semibold tracking-wide shadow-teal-subtle transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
              >
                <span>Custom Order</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/80 border border-[#0F1E1B]/10 text-[#0F1E1B]"
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
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#0F1E1B]/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0F1E1B] hover:text-[#009E96] py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#009E96]" />
                    Shopping Cart
                  </span>
                  <span className="bg-[#009E96] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {cartCount} items
                  </span>
                </button>
                <a
                  href="#boards"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#009E96] text-white font-semibold text-sm shadow-md"
                >
                  <span>Explore Shapes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
