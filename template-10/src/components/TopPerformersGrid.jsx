import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function TopPerformersGrid() {
  const [activeTab, setActiveTab] = useState('Accounts');

  const performers = [
    {
      id: 'technova',
      name: 'TechNova Inc',
      logo: '/assets/technova_logo.png',
      users: '652 active users',
      mrr: '$3.2K MRR',
      growth: '+3%',
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      logo: '/assets/google_ads_logo.png',
      users: '652 active users',
      mrr: '$3.2K MRR',
      growth: '+3%',
    }
  ];

  const filterTabs = ['Users', 'Accounts', 'Plans'];

  return (
    <section className="mt-6">
      {/* Top Header & Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-white font-display">Top Performers</h2>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-[#1c1e22] p-1 rounded-xl border border-white/5">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#282a30] text-white shadow-sm border border-white/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2 Performer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {performers.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3, borderColor: 'rgba(255, 255, 255, 0.15)' }}
            className="bg-[#17191d] rounded-2xl p-5 border border-white/10 flex flex-col justify-between shadow-sm transition-all group"
          >
            {/* Header info */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="w-9 h-9 rounded-xl object-cover ring-1 ring-white/10"
                />
                <h3 className="text-sm font-bold text-white font-display">{p.name}</h3>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 rounded-lg bg-[#252830] hover:bg-[#2e323d] text-xs font-semibold text-gray-200 border border-white/10 transition-colors"
                >
                  View Profile
                </motion.button>
                <button className="text-gray-500 hover:text-white p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metric Footer Row */}
            <div className="flex items-baseline justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="text-gray-400">
                  Metric <strong className="text-white font-extrabold ml-1">{p.users}</strong>
                </span>
                <span className="text-white font-extrabold text-sm">{p.mrr}</span>
              </div>

              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#00e676]/15 text-[#00e676] border border-[#00e676]/30">
                {p.growth}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
