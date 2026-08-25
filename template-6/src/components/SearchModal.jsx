import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight } from 'lucide-react';
import {
  heroProducts,
  bestsellingEssentials,
  exploreCategoriesProducts,
  featuredProductsGrid
} from '../data/products';

export default function SearchModal({ isOpen, onClose, onQuickView }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Collect all products into single search list
  const allProducts = useMemo(() => {
    const list = [
      ...heroProducts,
      ...bestsellingEssentials,
      exploreCategoriesProducts.featured,
      ...exploreCategoriesProducts.grid,
      ...featuredProductsGrid
    ];
    // Deduplicate by ID
    const unique = [];
    const seen = new Set();
    list.forEach(p => {
      if (p && p.id && !seen.has(p.id)) {
        seen.add(p.id);
        unique.push(p);
      }
    });
    return unique;
  }, []);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const q = searchTerm.toLowerCase();
    return allProducts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q))
    );
  }, [searchTerm, allProducts]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Search Modal Box */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-3xl bg-[#F5F5F5] border border-[#E2E2E2] shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Input Bar */}
          <div className="p-6 border-b border-[#E2E2E2] flex items-center gap-4 bg-white">
            <Search className="w-6 h-6 text-[#888888] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search products, brands, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-lg md:text-xl text-[#121212] bg-transparent focus:outline-none placeholder-[#999999]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 text-[#888888] hover:text-black"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#121212] hover:bg-[#F0F0F0] rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Suggestions / Results */}
          <div className="p-6 overflow-y-auto flex-1">
            {!searchTerm.trim() ? (
              <div className="space-y-4">
                <p className="text-xs uppercase font-bold text-[#888888] tracking-widest">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Jacket', 'Sneakers', 'Backpack', 'Watch', 'Skincare', 'Sherpa'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3.5 py-1.5 bg-white border border-[#E2E2E2] text-xs font-semibold text-black hover:bg-black hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-12 text-[#888888]">
                <p className="text-base font-semibold">No products found matching "{searchTerm}"</p>
                <p className="text-xs mt-1">Try searching for sneakers, jackets, watches, or bags.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="p-3 bg-white border border-[#E2E2E2] flex items-center gap-3 cursor-pointer hover:border-black transition-colors group"
                  >
                    <div className="w-16 h-16 bg-[#F5F5F5] flex items-center justify-center shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#121212] group-hover:text-black truncate">
                        {product.title}
                      </h4>
                      <p className="text-xs text-[#777777] mt-0.5">${product.price}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#999999] group-hover:text-black" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
