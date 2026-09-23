import React, { useState } from 'react';
import { Home, Calendar, Mail, TrendingUp, LogOut } from 'lucide-react';

export default function Sidebar({ activeTab = 'home', onTabChange }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const navItems = [
    { id: 'home', icon: Home, label: 'Dashboard' },
    { id: 'calendar', icon: Calendar, label: 'Schedule' },
    { id: 'messages', icon: Mail, label: 'Messages' },
    { id: 'analytics', icon: TrendingUp, label: 'Performance' },
  ];

  const handleSelect = (id) => {
    setCurrentTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <aside className="w-16 sm:w-18 flex flex-col items-center py-4 bg-[#0c0d12] rounded-[36px] border border-[#1c1e28] shadow-2xl shrink-0">
      {/* Top Iris Aperture Logo Emblem */}
      <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border border-[#9c7a5c]/40 shadow-lg shadow-[#9c7a5c]/20 mb-6 group cursor-pointer">
        <img
          src="/assets/iris-logo.jpg"
          alt="Drank Iris Emblem"
          className="w-full h-full rounded-full object-cover group-hover:rotate-45 transition-transform duration-500"
        />
      </div>

      {/* Main Navigation Stack */}
      <nav className="flex flex-col items-center gap-3.5 flex-1 w-full px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <div key={item.id} className="relative group">
              <button
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-label={item.label}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#181a24] text-white border-[#34374a] shadow-lg shadow-black/40 scale-105 ring-1 ring-white/10'
                    : 'bg-[#101117] text-[#6d7085] hover:text-white hover:bg-[#161822] border-[#1d1f2a]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>

              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-[#1a1c27] text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 shadow-xl border border-[#27293b] z-50">
                {item.label}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Bottom LogOut Button */}
      <div className="relative group mt-auto pt-4 border-t border-[#1a1b26] w-full flex justify-center">
        <button
          type="button"
          onClick={() => alert('Logged out securely.')}
          aria-label="Log Out"
          className="w-11 h-11 rounded-full bg-[#101117] hover:bg-[#201518] text-[#6d7085] hover:text-rose-400 border border-[#1d1f2a] hover:border-rose-500/30 flex items-center justify-center transition-all duration-200"
        >
          <LogOut className="w-4 h-4 rotate-180" />
        </button>
        <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-[#1a1c27] text-rose-300 text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 shadow-xl border border-[#27293b] z-50">
          Sign Out
        </div>
      </div>
    </aside>
  );
}
