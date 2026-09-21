import React from 'react';
import {
  LayoutDashboard,
  PieChart,
  Wallet,
  LineChart,
  Sparkles,
  Settings,
  LogOut,
  Layers,
  Globe
} from 'lucide-react';

export default function Sidebar({ activeNav, setActiveNav, onOpenAskAI }) {
  const mainLinks = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'holdings', icon: PieChart, label: 'Holdings' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'analytics', icon: LineChart, label: 'Analytics' },
    { id: 'markets', icon: Globe, label: 'Markets' },
  ];

  return (
    <aside className="w-16 sm:w-20 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-6 h-screen sticky top-0 z-30">
      
      {/* Top Logo */}
      <div className="flex flex-col items-center space-y-8">
        <a href="#" className="w-10 h-10 rounded-2xl bg-[#090d16] text-[#b0f92b] flex items-center justify-center font-black text-xl shadow-md hover:scale-105 transition-transform">
          ⚡
        </a>

        {/* Navigation Rail Links */}
        <nav className="flex flex-col space-y-3">
          {mainLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeNav === link.id;

            return (
              <button
                key={link.id}
                onClick={() => setActiveNav(link.id)}
                title={link.label}
                className={`p-3 rounded-2xl transition-all relative ${
                  isActive
                    ? 'bg-[#090d16] text-white shadow-md'
                    : 'text-gray-400 hover:text-[#090d16] hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#090d16] rounded-r-full"></span>
                )}
              </button>
            );
          })}

          {/* AI Sparkles Tool Button */}
          <button
            onClick={onOpenAskAI}
            title="Ask AI Assistant"
            className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md hover:scale-105 transition-transform"
          >
            <Sparkles className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col space-y-3">
        <button
          title="Settings"
          className="p-3 rounded-2xl text-gray-400 hover:text-[#090d16] hover:bg-gray-100 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>

        <button
          title="Logout"
          className="p-3 rounded-2xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>

    </aside>
  );
}
