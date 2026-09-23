import React from 'react';
import {
  Inbox,
  Star,
  Send,
  FileText,
  Ban,
  Trash2,
  Folder,
  Plus,
  MoreHorizontal,
  ChevronDown,
} from 'lucide-react';
import { CURRENT_USER, PRIMARY_NAV, FOLDERS, LABELS } from '../data/emailData';

const iconMap = {
  Inbox: Inbox,
  Star: Star,
  Send: Send,
  FileText: FileText,
  Ban: Ban,
  Trash2: Trash2,
};

export default function SidebarNav({ activeNav, onSelectNav, activeLabel, onSelectLabel }) {
  return (
    <aside className="w-60 bg-[#1d1f24] text-white flex flex-col justify-between p-4 border-r border-white/5 select-none shrink-0 h-full overflow-y-auto">
      <div>
        {/* User Profile Card */}
        <div className="flex items-center gap-3 p-2 mb-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
          <div className="relative">
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1d1f24]" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-bold text-white truncate group-hover:text-[#a7a7fc] transition-colors">
              {CURRENT_USER.name}
            </h4>
            <p className="text-[10px] text-gray-400 truncate">{CURRENT_USER.email}</p>
          </div>
        </div>

        {/* Primary Navigation */}
        <div className="space-y-1 mb-7">
          {PRIMARY_NAV.map((item) => {
            const IconComponent = iconMap[item.icon] || Inbox;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onSelectNav(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#a7a7fc] text-gray-950 font-bold shadow-md shadow-purple-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-gray-950' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                <span className={`text-[11px] font-bold ${isActive ? 'text-gray-950' : 'text-gray-500'}`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Folders Section */}
        <div className="mb-7">
          <div className="flex items-center justify-between px-3 mb-2 text-gray-400">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              <span>Folders</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">
                <Plus className="w-3 h-3" />
              </button>
              <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">
                <MoreHorizontal className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="space-y-0.5">
            {FOLDERS.map((folder) => (
              <button
                key={folder.id}
                onClick={() => onSelectNav(folder.id)}
                className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Folder className="w-3.5 h-3.5 text-gray-500" />
                  <span>{folder.label}</span>
                </div>
                <span className="text-[11px] text-gray-500">{folder.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Labels Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2 text-gray-400">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              <span>Labels</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">
                <Plus className="w-3 h-3" />
              </button>
              <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">
                <MoreHorizontal className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="space-y-0.5">
            {LABELS.map((lbl) => (
              <button
                key={lbl.id}
                onClick={() => onSelectLabel(lbl.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeLabel === lbl.id
                    ? 'bg-white/10 text-white font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: lbl.color }}
                  />
                  <span>{lbl.label}</span>
                </div>
                <span className="text-[11px] text-gray-500">{lbl.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
