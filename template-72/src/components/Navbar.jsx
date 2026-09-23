import React, { useState } from 'react';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/wildlingData';

export default function Navbar({ cartCount, onOpenCart, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fbeee6]/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#2e1d1b]/5 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="text-xl sm:text-2xl font-serif font-black tracking-[0.2em] text-[#2e1d1b] uppercase">
          WILDLING
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-semibold text-[#2e1d1b]/70 tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#2e1d1b] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 text-[#2e1d1b]">
          <button
            onClick={onOpenAuth}
            aria-label="Account"
            className="hover:opacity-70 transition-opacity"
          >
            <User className="w-4 h-4 stroke-[1.75]" />
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#2e1d1b] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[1.75]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbeee6] border-t border-[#2e1d1b]/10 px-8 py-6 flex flex-col gap-4 text-sm font-semibold text-[#2e1d1b]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-70"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
