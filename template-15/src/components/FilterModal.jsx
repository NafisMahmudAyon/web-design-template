import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function FilterModal({ isOpen, onClose }) {
  const [selectedRange, setSelectedRange] = useState('This Month');
  const [selectedCategories, setSelectedCategories] = useState(['Salary', 'Freelance', 'Food']);

  if (!isOpen) return null;

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold text-gray-900">Filter Visualization</h3>
        <p className="text-xs text-gray-500 mt-0.5">Customize metrics, dates, and cash flow sources.</p>

        {/* Date Filter */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-700 mb-2">Time Period</label>
          <div className="grid grid-cols-3 gap-2">
            {['This Week', 'This Month', 'All Year'].map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setSelectedRange(range)}
                className={`py-2 text-xs font-medium rounded-xl border text-center transition-all ${
                  selectedRange === range
                    ? 'border-[#186F65] bg-teal-50 text-[#186F65] font-semibold'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Category Toggles */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-700 mb-2">Active Streams</label>
          <div className="flex flex-wrap gap-2">
            {['Salary', 'Freelance', 'Business', 'Food', 'Rent', 'Savings', 'Transport'].map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-[#186F65] border-[#186F65] text-white'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#186F65] hover:bg-[#145a52] text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCategories(['Salary', 'Freelance', 'Food', 'Rent', 'Savings']);
              setSelectedRange('This Month');
            }}
            className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
