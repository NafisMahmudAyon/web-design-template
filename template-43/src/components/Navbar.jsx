import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/finexaData';

export default function Navbar({ onOpenAuth }) {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 sm:px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Finexa Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-display">
            Finexa
          </span>
        </a>

        {/* Center Pill Navigation Container */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0F172A]/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                  ${isActive 
                    ? 'bg-[#1855DE] text-white shadow-sm font-bold' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Utilities */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenAuth('login')}
            className="text-xs font-semibold text-white/90 hover:text-white transition"
          >
            Log in
          </button>

          <button
            onClick={() => onOpenAuth('signup')}
            className="px-5 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-md hover:shadow-lg transition active:scale-95"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold"
          >
            Sign up
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white rounded-lg bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[#0B1426] border border-white/10 rounded-2xl p-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                onOpenAuth('login');
                setMobileMenuOpen(false);
              }}
              className="w-1/2 py-2.5 rounded-xl text-xs font-bold text-white border border-white/20 hover:bg-white/5"
            >
              Log in
            </button>
            <button
              onClick={() => {
                onOpenAuth('signup');
                setMobileMenuOpen(false);
              }}
              className="w-1/2 py-2.5 rounded-xl text-xs font-bold bg-[#B5F52C] text-black hover:bg-[#A4EB1B]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
