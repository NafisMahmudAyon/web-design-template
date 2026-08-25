import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ArrowUpRight, ArrowUp, RefreshCw, ChevronDown } from 'lucide-react';

export default function OverviewMetricsRow({ timeRange, setTimeRange }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const timeOptions = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'This Year'];

  const metrics = [
    {
      id: 'revenue',
      label: 'Total Revenue',
      value: '$1,200,00',
      badge: '+5%',
      badgeType: 'positive',
    },
    {
      id: 'customers',
      label: 'Active Customers',
      value: '8,500',
      badge: '+3%',
      badgeType: 'positive',
    },
    {
      id: 'orders',
      label: 'New Orders',
      value: '320',
      badge: null,
    },
    {
      id: 'churn',
      label: 'Churn Rate',
      value: '2.5%',
      badge: null,
      icon: ArrowUp,
    }
  ];

  return (
    <section className="mb-6">
      {/* Top Section Control Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-white font-display">Overview</h2>

        <div className="flex items-center gap-3">
          {/* Data Refreshed Status Pill */}
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c1e22] text-gray-400 hover:text-white border border-white/5 text-[11px] font-medium transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-[#00e676]' : ''}`} />
            <span>Data Refreshed</span>
          </button>

          {/* Time Range Dropdown Selector */}
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-[#1c1e22] text-xs font-semibold text-gray-300 hover:text-white py-1.5 pl-3.5 pr-8 rounded-xl border border-white/10 appearance-none focus:outline-none cursor-pointer"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#141518] text-white">
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 4 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -3, borderColor: 'rgba(255, 255, 255, 0.15)' }}
            className="bg-[#17191d] rounded-2xl p-5 border border-white/10 flex flex-col justify-between shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                {m.icon && <m.icon className="w-3.5 h-3.5 text-gray-300" />}
                {m.label}
              </span>
              <button className="text-gray-500 hover:text-white p-1">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl lg:text-3xl font-extrabold font-display text-white tracking-tight">
                {m.value}
              </span>

              {m.badge && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#00e676]/15 text-[#00e676] border border-[#00e676]/30">
                  {m.badge}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
