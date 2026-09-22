import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  ChevronDown,
  Layers
} from 'lucide-react';
import { USER_PROFILE } from '../data/coinixData';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenNotifications, 
  unreadCount = 2,
  onOpenSearch 
}) {
  const [isDark, setIsDark] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const tabs = ['Dashboard', 'Trade', 'Market', 'Analytics', 'Portfolio', 'OTC'];

  return (
    <header className="px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/5 bg-transparent">
      {/* Brand Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-glow-primary">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="19" x2="18" y2="5" />
            <line x1="6" y1="13" x2="13" y2="6" />
            <line x1="11" y1="18" x2="18" y2="11" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Coinix
        </span>
      </div>

      {/* Center Navigation Pill Container */}
      <nav className="hidden md:flex items-center gap-1 bg-[#151924] p-1 rounded-full border border-white/5 shadow-inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                ${isActive 
                  ? 'bg-white text-black shadow-sm font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Search, Bell, Theme, User */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search button */}
        <button 
          onClick={onOpenSearch}
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition"
          title="Search assets or markets"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button 
          onClick={onOpenNotifications}
          className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-indigo-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#0B0C10]">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Theme Toggle Pill */}
        <div className="hidden sm:flex items-center bg-[#151924] p-1 rounded-full border border-white/5">
          <button 
            onClick={() => setIsDark(false)}
            className={`p-1 rounded-full transition ${!isDark ? 'text-amber-400 bg-white/10' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setIsDark(true)}
            className={`p-1 rounded-full transition ${isDark ? 'text-indigo-400 bg-white/10' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* User Profile Pill */}
        <div className="relative">
          <button 
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-white/5 transition"
          >
            <img 
              src={USER_PROFILE.avatar} 
              alt={USER_PROFILE.name} 
              className="w-7 h-7 rounded-full object-cover ring-2 ring-indigo-500/50 shadow-xs" 
            />
            <span className="hidden sm:inline text-xs font-semibold text-slate-200">
              {USER_PROFILE.name}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#151924] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2 border-b border-white/5">
                <div className="text-xs font-bold text-white">{USER_PROFILE.name}</div>
                <div className="text-[10px] text-indigo-400 font-semibold">{USER_PROFILE.tier}</div>
              </div>
              <button className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition mt-1">
                Security & 2FA
              </button>
              <button className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                API Management
              </button>
              <button className="w-full text-left px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg transition">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
