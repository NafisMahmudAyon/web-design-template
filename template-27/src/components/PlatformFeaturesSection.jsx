import React from 'react';
import { Wallet, CreditCard, TrendingUp, PieChart, Star, ArrowRight } from 'lucide-react';

export default function PlatformFeaturesSection({ onOpenGetStarted }) {
  return (
    <section id="features" className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
              <span>⚙ Platform Features</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
              Everything You Need to <br />
              Manage Your Money
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Powerful financial tools that help you save, spend, transfer, and track your money, all from one secure platform.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: Smart Digital Wallet */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#090d16]">
                Smart Digital Wallet
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Store funds securely, track every transaction, and manage your balance anytime from one intuitive wallet.
              </p>
            </div>

            {/* Team Wallet Mockup */}
            <div className="bg-[#f8f9fc] p-4 rounded-2xl border border-gray-200 space-y-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase block">Team Wallet Pnt</span>
              <span className="font-display text-2xl font-black text-[#090d16] block">$38,08.00</span>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 border-t border-gray-200 pt-2">
                <span>Engagement</span>
                <span className="text-emerald-600 font-black">99%</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Virtual Cards & Bill Payments */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#090d16]">
                Virtual Cards & Bill Payments
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Create virtual cards instantly, pay bills securely, and control your spending with just a few taps.
              </p>
            </div>

            {/* Card Stack Illustration */}
            <div className="bg-[#f8f9fc] p-4 rounded-2xl border border-gray-200 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase block">Pay credit card bills</span>
                <div className="w-24 h-12 rounded-xl bg-sky-600 text-white p-2 font-mono text-[9px] shadow-sm">
                  •••• 2078
                </div>
              </div>
              <div className="bg-[#090d16] text-white p-2.5 rounded-xl text-center space-y-0.5">
                <span className="font-display text-sm font-black block">5.0</span>
                <div className="flex text-amber-400 text-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Real Time Financial Insights */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#090d16]">
                Real Time Financial Insights
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Monitor spending, analyze trends, and make smarter financial decisions with live reports and personalized analytics.
              </p>
            </div>

            <div className="space-y-2 text-xs font-bold text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Up to 20% Lower Transaction Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>30M+ Active Users Worldwide</span>
              </div>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="w-full bg-[#090d16] hover:bg-black text-white text-xs font-black py-3 rounded-full transition-colors"
            >
              Get Started Free
            </button>
          </div>

          {/* Feature 4: 72% Smarter Spending */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <span className="font-display text-4xl font-black text-[#090d16]">72%</span>
              <h3 className="font-display text-2xl font-black text-[#090d16]">
                Smarter Spending
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                30M+ Transactions Processed seamlessly across global rails.
              </p>
            </div>

            <div className="bg-[#f8f9fc] p-4 rounded-2xl border border-gray-200 flex items-center justify-between">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>

              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                289K+ Active Users
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
