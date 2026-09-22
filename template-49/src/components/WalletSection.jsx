import React from 'react';
import { motion } from 'framer-motion';
import { Plus, MoreVertical } from 'lucide-react';
import { WALLET_CURRENCIES } from '../data/oripioFinData';

export const WalletSection = ({ onAddNewWallet }) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-fin-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-slate-900">My Wallet</h2>
          <p className="text-xs text-slate-400 mt-0.5">Today 1 USD = 122.20 BDT</p>
        </div>

        <button
          onClick={onAddNewWallet}
          className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New</span>
        </button>
      </div>

      {/* 2x2 Currencies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WALLET_CURRENCIES.map((wallet) => (
          <div
            key={wallet.id}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors flex flex-col justify-between"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">{wallet.flag}</span>
                <span className="text-xs font-bold text-slate-700">{wallet.currency}</span>
              </div>

              <button
                aria-label="Options"
                className="text-slate-400 hover:text-slate-700 p-0.5 rounded"
              >
                <MoreVertical className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Amount */}
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-1">
              {wallet.amount}
            </div>

            {/* Limit & Status */}
            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-200/50">
              <span className="text-slate-400">{wallet.limit}</span>
              <span
                className={`font-semibold ${
                  wallet.isActive ? 'text-emerald-600' : 'text-slate-400'
                }`}
              >
                {wallet.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
