import React, { useState } from 'react';
import { ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, openAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F8FAFC]/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-2xl bg-[#635BFF] flex items-center justify-center text-white shadow-lg shadow-[#635BFF]/30 group-hover:scale-105 transition-transform">
              {/* Diamond SVG Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M12 6L6 12L12 18L18 12L12 6Z" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              Finvesto
            </span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-[#635BFF] dark:hover:text-[#635BFF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#635BFF] dark:hover:text-[#635BFF] transition-colors">About us</a>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#635BFF]">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#635BFF]">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </div>
            <a href="#pricing" className="hover:text-[#635BFF] dark:hover:text-[#635BFF] transition-colors">Pricing</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Log in */}
            <button
              onClick={() => openAuthModal('login')}
              className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:block"
            >
              Log in
            </button>

            {/* Sign up */}
            <button
              onClick={() => openAuthModal('signup')}
              className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign up
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          <a href="#home" className="block text-sm font-bold text-slate-800 dark:text-slate-200">Home</a>
          <a href="#about" className="block text-sm font-bold text-slate-800 dark:text-slate-200">About us</a>
          <a href="#features" className="block text-sm font-bold text-slate-800 dark:text-slate-200">Solutions</a>
          <a href="#pricing" className="block text-sm font-bold text-slate-800 dark:text-slate-200">Pricing</a>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => openAuthModal('login')}
              className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
            >
              Log in
            </button>
            <button
              onClick={() => openAuthModal('signup')}
              className="w-full py-2.5 rounded-xl bg-[#635BFF] text-white text-xs font-bold"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
