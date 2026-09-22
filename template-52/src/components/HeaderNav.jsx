import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../data/pollinateData';

export const HeaderNav = ({ onOpenDemo, onOpenSignUp }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer select-none">
          <div className="w-8 h-8 rounded-full bg-[#FF5520] flex items-center justify-center text-white shadow-sm shadow-[#FF5520]/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <circle cx="12" cy="7" r="2.5" />
              <circle cx="12" cy="17" r="2.5" />
              <circle cx="7" cy="12" r="2.5" />
              <circle cx="17" cy="12" r="2.5" />
              <circle cx="8.5" cy="8.5" r="2.5" />
              <circle cx="15.5" cy="15.5" r="2.5" />
              <circle cx="8.5" cy="15.5" r="2.5" />
              <circle cx="15.5" cy="8.5" r="2.5" />
            </svg>
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">
            Pollinate
          </span>
        </div>

        {/* Center Pill Menu Capsule */}
        <nav className="hidden md:flex items-center bg-[#0B0F15] p-1.5 rounded-full shadow-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                  isActive
                    ? 'bg-[#FF5520] text-white shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenSignUp}
            className="text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Login
          </button>
          <button
            onClick={onOpenSignUp}
            className="px-5 py-2 rounded-full bg-[#0B0F15] hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-3 animate-in fade-in zoom-in-95">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2 px-3 text-left rounded-xl text-xs font-bold flex items-center justify-between ${
                  activeTab === link.id ? 'bg-[#FF5520] text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={onOpenSignUp}
              className="flex-1 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700"
            >
              Login
            </button>
            <button
              onClick={onOpenSignUp}
              className="flex-1 py-2 rounded-full bg-[#0B0F15] text-white text-xs font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
