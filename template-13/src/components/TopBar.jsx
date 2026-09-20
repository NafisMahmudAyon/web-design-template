import React from 'react';
import {
  Calendar,
  Mail,
  Bell,
  ChevronDown,
  MoreHorizontal,
  Plus
} from 'lucide-react';

export default function TopBar({ onOpenAddDoctor, onOpenMessages }) {
  return (
    <header className="w-full bg-white border-b border-slate-100 px-7 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20 shadow-[0_1px_4px_rgba(0,0,0,0.015)]">
      {/* Left: Page Title & Date Range Indicator */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-display">
          Doctor Profile
        </h1>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-xs font-medium text-slate-600">
          <Calendar size={14} className="text-slate-400" />
          <span>Last Update: Jan 2024-Oct 2024</span>
        </div>
      </div>

      {/* Right: Quick Action Icons & Add Doctor Button */}
      <div className="flex items-center gap-3">
        {/* Messages Button */}
        <button
          onClick={onOpenMessages}
          className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors relative"
          title="Messages"
        >
          <Mail size={17} />
        </button>

        {/* Notifications Button */}
        <button
          className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors relative"
          title="Notifications"
        >
          <Bell size={17} />
          {/* Green notification indicator */}
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
        </button>

        {/* Profile Avatar Pill */}
        <div className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition-colors">
          <img
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120"
            alt="Doctor profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <ChevronDown size={14} className="text-slate-400" />
        </div>

        {/* More Options */}
        <button
          className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
          title="More options"
        >
          <MoreHorizontal size={17} />
        </button>

        {/* + Add Doctor Primary Button */}
        <button
          onClick={onOpenAddDoctor}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus size={15} />
          <span>Add doctor</span>
        </button>
      </div>
    </header>
  );
}
