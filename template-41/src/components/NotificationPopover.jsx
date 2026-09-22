import React from 'react';
import { X, Bell, Check } from 'lucide-react';

export default function NotificationPopover({ isOpen, onClose, notifications, onMarkAllRead }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-4 sm:right-10 z-50 w-80 sm:w-96 bg-[#12151F] rounded-3xl shadow-2xl border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-indigo-400" />
          <h3 className="text-xs font-bold text-white">Notifications</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMarkAllRead}
            className="text-[10px] font-semibold text-indigo-400 hover:text-indigo-300 transition"
          >
            Mark all read
          </button>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-h-72 overflow-y-auto divide-y divide-white/5">
        {notifications.map((notif) => (
          <div key={notif.id} className="p-3.5 hover:bg-white/5 transition text-xs">
            <div className="flex items-start justify-between gap-2">
              <div className="font-semibold text-white leading-snug">
                {notif.title}
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">{notif.time}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {notif.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
