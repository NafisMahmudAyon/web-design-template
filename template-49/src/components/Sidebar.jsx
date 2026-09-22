import React, { useState } from 'react';
import { 
  LayoutGrid, 
  BarChart2, 
  CreditCard, 
  FileText, 
  Repeat, 
  ShieldCheck, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Crown, 
  Sparkles 
} from 'lucide-react';
import { SIDEBAR_NAV } from '../data/oripioFinData';

export const Sidebar = ({ activeTab, onSelectTab, onOpenUpgrade }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderIcon = (iconName, isActive) => {
    const props = { className: `w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'}` };
    switch (iconName) {
      case 'layout-grid': return <LayoutGrid {...props} />;
      case 'bar-chart-2': return <BarChart2 {...props} />;
      case 'credit-card': return <CreditCard {...props} />;
      case 'file-text': return <FileText {...props} />;
      case 'repeat': return <Repeat {...props} />;
      case 'shield-check': return <ShieldCheck {...props} />;
      case 'message-square': return <MessageSquare {...props} />;
      case 'settings': return <Settings {...props} />;
      case 'help-circle': return <HelpCircle {...props} />;
      case 'log-out': return <LogOut {...props} />;
      default: return <LayoutGrid {...props} />;
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between p-5 shrink-0 min-h-screen select-none">
      <div>
        {/* Brand Logo Header */}
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.6 8 12 11.8 5.4 8 12 4.2zm-7 5l6 3.5v7.2L5 16.4V9.2zm8 10.7v-7.2l6-3.5v7.2l-6 3.5z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            OripioFin
          </span>
        </div>

        {/* Search Bar with ⌘ K badge */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full py-2 pl-9 pr-12 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
          <div className="absolute right-2.5 top-2.5 px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-400">
            ⌘ K
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="mb-6">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Main Menu
          </div>
          <nav className="space-y-1">
            {SIDEBAR_NAV.mainMenu.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {renderIcon(item.icon, isActive)}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Features
          </div>
          <nav className="space-y-1">
            {SIDEBAR_NAV.features.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {renderIcon(item.icon, isActive)}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* General Section */}
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            General
          </div>
          <nav className="space-y-1">
            {SIDEBAR_NAV.general.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all group"
              >
                {renderIcon(item.icon, false)}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Upgrade Pro Card */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-slate-50 to-white border border-emerald-100/80 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-slate-900">Upgrade Pro!</span>
          <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        </div>
        <p className="text-[11px] text-slate-500 mb-3 leading-snug">
          Higher productivity with better organization
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenUpgrade}
            className="flex-1 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-bold shadow-sm transition-all"
          >
            Upgrade
          </button>
          <button
            onClick={onOpenUpgrade}
            className="px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-[11px] font-semibold transition-colors"
          >
            Learn more
          </button>
        </div>
      </div>
    </aside>
  );
};
