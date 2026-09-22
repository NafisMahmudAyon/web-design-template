import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../data/finoviaData';

export default function Navbar({ onOpenAuth }) {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 sm:px-8 py-5 bg-[#FCFCFD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#B7F436] flex items-center justify-center text-slate-950 shadow-sm group-hover:scale-105 transition font-extrabold">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
            Finovia
          </span>
        </a>

        {/* Center Pill Nav Links matching mockup */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F4F5F7] p-1.5 rounded-full border border-slate-200/60 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.id;

            if (link.hasDropdown) {
              return (
                <div key={link.id} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl z-30 text-xs">
                      {['Global Payments', 'Multi-currency Vault', 'API Solutions', 'Tax Compliance'].map(item => (
                        <a
                          key={item}
                          href="#services"
                          onClick={() => setServicesOpen(false)}
                          className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 font-medium"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150
                  ${isActive 
                    ? 'bg-[#111827] text-white font-bold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenAuth('login')}
            className="text-xs font-bold text-slate-700 hover:text-slate-950 transition"
          >
            Log in
          </button>

          <button
            onClick={() => onOpenAuth('signup')}
            className="px-5 py-2.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold shadow-sm transition active:scale-95"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-3.5 py-1.5 rounded-full bg-[#111827] text-white text-xs font-bold"
          >
            Sign Up
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
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                onOpenAuth('login');
                setMobileMenuOpen(false);
              }}
              className="w-1/2 py-2 text-xs font-bold border border-slate-200 rounded-xl text-slate-700"
            >
              Log in
            </button>
            <button
              onClick={() => {
                onOpenAuth('signup');
                setMobileMenuOpen(false);
              }}
              className="w-1/2 py-2 text-xs font-bold bg-[#111827] text-white rounded-xl"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
