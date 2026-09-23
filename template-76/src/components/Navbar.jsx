import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navLinks } from '../data/saasData';

export default function Navbar({ onLoginClick, onGetStarted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Business');

  return (
    <nav className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between z-30 relative">
      {/* Brand Logo */}
      <a href="#" className="flex items-center space-x-2.5 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
            <path d="M4 6h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm0 5h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm0 5h8a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" />
          </svg>
        </div>
      </a>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navLinks.map((link) => {
          const isActive = activeTab === link.name;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative py-1 transition-colors ${
                isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full" />
              )}
            </a>
          );
        })}
      </div>

      {/* Right Action Button (Login Pill) */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onLoginClick}
          className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white pl-5 pr-2.5 py-1.5 rounded-full text-xs font-semibold tracking-wide flex items-center space-x-2 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 group"
        >
          <span>Login</span>
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </div>
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#161922] border border-gray-800 rounded-2xl p-6 shadow-2xl z-50 md:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-gray-200 hover:text-purple-400 py-1 border-b border-gray-800/60"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full bg-[#6D28D9] text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center space-x-2 mt-2"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
