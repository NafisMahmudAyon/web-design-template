import React, { useState } from 'react';
import { Search, Bell, X, CheckCircle } from 'lucide-react';

export default function CalendarHeader({ user, searchQuery, onSearchChange }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Job Interview in 45 minutes', time: '10:00 AM' },
    { id: 2, title: 'Julia K shared a roadmap doc', time: 'Yesterday' },
  ]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#283549]/60">
      {/* Greeting Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {user.greeting}
        </h1>
        <p className="text-xs sm:text-sm text-[#8B9CB2] mt-0.5 font-medium">
          {user.subtitle}
        </p>
      </div>

      {/* Right Search Bar & Notification Trigger */}
      <div className="flex items-center gap-3">
        {/* Search Capsule */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8B9CB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for some activities"
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[#18212F] border border-[#283549] text-xs text-white placeholder-[#8B9CB2]/70 focus:outline-none focus:border-[#2B85FF] focus:ring-1 focus:ring-[#2B85FF] transition-all"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="w-9 h-9 rounded-full bg-[#18212F] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors relative cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {notifications.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#2B85FF] shadow-[0_0_8px_#2B85FF]" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 p-3 rounded-2xl bg-[#1C2535] border border-[#283549] shadow-2xl z-40 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#283549] font-bold text-white">
                <span>Notifications</span>
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-2 pt-2">
                {notifications.map((n) => (
                  <div key={n.id} className="p-2 rounded-lg bg-[#151D2A] flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2B85FF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{n.title}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
