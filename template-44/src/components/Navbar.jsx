import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/flowzyData';

export default function Navbar({ onOpenAuth }) {
  const [activeLink, setActiveLink] = useState('features');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 sm:px-8 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Flowzy Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/25 group-hover:scale-105 transition">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
            Flowzy
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`text-xs sm:text-sm font-semibold transition ${
                  isActive ? 'text-purple-700 font-bold' : 'text-slate-600 hover:text-slate-900'
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
            onClick={() => onOpenAuth('signup')}
            className="px-5 py-2.5 rounded-xl bg-[#2D1B69] hover:bg-[#221352] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-3 py-1.5 rounded-lg bg-[#2D1B69] text-white text-xs font-bold"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setMobileOpen(false);
              }}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-purple-50 rounded-xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
