import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';

export default function PortfolioAnalyticsSection() {
  const [selectedBrand, setSelectedBrand] = useState('Rolex');

  const allocations = [
    { brand: 'Rolex', percent: 42, color: '#D4AF37', value: '$204,645', count: '4 Pieces' },
    { brand: 'Patek Philippe', percent: 28, color: '#E6CA85', value: '$136,430', count: '2 Pieces' },
    { brand: 'Audemars Piguet', percent: 19, color: '#A8821D', value: '$92,577', count: '2 Pieces' },
    { brand: 'Others', percent: 11, color: '#4B5563', value: '$53,598', count: '3 Pieces' },
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight">
            Your Watch Portfolio <br className="hidden sm:block" />
            <span className="italic font-serif text-gold-400">At A Glance</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            See exactly how your watch portfolio is performing from total value to individual returns.
            Built for collectors who think like investors.
          </p>
        </div>

        {/* Analytics Card Container */}
        <div className="rounded-3xl sm:rounded-4xl bg-[#0A0D12] border border-white/[0.08] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Metric Figures */}
            <div className="lg:col-span-6 space-y-8 lg:border-r lg:border-white/[0.08] lg:pr-12">
              {/* Metric 1: Portfolio Value */}
              <div>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-1">
                  PORTFOLIO VALUE
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
                    $487,250
                  </h3>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-emerald-400">
                    + $91,230 all time
                  </span>
                </div>
              </div>

              {/* Metric 2: Total Return */}
              <div className="pt-6 border-t border-white/[0.08]">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-1">
                  TOTAL RETURN
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-emerald-400">
                    +18.6%
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    Since inception
                  </span>
                </div>
              </div>

              {/* Metric 3: Monthly Growth */}
              <div className="pt-6 border-t border-white/[0.08]">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-1">
                  MONTHLY GROWTH
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-white">
                    +4.2%
                  </span>
                  <span className="font-mono text-xs text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20">
                    Best Performer: Rolex Daytona
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Watch Bezel Donut Gauge & Legend */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Circular Watch Bezel Donut Chart */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex-shrink-0">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  {/* Background Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Segment 1: Rolex 42% (dash 105.5, offset 0) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#D4AF37"
                    strokeWidth={selectedBrand === 'Rolex' ? '11' : '8'}
                    strokeDasharray="105.5 251.2"
                    strokeDashoffset="0"
                    fill="transparent"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedBrand('Rolex')}
                  />
                  {/* Segment 2: Patek Philippe 28% (dash 70.3, offset -105.5) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E6CA85"
                    strokeWidth={selectedBrand === 'Patek Philippe' ? '11' : '8'}
                    strokeDasharray="70.3 251.2"
                    strokeDashoffset="-105.5"
                    fill="transparent"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedBrand('Patek Philippe')}
                  />
                  {/* Segment 3: AP 19% (dash 47.7, offset -175.8) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#A8821D"
                    strokeWidth={selectedBrand === 'Audemars Piguet' ? '11' : '8'}
                    strokeDasharray="47.7 251.2"
                    strokeDashoffset="-175.8"
                    fill="transparent"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedBrand('Audemars Piguet')}
                  />
                  {/* Segment 4: Others 11% (dash 27.6, offset -223.5) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#4B5563"
                    strokeWidth={selectedBrand === 'Others' ? '11' : '8'}
                    strokeDasharray="27.6 251.2"
                    strokeDashoffset="-223.5"
                    fill="transparent"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedBrand('Others')}
                  />
                </svg>

                {/* Inner Bezel Dial Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 select-none pointer-events-none">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    Total Portfolio Value
                  </span>
                  <span className="font-serif font-bold text-3xl text-white tracking-tight my-0.5">
                    100%
                  </span>
                  <span className="font-mono text-[10px] text-gold-400">
                    {selectedBrand} Active
                  </span>
                </div>
              </div>

              {/* Allocation Legend */}
              <div className="space-y-3 w-full max-w-xs">
                {allocations.map((item) => {
                  const isSelected = selectedBrand === item.brand;
                  return (
                    <div
                      key={item.brand}
                      onClick={() => setSelectedBrand(item.brand)}
                      className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white/10 border border-gold-500/40'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-sans text-xs sm:text-sm font-medium text-white">
                          {item.brand}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs sm:text-sm font-bold text-gray-200 block">
                          {item.percent}%
                        </span>
                        <span className="font-mono text-[10px] text-gray-400 block">
                          {item.value}
                        </span>
                      </div>
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
}
