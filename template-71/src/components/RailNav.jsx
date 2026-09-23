import React from 'react';
import { Bell, Plus, HelpCircle, Settings } from 'lucide-react';
import { WORKSPACE_CONTACTS } from '../data/emailData';

export default function RailNav({ activeWorkspace, onSelectWorkspace, onOpenSettings }) {
  return (
    <aside className="w-16 bg-[#18191d] flex flex-col items-center justify-between py-5 border-r border-white/5 select-none shrink-0 h-full">
      {/* Top: Brand Squircle & Notifications */}
      <div className="flex flex-col items-center gap-4">
        {/* Yellow brand squircle */}
        <div className="w-10 h-10 rounded-2xl bg-[#fbe871] flex items-center justify-center shadow-lg shadow-yellow-500/10 cursor-pointer hover:scale-105 transition-transform">
          <span className="font-black text-gray-950 text-xl tracking-tighter">N</span>
        </div>

        {/* Notification Bell */}
        <button
          className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#fbe871]" />
        </button>
      </div>

      {/* Middle: Workspaces & Avatars */}
      <div className="flex flex-col items-center gap-3.5 my-auto">
        {WORKSPACE_CONTACTS.map((contact) => (
          <div key={contact.id} className="relative group cursor-pointer">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-[#a7a7fc] transition-all"
            />
            {contact.online && (
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#18191d]" />
            )}
          </div>
        ))}

        {/* Add Workspace Button */}
        <button
          className="w-10 h-10 rounded-2xl border-2 border-dashed border-white/20 hover:border-white/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Add Workspace"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom: Help & Settings */}
      <div className="flex flex-col items-center gap-3">
        <button
          className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Help & Documentation"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenSettings}
          className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
