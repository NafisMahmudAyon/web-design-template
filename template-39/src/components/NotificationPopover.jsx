import React from 'react';
import { X, Check, Bell } from 'lucide-react';

export default function NotificationPopover({ 
  isOpen, 
  onClose, 
  notifications, 
  onMarkAllRead 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-blue-600" />
          <h3 className="text-xs font-bold text-slate-900">Notifications</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMarkAllRead}
            className="text-[10px] font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            Mark all read
          </button>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`p-3.5 hover:bg-slate-50 transition text-xs ${notif.unread ? 'bg-blue-50/40' : ''}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="font-semibold text-slate-800 leading-snug">
                {notif.title}
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">{notif.time}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 italic">
              {notif.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
