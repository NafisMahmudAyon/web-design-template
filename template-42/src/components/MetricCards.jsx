import React from 'react';
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Receipt 
} from 'lucide-react';

export default function MetricCards() {
  return (
    <div className="space-y-4">
      {/* Top 2 Cards: Income and Total Expenses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Income Card */}
        <div className="bg-[#FFFFFF] border border-slate-200/90 rounded-3xl p-5 shadow-steadi-card flex flex-col justify-between">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs mb-3">
            <div className="w-7 h-7 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <span>Income</span>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              $12,540.00
            </h4>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-[11px] font-bold text-orange-600">
              <TrendingUp className="w-3 h-3 stroke-[2.5]" />
              <span>+8.2% vs Last Month</span>
            </span>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-[#FFFFFF] border border-slate-200/90 rounded-3xl p-5 shadow-steadi-card flex flex-col justify-between">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs mb-3">
            <div className="w-7 h-7 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Receipt className="w-4 h-4" />
            </div>
            <span>Total Expences</span>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              $5,000.00
            </h4>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200/60 text-[11px] font-bold text-red-600">
              <TrendingDown className="w-3 h-3 stroke-[2.5]" />
              <span>-5.3% from last month.</span>
            </span>
          </div>
        </div>
      </div>

      {/* Net Profit Card with Multi-segment Distribution Bar */}
      <div className="bg-[#FFFFFF] border border-slate-200/90 rounded-3xl p-5 shadow-steadi-card">
        <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs mb-3">
          <div className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <Wallet className="w-4 h-4" />
          </div>
          <span>Net Profit</span>
        </div>

        <div className="flex items-baseline justify-between gap-2 mb-4">
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            $7,540.00
          </h4>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-[11px] font-bold text-orange-600">
            <TrendingUp className="w-3 h-3 stroke-[2.5]" />
            <span>+12.2% vs Last Month</span>
          </span>
        </div>

        {/* Multi-segment Distribution Meter matching mockup */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 h-2 w-full">
            <div className="h-full rounded-full bg-[#111827] w-[48%]" title="48% Income" />
            <div className="h-full rounded-full bg-orange-500 w-[28%]" title="$5,000 Expenses" />
            <div className="h-full rounded-full bg-emerald-500 w-[24%]" title="24% Savings" />
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#111827]" />
              <span>48% Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded-md bg-orange-500 text-white text-[10px] font-bold">
                $5,000
              </span>
              <span>Expenses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>24% Savings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
