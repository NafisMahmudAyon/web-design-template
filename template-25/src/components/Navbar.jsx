import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Shield, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenAccount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#features' },
    { name: 'Features', href: '#bento' },
    { name: 'Cards', href: '#cards' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#eff1e8]/90 backdrop-blur-md border-b border-black/5 py-4 shadow-sm'
          : 'bg-[#eff1e8] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#0b2416] text-[#bef264] flex items-center justify-center font-black text-lg shadow-sm group-hover:bg-[#123822] transition-colors">
              V
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-[#0b2416]">
              VELD
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#0b2416]/70 hover:text-[#0b2416] tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenAccount}
              className="text-xs font-bold text-[#0b2416] hover:text-[#0b2416]/70 transition-colors hidden sm:block"
            >
              Login
            </button>

            <button
              onClick={onOpenAccount}
              className="inline-flex items-center space-x-2 bg-[#bef264] hover:bg-[#aef043] text-[#0b2416] text-xs font-extrabold px-5 py-2.5 rounded-full border border-[#0b2416]/20 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Open Account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0b2416] md:hidden rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#eff1e8] border-b border-black/10 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0b2416] py-2 border-b border-black/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccount();
              }}
              className="w-full bg-[#bef264] text-[#0b2416] font-extrabold text-xs py-3 rounded-full flex items-center justify-center space-x-2"
            >
              <span>Open Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
