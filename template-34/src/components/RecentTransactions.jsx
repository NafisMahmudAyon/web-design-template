import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { transactionsData } from '../data/mockFinanceData';

export default function RecentTransactions({ onSelectTransaction, onSeeAllClick }) {
  const getBrandLogo = (logo) => {
    switch (logo) {
      case 'netflix':
        return (
          <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-red-600 font-extrabold text-sm shadow-sm flex-shrink-0">
            N
          </div>
        );
      case 'figma':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#0ACF83]/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
          </div>
        );
      case 'paypal':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#003087]/10 flex items-center justify-center text-[#003087] font-bold text-xs shadow-sm flex-shrink-0">
            P
          </div>
        );
      case 'spotify':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#1ED760]/15 flex items-center justify-center text-[#1ED760] flex-shrink-0">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        );
      case 'adobe':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#FA0F00]/10 flex items-center justify-center text-[#FA0F00] font-extrabold text-xs shadow-sm flex-shrink-0">
            A
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs flex-shrink-0">
            $
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg font-bold text-[#141814] tracking-tight">
          Recent Transactions
        </h2>
        <button
          onClick={onSeeAllClick}
          className="text-xs font-bold text-gray-400 hover:text-black transition-colors focus:outline-none"
        >
          See All
        </button>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-12 text-[11px] font-bold text-gray-400 pb-2.5 border-b border-gray-100 px-2">
        <span className="col-span-4 sm:col-span-4">Description</span>
        <span className="col-span-2 hidden sm:block">Date</span>
        <span className="col-span-2 hidden sm:block">Method</span>
        <span className="col-span-4 sm:col-span-2 text-right sm:text-left">Amount</span>
        <span className="col-span-3 sm:col-span-1 text-center hidden sm:block">Status</span>
        <span className="col-span-4 sm:col-span-1 text-right">Action</span>
      </div>

      {/* Transactions List */}
      <div className="divide-y divide-gray-50 flex-1 flex flex-col justify-between">
        {transactionsData.map((tx) => (
          <motion.div
            key={tx.id}
            whileHover={{ backgroundColor: '#FAFBF9' }}
            onClick={() => onSelectTransaction && onSelectTransaction(tx)}
            className="grid grid-cols-12 items-center py-2.5 px-2 rounded-2xl cursor-pointer transition-colors group"
          >
            {/* Description & Icon */}
            <div className="col-span-4 sm:col-span-4 flex items-center gap-3 min-w-0 pr-2">
              {getBrandLogo(tx.logo)}
              <div className="truncate">
                <p className="text-xs font-bold text-[#141814] group-hover:text-blue-600 transition-colors truncate">
                  {tx.name}
                </p>
                <p className="text-[10px] text-gray-400 sm:hidden">
                  {tx.date} • {tx.method}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="col-span-2 hidden sm:block text-xs text-[#6C736A] font-medium">
              {tx.date}
            </div>

            {/* Method */}
            <div className="col-span-2 hidden sm:block text-xs text-[#6C736A] font-medium">
              {tx.method}
            </div>

            {/* Amount */}
            <div className={`col-span-4 sm:col-span-2 text-right sm:text-left text-xs font-bold ${
              tx.type === 'income' ? 'text-[#10B981]' : 'text-[#141814]'
            }`}>
              {tx.amount}
            </div>

            {/* Status */}
            <div className="col-span-3 sm:col-span-1 hidden sm:flex items-center justify-center">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  tx.status === 'Completed' ? 'bg-[#10B981]' : 'bg-amber-500'
                }`}></span>
                <span className={tx.status === 'Completed' ? 'text-[#10B981]' : 'text-amber-600'}>
                  {tx.status}
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="col-span-4 sm:col-span-1 text-right">
              <button 
                title="Options"
                className="w-7 h-7 rounded-lg inline-flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
