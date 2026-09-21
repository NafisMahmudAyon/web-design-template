import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, AlertTriangle, TrendingUp, ShieldAlert, Globe, Compass, ChevronDown, Activity, Sparkles, Filter } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function HeroSection({ onOpenDemo }) {
  const [selectedRegion, setSelectedRegion] = useState('Southeast Asia');
  const [activeTimeframe, setActiveTimeframe] = useState('12 months');
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);

  const regionData = {
    'Southeast Asia': { risk: 'Critical 92%', alert: 'Typhoon & Coastal Surges', assets: '240 Monitored' },
    'North America': { risk: 'High 80%', alert: 'Wildfire & Drought Stress', assets: '680 Monitored' },
    'Western Europe': { risk: 'Moderate 50%', alert: 'River Basin Flooding', assets: '510 Monitored' },
    'East Africa': { risk: 'High 85%', alert: 'Severe Agricultural Drought', assets: '190 Monitored' },
  };

  const trendPoints = [
    { month: 'Jan', val: 32, text: 'Jan: 32% Risk Score' },
    { month: 'Feb', val: 38, text: 'Feb: 38% Risk Score' },
    { month: 'Mar', val: 42, text: 'Mar: 42% Risk Score' },
    { month: 'Apr', val: 40, text: 'Apr: 40% Risk Score' },
    { month: 'May', val: 55, text: 'May: 55% Heat Anomaly' },
    { month: 'Jun', val: 68, text: 'Jun: 68% Drought Warning' },
    { month: 'Jul', val: 74, text: 'Jul: 74% High Risk' },
    { month: 'Aug', val: 84, text: 'Aug: 84% Flood Peak' },
  ];

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Header Text */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#18191c] tracking-tight leading-[1.1]"
        >
          See Environmental Risk Before It Shapes Your Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#525860] max-w-3xl mx-auto font-sans leading-relaxed"
        >
          Turn environmental and climate data into clear actionable intelligence. Monitor risk across assets locations and supply chains all from one powerful platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#18191c] text-white text-base font-medium hover:bg-black transition-all shadow-md group"
          >
            <span>Explore Intelligence</span>
            <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#18191c] transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Dashboard Showcase container resting over landscape background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl border border-black/10"
      >
        {/* Background photo behind dashboard */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_ASSETS.heroBg}
            alt="Environmental Risk Landscape"
            className="w-full h-full object-cover brightness-[0.92] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f5f6] via-transparent to-white/40 opacity-90" />
        </div>

        {/* Floating Interactive Dashboard Interface */}
        <div className="relative z-10 space-y-4 sm:space-y-6">
          {/* Top Row: Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Portfolio Risk Score */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/80 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Portfolio Risk Score</span>
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[11px] font-bold">High Risk</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">72</span>
                  <span className="text-sm font-medium text-gray-400">/100</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-red-500 gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>8.4% vs prev</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-full w-[72%]" />
              </div>
            </div>

            {/* Card 2: High-Risk Assets */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/80 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">High-Risk Assets</span>
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-gray-900">75%</span>
                <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-md">18 High This month</span>
              </div>
              <div className="flex gap-1.5 mt-3 items-end h-3">
                <div className="flex-1 bg-amber-400 rounded-sm h-full" />
                <div className="flex-1 bg-amber-500 rounded-sm h-[85%]" />
                <div className="flex-1 bg-amber-600 rounded-sm h-[75%]" />
                <div className="flex-1 bg-gray-200 rounded-sm h-[40%]" />
              </div>
            </div>

            {/* Card 3: Active Alerts */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/80 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Active Alerts</span>
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-gray-900">75%</span>
                <span className="text-xs text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-md">3 Critical This month</span>
              </div>
              <div className="flex gap-1.5 mt-3 items-end h-3">
                <div className="flex-1 bg-red-500 rounded-sm h-full" />
                <div className="flex-1 bg-red-500 rounded-sm h-[90%]" />
                <div className="flex-1 bg-red-600 rounded-sm h-[75%]" />
                <div className="flex-1 bg-gray-200 rounded-sm h-[30%]" />
              </div>
            </div>

            {/* Card 4: Monitored Assets */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/80 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Monitored Assets</span>
                <Globe className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-gray-900">60%</span>
                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-md">42 Regions This month</span>
              </div>
              <div className="flex gap-1.5 mt-3 items-end h-3">
                <div className="flex-1 bg-blue-400 rounded-sm h-[60%]" />
                <div className="flex-1 bg-blue-500 rounded-sm h-[75%]" />
                <div className="flex-1 bg-blue-600 rounded-sm h-full" />
                <div className="flex-1 bg-blue-400 rounded-sm h-[50%]" />
              </div>
            </div>
          </div>

          {/* Middle Row: Environmental Risk Map & Exposure Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Environmental Risk Map (2 cols) */}
            <div className="lg:col-span-2 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-md border border-white/80 relative">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Environmental Risk Map</h3>
                  <p className="text-xs text-gray-500">Map assets, operations, and supply chains across your portfolio</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Satellite Feed
                  </span>
                </div>
              </div>

              {/* Map Graphic Box */}
              <div className="relative h-64 bg-slate-900 rounded-xl overflow-hidden p-4 flex flex-col justify-between">
                {/* World map stylized grid overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Hotspot pin buttons */}
                {Object.keys(regionData).map((regKey) => {
                  const isSelected = selectedRegion === regKey;
                  const pos =
                    regKey === 'Southeast Asia' ? 'top-1/2 left-3/4' :
                    regKey === 'North America' ? 'top-1/3 left-1/4' :
                    regKey === 'Western Europe' ? 'top-1/4 left-1/2' :
                    'bottom-1/3 left-2/3';

                  return (
                    <button
                      key={regKey}
                      onClick={() => setSelectedRegion(regKey)}
                      className={`absolute ${pos} -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all focus:outline-none ${
                        isSelected ? 'bg-red-500/30 ring-4 ring-red-500/50 scale-125 z-20' : 'bg-amber-500/20 hover:scale-110 z-10'
                      }`}
                    >
                      <span className={`block w-3 h-3 rounded-full ${isSelected ? 'bg-red-500 animate-ping' : 'bg-amber-400'}`} />
                    </button>
                  );
                })}

                {/* Interactive map legend */}
                <div className="relative z-10 flex flex-wrap items-center justify-between text-xs text-white/80 bg-black/60 backdrop-blur-md rounded-lg p-2.5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Low 18%</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400" /> Moderate 50%</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400" /> High 80%</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Critical 92%</span>
                  </div>
                  <div className="text-emerald-400 font-semibold">Active Region: {selectedRegion}</div>
                </div>

                {/* Selected Region Quick Tooltip Box */}
                <div className="relative z-10 bg-white/95 text-slate-900 rounded-lg p-3 shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-900">{selectedRegion}: </span>
                    <span className="text-red-600 font-semibold">{regionData[selectedRegion].risk}</span>
                    <span className="text-gray-500 ml-2">({regionData[selectedRegion].alert})</span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded">
                    {regionData[selectedRegion].assets}
                  </span>
                </div>
              </div>
            </div>

            {/* Risk Exposure Bar Chart */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-md border border-white/80 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Risk Exposure</h3>
                <p className="text-xs text-gray-500 mb-4">Risk severity breakdown across active portfolios</p>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">Flood Hazard</span>
                      <span className="font-bold text-red-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[78%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">Heat Stress & Drought</span>
                      <span className="font-bold text-orange-500">64%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[64%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">Storm & Typhoon Surge</span>
                      <span className="font-bold text-amber-500">45%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[45%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">Supply Chain Disruptions</span>
                      <span className="font-bold text-emerald-600">22%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[22%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> Critical</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400" /> High</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Moderate</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Portfolio Risk Trend & Ticker Insight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Line Trend Card (2 cols) */}
            <div className="lg:col-span-2 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-md border border-white/80">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Portfolio Risk Trend</h3>
                  <p className="text-xs text-gray-500">Historical vulnerability score progression</p>
                </div>
                <select
                  value={activeTimeframe}
                  onChange={(e) => setActiveTimeframe(e.target.value)}
                  className="text-xs bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 font-medium focus:outline-none"
                >
                  <option value="12 months">12 months</option>
                  <option value="6 months">6 months</option>
                  <option value="30 days">30 days</option>
                </select>
              </div>

              {/* Interactive Trend SVG Chart */}
              <div className="relative h-44 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />

                  {/* Gradient area under curve */}
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0,90 Q 70,80 140,75 T 280,45 T 420,30 L 500,20 L 500,120 L 0,120 Z"
                    fill="url(#trendGradient)"
                  />

                  {/* Trend line */}
                  <path
                    d="M 0,90 Q 70,80 140,75 T 280,45 T 420,30 L 500,20"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Data Points */}
                  {trendPoints.map((pt, i) => {
                    const x = (i / (trendPoints.length - 1)) * 480 + 10;
                    const y = 110 - (pt.val / 100) * 90;
                    return (
                      <g key={i} className="cursor-pointer">
                        <circle
                          cx={x}
                          cy={y}
                          r={hoveredDataPoint === i ? '6' : '4'}
                          fill="#ef4444"
                          stroke="#ffffff"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredDataPoint(i)}
                          onMouseLeave={() => setHoveredDataPoint(null)}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Chart Alert Highlight Card Overlay */}
              <div className="mt-2 bg-[#f8fafc] border border-red-100 rounded-xl p-3 flex items-start gap-3 text-xs text-slate-700">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Risk exposure increased 12.6% over 90 days. </span>
                  <span className="text-gray-600">Flood and heat exposure drive most of the increase.</span>
                </div>
              </div>
            </div>

            {/* Top Risk Regions Ticker & Intelligence Insight */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-md border border-white/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-gray-900">Top Risk Regions</h3>
                  <a href="#risk-categories" className="text-xs font-semibold text-emerald-600 hover:underline">
                    View Details →
                  </a>
                </div>

                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-red-50/70 border border-red-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-red-900">Flood Risk Increased</p>
                      <p className="text-[11px] text-red-700">Southeast Asia Assets</p>
                    </div>
                    <span className="text-[10px] font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                      12 min ago
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-900">Heat Wave Detected</p>
                      <p className="text-[11px] text-amber-700">+4.2°C Thermal Anomaly</p>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">
                      12 min ago
                    </span>
                  </div>
                </div>
              </div>

              {/* Intelligence Insight Mini Widget */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-900">Intelligence Insight</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">95% Confidence Rating</p>
                </div>
                <button
                  onClick={onOpenDemo}
                  className="text-xs font-bold text-slate-900 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>View Intelligence</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
