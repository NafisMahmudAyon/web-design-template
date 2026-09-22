import React, { useState } from 'react';
import { 
  LayoutGrid, 
  LineChart, 
  ArrowLeftRight, 
  Wallet, 
  PieChart, 
  Bell, 
  Settings, 
  Globe 
} from 'lucide-react';
import { USER_INFO } from '../data/steadiData';

export default function Navbar({ 
  activeNav, 
  setActiveNav, 
  onOpenNotifications, 
  unreadCount = 2,
  onOpenSettings 
}) {
  const [lang, setLang] = useState('EN');
  const [langDropdown, setLangDropdown] = useState(false);

  const navLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'analytics', label: 'Analytics', icon: LineChart },
    { id: 'transfer', label: 'Transfer', icon: ArrowLeftRight },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'budget', label: 'Budget', icon: PieChart },
  ];

  return (
    <header className="px-4 sm:px-8 py-5 flex items-center justify-between border-b border-slate-100">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md shadow-orange-500/20 text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
          Steadi
        </span>
      </div>

      {/* Center Nav Pill Container */}
      <nav className="hidden md:flex items-center gap-1 bg-[#F8FAFC] p-1.5 rounded-full border border-slate-200/80 shadow-inner">
        {navLinks.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200
                ${isActive 
                  ? 'bg-[#111827] text-white shadow-sm font-bold' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }
              `}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Utilities */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Notification Bell */}
        <button
          onClick={onOpenNotifications}
          className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition relative border border-slate-200/60"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Settings Gear */}
        <button
          onClick={onOpenSettings}
          className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition border border-slate-200/60"
          title="Account Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-full transition border border-slate-200/60 flex items-center gap-1"
          >
            <span>{lang}</span>
          </button>

          {langDropdown && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-xl z-30">
              {['EN', 'ES', 'FR', 'DE'].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setLangDropdown(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition"
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <div className="pl-1">
          <img
            src={USER_INFO.avatar}
            alt={USER_INFO.name}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-500/20 shadow-xs cursor-pointer hover:scale-105 transition"
          />
        </div>
      </div>
    </header>
  );
}
