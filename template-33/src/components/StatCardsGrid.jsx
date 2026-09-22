import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, RotateCcw, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { kpiStatsData } from '../data/mockAnalyticsData';

export default function StatCardsGrid({ onSelectStat }) {
  const [activeCardId, setActiveCardId] = useState(null);

  const getIcon = (type) => {
    switch (type) {
      case 'trending-up':
        return <TrendingUp className="w-4 h-4 text-[#141814]" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#141814]" />;
      case 'dollar-sign':
        return (
          <div className="w-5 h-5 rounded-full border border-black/80 flex items-center justify-center font-bold text-xs">
            $
          </div>
        );
      case 'rotate-ccw':
        return <RotateCcw className="w-4 h-4 text-[#141814]" />;
      default:
        return <TrendingUp className="w-4 h-4 text-[#141814]" />;
    }
  };

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6"
      onMouseLeave={() => setActiveCardId(null)}
    >
      {kpiStatsData.map((stat) => {
        const isActive = activeCardId === stat.id;
        const isPositive = stat.changeType === 'increase';

        return (
          <motion.div
            key={stat.id}
            onMouseEnter={() => setActiveCardId(stat.id)}
            onClick={() => onSelectStat && onSelectStat(stat)}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className={`relative h-[165px] rounded-3xl p-5 bg-white shadow-card border transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
              isActive 
                ? 'border-black/20 ring-2 ring-black/5 shadow-card-hover' 
                : 'border-black/[0.04]'
            }`}
          >
            {/* Top Row: Label & Icon */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6C736A]">
                {stat.title}
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#F4F5F2] flex items-center justify-center text-[#141814]">
                {getIcon(stat.icon)}
              </div>
            </div>

            {/* Big Stat Value */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight">
                {stat.value}
              </span>
            </div>

            {/* Bottom Row: Change Metric & View Details */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-1 font-semibold">
                <span className={isPositive ? 'text-[#16A34A]' : 'text-rose-500'}>
                  {isPositive ? `▲ ${stat.change}` : `▼ ${stat.change}`}
                </span>
                <span className="text-[#6C736A] text-[11px] font-medium">
                  {stat.period}
                </span>
              </div>

              <div className={`flex items-center gap-0.5 text-[11px] font-semibold transition-colors ${
                isActive ? 'text-[#141814]' : 'text-[#8A9288]'
              }`}>
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
}
