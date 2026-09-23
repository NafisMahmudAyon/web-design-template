import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/skincareData';

export default function Navbar({ cartCount, onOpenCart, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="text-base sm:text-lg font-bold tracking-tight text-gray-900">
          AR Shakir
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 text-gray-600">
          <button aria-label="Search" className="hover:text-black transition-colors">
            <Search className="w-4 h-4 stroke-[1.75]" />
          </button>

          <button onClick={onOpenAuth} aria-label="Account" className="hover:text-black transition-colors">
            <User className="w-4 h-4 stroke-[1.75]" />
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="relative hover:text-black transition-colors"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#5b7b99] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:text-black"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[1.75]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 text-xs font-semibold">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
