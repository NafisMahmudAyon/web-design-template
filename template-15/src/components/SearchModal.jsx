import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ArrowUpRight, DollarSign, Wallet, FileText, TrendingUp } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickItems = [
    { title: 'Salary Deposit ($8,500)', category: 'Income', icon: DollarSign },
    { title: 'McDonalds Dinner (-$72.25)', category: 'Food & Dining', icon: Wallet },
    { title: 'Spotify Premium (-$12.12)', category: 'Subscriptions', icon: FileText },
    { title: 'Bitcoin Portfolio (+12%)', category: 'Crypto Asset', icon: TrendingUp },
    { title: 'Starbucks Coffee (-$24.32)', category: 'Food & Dining', icon: Wallet },
  ];

  const filtered = query.trim()
    ? quickItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : quickItems;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search transactions, accounts, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-3 max-h-80 overflow-y-auto divide-y divide-gray-50">
          <div className="text-[11px] font-semibold text-gray-400 px-3 py-1.5 uppercase tracking-wider">
            Quick Suggestions
          </div>
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#186F65]/10 group-hover:text-[#186F65] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors" />
                </div>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-gray-400">
              No matching records found.
            </div>
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
          <span>Navigate with <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded">↑</kbd> <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded">↓</kbd></span>
          <span>Close with <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded">Esc</kbd></span>
        </div>
      </div>
    </div>
  );
}
