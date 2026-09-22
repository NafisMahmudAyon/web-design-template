import React, { useState } from 'react';
import { 
  ChevronDown, 
  RotateCcw, 
  Plus, 
  ArrowDownLeft, 
  ArrowLeftRight, 
  Send 
} from 'lucide-react';

export const BalanceQuickActions = ({ onDeposit, onWithdraw, onSwap, onTransfer }) => {
  const [network, setNetwork] = useState('BNB Chain');
  const [networkMenuOpen, setNetworkMenuOpen] = useState(false);
  const [time, setTime] = useState('16:12:45');

  const handleRefresh = () => {
    const now = new Date();
    setTime(now.toTimeString().split(' ')[0]);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card flex flex-col justify-between">
      <div>
        {/* Network selector & Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500">My Balance</span>
          
          <div className="relative">
            <button
              onClick={() => setNetworkMenuOpen(!networkMenuOpen)}
              className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700 flex items-center gap-1.5 hover:border-slate-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{network}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {networkMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 rounded-xl bg-white border border-slate-200 shadow-lg py-1 z-30 animate-in fade-in zoom-in-95 duration-150">
                {['BNB Chain', 'Ethereum', 'Polygon', 'Arbitrum', 'Solana'].map((net) => (
                  <button
                    key={net}
                    onClick={() => {
                      setNetwork(net);
                      setNetworkMenuOpen(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-raxon-orange transition-colors"
                  >
                    {net}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Big Balance Number */}
        <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight my-2">
          $102,540.00
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-6">
          <span>{time}</span>
          <button
            onClick={handleRefresh}
            className="hover:text-slate-700 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* 4 Quick Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onDeposit}
          className="py-3 px-4 rounded-2xl bg-raxon-orange text-white text-xs font-bold hover:bg-raxon-orange-hover shadow-sm shadow-raxon-orange/20 transition-all flex items-center justify-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Deposit</span>
        </button>

        <button
          onClick={onWithdraw}
          className="py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowDownLeft className="w-4 h-4 text-slate-500" />
          <span>Withdraw</span>
        </button>

        <button
          onClick={onSwap}
          className="py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowLeftRight className="w-4 h-4 text-slate-500" />
          <span>Swap</span>
        </button>

        <button
          onClick={onTransfer}
          className="py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
        >
          <Send className="w-4 h-4 text-slate-500" />
          <span>Transfer</span>
        </button>
      </div>
    </div>
  );
};
