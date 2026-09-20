import React from 'react';
import { Search, Settings, Bell } from 'lucide-react';

export default function TopHeader({ onOpenSettings, onOpenNotifications }) {
  return (
    <header className="w-full bg-[#121417] px-8 py-5 flex items-center justify-between gap-4 border-b border-[#1F242C] z-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white tracking-tight font-display">
        Dashboard
      </h1>

      {/* Right Controls: Search + Icons + Avatar */}
      <div className="flex items-center gap-3.5">
        {/* Search Input Bar */}
        <div className="relative flex items-center bg-[#191C21] border border-[#262C34] rounded-full px-3.5 py-1.5 w-64 text-xs text-slate-400 focus-within:border-emerald-500/60 focus-within:bg-[#1E2228] transition-all">
          <Search size={14} className="text-slate-500 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none w-full"
          />
        </div>

        {/* Settings Icon */}
        <button
          onClick={onOpenSettings}
          className="w-9 h-9 rounded-full bg-[#191C21] border border-[#262C34] hover:border-slate-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
          title="Dashboard Settings"
        >
          <Settings size={15} />
        </button>

        {/* Notifications Icon */}
        <button
          onClick={onOpenNotifications}
          className="w-9 h-9 rounded-full bg-[#191C21] border border-[#262C34] hover:border-slate-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors relative"
          title="Notifications"
        >
          <Bell size={15} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </button>

        {/* User Profile Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-emerald-500/50 cursor-pointer hover:ring-emerald-400 transition-all flex-shrink-0 ml-1">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
