import React from 'react';
import { AlertCircle, ArrowUpRight } from 'lucide-react';

export default function FinancialReportCard({ onOpenReport }) {
  return (
    <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-6 text-white shadow-lg shadow-orange-500/20 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative ambient radial reflection */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Top 3D Stacked Report Glass Cards matching mockup */}
        <div className="relative h-28 mb-4">
          {/* Card 1 (Back) */}
          <div className="absolute top-0 left-4 right-4 h-16 rounded-2xl glass-layer-1 p-2.5 flex items-center justify-between text-[11px] font-semibold opacity-70 transform -rotate-1">
            <span>Q4 2025 Annual Performance</span>
            <span className="text-[10px] opacity-80">Dec 2025</span>
          </div>

          {/* Card 2 (Middle) */}
          <div className="absolute top-3 left-2 right-2 h-16 rounded-2xl glass-layer-2 p-2.5 flex items-center justify-between text-[11px] font-semibold opacity-85 transform rotate-1">
            <span>Q3 2025 Growth Report</span>
            <span className="text-[10px] opacity-90">Sep 2025</span>
          </div>

          {/* Card 3 (Front Active) */}
          <div className="absolute top-6 left-0 right-0 h-20 rounded-2xl glass-layer-3 p-3.5 flex flex-col justify-between shadow-md">
            <div className="flex items-center justify-between text-xs font-bold">
              <span>Q2 2025 Expense Report</span>
              <AlertCircle className="w-4 h-4 text-amber-200" />
            </div>
            <p className="text-[10px] leading-tight text-white/90">
              Expenses remained under control with efficient spending across operations and marketing.
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="mt-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Financial Report
          </h3>
        </div>
      </div>

      {/* Bottom: Total Income Overview Columns */}
      <div className="pt-5 border-t border-white/20 mt-4">
        <span className="text-xs font-semibold text-white/80 block mb-2.5">
          Total Income Overview
        </span>

        <div className="grid grid-cols-3 gap-2 text-left">
          <div className="border-l-2 border-white/40 pl-2">
            <span className="text-[11px] text-white/80 block">Salary</span>
            <span className="text-xs sm:text-sm font-extrabold text-white">$4,500</span>
          </div>

          <div className="border-l-2 border-white/40 pl-2">
            <span className="text-[11px] text-white/80 block">Freelance</span>
            <span className="text-xs sm:text-sm font-extrabold text-white">$12,500</span>
          </div>

          <div className="border-l-2 border-white/40 pl-2">
            <span className="text-[11px] text-white/80 block">Business</span>
            <span className="text-xs sm:text-sm font-extrabold text-white">$66,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
