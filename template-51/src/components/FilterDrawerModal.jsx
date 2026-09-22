import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';

export default function FilterDrawerModal({ isOpen, onClose, onApplyFilters }) {
  const [selectedStatuses, setSelectedStatuses] = useState(['Completed', 'Processing']);
  const [selectedCategories, setSelectedCategories] = useState(['Electronics', 'Footwear']);
  const [priceRange, setPriceRange] = useState('all');

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleReset = () => {
    setSelectedStatuses(['Completed', 'Processing', 'On Hold']);
    setSelectedCategories(['Electronics', 'Footwear', 'Audio', 'Peripherals', 'Apparel', 'Accessories']);
    setPriceRange('all');
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (onApplyFilters) {
      onApplyFilters({ selectedStatuses, selectedCategories, priceRange });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-[#5E43F3] flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Filter Sales & Orders
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleApply} className="mt-5 space-y-4">
            {/* Statuses */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Order Status
              </label>
              <div className="flex flex-wrap gap-2">
                {['Completed', 'Processing', 'On Hold', 'Cancelled'].map((status) => {
                  const active = selectedStatuses.includes(status);
                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => toggleStatus(status)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        active
                          ? 'bg-[#5E43F3] text-white border-[#5E43F3]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Product Category
              </label>
              <div className="flex flex-wrap gap-2">
                {['Electronics', 'Footwear', 'Audio', 'Peripherals', 'Apparel', 'Accessories'].map((cat) => {
                  const active = selectedCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        active
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Price Range
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under250', label: 'Under $250' },
                  { id: 'above500', label: '$500+' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPriceRange(item.id)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                      priceRange === item.id
                        ? 'border-[#5E43F3] bg-indigo-50/70 text-[#5E43F3]'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-full bg-[#5E43F3] hover:bg-[#5136E6] text-xs font-semibold text-white shadow-md shadow-[#5E43F3]/25 transition-all"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
