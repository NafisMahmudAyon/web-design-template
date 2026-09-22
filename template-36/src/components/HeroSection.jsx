import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  TrendingUp, 
  Coins, 
  ArrowRight, 
  Search, 
  Bell, 
  RefreshCw, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus, 
  Download, 
  Repeat, 
  SendHorizontal,
  ChevronDown
} from 'lucide-react';
import { heroData, heroDashboardData } from '../data/cryptoData';

export default function HeroSection({ onGetStarted }) {
  const [activeTimeframe, setActiveTimeframe] = useState('1M');
  const [hoveredDay, setHoveredDay] = useState('Thursday');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section id="about" className="relative pt-32 pb-24 overflow-hidden raxon-hero-bg text-white">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] raxon-radial-glow pointer-events-none blur-3xl -z-0" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#00D287]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Split: Left Headline & Right Description/CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          {/* Left Headline (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-display">
              {heroData.titlePart1} <br />
              {heroData.titleHighlight} <br />
              <span className="text-[#00D287]">
                {heroData.titlePart2}
              </span>
            </h1>
          </div>

          {/* Right Description & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {heroData.subtitle}
            </p>
            <div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onGetStarted}
                className="px-6 py-3 rounded-full bg-white text-[#0B1A1C] font-semibold text-sm hover:bg-gray-100 shadow-md inline-flex items-center gap-2 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#00D287]" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* 3 Micro Feature Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-12">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
            <div className="p-1 rounded-full bg-[#00D287]/20 text-[#00D287]">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-medium">Bank Grade Security</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/10" />

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
            <div className="p-1 rounded-full bg-[#00D287]/20 text-[#00D287]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="font-medium">Real Time Market Data</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/10" />

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
            <div className="p-1 rounded-full bg-[#00D287]/20 text-[#00D287]">
              <Coins className="w-4 h-4" />
            </div>
            <span className="font-medium">100+ Supported Assets</span>
          </div>
        </div>

        {/* Floating Web Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl bg-[#0F2527]/95 border border-white/15 p-4 sm:p-6 shadow-2xl shadow-black/60 relative overflow-hidden backdrop-blur-xl"
        >
          {/* Top Bar of Web Dashboard */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
            
            {/* Dashboard Mini Nav */}
            <div className="flex items-center gap-6 text-xs text-gray-300">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#00D287]"></div>
                <span>Raxon</span>
              </div>
              <span className="text-[#00D287] font-semibold cursor-pointer">Dashboard</span>
              <span className="hover:text-white cursor-pointer hidden sm:inline">Trade</span>
              <span className="hover:text-white cursor-pointer hidden sm:inline">Market</span>
              <span className="hover:text-white cursor-pointer hidden md:inline">Analytics</span>
              <span className="hover:text-white cursor-pointer hidden md:inline">Portfolio</span>
              <span className="hover:text-white cursor-pointer hidden lg:inline">OTC</span>
            </div>

            {/* Dashboard Controls & User Profile */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search here..."
                  className="bg-white/5 border border-white/10 rounded-full pl-8 pr-3 py-1 text-xs text-white placeholder-gray-400 w-36 lg:w-48 focus:outline-none"
                />
              </div>
              <button className="p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white">
                <Bell className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <div className="w-7 h-7 rounded-full bg-emerald-700 overflow-hidden border border-emerald-400">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                    alt="Sajjibur Rahman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-[11px] font-bold text-white leading-none">Sajjibur Rahman</div>
                  <div className="text-[9px] text-gray-400">sajjibur@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: 4 Crypto Tickers Strip + My Balance Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-5 items-stretch">
            
            {/* 4 Quick Tickers (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroDashboardData.tickers.map((ticker) => (
                <div
                  key={ticker.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3.5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] text-gray-300">
                    <span className="font-semibold">{ticker.name}</span>
                    <span className="text-[9px] text-gray-400 font-mono">{ticker.symbol}</span>
                  </div>
                  <div className="text-base font-bold text-white mt-1.5 font-mono">{ticker.price}</div>
                  <div className="flex items-center gap-1 text-[10px] mt-1 font-semibold">
                    <span className={ticker.isPositive ? 'text-[#00D287]' : 'text-red-400'}>
                      {ticker.change}
                    </span>
                    <span className="text-gray-400 text-[9px]">{ticker.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* My Balance Card (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">My Balance</div>
                  <div className="text-2xl font-black text-white font-mono">{heroDashboardData.userBalance}</div>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-md hover:text-white">
                  <RefreshCw className="w-3 h-3" />
                  <span>Refresh</span>
                </button>
              </div>

              {/* 4 Action Pills */}
              <div className="grid grid-cols-4 gap-1.5 mt-3">
                <button className="py-1.5 rounded-lg bg-[#00D287] text-[#0B1A1C] text-[11px] font-bold flex items-center justify-center gap-1 hover:bg-[#22C55E] transition-colors">
                  <Plus className="w-3 h-3" />
                  <span>Deposit</span>
                </button>
                <button className="py-1.5 rounded-lg bg-white/10 text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-white/20 transition-colors">
                  <Download className="w-3 h-3" />
                  <span>Withdraw</span>
                </button>
                <button className="py-1.5 rounded-lg bg-white/10 text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-white/20 transition-colors">
                  <Repeat className="w-3 h-3" />
                  <span>Swap</span>
                </button>
                <button className="py-1.5 rounded-lg bg-white/10 text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-white/20 transition-colors">
                  <SendHorizontal className="w-3 h-3" />
                  <span>Transfer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Market Leaders + Portfolio Wave Chart + Top Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-5 items-stretch">
            
            {/* Market Leaders (3 cols) */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span>Market Leaders</span>
                <span className="text-[10px] text-gray-400 font-normal">Week / Month</span>
              </div>
              <div className="space-y-3">
                {heroDashboardData.marketLeaders.map((lead, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <div className="text-[10px] text-gray-400">{lead.label}</div>
                    <div className="text-sm font-bold text-white font-mono">{lead.value}</div>
                    <div className="text-[9px] text-[#00D287]">{lead.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Value Chart (6 cols) */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-[10px] text-gray-400">Portfolio Value</div>
                  <div className="text-xl font-bold text-white font-mono flex items-center gap-2">
                    <span>{heroDashboardData.portfolioValue}</span>
                    <span className="text-[10px] text-[#00D287] font-semibold bg-[#00D287]/15 px-1.5 py-0.5 rounded">
                      +3.1% vs Last 24 hours
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] bg-white/5 p-0.5 rounded-lg">
                  {['1H', '24H', '1D', '1W', '1M'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTimeframe(t)}
                      className={`px-2 py-0.5 rounded ${
                        activeTimeframe === t ? 'bg-[#00D287] text-[#0B1A1C] font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Wave SVG Chart with Tooltip on Thursday */}
              <div className="relative h-36 w-full mt-2">
                <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="heroChartTeal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D287" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00D287" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Subtle Grid horizontal lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                  {/* Area Fill */}
                  <path
                    d="M 0,90 Q 70,60 140,80 T 280,50 T 360,30 T 440,45 T 500,20 L 500,120 L 0,120 Z"
                    fill="url(#heroChartTeal)"
                  />
                  {/* Line Stroke */}
                  <path
                    d="M 0,90 Q 70,60 140,80 T 280,50 T 360,30 T 440,45 T 500,20"
                    fill="none"
                    stroke="#00D287"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Active Tooltip Anchor at Thursday (approx x=360, y=30) */}
                  <circle cx="360" cy="30" r="4.5" fill="#00D287" stroke="#FFFFFF" strokeWidth="2" />
                </svg>

                {/* Floating Tooltip Box */}
                <div className="absolute top-0 right-1/4 -translate-y-2 bg-[#0B1A1C] border border-[#00D287]/40 rounded-xl p-2 shadow-xl text-left pointer-events-none">
                  <div className="text-[9px] text-gray-400 font-mono">June 2026</div>
                  <div className="text-xs font-extrabold text-white font-mono">44,008 BTC</div>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#00D287]">
                    <span>+23.46%</span>
                    <span>$23.48%</span>
                  </div>
                </div>
              </div>

              {/* Days axis */}
              <div className="flex justify-between text-[10px] text-gray-400 pt-1 border-t border-white/5 font-mono">
                {days.map((d) => (
                  <span
                    key={d}
                    className={`cursor-pointer hover:text-white ${d === 'Thursday' ? 'text-[#00D287] font-bold' : ''}`}
                    onMouseEnter={() => setHoveredDay(d)}
                  >
                    {d.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Assets (3 cols) */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                <span>Top Assets</span>
                <span className="text-[10px] text-gray-400">•••</span>
              </div>
              <div className="space-y-2.5">
                {heroDashboardData.topAssets.map((asset) => (
                  <div key={asset.name} className="flex items-center justify-between text-[11px]">
                    <div>
                      <div className="font-bold text-white">{asset.name}</div>
                      <div className="text-[9px] text-gray-400">{asset.symbol}</div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="font-bold text-white">{asset.price}</div>
                      <div className="text-[9px] text-[#00D287] font-semibold">{asset.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Recent Transactions Table + Top Gainers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Recent Transactions Table (8 cols) */}
            <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
                <div>
                  <span>Recent Transactions</span>
                  <p className="text-[10px] text-gray-400 font-normal">Keep track of all transactions here</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] bg-white/5 p-0.5 rounded">
                  <span className="px-2 py-0.5 text-gray-400">1D</span>
                  <span className="px-2 py-0.5 text-gray-400">7D</span>
                  <span className="px-2 py-0.5 bg-[#00D287] text-[#0B1A1C] font-bold rounded">1M</span>
                  <span className="px-2 py-0.5 text-gray-400">1Y</span>
                </div>
              </div>

              {/* Table Data */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="text-gray-400 border-b border-white/5 pb-2 text-[10px]">
                      <th className="font-medium pb-2">Assets</th>
                      <th className="font-medium pb-2">Price</th>
                      <th className="font-medium pb-2">24h Change</th>
                      <th className="font-medium pb-2">7d Change</th>
                      <th className="font-medium pb-2">Volume (24h)</th>
                      <th className="font-medium pb-2 text-right">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {heroDashboardData.recentTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-2 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#00D287]/20 text-[#00D287] flex items-center justify-center font-bold text-[9px]">
                            {tx.symbol.slice(0, 1)}
                          </div>
                          <div>
                            <span className="font-bold text-white font-sans">{tx.name}</span>{' '}
                            <span className="text-[9px] text-gray-400">{tx.symbol}</span>
                          </div>
                        </td>
                        <td className="py-2 text-white">{tx.price}</td>
                        <td className={`py-2 ${tx.isPositive ? 'text-[#00D287]' : 'text-red-400'}`}>
                          {tx.change24h}
                        </td>
                        <td className="py-2 text-gray-300">{tx.change7d}</td>
                        <td className="py-2 text-gray-300">{tx.volume}</td>
                        <td className="py-2 text-right text-white font-semibold">{tx.marketCap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Gainers (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                <span>Top Gainers</span>
                <span className="text-[10px] text-gray-400">•••</span>
              </div>
              <div className="space-y-3">
                {heroDashboardData.topGainers.map((g) => (
                  <div key={g.name} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00D287]"></div>
                      <span className="font-bold text-white">{g.name}</span>
                    </div>
                    <span className="text-gray-400 font-mono">{g.cap}</span>
                    <span className="text-white font-mono">{g.price}</span>
                    <span className="text-[#00D287] font-semibold font-mono">{g.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
