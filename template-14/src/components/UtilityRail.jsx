import React from 'react';
import {
  Compass,
  Briefcase,
  BarChart3,
  Coins,
  Activity,
  Settings,
  Clock,
  FileText,
  Eye,
  Sparkles
} from 'lucide-react';

export default function UtilityRail({ activeIcon = 'chart', onSelectIcon }) {
  return (
    <aside className="w-16 bg-[#0E1013] border-r border-[#20252C] flex flex-col items-center justify-between py-5 flex-shrink-0 select-none z-30">
      {/* Top Logo Mark */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 mb-8 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <div className="w-full h-full bg-[#0E1013] rounded-[14px] flex items-center justify-center text-emerald-400">
            {/* Custom 8-petaled asterisk / starburst logo */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
            </svg>
          </div>
        </div>

        {/* Top Navigation Group */}
        <div className="space-y-4">
          <button
            onClick={() => onSelectIcon?.('compass')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              activeIcon === 'compass'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24]'
            }`}
            title="Explore"
          >
            <Compass size={19} />
          </button>

          <button
            onClick={() => onSelectIcon?.('portfolio')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              activeIcon === 'portfolio'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24]'
            }`}
            title="Portfolio"
          >
            <Briefcase size={19} />
          </button>

          <button
            onClick={() => onSelectIcon?.('chart')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              activeIcon === 'chart'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24]'
            }`}
            title="Analytics"
          >
            <BarChart3 size={19} />
          </button>

          <button
            onClick={() => onSelectIcon?.('funds')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              activeIcon === 'funds'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24]'
            }`}
            title="Funds"
          >
            <Coins size={19} />
          </button>
        </div>
      </div>

      {/* Bottom Navigation Group */}
      <div className="space-y-4 pt-4 border-t border-[#1F242B] w-full flex flex-col items-center">
        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24] transition-all"
          title="Live Activity"
        >
          <Activity size={19} />
        </button>

        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24] transition-all"
          title="Settings"
        >
          <Settings size={19} />
        </button>

        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24] transition-all"
          title="Order History"
        >
          <Clock size={19} />
        </button>

        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24] transition-all relative"
          title="News & Insights"
        >
          <FileText size={19} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#0E1013]" />
        </button>

        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-[#1A1E24] transition-all"
          title="Watchlist"
        >
          <Eye size={19} />
        </button>
      </div>
    </aside>
  );
}
