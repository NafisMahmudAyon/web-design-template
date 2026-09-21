import React from 'react';
import { METRICS } from '../data/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {METRICS.map((metric, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all space-y-2"
        >
          <span className="text-xs text-gray-500 font-bold block">
            {metric.title}
          </span>

          <span className="font-display text-2xl font-black text-[#090d16] block">
            {metric.value}
          </span>

          <div className="flex items-center space-x-1 text-[11px] font-extrabold">
            {metric.isPositive ? (
              <span className="text-emerald-600 flex items-center space-x-0.5">
                <TrendingUp className="w-3 h-3" />
                <span>↑ {metric.change}</span>
              </span>
            ) : (
              <span className="text-red-500 flex items-center space-x-0.5">
                <TrendingDown className="w-3 h-3" />
                <span>↓ {metric.change}</span>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
