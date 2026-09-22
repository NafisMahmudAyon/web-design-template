import React, { useState } from 'react';
import {
  LayoutGrid,
  Calendar,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  Sliders,
  Bell,
} from 'lucide-react';

export default function SidebarNav({ activeTab, onTabChange, user }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'clock', icon: Clock, label: 'Timer' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'documents', icon: FileText, label: 'Documents' },
  ];

  return (
    <aside className="w-16 sm:w-20 flex flex-col items-center justify-between py-6 shrink-0 z-20">
      {/* Top Stylized V Logo */}
      <div className="w-10 h-10 flex items-center justify-center select-none cursor-pointer">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 drop-shadow-[0_0_10px_rgba(43,133,255,0.6)]"
        >
          <path
            d="M8 12L20 32L32 12"
            stroke="#2B85FF"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="32" r="3" fill="#2B85FF" />
        </svg>
      </div>

      {/* Main Navigation Group (Pill Capsule) */}
      <div className="flex flex-col items-center gap-3.5 p-2 rounded-full bg-[#18212F] border border-[#283549] shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              title={item.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#2B85FF] text-white shadow-[0_0_15px_rgba(43,133,255,0.6)] scale-105'
                  : 'text-[#8B9CB2] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Bottom Utility Items & Avatar */}
      <div className="flex flex-col items-center gap-3.5">
        <button
          title="Settings"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#8B9CB2] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <Settings className="w-5 h-5" />
        </button>

        <button
          title="Preferences"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#8B9CB2] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <Sliders className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#283549] group-hover:border-[#2B85FF] transition-colors shadow-md">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#151D2A] rounded-full" />
        </div>
      </div>
    </aside>
  );
}
