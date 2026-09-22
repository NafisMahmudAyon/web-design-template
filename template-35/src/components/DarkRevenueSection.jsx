import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, TrendingUp, Users, Zap, CheckCircle2, DollarSign, ArrowUpRight } from 'lucide-react';

export default function DarkRevenueSection() {
  const recurringPills = [
    { title: 'Real-Time Revenue', desc: 'See live updates on your monthly recurring income.', icon: RefreshCw },
    { title: 'Growth Insights', desc: 'Understand trends and forecast revenue.', icon: TrendingUp },
    { title: 'Retention Overview', desc: 'Spot churn early and increase lifetime value.', icon: Users },
  ];

  const invoicePills = [
    { title: 'Create & Send Fast', desc: 'Generate professional invoices in seconds.', icon: Zap },
    { title: 'Track Every Status', desc: 'Instantly see which invoices are sent, viewed, overdue.', icon: CheckCircle2 },
    { title: 'Get Paid Faster', desc: 'Get paid easily through connected payments.', icon: DollarSign },
  ];

  const payoutItems = [
    { flag: '🇦🇺', country: 'Australia', amount: 'A$1,200' },
    { flag: '🇺🇸', country: 'United States', amount: '$2,000' },
    { flag: '🇮🇹', country: 'Italy', amount: '€1,500' },
    { flag: '🇲🇽', country: 'Mexico', amount: '$2,200' },
    { flag: '🇳🇿', country: 'New Zealand', amount: 'NZ$1,100' },
  ];

  return (
    <section className="py-24 bg-[#141814] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-24">
        
        {/* Block 1: Real-Time Recurring Revenue Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Real-Time Recurring Revenue Insights
            </h3>
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed font-medium">
              Monitor recurring income in real time and understand your business growth.
            </p>

            <div className="space-y-3 pt-2">
              {recurringPills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{pill.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card: Earnings $98,343.23 (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white text-[#141814] rounded-3xl p-7 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500">Analysis</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 font-medium">Earnings</p>
              <p className="text-3xl font-extrabold text-[#141814] mt-0.5 mb-6">$98,343.23</p>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-36 gap-2 pt-2">
                {[
                  { m: 'Jan', v: 35 },
                  { m: 'Feb', v: 48 },
                  { m: 'Mar', v: 58 },
                  { m: 'Apr', v: 92, active: true },
                  { m: 'May', v: 42 },
                  { m: 'Jun', v: 62 },
                ].map((b) => (
                  <div key={b.m} className="flex-1 flex flex-col items-center h-full justify-end">
                    <div
                      style={{ height: `${b.v}%` }}
                      className={`w-full rounded-t-lg transition-all ${
                        b.active ? 'bg-[#141814]' : 'bg-gray-200'
                      }`}
                    />
                    <span className="text-[10px] font-semibold text-gray-400 mt-2">{b.m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Block 2: Professional Invoices Made Simple */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Card: Country Payouts (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white text-[#141814] rounded-3xl p-6 shadow-2xl space-y-3"
            >
              {payoutItems.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{p.flag}</span>
                    <span className="text-xs font-bold text-[#141814]">{p.country}</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#141814]">{p.amount}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Professional Invoices Made Simple
            </h3>
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed font-medium">
              Create, send, and track professional invoices from one simple dashboard.
            </p>

            <div className="space-y-3 pt-2">
              {invoicePills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{pill.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
