import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onRequestCallClick, onLoginClick }) {
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          {/* Angled stripes icon */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-6 bg-[#0052ff] rounded-full -skew-x-12 group-hover:scale-y-110 transition-transform"></span>
            <span className="w-1.5 h-6 bg-[#0052ff] rounded-full -skew-x-12 group-hover:scale-y-110 transition-transform delay-75"></span>
            <span className="w-1.5 h-6 bg-[#0052ff] rounded-full -skew-x-12 group-hover:scale-y-110 transition-transform delay-150"></span>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            SaleHouse
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700">
          <div className="relative">
            <button
              type="button"
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              className="flex items-center gap-1 hover:text-[#0052ff] transition-colors py-2"
            >
              <span>Product</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {productMenuOpen && (
              <div className="absolute left-0 top-full mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 text-xs font-medium">
                <a href="#services" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0052ff]">
                  Residential Villas
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0052ff]">
                  Commercial Offices
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0052ff]">
                  Architectural Survey
                </a>
              </div>
            )}
          </div>

          <a href="#differentiators" className="hover:text-[#0052ff] transition-colors">
            Why SaleHouse
          </a>
          <a href="#services" className="hover:text-[#0052ff] transition-colors">
            Blog
          </a>
        </nav>

        {/* Right Actions: Log In & Request a Call */}
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={onLoginClick}
            className="text-xs font-bold text-gray-800 hover:text-[#0052ff] transition-colors"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={onRequestCallClick}
            className="px-5 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-bold shadow-md transition-all active:scale-95"
          >
            Request a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-semibold">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#differentiators" onClick={() => setMobileMenuOpen(false)}>Why SaleHouse</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onLoginClick(); }}
              className="text-left font-bold text-gray-800"
            >
              Log In
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onRequestCallClick(); }}
              className="w-full py-2.5 rounded-xl bg-black text-white text-xs font-bold text-center"
            >
              Request a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
