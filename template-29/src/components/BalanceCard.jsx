import React, { useState } from 'react';
import { RefreshCw, ArrowUpRight, ArrowDownLeft, Repeat, Send, ChevronDown } from 'lucide-react';

export default function BalanceCard({ openModal }) {
  const [selectedChain, setSelectedChain] = useState('BNB Chain');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showChainMenu, setShowChainMenu] = useState(false);

  const chains = ['BNB Chain', 'Ethereum Mainnet', 'Solana Network', 'Polygon POS'];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[360px] relative">
      
      {/* Top Header: My Balance & Network Dropdown */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-900 dark:text-white text-base">
          My Balance
        </h3>

        {/* Network Badge & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowChainMenu(!showChainMenu)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200/60 dark:border-amber-800/40 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{selectedChain}</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {showChainMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-40">
              {chains.map((chain) => (
                <button
                  key={chain}
                  onClick={() => {
                    setSelectedChain(chain);
                    setShowChainMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedChain === chain
                      ? 'text-[#FF5B37] bg-[#FF5B37]/5 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                  }`}
                >
                  {chain}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Big Balance Amount */}
      <div className="my-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          $102,540.00
        </h1>
        <div className="flex items-center gap-3 mt-1.5 text-xs font-semibold text-slate-400">
          <span>16:12:45</span>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-[#FF5B37]' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* 4 Action Buttons Grid (2x2) */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        
        {/* Deposit Button */}
        <button
          onClick={() => openModal('deposit')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF5B37] hover:bg-[#E84A26] text-white font-bold text-sm shadow-md shadow-[#FF5B37]/25 hover:shadow-lg hover:shadow-[#FF5B37]/35 transition-all group"
        >
          <span className="text-lg leading-none font-black group-hover:scale-110 transition-transform">+</span>
          <span>Deposit</span>
        </button>

        {/* Withdraw Button */}
        <button
          onClick={() => openModal('withdraw')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200/60 dark:border-slate-600/40 transition-all group"
        >
          <ArrowDownLeft className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:translate-y-0.5 transition-transform" />
          <span>Withdraw</span>
        </button>

        {/* Swap Button */}
        <button
          onClick={() => openModal('swap')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200/60 dark:border-slate-600/40 transition-all group"
        >
          <Repeat className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:rotate-180 transition-transform duration-300" />
          <span>Swap</span>
        </button>

        {/* Transfer Button */}
        <button
          onClick={() => openModal('transfer')}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200/60 dark:border-slate-600/40 transition-all group"
        >
          <Send className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:translate-x-0.5 transition-transform" />
          <span>Transfer</span>
        </button>

      </div>

    </div>
  );
}
