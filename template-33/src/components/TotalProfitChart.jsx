import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { monthlyProfitData } from '../data/mockAnalyticsData';

export default function TotalProfitChart() {
  const [activeMonthIdx, setActiveMonthIdx] = useState(4); // May is index 4

  const activeData = monthlyProfitData[activeMonthIdx];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header: Title, Channels, & Options */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-[#141814] tracking-tight">
            Total Profit Overview
          </h2>
          <button 
            title="Chart options"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Amount, Badges & Channel Integrations */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight">
                $98,643.24
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#B4EE58] text-[#141814] text-xs font-bold flex items-center gap-0.5">
                +8.4%
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs font-semibold text-[#6C736A] mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#CBD0C8]"></span>
                <span>Total Sales</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F16522]"></span>
                <span>Total Revenue</span>
              </div>
            </div>
          </div>

          {/* Connected Channels (Shopify & Amazon) */}
          <div className="flex items-center gap-3">
            {/* Shopify */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-[#F4F5F2] border border-black/[0.03]">
              <div className="w-7 h-7 rounded-xl bg-[#95BF47]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#5E8E3E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.33 3.84c-.2-.05-.4.04-.48.24l-1.37 3.52-2.3-1.63c-.15-.1-.36-.08-.48.06l-4.14 4.88c-.1.12-.11.3-.02.43.08.13.25.19.4.14l1.62-.51-2.12 11.23c-.04.22.12.43.34.46.03 0 .07.01.1.01.19 0 .36-.14.39-.33l2.25-11.9 2.5 1.77c.1.07.22.1.34.08.12-.02.22-.09.28-.19l1.64-4.22 1.93 14.88c.03.22.22.38.44.38.02 0 .05 0 .07 0 .24-.03.41-.24.38-.48l-2.09-16.14c-.03-.2-.2-.36-.4-.4l-1.27-.18z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#141814] leading-tight">Shopify</p>
                <p className="text-[10px] text-gray-500 font-medium">206 Payment</p>
              </div>
            </div>

            {/* Amazon */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-[#F4F5F2] border border-black/[0.03]">
              <div className="w-7 h-7 rounded-xl bg-[#FF9900]/15 flex items-center justify-center flex-shrink-0 font-extrabold text-[#D97706] text-xs">
                a
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#141814] leading-tight">Amazon</p>
                <p className="text-[10px] text-gray-500 font-medium">400 Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar Chart Section */}
      <div className="relative mt-8 pt-8 pb-2">
        
        {/* Y-Axis Grid Guidelines & Labels */}
        <div className="absolute inset-x-0 top-8 bottom-8 flex flex-col justify-between pointer-events-none text-[10px] font-semibold text-gray-400">
          {[
            { label: '100k', val: '100%' },
            { label: '80k', val: '80%' },
            { label: '60k', val: '60%' },
            { label: '40k', val: '40%' },
            { label: '20k', val: '20%' },
            { label: '0k', val: '0%' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 w-full">
              <span className="w-7 text-right flex-shrink-0">{item.label}</span>
              <div className="w-full border-b border-dashed border-gray-100" />
            </div>
          ))}
        </div>

        {/* 12 Months Bars Track */}
        <div className="relative pl-9 pr-2 h-44 flex items-end justify-between gap-1.5 sm:gap-2 z-10">
          {monthlyProfitData.map((data, idx) => {
            const isSelected = activeMonthIdx === idx;

            return (
              <div
                key={data.month}
                onMouseEnter={() => setActiveMonthIdx(idx)}
                onClick={() => setActiveMonthIdx(idx)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
              >
                {/* Floating Active Month Tooltip */}
                {isSelected && (
                  <motion.div
                    layoutId="profitTooltip"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="absolute -top-14 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-popover border border-black/[0.06] text-center min-w-[95px] pointer-events-none"
                  >
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {data.month} 2026
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-gray-700 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD0C8]"></span>
                      <span>{data.rawSales}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-[#F16522]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F16522]"></span>
                      <span>{data.rawRev}</span>
                    </div>

                    {/* Small triangle arrow at bottom of tooltip */}
                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-black/[0.06]" />
                  </motion.div>
                )}

                {/* Bars Container */}
                <div className="w-full flex items-end justify-center gap-1 h-full pb-1">
                  
                  {/* Total Sales Bar (Grey / Hatched) */}
                  <div
                    style={{ height: `${data.sales}%` }}
                    className={`w-3 sm:w-3.5 rounded-t-md transition-all ${
                      isSelected 
                        ? 'bg-[#D6DDD1]' 
                        : 'chart-bar-hatched hover:opacity-80'
                    }`}
                  />

                  {/* Total Revenue Bar (Orange if selected, hatched otherwise) */}
                  <div className="relative flex flex-col items-center" style={{ height: `${data.revenue}%` }}>
                    {isSelected && (
                      <div className="absolute -top-3 w-4 h-2.5 rounded-full border-2 border-[#F16522] bg-white flex items-center justify-center z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F16522]"></span>
                      </div>
                    )}
                    <div
                      className={`w-3 sm:w-3.5 h-full rounded-t-md transition-all ${
                        isSelected 
                          ? 'bg-[#F16522] shadow-sm' 
                          : 'chart-bar-hatched-dark hover:opacity-80'
                      }`}
                    />
                  </div>
                </div>

                {/* X-axis Month Label */}
                <span className={`text-[11px] font-semibold mt-2 transition-colors ${
                  isSelected ? 'text-[#141814] font-extrabold' : 'text-gray-400 group-hover:text-gray-700'
                }`}>
                  {data.month}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
