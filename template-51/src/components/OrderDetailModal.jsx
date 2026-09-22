import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Truck, ShieldCheck, ExternalLink } from 'lucide-react';

export default function OrderDetailModal({ order, onClose }) {
  if (!order) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#5E43F3]">
                  {order.id}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${order.statusStyle}`}>
                  {order.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                Order Overview
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
            <img
              src={order.image}
              alt={order.product}
              className="w-16 h-16 rounded-2xl object-cover bg-white border border-slate-200 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {order.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 truncate">
                {order.product}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                {order.variant}
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-sm font-bold text-slate-900 font-mono">
                  {order.total}
                </span>
                <span className="text-xs text-slate-400">
                  ({order.items})
                </span>
              </div>
            </div>
          </div>

          {/* Customer & Fulfillment Info */}
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
            <div className="p-3.5 rounded-2xl border border-slate-100 bg-white">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                Customer
              </span>
              <div className="flex items-center gap-2">
                <img
                  src={order.customerAvatar}
                  alt={order.customer}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-bold text-slate-800 truncate">
                  {order.customer}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Verified Buyer
              </span>
            </div>

            <div className="p-3.5 rounded-2xl border border-slate-100 bg-white">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                Order Date
              </span>
              <span className="font-bold text-slate-800 block">
                {order.date}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Standard Shipping
              </span>
            </div>
          </div>

          {/* Tracking Step progression */}
          <div className="mt-4 p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#5E43F3]" />
              <span className="font-semibold text-slate-700">Tracking:</span>
              <span className="font-mono text-slate-500">BOLT-749284-US</span>
            </div>
            <button
              type="button"
              className="text-xs font-bold text-[#5E43F3] hover:underline flex items-center gap-0.5"
            >
              <span>Track</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="pt-5 border-t border-slate-100 mt-5 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
