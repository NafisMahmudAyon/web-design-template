import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  Calculator, 
  TrendingUp, 
  ArrowRight, 
  MoreHorizontal, 
  ChevronDown, 
  RotateCcw 
} from 'lucide-react';
import { KPI_CARDS } from '../data/oripioFinData';

export const OverviewKpiCards = ({ onResetData, onCardAction }) => {
  const [selectedMonth, setSelectedMonth] = useState('This Month');
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const getIcon = (id, isPrimary) => {
    switch (id) {
      case 'balance':
        return <Wallet className="w-5 h-5 text-emerald-800" />;
      case 'savings':
        return <Calculator className="w-5 h-5 text-indigo-600" />;
      case 'investment':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default:
        return <Wallet className="w-5 h-5" />;
    }
  };

  return (
    <section className="mb-8">
      {/* Overview Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Overview</h1>
          <p className="text-xs text-slate-500 mt-0.5">Here is the summary of overall data</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Timeframe dropdown */}
          <div className="relative">
            <button
              onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-300 flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>{selectedMonth}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {monthDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white border border-slate-200 shadow-lg py-1 z-30 animate-in fade-in zoom-in-95 duration-150">
                {['This Month', 'Last Month', 'Last 3 Months', 'This Year'].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setSelectedMonth(m);
                      setMonthDropdownOpen(false);
                    }}
                    className="w-full px-3.5 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-800 transition-colors"
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset Data Button */}
          <button
            onClick={onResetData}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-300 flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset Data</span>
          </button>
        </div>
      </div>

      {/* 3 Summary Cards - Applying Rule 1A: Stable height, zero CLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {KPI_CARDS.map((card, idx) => {
          const isPrimary = card.isPrimary;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 ${
                isPrimary
                  ? 'bg-gradient-to-br from-[#105B3A] via-[#157148] to-[#0A452B] text-white shadow-fin-emerald shadow-lg'
                  : 'bg-white border border-slate-200/80 hover:border-slate-300 text-slate-900 shadow-fin-card hover:shadow-fin-hover'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        isPrimary ? 'bg-white shadow-xs' : 'bg-slate-100'
                      }`}
                    >
                      {getIcon(card.id, isPrimary)}
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${isPrimary ? 'text-white' : 'text-slate-900'}`}>
                        {card.title}
                      </h3>
                      <p className={`text-[11px] ${isPrimary ? 'text-white/80' : 'text-slate-400'}`}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    aria-label="More options"
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isPrimary ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Amount & Change Pill */}
                <div className="flex items-center gap-3 my-4">
                  <span className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    isPrimary ? 'text-white' : 'text-slate-900'
                  }`}>
                    {card.amount}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      isPrimary
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className={`pt-4 border-t ${isPrimary ? 'border-white/15' : 'border-slate-100'} mt-2`}>
                <button
                  onClick={() => onCardAction && onCardAction(card)}
                  className={`w-full flex items-center justify-between text-xs font-bold group ${
                    isPrimary ? 'text-white hover:text-emerald-100' : 'text-slate-600 hover:text-emerald-800'
                  }`}
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
