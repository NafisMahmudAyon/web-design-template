import React, { useState } from 'react';
import { 
  Wallet, 
  RotateCw, 
  ChevronDown, 
  PlusCircle, 
  ArrowUpRight, 
  ArrowLeftRight, 
  ArrowUpDown,
  DollarSign
} from 'lucide-react';

export default function TotalBalanceCard({ onOpenAction }) {
  const [balance, setBalance] = useState(403540.26);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Minor randomized market fluctuation
      const delta = (Math.random() - 0.48) * 120;
      setBalance(prev => Number((prev + delta).toFixed(2)));
      setIsRefreshing(false);
    }, 600);
  };

  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance);

  return (
    <div className="bg-[#12151F] border border-white/5 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-coinix relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Top Header: Wallet Pill & Currency Switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
            <Wallet className="w-5 h-5" />
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition"
            >
              <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[10px] font-bold">
                $
              </div>
              <span>{currency}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {currencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-[#1A1E2B] border border-white/10 rounded-2xl p-1.5 shadow-2xl z-30 animate-in fade-in zoom-in-95">
                {['USD', 'EUR', 'GBP', 'USDT'].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setCurrencyDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 rounded-xl transition font-medium"
                  >
                    {cur}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Total Balance Amount */}
        <div className="mb-6">
          <span className="text-xs font-medium text-slate-400 block mb-1">
            Total Balance
          </span>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {formattedBalance}
            </h2>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-400 transition"
              title="Refresh Balance"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-400' : ''}`} />
              <span className="text-[11px] font-medium">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Action Buttons in 2x2 grid */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onOpenAction('deposit')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-glow-primary transition active:scale-95"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Deposit</span>
        </button>

        <button
          onClick={() => onOpenAction('withdraw')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1A1D2A] hover:bg-[#202534] border border-white/5 text-slate-200 text-xs sm:text-sm font-semibold transition active:scale-95"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>Withdraw</span>
        </button>

        <button
          onClick={() => onOpenAction('transfer')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1A1D2A] hover:bg-[#202534] border border-white/5 text-slate-200 text-xs sm:text-sm font-semibold transition active:scale-95"
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>Transfer</span>
        </button>

        <button
          onClick={() => onOpenAction('swap')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1A1D2A] hover:bg-[#202534] border border-white/5 text-slate-200 text-xs sm:text-sm font-semibold transition active:scale-95"
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>Swap</span>
        </button>
      </div>
    </div>
  );
}
