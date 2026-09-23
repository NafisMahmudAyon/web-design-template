import React, { useState } from 'react';
import { Sun, Search, SlidersHorizontal, Bell, ChevronDown, Check, Shield, User, LogOut } from 'lucide-react';
import { CURRENT_USER } from '../data/drankData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ searchQuery, setSearchQuery, onOpenNotifications }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-2">
      {/* Left: Date & Weather */}
      <div className="flex items-center gap-4 select-none">
        <div>
          <p className="text-xs font-medium text-[#7d8095]">Wednesday, 25 Sep</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span className="text-sm font-bold text-white tracking-tight">27°C</span>
          </div>
        </div>
      </div>

      {/* Center: Search Input */}
      <div className="flex-1 max-w-xl mx-0 md:mx-4">
        <div className="relative flex items-center w-full">
          <Search className="absolute left-4 w-4 h-4 text-[#63667c] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here..."
            className="w-full h-10 pl-10 pr-10 bg-[#12131b] hover:bg-[#161722] focus:bg-[#151620] border border-[#20222f] focus:border-[#7ae2a4]/50 rounded-2xl text-xs text-white placeholder-[#5d6074] transition-all outline-none focus:ring-2 focus:ring-[#7ae2a4]/15"
          />
          <button
            type="button"
            aria-label="Filter search"
            className="absolute right-3.5 text-[#63667c] hover:text-white transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center justify-between md:justify-end gap-3 select-none">
        {/* Notification Bell */}
        <button
          type="button"
          onClick={onOpenNotifications}
          aria-label="Notifications"
          className="w-9 h-9 rounded-full bg-[#12131b] hover:bg-[#181a24] border border-[#20222f] text-[#85889e] hover:text-white flex items-center justify-center transition-all duration-150 active:scale-95"
        >
          <Bell className="w-4 h-4" />
        </button>

        {/* Noah Brooks HR Lead Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full hover:bg-[#14151f] transition-colors group"
          >
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-white leading-tight">{CURRENT_USER.name}</p>
              <p className="text-[10px] text-[#6b6e82] leading-tight">{CURRENT_USER.role}</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#6b6e82] group-hover:text-white transition-transform" />
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-52 bg-[#14151f] border border-[#252837] rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl"
              >
                <div className="px-3 py-2 border-b border-[#212330]">
                  <p className="text-xs font-semibold text-white">{CURRENT_USER.name}</p>
                  <p className="text-[10px] text-emerald-400 font-medium">HR Administrator</p>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => setProfileOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1e202d] rounded-lg transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-gray-400" /> My Profile
                  </button>
                  <button
                    onClick={() => setProfileOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1e202d] rounded-lg transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5 text-gray-400" /> Admin Controls
                  </button>
                </div>
                <div className="pt-1 border-t border-[#212330]">
                  <button
                    onClick={() => setProfileOpen(false)}
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
