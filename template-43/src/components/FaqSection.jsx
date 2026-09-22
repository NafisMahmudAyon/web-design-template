import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/finexaData';

export default function FaqSection() {
  // Store set of open item IDs (defaulting to 3 and 4 as shown in screenshot)
  const [openItems, setOpenItems] = useState({
    'faq-3': true,
    'faq-4': true,
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Split into left and right columns
  const leftItems = FAQ_ITEMS.filter((_, i) => i % 2 === 0);
  const rightItems = FAQ_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold">
            <MessageSquare className="w-3.5 h-3.5 fill-blue-500" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Everything you need to know, answered clearly in one place.
          </p>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftItems.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-100/60 transition"
                  >
                    <span>{item.question}</span>
                    <span className="p-1 rounded-lg bg-white border border-slate-200/60 text-slate-500 flex-shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-200/50">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightItems.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-100/60 transition"
                  >
                    <span>{item.question}</span>
                    <span className="p-1 rounded-lg bg-white border border-slate-200/60 text-slate-500 flex-shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-200/50">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
