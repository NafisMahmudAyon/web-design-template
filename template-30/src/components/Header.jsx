import React, { useState } from 'react';
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut, 
  Zap, 
  X,
  SlidersHorizontal
} from 'lucide-react';

export default function Header({ darkMode, setDarkMode, activeNavTab, setActiveNavTab, openModal }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navItems = ['Dashboard', 'Market', 'Trade', 'Analytics', 'Portfolio', 'OTC'];

  const notifications = [
    { id: 1, title: 'Deposit Confirmed', desc: '1.20 BTC deposited into wallet', time: '5m ago' },
    { id: 2, title: 'Security Alert', desc: 'New login attempt from London, UK', time: '45m ago' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#EEF0F4]/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Orange Wings Logo Icon matching mockup */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E65D24] to-[#FF7A45] flex items-center justify-center shadow-lg shadow-[#E65D24]/25 group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8L12 16L20 8" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 16L12 8L20 16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              Rynox
            </span>
          </div>

          {/* Center: Nav Tab Bar Pills matching mockup */}
          <nav className="hidden lg:flex items-center bg-white dark:bg-slate-800/90 p-1.5 rounded-full shadow-sm border border-slate-200/60 dark:border-slate-700/60">
            {navItems.map((item) => {
              const isActive = activeNavTab === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveNavTab(item)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Button */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm border border-slate-200/60 dark:border-slate-700/60 transition-colors"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm border border-slate-200/60 dark:border-slate-700/60 transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E65D24] text-white text-[9px] font-black flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
                  2
                </span>
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">Notifications</h4>
                    <span className="text-[10px] font-bold text-[#E65D24] bg-[#E65D24]/10 px-2 py-0.5 rounded-full">
                      2 New
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-700/60 max-h-60 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2.5 px-1 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer">
                        <p className="font-bold text-xs text-slate-800 dark:text-slate-200">{n.title}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{n.desc}</p>
                        <span className="text-[9px] text-slate-400 mt-1 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm border border-slate-200/60 dark:border-slate-700/60 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* User Profile Pill matching mockup */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1.5 pl-2 pr-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 overflow-hidden flex items-center justify-center text-white font-extrabold text-xs">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight">Oripio</p>
                  <p className="text-[10px] font-semibold text-slate-400 leading-tight">Admin</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700 mb-1">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Oripio Sajibur</p>
                    <p className="text-[10px] text-slate-400">Admin Account</p>
                  </div>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors">
                    <Settings className="w-4 h-4 text-slate-400" /> Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-4 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search coins, markets, transactions..."
                className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
              <button onClick={() => setShowSearchModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 text-center text-xs text-slate-400">
              Type to search crypto assets, analytics reports & transactions...
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
