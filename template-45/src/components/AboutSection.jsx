import React from 'react';
import { ABOUT_STATS } from '../data/logistiqoData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ship Silhouette Watermark matching mockup */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-[600px] h-[400px]" viewBox="0 0 600 400" fill="currentColor">
          <path d="M50 300 L550 300 L500 370 L120 370 Z" />
          <rect x="180" y="160" width="240" height="130" rx="6" />
          <rect x="220" y="90" width="160" height="60" rx="4" />
          <rect x="270" y="40" width="60" height="40" rx="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        {/* Label */}
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
          // ABOUT US //
        </span>

        {/* Big Typographic Statement */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] font-display max-w-5xl">
          At LOGISTIQO, We combine logistics <span className="underline decoration-slate-300 underline-offset-8 font-normal text-slate-800">expertise</span> and digital innovation to deliver cargo with <span className="text-slate-400 font-medium">speed, confidence, and impact worldwide.</span>
        </h2>

        {/* 3 Metric KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
          {ABOUT_STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display">
                  {stat.value}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-400 uppercase font-display">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
