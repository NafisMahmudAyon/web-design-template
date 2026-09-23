import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { featuredProducts } from '../data/casalaData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  const results = query.trim()
    ? featuredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.designer.toLowerCase().includes(query.toLowerCase()) ||
          p.tag.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative bg-white rounded-xl shadow-2xl border border-gray-100 max-w-xl w-full p-4 z-10 overflow-hidden"
          >
            <div className="flex items-center space-x-3 px-3 py-2 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Capsule armchairs, benches, acoustic pods..."
                className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Suggestions or Search Results */}
            <div className="p-3 max-h-80 overflow-y-auto">
              {query.trim() === '' ? (
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Popular Collections
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Capsule High-Back', 'Capsule Lounge', 'Acoustic Pod', 'Oak Frame Bench'].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setQuery(item)}
                          className="text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-casala-teal px-3 py-1.5 rounded-full border border-gray-100 transition-colors"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="py-8 text-center text-gray-400 text-sm">
                  No products found for "{query}"
                </div>
              ) : (
                <div className="space-y-2">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-contain bg-white rounded p-1 border border-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900">{product.name}</h4>
                        <p className="text-xs text-gray-400">{product.tag}</p>
                      </div>
                      <span className="text-xs font-bold text-red-600">${product.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
