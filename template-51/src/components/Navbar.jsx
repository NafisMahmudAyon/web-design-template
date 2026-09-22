import React from 'react';
import { Zap, Bell, Settings } from 'lucide-react';
import { NAV_TABS, USER_INFO } from '../data/boltshiftData';

export const Navbar = ({ activeTab, onSelectTab, onOpenSettings, onOpenNotifications }) => {
  return (
    <header className="w-full bg-white border-b border-slate-100/80 px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5E43F3] flex items-center justify-center text-white shadow-md shadow-[#5E43F3]/25">
            <Zap className="w-5 h-5 fill-white stroke-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            Boltshift
          </span>
        </div>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right User & Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="relative w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-600 transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* Settings Gear */}
          <button
            onClick={onOpenSettings}
            aria-label="Settings"
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-600 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-200/80">
            <img
              src={USER_INFO.avatar}
              alt={USER_INFO.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
            />
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">
                {USER_INFO.name}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight font-mono">
                {USER_INFO.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
