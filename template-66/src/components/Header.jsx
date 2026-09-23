import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Gift, Settings, ChevronDown, Check, User, Shield, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({
  searchQuery,
  setSearchQuery,
  onOpenNotifications,
  unreadCounts = { bell: 21, chat: 53, gift: 15, settings: 19 }
}) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [userStatus, setUserStatus] = useState('Available');

  return (
    <header className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here"
            className="w-full h-11 pl-4 pr-11 bg-[#161720] hover:bg-[#1a1c27] focus:bg-[#181924] border border-[#242634] focus:border-[#8278f8]/60 rounded-2xl text-sm text-white placeholder-[#686a7d] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#8278f8]/20 shadow-inner"
          />
          <button
            type="button"
            aria-label="Submit search"
            className="absolute right-3 text-[#7e8296] hover:text-white transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Controls & Profile */}
      <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4">
        {/* Action Badges Stack */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Bell Notifications */}
          <button
            onClick={() => onOpenNotifications('bell')}
            className="relative w-10 h-10 rounded-full bg-[#181922] hover:bg-[#20222e] border border-[#262835] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 group"
            title="Notifications"
          >
            <Bell className="w-4 h-4 transition-transform group-hover:rotate-12 text-[#9da0b5]" />
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#38bdf8] text-[#0b1329] font-bold text-[10px] rounded-full flex items-center justify-center shadow-md shadow-[#38bdf8]/30 ring-2 ring-[#0c0d12]">
              {unreadCounts.bell}
            </span>
          </button>

          {/* Chat Messages */}
          <button
            onClick={() => onOpenNotifications('chat')}
            className="relative w-10 h-10 rounded-full bg-[#181922] hover:bg-[#20222e] border border-[#262835] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 group"
            title="Messages"
          >
            <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110 text-[#9da0b5]" />
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#38bdf8] text-[#0b1329] font-bold text-[10px] rounded-full flex items-center justify-center shadow-md shadow-[#38bdf8]/30 ring-2 ring-[#0c0d12]">
              {unreadCounts.chat}
            </span>
          </button>

          {/* Gift / Perks */}
          <button
            onClick={() => onOpenNotifications('gift')}
            className="relative w-10 h-10 rounded-full bg-[#181922] hover:bg-[#20222e] border border-[#262835] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 group"
            title="Rewards & Gifts"
          >
            <Gift className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-[#9da0b5]" />
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#c084fc] text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md shadow-[#c084fc]/30 ring-2 ring-[#0c0d12]">
              {unreadCounts.gift}
            </span>
          </button>

          {/* Settings */}
          <button
            onClick={() => onOpenNotifications('settings')}
            className="relative w-10 h-10 rounded-full bg-[#181922] hover:bg-[#20222e] border border-[#262835] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 group"
            title="Settings"
          >
            <Settings className="w-4 h-4 transition-transform group-hover:rotate-45 text-[#9da0b5]" />
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#f87171] text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md shadow-[#f87171]/30 ring-2 ring-[#0c0d12]">
              {unreadCounts.settings}
            </span>
          </button>
        </div>

        {/* Profile Pill */}
        <div className="relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center gap-3 pl-2 sm:pl-3 pr-1 py-1 rounded-full hover:bg-[#181922] border border-transparent hover:border-[#262835] transition-all duration-200 group text-left"
          >
            <div className="hidden sm:block text-right leading-tight">
              <span className="text-xs text-[#808298]">Hello, </span>
              <span className="text-xs font-semibold text-white tracking-wide">Samantha</span>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Samantha"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#f59e0b] ring-offset-2 ring-offset-[#0c0d12] shadow-md group-hover:ring-[#fbbf24] transition-all"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0c0d12] rounded-full"></span>
            </div>
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {profileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-56 bg-[#181922] border border-[#2b2d3d] rounded-2xl p-2 shadow-2xl shadow-black/70 z-50 backdrop-blur-xl"
              >
                <div className="p-3 border-b border-[#242635]">
                  <p className="text-xs font-semibold text-white">Samantha Wright</p>
                  <p className="text-[11px] text-[#7d8096]">samantha.w@designlab.io</p>
                  <div className="mt-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#222432] text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Status: {userStatus}</span>
                  </div>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => { setUserStatus('Available'); setProfileMenuOpen(false); }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#222432] rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-gray-400" /> Account Settings
                    </span>
                    {userStatus === 'Available' && <Check className="w-3 h-3 text-[#8278f8]" />}
                  </button>
                  <button
                    onClick={() => setProfileMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#222432] rounded-lg transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5 text-gray-400" /> Security & Privacy
                  </button>
                </div>

                <div className="pt-1 border-t border-[#242635]">
                  <button
                    onClick={() => setProfileMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" /> Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
