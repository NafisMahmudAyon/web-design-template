import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, TrendingUp, PackageCheck, Truck } from 'lucide-react';

export default function ProductDetailModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

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
            <h3 className="text-base font-bold text-[#141814]">Product Analytics & Inventory</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F4F5F2] border border-black/[0.04] p-2 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#141814]">{product.name}</h4>
                <p className="text-xs text-gray-500">{product.category}</p>
                <p className="text-sm font-extrabold text-[#F16522] mt-0.5">{product.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-[#F4F5F2] p-3.5 rounded-2xl text-xs">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Total Orders</span>
                <span className="font-extrabold text-gray-800">{product.salesCount}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Stock Available</span>
                <span className="font-extrabold text-[#16A34A]">482 units in EU & US</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Return Rate</span>
                <span className="font-extrabold text-gray-800">0.9% (Very Low)</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Fulfillment Status</span>
                <span className="font-extrabold text-blue-600">Same-Day Prime</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#141814] text-white font-bold text-xs shadow-sm"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
