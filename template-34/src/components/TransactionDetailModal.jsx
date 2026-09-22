import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Download, ExternalLink, ShieldCheck } from 'lucide-react';

export default function TransactionDetailModal({ isOpen, onClose, transaction }) {
  if (!isOpen || !transaction) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-black/5 text-[#141814]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-base font-bold text-[#141814]">Transaction Receipt</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Receipt Body */}
          <div className="mt-4 space-y-4">
            <div className="text-center py-2">
              <span className={`text-3xl font-extrabold ${
                transaction.type === 'income' ? 'text-[#10B981]' : 'text-[#141814]'
              }`}>
                {transaction.amount}
              </span>
              <p className="text-xs font-bold text-gray-700 mt-1">{transaction.name}</p>
              <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
                {transaction.status}
              </span>
            </div>

            <div className="bg-[#F8F9F7] p-3.5 rounded-2xl text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">Transaction ID</span>
                <span className="font-mono font-bold text-gray-800">TXN-89421094</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">Category</span>
                <span className="font-semibold text-gray-800">{transaction.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">Payment Method</span>
                <span className="font-semibold text-gray-800">{transaction.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">Date & Time</span>
                <span className="font-semibold text-gray-800">{transaction.date} • 14:22 UTC</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-[#141814] text-white font-bold text-xs shadow-sm hover:bg-black transition-colors"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
