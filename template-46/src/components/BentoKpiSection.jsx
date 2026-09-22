import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Lock, 
  BarChart3, 
  Users, 
  CreditCard,
  Layers
} from 'lucide-react';
import { KPI_PILLARS } from '../data/finoviaData';

export const BentoKpiSection = ({ onGetStarted }) => {
  return (
    <section id="about" className="py-24 bg-finovia-dark-subtle/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-finovia-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-finovia-lime mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intelligent Financial Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Personal Finance,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-finovia-lime via-emerald-300 to-lime-200">
              Real Financial Freedom
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Personal finance refers to managing money, budgeting, saving, and investing to achieve financial stability and long-term exponential goals.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Card 1: Electric Lime Featured Card (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#d2fc3b] via-[#c6f62f] to-[#b4ea1e] p-8 sm:p-10 text-finovia-dark flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-finovia-lime/10 group cursor-pointer"
            onClick={onGetStarted}
          >
            {/* Geometric accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-black/10 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-finovia-dark">
                  Autonomous Wealth
                </span>
                <div className="w-10 h-10 rounded-full bg-finovia-dark text-finovia-lime flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-finovia-dark leading-tight max-w-md">
                Wealth precision meets high-velocity personal touch
              </h3>
              <p className="mt-4 text-finovia-dark/80 text-sm sm:text-base font-medium max-w-lg">
                Automate portfolio rebalancing, micro-savings, and tax harvesting with high precision AI agents running 24/7 on your terms.
              </p>
            </div>

            {/* Embedded interactive preview pill */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-finovia-dark text-finovia-lime flex items-center justify-center font-bold text-lg shadow-lg">
                  $
                </div>
                <div>
                  <div className="text-xs font-semibold text-finovia-dark/70">Autonomous Yield</div>
                  <div className="text-xl font-black text-finovia-dark tracking-tight">+14.8% APY</div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/10 text-xs font-bold text-finovia-dark backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                <span>Zero Hidden Brokerage</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sales & Performance Analytics (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 rounded-3xl bg-finovia-card border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-finovia-lime/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-finovia-lime/10 border border-finovia-lime/20 flex items-center justify-center text-finovia-lime">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-white">Sales Analysis</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                +38.4%
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">$60,540.00</div>
              <p className="text-xs text-slate-400 mt-1">Real-time settlement across 180+ global currencies</p>

              {/* Simulated mini histogram */}
              <div className="mt-6 flex items-end gap-2 h-24 pt-4 border-b border-white/5 pb-2">
                {[45, 68, 52, 84, 60, 92, 78, 100, 85].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.05 * i }}
                      className={`w-full rounded-t-sm transition-all duration-300 ${
                        i === 7 ? 'bg-finovia-lime' : 'bg-white/15 group-hover/bar:bg-white/30'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-finovia-lime" />
                <span>100K+ Active Merchants</span>
              </div>
              <span className="text-white font-semibold">Updated 2m ago</span>
            </div>
          </motion.div>

          {/* Card 3: Personal Finance Toolkit (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-3xl bg-finovia-card border border-white/10 p-8 flex flex-col justify-between group hover:border-finovia-lime/40 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-finovia-lime mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Personal Finance Toolkit</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Smart recurring rules, multi-bucket vaults, and real-time cash flow radar designed for high net-worth individuals.
              </p>
            </div>

            <div className="mt-8 space-y-2.5">
              {['Smart Micro-Savings', 'Cross-Currency Vaults', 'Custom Tax Brackets'].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-finovia-lime" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: $100M Fraud Protection (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-3xl bg-finovia-card border border-white/10 p-8 flex flex-col justify-between group hover:border-finovia-lime/40 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">$100M Fraud Shield</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Continuous biometric verification, anomaly detection, and instant zero-liability coverage across all debit cards.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">100% Secure Guarantee</div>
                <div className="text-[11px] text-slate-400">SOC-2 Type II Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Green VISA Card Showcase (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#1a2214] to-[#12160e] border border-finovia-lime/30 p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-6">
              <CreditCard className="w-6 h-6 text-finovia-lime" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-finovia-lime">VISA PLATINUM</span>
            </div>

            <div>
              <div className="text-xs font-medium text-slate-400">Global Spending Tier</div>
              <div className="text-2xl font-bold text-white mt-1">Unlimited 3% Cashback</div>
              <p className="text-xs text-slate-400 mt-2">No foreign transaction fees, lounge access, concierge desk.</p>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-white/5">
              <span>•••• 8420</span>
              <span className="text-finovia-lime font-bold">PHYSICAL & VIRTUAL</span>
            </div>
          </motion.div>

        </div>

        {/* 4 Metric KPI Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {KPI_PILLARS.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ y: -2, borderColor: 'rgba(210, 252, 59, 0.4)' }}
              className="rounded-2xl bg-finovia-card/80 border border-white/10 p-6 text-center backdrop-blur-sm transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-finovia-lime to-emerald-300 tracking-tight">
                {kpi.metric}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                {kpi.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
