import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, DollarSign, Users, RotateCcw } from 'lucide-react';

export default function StatDetailModal({ isOpen, onClose, stat }) {
  if (!isOpen || !stat) return null;

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
            <div>
              <h3 className="text-base font-bold text-[#141814]">{stat.title} Breakdown</h3>
              <p className="text-xs text-gray-500">Live transaction & cohort analysis</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-4 space-y-4">
            <div className="bg-[#F4F5F2] p-4 rounded-2xl">
              <span className="text-xs text-gray-500 font-medium">Metric Total</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#141814]">{stat.value}</span>
                <span className={`text-xs font-bold ${stat.changeType === 'increase' ? 'text-[#16A34A]' : 'text-rose-500'}`}>
                  {stat.changeType === 'increase' ? `▲ ${stat.change}` : `▼ ${stat.change}`} {stat.period}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {stat.details}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#141814] text-white font-bold text-xs shadow-sm"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
