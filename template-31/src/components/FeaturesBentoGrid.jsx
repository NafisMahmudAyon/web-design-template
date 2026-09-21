import React from 'react';
import { ShieldCheck, CreditCard, Users, TrendingUp } from 'lucide-react';

export default function FeaturesBentoGrid() {
  return (
    <section id="features" className="py-20 bg-[#F8FAFC] dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
            • Future of Finvesto
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Discover the Future of Seamless Global Payments
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
            Simplify your global transactions with fast, secure, and seamless payment solutions designed for modern businesses.
          </p>
        </div>

        {/* 2x2 Bento Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bento Card 1: Balance Visibility Bar Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col justify-between h-[420px]">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Balance Visibility at Your Fingertips
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-md">
                Instantly view your account balances and spending insights for smarter decisions.
              </p>
            </div>

            {/* Bar Chart Visual */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 mt-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-400">Total Spending</p>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">$7,889.90</h4>
              </div>

              {/* Bar Columns */}
              <div className="grid grid-cols-6 gap-3 items-end h-32 pt-4">
                {[
                  { month: 'Jan', height: '40%' },
                  { month: 'Feb', height: '85%', active: true, val: '$890' },
                  { month: 'Mar', height: '35%' },
                  { month: 'Apr', height: '60%' },
                  { month: 'May', height: '45%' },
                  { month: 'Jun', height: '70%' },
                ].map((item) => (
                  <div key={item.month} className="flex flex-col items-center gap-1.5 h-full justify-end relative group">
                    {item.active && (
                      <span className="absolute -top-7 text-[10px] font-black bg-[#635BFF] text-white px-2 py-0.5 rounded-full shadow-md">
                        {item.val}
                      </span>
                    )}
                    <div
                      className={`w-full rounded-xl transition-all duration-300 ${
                        item.active
                          ? 'bg-[#635BFF] shadow-md shadow-[#635BFF]/30'
                          : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300'
                      }`}
                      style={{ height: item.height }}
                    />
                    <span className="text-[10px] font-bold text-slate-400">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Track & Achieve Goals Line Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col justify-between h-[420px]">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Track and Achieve Your Financial Goals
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-md">
                Monitor earnings and savings progress to reach your goals faster and confidently.
              </p>
            </div>

            {/* Line Chart Visual */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 mt-4 flex-1 flex flex-col justify-between relative">
              <div className="flex justify-between items-center text-[11px] font-semibold">
                <div>
                  <p className="text-slate-400">Earning Overview</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">$4,235.00</h4>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1 text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-[#635BFF]" /> Savings
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-slate-300" /> Earning
                  </span>
                </div>
              </div>

              {/* Tooltip point highlight */}
              <div className="absolute top-16 right-20 bg-[#635BFF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                $42,430
              </div>

              {/* SVG Line mockup */}
              <div className="h-32 w-full pt-4">
                <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                  <path
                    d="M 0,80 Q 40,40 80,60 T 160,30 T 240,15 T 320,50 T 400,20"
                    fill="none"
                    stroke="#635BFF"
                    strokeWidth="3"
                  />
                  <path
                    d="M 0,90 Q 40,70 80,80 T 160,60 T 240,40 T 320,65 T 400,45"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="280" cy="20" r="5" fill="#635BFF" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex justify-between text-[9px] font-bold text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 3: Fast & Secure Payments */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col justify-between h-[380px] relative overflow-hidden">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Fast and Secure Payments Worldwide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-md">
                Send and receive payments instantly with bank-level security and encryption.
              </p>
            </div>

            {/* Graphic Illustration Cards */}
            <div className="bg-gradient-to-tr from-slate-100 to-indigo-50 dark:from-slate-900/80 dark:to-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 mt-4 flex-1 flex items-center justify-between relative">
              <div className="bg-emerald-400 text-slate-900 font-bold p-3 rounded-2xl shadow-lg w-40 text-xs transform -rotate-3">
                <p className="text-[10px] font-bold opacity-80">Bank Transfer</p>
                <p className="text-lg font-black mt-1">$3,200.00</p>
              </div>

              <div className="bg-slate-900 text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs font-bold">Secured Payment</p>
                  <p className="text-[9px] text-slate-400">256-bit Encrypted</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-2xl shadow-md text-xs font-bold">
                <p className="text-[10px] text-slate-400">Global Users</p>
                <p className="text-base font-black text-[#635BFF]">200k+</p>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Global Payment Gateway */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col justify-between h-[380px]">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Global Payment Gateway Integration
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-md">
                Access multiple international payment gateways to accept and manage payments seamlessly.
              </p>
            </div>

            {/* Wallets Display Box */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 mt-4 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Your Wallets</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">$983,284.00</h4>
                </div>
                <span className="text-xs font-bold text-slate-400">All Accounts</span>
              </div>

              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs">
                  <div>
                    <p className="text-[9px] text-slate-400">Account Type</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Credit Card •••• 8789</p>
                  </div>
                  <span className="font-black text-[#635BFF]">VISA</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs">
                  <div>
                    <p className="text-[9px] text-slate-400">Account Type</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Credit Card •••• 1234</p>
                  </div>
                  <span className="font-black text-amber-500">Payoneer</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
