import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Home, 
  BarChart2, 
  Layers, 
  CreditCard, 
  Repeat, 
  Flag, 
  Link2, 
  FlaskConical, 
  ChevronDown,
  LogOut,
  Sparkles
} from 'lucide-react';

export default function SidebarNav({ activeTab, setActiveTab, onOpenProfile }) {
  const [expandedItems, setExpandedItems] = useState({ overview: true, analytics: false, services: false, campaigns: false });

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const navList = [
    { id: 'overview', label: 'Overview', icon: Home, hasSub: true },
    { id: 'analytics', label: 'Analytics', icon: BarChart2, hasSub: true },
    { id: 'services', label: 'Services', icon: Layers, hasSub: true },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'subscriptions', label: 'Subscriptions', icon: Repeat },
    { id: 'campaigns', label: 'Campaigns', icon: Flag, hasSub: true },
    { id: 'integrations', label: 'Integrations', icon: Link2 },
    { id: 'experiments', label: 'Experiments', icon: FlaskConical },
  ];

  return (
    <aside className="w-full lg:w-[260px] flex flex-col justify-between p-4 bg-[#141518] rounded-[28px] border border-white/10 shrink-0">
      
      <div>
        {/* Brand Logo & Header */}
        <div className="flex items-center gap-3 px-3 py-3 mb-4">
          <img 
            src="/assets/kortex_brand_logo.png" 
            alt="Kortex Logo" 
            className="w-8 h-8 rounded-xl object-cover shadow-sm ring-1 ring-white/20"
          />
          <span className="font-display font-extrabold text-lg text-white tracking-tight">KORTEX</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5 px-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1c1e22] text-xs text-white placeholder-gray-500 py-2.5 pl-10 pr-3 rounded-xl border border-white/5 focus:border-white/20 focus:outline-none transition-colors"
          />
        </div>

        {/* Navigation Links List */}
        <nav className="flex flex-col gap-1">
          {navList.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div key={item.id}>
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.hasSub) toggleExpand(item.id);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-white/10 text-white shadow-sm border border-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#00e676]' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.hasSub && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      expandedItems[item.id] ? 'rotate-180 text-white' : 'text-gray-500'
                    }`} />
                  )}
                </motion.button>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Profile Card (Mason Blake) */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        onClick={onOpenProfile}
        className="mt-6 p-3 rounded-2xl bg-[#1c1e22] border border-white/10 flex items-center justify-between cursor-pointer group shadow-sm"
      >
        <div className="flex items-center gap-3 min-w-0">
          <img 
            src="/assets/mason_blake_avatar.png" 
            alt="Mason Blake" 
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white truncate leading-tight group-hover:text-[#00e676] transition-colors">
              Mason Blake
            </h4>
            <p className="text-[10px] text-gray-400 truncate">contact@creative.com</p>
          </div>
        </div>

        <button className="text-gray-400 hover:text-white p-1">
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </aside>
  );
}
