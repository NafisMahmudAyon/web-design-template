import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp } from 'lucide-react';
import { optimizeBudgetData } from '../data/catalxgData';

export const BudgetAnalyticsSection = () => {
  const [hoveredBar, setHoveredBar] = useState(2); // March active by default as in Figma

  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brandOrange text-xs font-bold uppercase tracking-wider mb-4">
            <span>{optimizeBudgetData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            {optimizeBudgetData.headline}
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg font-sans leading-relaxed">
            {optimizeBudgetData.subtitle}
          </p>
        </div>

        {/* 2 Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Credit Score Gauge Chart */}
          <div className="h-[430px] sm:h-[450px] rounded-3xl p-8 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-1">
                {optimizeBudgetData.creditScoreCard.title}
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                {optimizeBudgetData.creditScoreCard.subtitle}
              </p>
            </div>

            {/* Gauge SVG Graphic */}
            <div className="relative flex flex-col items-center justify-center my-auto pt-4">
              <svg className="w-72 h-40" viewBox="0 0 280 150">
                {/* Background Track */}
                <path
                  d="M 30 140 A 110 110 0 0 1 250 140"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                {/* Active Colored Arc (80% Gauge) */}
                <path
                  d="M 30 140 A 110 110 0 0 1 210 50"
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFA67A" />
                    <stop offset="100%" stopColor="#FF5B26" />
                  </linearGradient>
                </defs>

                {/* Score Ticks */}
                <text x="25" y="148" fill="#94A3B8" fontSize="10" fontWeight="600">250</text>
                <text x="45" y="85" fill="#94A3B8" fontSize="10" fontWeight="600">350</text>
                <text x="135" y="22" fill="#94A3B8" fontSize="10" fontWeight="600">550</text>
                <text x="225" y="85" fill="#94A3B8" fontSize="10" fontWeight="600">750</text>
                <text x="235" y="148" fill="#94A3B8" fontSize="10" fontWeight="600">950</text>
              </svg>

              {/* Gauge Center Value */}
              <div className="absolute top-16 text-center">
                <span className="text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                  {optimizeBudgetData.creditScoreCard.score}
                </span>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  {optimizeBudgetData.creditScoreCard.scoreLabel}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Updated 2 hours ago</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +15 pts this cycle
              </span>
            </div>
          </div>

          {/* Card 2: Total Spending Bar Chart */}
          <div className="h-[430px] sm:h-[450px] rounded-3xl p-8 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-1">
                {optimizeBudgetData.spendingCard.title}
              </h3>
              <p className="text-xs text-slate-400 font-sans mb-4">
                {optimizeBudgetData.spendingCard.subtitle}
              </p>

              {/* Total Spending Stat & Date Pill */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Total Spending</span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                    {optimizeBudgetData.spendingCard.total}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{optimizeBudgetData.spendingCard.dateRange}</span>
                </div>
              </div>
            </div>

            {/* Monthly Bar Chart */}
            <div className="pt-6">
              <div className="flex items-end justify-between gap-3 h-44 pb-2 px-2">
                {optimizeBudgetData.spendingCard.months.map((m, idx) => {
                  const isHovered = hoveredBar === idx;

                  return (
                    <div
                      key={m.name}
                      onMouseEnter={() => setHoveredBar(idx)}
                      className="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
                    >
                      {/* Tooltip on highlighted bar */}
                      {isHovered && (
                        <div className="px-2 py-0.5 rounded-md bg-brandOrange text-white text-[10px] font-bold mb-2 shadow-sm animate-pulse-subtle">
                          {m.label || '$720'}
                        </div>
                      )}

                      {/* Bar Pillar */}
                      <div
                        style={{ height: `${m.height}%` }}
                        className={`w-full max-w-[42px] rounded-t-xl transition-all duration-300 ${
                          isHovered
                            ? 'bg-brandOrange shadow-md shadow-brandOrange/30'
                            : 'bg-slate-200 group-hover:bg-slate-300'
                        }`}
                      />

                      {/* Month Label */}
                      <span className="text-xs text-slate-400 font-medium mt-2">
                        {m.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
