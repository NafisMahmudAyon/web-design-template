import React from 'react';
import { KPI_METRICS } from '../data/coinixData';

export default function KpiStrip() {
  return (
    <div className="px-4 sm:px-6 pt-6 pb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      {/* Welcome Greeting */}
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Welcome, Dylan Stone
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Track user activity, trading trends, and crypto revenue with real time analytics.
        </p>
      </div>

      {/* 4 Financial KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 self-start lg:self-auto">
        {KPI_METRICS.map((kpi) => (
          <div key={kpi.id} className="flex flex-col">
            <span className="text-xs font-medium text-slate-400 mb-1">
              {kpi.label}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {kpi.value}
              </span>
              <span 
                className={`
                  text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full
                  ${kpi.isPositive 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-red-500/15 text-red-400 border border-red-500/20'
                  }
                `}
              >
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
