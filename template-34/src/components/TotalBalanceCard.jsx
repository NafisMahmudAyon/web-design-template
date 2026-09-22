import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, ChevronDown } from 'lucide-react';

export default function TotalBalanceCard({ onTransferClick, onRequestClick }) {
  const [currency, setCurrency] = useState('USD');
  const [currencyMenu, setCurrencyMenu] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between">
      
      {/* Top Header: Label & Currency Picker */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#6C736A]">
          Total Balance
        </span>

        {/* Currency Picker */}
        <div className="relative">
          <button
            onClick={() => setCurrencyMenu(!currencyMenu)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-black/[0.06] bg-[#F8F9F7] text-xs font-bold text-[#141814] hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <span className="text-xs">🇺🇸</span>
            <span>{currency}</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </button>

          {currencyMenu && (
            <div className="absolute right-0 mt-1 w-24 rounded-xl bg-white p-1 shadow-lg border border-black/5 z-20 text-xs">
              {['USD', 'EUR', 'GBP'].map((c) => (
                <button
                  key={c}
                  onClick={() => { setCurrency(c); setCurrencyMenu(false); }}
                  className="w-full text-left px-2 py-1 rounded-lg hover:bg-gray-50 font-medium text-gray-800"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Big Balance Amount & Growth Tag */}
      <div className="my-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
          $689,372.00
        </h2>
        
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-[11px] font-bold text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-full flex items-center gap-0.5">
            <span>↑ 5%</span>
          </span>
          <span className="text-xs font-medium text-[#7A8376]">
            than last month
          </span>
        </div>
      </div>

      {/* Action Buttons: Transfer & Request */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onTransferClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#141814] text-white text-xs font-bold shadow-sm hover:bg-black transition-all focus:outline-none"
        >
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Transfer</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRequestClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#F4F5F2] hover:bg-[#EAECE8] text-[#141814] text-xs font-bold transition-all focus:outline-none border border-black/[0.03]"
        >
          <ArrowDownLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Request</span>
        </motion.button>
      </div>

    </div>
  );
}
