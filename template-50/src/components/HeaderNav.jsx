import React, { useState } from 'react';
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { NAV_LINKS, USER_INFO } from '../data/raxonData';

export const HeaderNav = ({ activeTab, onSelectTab, onOpenDeposit }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-20 px-6 sm:px-8 bg-white border-b border-slate-200/80 flex items-center justify-between shrink-0">
      
      {/* Left: Brand Logo + Nav Links */}
      <div className="flex items-center gap-8">
        {/* Brand Logo */}
        <a href="#dashboard" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-raxon-orange flex items-center justify-center text-white shadow-md shadow-raxon-orange/20 group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16a2 2 0 0 1 2 2v1H2V8a2 2 0 0 1 2-2zm-2 5h20v2H2v-2zm0 4h20v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            Raxon
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectTab(link.id)}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-raxon-orange rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here..."
            className="w-48 sm:w-60 py-2 pl-9 pr-12 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-raxon-orange focus:bg-white transition-all"
          />
          <div className="absolute right-2.5 top-2 px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-400">
            K ⌘
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/60">
          <button
            onClick={() => setIsDarkMode(false)}
            aria-label="Light mode"
            className={`p-1.5 rounded-lg transition-colors ${
              !isDarkMode ? 'bg-white shadow-xs text-slate-800' : 'text-slate-400'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsDarkMode(true)}
            aria-label="Dark mode"
            className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'bg-white shadow-xs text-slate-800' : 'text-slate-400'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 relative transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-raxon-orange absolute top-2 right-2 border-2 border-white" />
        </button>

        {/* Help */}
        <button
          aria-label="Help"
          className="w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* User Profile Capsule */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200/80 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
            {USER_INFO.initials}
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-slate-900 leading-none">{USER_INFO.name}</div>
            <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{USER_INFO.email}</div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
        </div>

      </div>

    </header>
  );
};
