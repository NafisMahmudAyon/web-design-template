import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Plus, Sparkles, ChevronDown } from 'lucide-react';

export default function DashboardHeader({ onOpenAddRecord, onOpenNotifications, unreadCount }) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-2">
      {/* Welcome Greeting */}
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight flex items-center gap-2">
          Welcome Abby! 👋
        </h1>
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        {/* Search Bar */}
        <div className="relative hidden md:block w-48 lg:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1c1e22] text-xs text-white placeholder-gray-500 py-2.5 pl-10 pr-8 rounded-full border border-white/10 focus:border-white/20 focus:outline-none transition-colors"
          />
          <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Notification Bell Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenNotifications}
          className="w-10 h-10 rounded-full bg-[#1c1e22] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center relative shadow-sm"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00e676] ring-2 ring-[#0f1012] animate-pulse" />
          )}
        </motion.button>

        {/* + Add Record Bright Emerald Button */}
        <motion.button
          whileHover={{ scale: 1.05, shadow: '0 0 25px rgba(0, 230, 118, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenAddRecord}
          className="bg-[#00e676] hover:bg-[#00c865] text-gray-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Record</span>
        </motion.button>
      </div>
    </header>
  );
}
