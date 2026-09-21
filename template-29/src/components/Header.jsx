import React, { useState } from 'react';
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  HelpCircle, 
  ChevronDown, 
  User, 
  Layers, 
  Settings, 
  LogOut, 
  Check,
  Zap,
  TrendingUp,
  X
} from 'lucide-react';

export default function Header({ darkMode, setDarkMode, activeTab, setActiveTab, openModal }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = ['Dashboard', 'Trade', 'Market', 'Analytics', 'Portfolio', 'OTC'];

  const notifications = [
    { id: 1, title: 'Deposit Confirmed', desc: '0.45 BTC deposited successfully', time: '10m ago', unread: true },
    { id: 2, title: 'Price Alert', desc: 'Solana (SOL) crossed $145.00 (+5.4%)', time: '1h ago', unread: true },
    { id: 3, title: 'Security Notice', desc: 'New login detected from Windows 11', time: '3h ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left: Brand Logo & Navigation */}
          <div className="flex items-center gap-8">
            {/* Brand Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-9 h-9 rounded-xl bg-[#FF5B37] flex items-center justify-center text-white font-black text-xl shadow-md shadow-[#FF5B37]/30 group-hover:scale-105 transition-transform">
                <span className="translate-y-[-1px]">R</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Raxon
              </span>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative ${
                      isActive
                        ? 'text-[#FF5B37] dark:text-[#FF5B37] bg-[#FF5B37]/10'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF5B37] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here..."
                className="w-full bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm pl-10 pr-14 py-2 rounded-xl border border-transparent focus:border-[#FF5B37]/50 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-bold text-slate-500 dark:text-slate-300">
                <span>K</span>
                <span>⌘</span>
              </div>
            </div>
          </div>

          {/* Right: Actions, Theme, User Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF5B37] ring-2 ring-white dark:ring-slate-900" />
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-90 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Notifications</h4>
                    <span className="text-[11px] font-semibold text-[#FF5B37] bg-[#FF5B37]/10 px-2 py-0.5 rounded-full">
                      2 Unread
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-700/60 max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-3 px-1 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer">
                        <div className="flex justify-between items-start gap-2">
                          <p className="font-semibold text-xs text-slate-800 dark:text-slate-200">{n.title}</p>
                          <span className="text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-2 py-2 text-center text-xs font-bold text-[#FF5B37] hover:bg-[#FF5B37]/5 rounded-xl transition-colors">
                    Mark all as read
                  </button>
                </div>
              )}
            </div>

            {/* Help Icon */}
            <button className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block">
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* User Profile Pill */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2.5 pl-2 pr-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  OS
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Oripio Sajibur</p>
                  <p className="text-[10px] text-slate-400 leading-tight">oripiosr@gmail.com</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Menu Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700 mb-1">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Oripio Sajibur</p>
                    <p className="text-[11px] text-slate-400">oripiosr@gmail.com</p>
                  </div>
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors">
                    <User className="w-4 h-4 text-slate-400" /> Account Settings
                  </button>
                  <button 
                    onClick={() => openModal('deposit')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors"
                  >
                    <Zap className="w-4 h-4 text-[#FF5B37]" /> Fast Deposit
                  </button>
                  <div className="my-1 border-t border-slate-100 dark:border-slate-700" />
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
