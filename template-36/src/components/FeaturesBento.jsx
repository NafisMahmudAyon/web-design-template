import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Key, ArrowUpRight, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { bentoFeatures } from '../data/cryptoData';

export default function FeaturesBento() {
  return (
    <section className="py-24 bg-[#F9FBFA] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200/70 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
              Everything You Need to <br />
              Master the Crypto Market
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Trade, analyze, and manage your digital assets with professional tools designed for speed, security, and smarter investing.
            </p>
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bento Card 1: Portfolio Tracking (Network Nodes) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1A1C] font-display">
                {bentoFeatures[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm">
                {bentoFeatures[0].description}
              </p>
            </div>

            {/* Interactive Visual: Connected Wallets / Team Network */}
            <div className="mt-8 bg-[#F8FAF9] rounded-2xl p-6 border border-gray-100 relative h-56 flex items-center justify-center overflow-hidden">
              {/* Background Connective SVG Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-300 stroke-dasharray-4">
                <line x1="20%" y1="50%" x2="50%" y2="28%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="28%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="28%" x2="50%" y2="76%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="20%" y1="50%" x2="50%" y2="76%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="80%" y1="50%" x2="50%" y2="76%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Node 1: Liam Johnson */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">
                  LJ
                </div>
                <span className="text-[11px] font-semibold text-[#0B1A1C]">Liam Johnson</span>
              </div>

              {/* Node 2: Ethan Brown (Center Top) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#163337] text-white px-3 py-1.5 rounded-full border border-[#00D287]/30 shadow-md flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00D287] text-[#0B1A1C] flex items-center justify-center text-[9px] font-bold">
                  EB
                </div>
                <span className="text-[11px] font-semibold">Ethan Brown</span>
              </div>

              {/* Node 3: Lucas Davis (Center Bottom) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[9px] font-bold">
                  LD
                </div>
                <span className="text-[11px] font-semibold text-[#0B1A1C]">Lucas Davis</span>
              </div>

              {/* Node 4: Noah Smith */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-bold">
                  NS
                </div>
                <span className="text-[11px] font-semibold text-[#0B1A1C]">Noah Smith</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Secure Asset Management (Shield Rings) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1A1C] font-display">
                {bentoFeatures[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm">
                {bentoFeatures[1].description}
              </p>
            </div>

            {/* Concentric Security Shield Visualization */}
            <div className="mt-8 bg-[#F8FAF9] rounded-2xl p-6 border border-gray-100 relative h-56 flex items-center justify-center overflow-hidden">
              
              {/* Outer Ring */}
              <div className="w-48 h-48 rounded-full border border-dashed border-emerald-300/60 flex items-center justify-center animate-spin-slow">
                {/* Middle Ring */}
                <div className="w-36 h-36 rounded-full border border-emerald-400/80 bg-emerald-50/50 flex items-center justify-center">
                  {/* Center Shield Badge */}
                  <div className="w-20 h-20 rounded-2xl bg-[#163337] border-2 border-[#00D287] shadow-xl flex flex-col items-center justify-center text-[#00D287]">
                    <Shield className="w-8 h-8" />
                    <span className="text-[9px] font-bold text-white mt-1">256-Bit</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Security Tags */}
              <div className="absolute top-5 left-10 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B1A1C] shadow-sm flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#00D287]" />
                <span>MPC Vault</span>
              </div>

              <div className="absolute bottom-6 right-10 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B1A1C] shadow-sm flex items-center gap-1">
                <Fingerprint className="w-3 h-3 text-[#00D287]" />
                <span>Biometric Auth</span>
              </div>

              <div className="absolute top-7 right-8 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B1A1C] shadow-sm flex items-center gap-1">
                <Key className="w-3 h-3 text-[#00D287]" />
                <span>HSM Keys</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Advanced Market Insights (Interactive Candlestick) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1A1C] font-display">
                {bentoFeatures[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm">
                {bentoFeatures[2].description}
              </p>
            </div>

            {/* Candlestick & Area Wave Mockup */}
            <div className="mt-8 bg-[#0F2527] rounded-2xl p-5 border border-white/10 text-white relative h-56 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D287]"></span>
                  <span className="font-bold text-white font-mono">BTC/USDT</span>
                </div>
                <span className="font-mono text-[#00D287] font-semibold">+23.46%</span>
              </div>

              {/* Interactive Trend Chart */}
              <div className="relative h-28 w-full my-auto">
                <svg viewBox="0 0 400 90" className="w-full h-full">
                  <defs>
                    <linearGradient id="bentoWave" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D287" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00D287" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,70 Q 50,30 100,55 T 200,40 T 280,15 T 350,30 T 400,10 L 400,90 L 0,90 Z"
                    fill="url(#bentoWave)"
                  />
                  <path
                    d="M 0,70 Q 50,30 100,55 T 200,40 T 280,15 T 350,30 T 400,10"
                    fill="none"
                    stroke="#00D287"
                    strokeWidth="2.5"
                  />
                  <circle cx="280" cy="15" r="4" fill="#00D287" stroke="#FFFFFF" strokeWidth="2" />
                </svg>

                {/* Floating Tooltip */}
                <div className="absolute top-0 left-1/2 -translate-x-6 bg-black/80 border border-[#00D287]/40 rounded-lg px-2.5 py-1 text-[10px] font-mono pointer-events-none">
                  <div className="text-white font-bold">44,008 BTC</div>
                  <div className="text-[#00D287]">+23.46%</div>
                </div>
              </div>

              <div className="flex justify-between text-[9px] text-gray-400 font-mono pt-2 border-t border-white/10">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span className="text-[#00D287] font-bold">Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Live Market Dashboard */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0B1A1C] font-display">
                {bentoFeatures[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm">
                {bentoFeatures[3].description}
              </p>
            </div>

            {/* Mini Dashboard Widget Preview */}
            <div className="mt-8 bg-[#0F2527] rounded-2xl p-4 border border-white/10 text-white relative h-56 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/10">
                <span className="font-bold font-mono text-[#00D287]">● Live Stream</span>
                <span className="text-gray-400 font-mono">1.2ms latency</span>
              </div>

              <div className="grid grid-cols-2 gap-2 my-auto">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[9px] text-gray-400">Bitcoin</div>
                  <div className="text-xs font-bold font-mono">$12,540.00</div>
                  <div className="text-[8px] text-[#00D287] font-mono">+3.1%</div>
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[9px] text-gray-400">Ethereum</div>
                  <div className="text-xs font-bold font-mono">$1,840.50</div>
                  <div className="text-[8px] text-[#00D287] font-mono">+5.8%</div>
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[9px] text-gray-400">Solana</div>
                  <div className="text-xs font-bold font-mono">$145.67</div>
                  <div className="text-[8px] text-[#00D287] font-mono">+5.46%</div>
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[9px] text-gray-400">Ripple</div>
                  <div className="text-xs font-bold font-mono">$0.72</div>
                  <div className="text-[8px] text-red-400 font-mono">-1.2%</div>
                </div>
              </div>

              <div className="text-[9px] text-gray-400 text-center font-mono">
                Real-time WebSocket connection active
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
