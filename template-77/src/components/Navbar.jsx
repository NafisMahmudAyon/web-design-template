import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../data/elevateData';

export default function Navbar({ onBookCall }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between z-30 relative">
      {/* Brand Logo */}
      <a href="#" className="flex items-center space-x-2 group">
        <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center text-white font-black text-sm">
          ▲
        </div>
        <span className="font-bold text-lg sm:text-xl text-white tracking-tight font-display">
          Elevate Camp
        </span>
      </a>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-xs sm:text-sm font-medium">
        {navLinks.map((link) => {
          const isActive = activeLink === link.name;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`transition-colors py-1 ${
                isActive ? 'text-white font-semibold' : 'text-emerald-100/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Right Book a Call Button (Figma rounded outline button with diagonal arrow) */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onBookCall}
          className="border border-white/40 hover:border-white text-white hover:bg-white/10 px-5 py-2 rounded-full text-xs font-semibold tracking-wide flex items-center space-x-1.5 transition-all duration-200 active:scale-95 group"
        >
          <span>Book a Call</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white hover:bg-white/10 rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1E433C] border border-white/20 rounded-2xl p-6 shadow-2xl z-50 md:hidden animate-in slide-in-from-top-4 duration-300 text-white">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-emerald-100 hover:text-white py-1 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full bg-white text-[#1E433C] py-3 rounded-full text-sm font-bold flex items-center justify-center space-x-2 mt-2"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
