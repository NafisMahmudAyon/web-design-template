import React, { useState } from 'react';
import { Menu, X, Ship } from 'lucide-react';
import { NAV_LINKS } from '../data/logistiqoData';

export default function Navbar({ onGetConnected }) {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 sm:px-8 py-5 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20h20" />
              <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.1" />
              <path d="M10 4v4" />
              <path d="M14 4v4" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
            Logistiqo
          </span>
        </a>

        {/* Center Pill Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`text-xs sm:text-sm font-semibold transition ${
                  isActive ? 'text-red-600 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onGetConnected}
            className="px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-500/20 hover:shadow-lg transition active:scale-95"
          >
            Get Connected
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onGetConnected}
            className="px-3 py-1.5 rounded-full bg-[#E11D48] text-white text-xs font-bold"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-red-50 rounded-xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
