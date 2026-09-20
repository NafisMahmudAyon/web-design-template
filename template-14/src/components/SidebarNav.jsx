import React, { useState } from 'react';
import { Users2, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SidebarNav({ activeItem = 'Protfolio', onSelectItem }) {
  const [activeTab, setActiveTab] = useState('My account');

  const mainLinks = [
    { id: 'active-stocks', label: 'Active Stocks' },
    { id: 'dividend', label: 'Dividend Insights' },
    { id: 'trending', label: 'Trending Stocks Chat' },
    { id: 'hybrid', label: 'Hybrid Funds' },
  ];

  const portfolioSubLinks = [
    { id: 'settings', label: 'Settings' },
    { id: 'history', label: 'History' },
    { id: 'news', label: 'News', hasNewBadge: true },
    { id: 'feedback', label: 'Feedback' },
  ];

  return (
    <aside className="w-60 bg-[#16191D] border-r border-[#22272F] flex flex-col justify-between py-6 px-5 flex-shrink-0 select-none z-20">
      <div className="space-y-7">
        {/* Brand Name */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight font-display">
            MetaMint
          </h2>
        </div>

        {/* Tabs: My account vs Share with */}
        <div className="flex items-center gap-6 border-b border-[#262C35] pb-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('My account')}
            className={`relative pb-2 transition-colors ${
              activeTab === 'My account'
                ? 'text-white'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            My account
            {activeTab === 'My account' && (
              <motion.div
                layoutId="activeSidebarTab"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white rounded-full"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('Share with')}
            className={`relative pb-2 transition-colors ${
              activeTab === 'Share with'
                ? 'text-white'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Share with
            {activeTab === 'Share with' && (
              <motion.div
                layoutId="activeSidebarTab"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white rounded-full"
              />
            )}
          </button>
        </div>

        {/* Primary Links */}
        <nav className="space-y-3.5">
          {mainLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectItem?.(link.id)}
              className="w-full text-left text-xs font-medium text-slate-400 hover:text-white transition-colors py-1 block"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Account Section with Tree Hierarchy */}
        <div>
          {/* Account Category Header */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-3">
            <Users2 size={13} className="text-slate-500" />
            <span>ACCOUNT</span>
          </div>

          {/* Portfolio Container Card */}
          <div className="rounded-2xl bg-[#1B1F24] border border-[#262C34] p-3.5">
            <button
              className="text-xs font-semibold text-white mb-3 block text-left hover:text-emerald-400 transition-colors"
            >
              Protfolio
            </button>

            {/* Tree Branch Lines */}
            <div className="relative pl-3.5 space-y-2.5 border-l border-[#2E3540] ml-1.5">
              {portfolioSubLinks.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onSelectItem?.(sub.id)}
                  className="w-full flex items-center justify-between text-xs font-medium text-slate-400 hover:text-white transition-colors group text-left"
                >
                  <span className="relative flex items-center gap-2">
                    <span className="w-1.5 h-[1px] bg-[#2E3540] -ml-[18px] group-hover:bg-slate-300 transition-colors" />
                    {sub.label}
                  </span>

                  {sub.hasNewBadge && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.2 rounded-full shadow-xs">
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
