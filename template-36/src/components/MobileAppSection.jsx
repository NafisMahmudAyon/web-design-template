import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  Download, 
  ArrowDownRight, 
  ArrowUpRight, 
  Plus, 
  Repeat, 
  SendHorizontal, 
  Search, 
  Bell,
  Coins
} from 'lucide-react';
import { mobileAppFeatures } from '../data/cryptoData';

export default function MobileAppSection({ onDownloadClick }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    Zap: Zap,
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Benefits (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-700 tracking-wide uppercase mb-4">
                Our Mobile App
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
                Crypto Trading at Your <br />
                Fingertips
              </h2>
            </div>

            {/* 3 Value Rows */}
            <div className="space-y-6">
              {mobileAppFeatures.map((item, idx) => {
                const IconComp = iconMap[item.icon] || ShieldCheck;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#0B1A1C] flex-shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0B1A1C]">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download App Pill Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onDownloadClick}
                className="px-7 py-3.5 rounded-full bg-[#0B1A1C] text-white font-semibold text-sm hover:bg-[#163337] shadow-lg inline-flex items-center gap-2.5 transition-all"
              >
                <Download className="w-4 h-4 text-[#00D287]" />
                <span>Download App</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Realistic iPhone Showcase (6 cols) */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* Ambient Cyan/Teal Glow behind Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-cyan-200/50 rounded-full blur-3xl pointer-events-none -z-0" />

            {/* Phone Outer Chassis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[310px] sm:w-[340px] bg-[#163337] p-3 rounded-[46px] shadow-2xl shadow-[#132B2E]/30 border-4 border-gray-900 z-10"
            >
              {/* Phone Inner Screen */}
              <div className="bg-white rounded-[38px] p-5 overflow-hidden text-[#0B1A1C] relative border border-gray-100">
                
                {/* Dynamic Island / Notch */}
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-600 mb-4 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full mx-auto"></div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-[9px]">100%</span>
                  </div>
                </div>

                {/* Phone Header: Avatar, Name, Search */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500">
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                        alt="Sajjibur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400">Good Morning 👋</div>
                      <div className="text-xs font-bold text-[#0B1A1C]">Sajjibur Rahman</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Search className="w-4 h-4 cursor-pointer" />
                    <Bell className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>

                {/* Total Balance Card */}
                <div className="bg-[#F8FAF9] rounded-2xl p-4 border border-gray-200/70 mb-5">
                  <div className="text-[10px] text-gray-500 font-medium">Total Balance</div>
                  <div className="text-2xl font-black text-[#0B1A1C] font-mono mt-0.5">
                    $124,892.65
                  </div>
                  <div className="text-[10px] text-[#00D287] font-semibold flex items-center gap-1 mt-1 font-mono">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+8.42% Today (+$9,684.20)</span>
                  </div>

                  {/* 4 Action Round Buttons */}
                  <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                    <div>
                      <button className="w-9 h-9 mx-auto rounded-full bg-[#0B1A1C] text-white flex items-center justify-center hover:bg-[#163337]">
                        <Plus className="w-4 h-4" />
                      </button>
                      <span className="text-[9px] font-bold text-gray-600 block mt-1">Deposit</span>
                    </div>
                    <div>
                      <button className="w-9 h-9 mx-auto rounded-full bg-gray-100 text-[#0B1A1C] flex items-center justify-center hover:bg-gray-200">
                        <Download className="w-4 h-4" />
                      </button>
                      <span className="text-[9px] font-bold text-gray-600 block mt-1">Withdraw</span>
                    </div>
                    <div>
                      <button className="w-9 h-9 mx-auto rounded-full bg-gray-100 text-[#0B1A1C] flex items-center justify-center hover:bg-gray-200">
                        <SendHorizontal className="w-4 h-4" />
                      </button>
                      <span className="text-[9px] font-bold text-gray-600 block mt-1">Transfer</span>
                    </div>
                    <div>
                      <button className="w-9 h-9 mx-auto rounded-full bg-gray-100 text-[#0B1A1C] flex items-center justify-center hover:bg-gray-200">
                        <Repeat className="w-4 h-4" />
                      </button>
                      <span className="text-[9px] font-bold text-gray-600 block mt-1">Swap</span>
                    </div>
                  </div>
                </div>

                {/* My Watchlist Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0B1A1C] mb-2.5">
                    <span>My Watchlist</span>
                    <span className="text-[10px] text-emerald-600 font-semibold cursor-pointer">See All</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F9FBFA]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">
                          A
                        </div>
                        <span className="text-[10px] font-bold text-[#0B1A1C]">Cardano (ADA)</span>
                      </div>
                      <div className="text-xs font-black font-mono">$23.45</div>
                      <div className="text-[9px] text-[#00D287] font-semibold flex items-center gap-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                        <span>+0.85%</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F9FBFA]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[8px] font-bold">
                          P
                        </div>
                        <span className="text-[10px] font-bold text-[#0B1A1C]">Polkadot (DOT)</span>
                      </div>
                      <div className="text-xs font-black font-mono">$23.45</div>
                      <div className="text-[9px] text-[#00D287] font-semibold flex items-center gap-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                        <span>+0.85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Movers Section */}
                <div>
                  <div className="text-xs font-bold text-[#0B1A1C] mb-2">Top Movers</div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F9FBFA] border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center font-black text-xs">
                        ₿
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0B1A1C]">Bitcoin (BTC)</div>
                        <div className="text-[9px] text-gray-400">1.284 BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-[#0B1A1C] font-mono">$108,425.80</div>
                      <div className="text-[9px] text-[#00D287] font-semibold flex items-center justify-end gap-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                        <span>+2.34%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
