import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  FileText, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Compass 
} from 'lucide-react';
import { PLATFORM_ACCORDION } from '../data/finoviaData';

export default function PlatformOverviewSection({ onExploreServices }) {
  const [activeItemId, setActiveItemId] = useState('automated-reports');
  const [timeframe, setTimeframe] = useState('Last Week');
  const [timeframeOpen, setTimeframeOpen] = useState(false);

  const getIcon = (id) => {
    switch (id) {
      case 'revenue-tracking':
        return <Compass className="w-4 h-4" />;
      case 'automated-reports':
        return <FileText className="w-4 h-4" />;
      case 'performance-pulse':
        return <Activity className="w-4 h-4" />;
      case 'secure-integration':
        return <ShieldCheck className="w-4 h-4" />;
      case 'webflow-feeds':
        return <Layers className="w-4 h-4" />;
      default:
        return <Check className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBFAD2] text-[#3F6212] text-xs font-bold">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Platform Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display max-w-2xl leading-[1.15]">
              Empowering You to Achieve <br />
              Financial Freedom
            </h2>
          </div>

          <button
            onClick={onExploreServices}
            className="px-6 py-3 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-sm transition active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 5 Accordion Cards (Rule 1A dynamic polymorphism) */}
          <div className="lg:col-span-6 space-y-3">
            {PLATFORM_ACCORDION.map((item) => {
              const isActive = activeItemId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className={`
                    rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer border select-none
                    ${isActive
                      ? 'bg-[#0B1118] text-white border-slate-900 shadow-xl'
                      : 'bg-[#F8FAFC] text-slate-800 border-slate-200/80 hover:bg-slate-100/70'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {getIcon(item.id)}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      isActive ? 'rotate-180 text-white' : 'text-slate-400'
                    }`} />
                  </div>

                  {isActive && (
                    <p className="mt-3 pl-11 text-xs text-slate-300 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Financial Overview Widget matching mockup */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6">
              {/* Top Revenue Header & Filter */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Revenue Overview</span>

                  <div className="relative">
                    <button
                      onClick={() => setTimeframeOpen(!timeframeOpen)}
                      className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200/70 rounded-full text-xs font-semibold text-slate-600 transition"
                    >
                      <span>{timeframe}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {timeframeOpen && (
                      <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-xl p-1 shadow-lg z-20 text-xs">
                        {['Last Week', 'This Month', 'Q3 2026'].map(t => (
                          <button
                            key={t}
                            onClick={() => {
                              setTimeframe(t);
                              setTimeframeOpen(false);
                            }}
                            className="block w-full text-left px-2.5 py-1 rounded-md hover:bg-slate-100"
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Amount & Subtext */}
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display block">
                    $9,679.00
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Our most recent marketing profit.
                  </span>
                </div>

                {/* 5 Lime-to-Emerald Gradient 3D Bars */}
                <div className="flex items-end justify-between gap-3 h-28 pt-4 pb-1">
                  {[
                    { height: '45%', color: 'from-lime-200 to-lime-300' },
                    { height: '65%', color: 'from-lime-300 to-lime-400' },
                    { height: '55%', color: 'from-lime-300 to-[#B7F436]' },
                    { height: '80%', color: 'from-[#B7F436] to-lime-500' },
                    { height: '100%', color: 'from-[#B7F436] to-emerald-500' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 h-full flex items-end">
                      <div
                        style={{ height: bar.height }}
                        className={`w-full rounded-2xl bg-gradient-to-t ${bar.color} shadow-sm transition-all duration-300 hover:opacity-90`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Expenses Section */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Total Expenses</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>40%</span>
                  </span>
                </div>

                {/* Category Segment Bar */}
                <div className="h-2 rounded-full bg-slate-100 flex overflow-hidden gap-1">
                  <div className="h-full bg-blue-600 w-[35%]" />
                  <div className="h-full bg-purple-600 w-[25%]" />
                  <div className="h-full bg-amber-500 w-[25%]" />
                  <div className="h-full bg-emerald-500 w-[15%]" />
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600" /> Living</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-600" /> Shopping</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Travel</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Saving</span>
                </div>
              </div>

              {/* Bottom See Details Pill Button */}
              <button
                onClick={onExploreServices}
                className="w-full py-3 rounded-2xl bg-[#111827] hover:bg-black text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
              >
                <span>See Details</span>
                <span className="text-slate-400">{'>>'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
