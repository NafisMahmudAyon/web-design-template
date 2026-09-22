import React, { useState } from 'react';
import { 
  Wallet, 
  ChevronDown, 
  Eye, 
  EyeOff, 
  TrendingUp, 
  Send, 
  FileText, 
  DollarSign 
} from 'lucide-react';

export default function TotalBalanceCard({ onOpenAction }) {
  const [showBalance, setShowBalance] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const rawAmount = 128430.50;
  const formattedBalance = showBalance 
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rawAmount)
    : '••••••••••';

  return (
    <div className="bg-[#FFFFFF] border border-slate-200/90 rounded-3xl p-6 shadow-steadi-card relative overflow-hidden flex flex-col justify-between">
      <div>
        {/* Top Header: Wallet Icon, Title, and Currency Dropdown */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Wallet className="w-4 h-4" />
            </div>
            <span>Total Balance</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 transition"
            >
              <span>🇺🇸</span>
              <span>{currency}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {currencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-xl z-20 animate-in fade-in zoom-in-95">
                {['USD', 'EUR', 'GBP', 'CAD'].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setCurrencyDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Balance Display Row with Decorative Matrix on Right */}
        <div className="flex items-center justify-between mt-2 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {formattedBalance}
              </h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
                title={showBalance ? 'Hide balance' : 'Show balance'}
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>

            {/* Growth Pill */}
            <div className="mt-2.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-bold text-orange-600">
                <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                <span>+12.4% vs Last Week</span>
              </span>
            </div>
          </div>

          {/* Decorative Dot Matrix graphic matching mockup */}
          <div className="hidden sm:grid grid-cols-4 gap-1.5 p-2 opacity-80 select-none">
            <div className="w-2.5 h-2.5 rounded-xs bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-400" />

            <div className="w-2.5 h-2.5 rounded-xs bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-300" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-500" />

            <div className="w-2.5 h-2.5 rounded-xs bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-400" />
            <div className="w-2.5 h-2.5 rounded-xs bg-orange-600" />
          </div>
        </div>
      </div>

      {/* 3 Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <button
          onClick={() => onOpenAction('receive')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-sm transition active:scale-95"
        >
          <DollarSign className="w-4 h-4 text-orange-400" />
          <span>Receive Money</span>
        </button>

        <button
          onClick={() => onOpenAction('send')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200/80 transition active:scale-95"
        >
          <Send className="w-3.5 h-3.5 text-slate-500" />
          <span>Send Money</span>
        </button>

        <button
          onClick={() => onOpenAction('request')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200/80 transition active:scale-95"
        >
          <FileText className="w-3.5 h-3.5 text-slate-500" />
          <span>Payment Request</span>
        </button>
      </div>
    </div>
  );
}
