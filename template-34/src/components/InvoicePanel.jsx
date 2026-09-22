import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { invoiceData } from '../data/mockFinanceData';

export default function InvoicePanel({ onSelectInvoice }) {
  // Total 25 segmented ticks for 100 score (80% = 20 active ticks)
  const totalTicks = 25;
  const activeTicks = 20;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Unpaid':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-rose-500">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Unpaid</span>
          </span>
        );
      case 'Paid':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Paid</span>
          </span>
        );
      case 'Overdue':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-900">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-900"></span>
            <span>Overdue</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-600">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>Pending</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base sm:text-lg font-bold text-[#141814] tracking-tight">
          Invoice
        </h2>
        <button 
          title="Invoice options"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Payment Score Segmented Tick Bar */}
      <div className="flex items-center justify-between bg-[#F8F9F7] p-3 rounded-2xl border border-black/[0.03] mb-4">
        <span className="text-xs font-bold text-[#141814] flex-shrink-0">
          Payment Score
        </span>

        {/* 25 Segmented Vertical Ticks */}
        <div className="flex items-center gap-0.5 px-2 flex-1 max-w-[170px] justify-center">
          {Array.from({ length: totalTicks }).map((_, i) => (
            <div
              key={i}
              className={`w-[2.5px] h-3.5 rounded-full transition-colors ${
                i < activeTicks ? 'bg-[#10B981]' : 'bg-[#E5E7EB]'
              }`}
            />
          ))}
        </div>

        <span className="text-xs font-extrabold text-[#141814] flex-shrink-0">
          80 <span className="text-gray-400 font-medium">/100</span>
        </span>
      </div>

      {/* Invoices List */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        {invoiceData.map((inv) => (
          <motion.div
            key={inv.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectInvoice && onSelectInvoice(inv)}
            className="group flex items-center justify-between p-2 rounded-2xl hover:bg-[#F8F9F7] transition-all cursor-pointer border border-transparent hover:border-black/[0.03]"
          >
            {/* Date & Due text */}
            <div className="w-24 flex-shrink-0">
              <p className="text-xs font-bold text-[#141814]">
                {inv.date}
              </p>
              <p className="text-[10px] text-gray-400 font-medium">
                {inv.dueText}
              </p>
            </div>

            {/* Status Pill */}
            <div className="flex-1 px-2">
              {getStatusBadge(inv.status)}
            </div>

            {/* Client Name */}
            <div className="text-right pr-3 truncate hidden sm:block">
              <p className="text-xs font-semibold text-gray-700 truncate">
                {inv.client}
              </p>
            </div>

            {/* Amount */}
            <div className="text-right flex-shrink-0">
              <span className="text-xs font-extrabold text-[#141814]">
                {inv.amount}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
