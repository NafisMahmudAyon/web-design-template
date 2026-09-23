import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { products } from '../data/furnData';

export const SearchModal = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 border border-neutral-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chairs, sofas, tables, or collections..."
              className="w-full text-base text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-xs">
          <span className="text-neutral-400">Trending:</span>
          {['Armchair', 'Sofa', 'Velvet', 'Italian Luxury'].map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="px-3 py-1 rounded-full bg-[#FAF8F5] hover:bg-neutral-200/60 text-neutral-700 font-medium transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-72 overflow-y-auto space-y-2">
          {results.length === 0 ? (
            <p className="text-xs text-neutral-400 text-center py-8">
              No matching pieces found for "{query}".
            </p>
          ) : (
            results.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF8F5] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F4EFEA] p-1 flex items-center justify-center shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-neutral-900 group-hover:text-furn-forest transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs text-neutral-400">{p.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-sm text-furn-forest">
                    ${p.price.toFixed(2)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-800 transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
