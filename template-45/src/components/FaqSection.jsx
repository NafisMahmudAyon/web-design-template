import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/logistiqoData';

export default function FaqSection() {
  const [openItems, setOpenItems] = useState({
    '1': true,
    '2': true,
    '3': true,
    '4': true,
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
            // FAQ //
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display uppercase max-w-xl">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-medium">
              Everything you need to know to plan and execute your global shipments with confidence.
            </p>
          </div>
        </div>

        {/* 4 Numbered Question Rows matching mockup */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div key={item.id} className="py-8 transition-colors hover:bg-white/60">
                <div
                  onClick={() => toggleItem(item.id)}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start cursor-pointer select-none"
                >
                  {/* Left: Number + Question */}
                  <div className="lg:col-span-6 flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                      item.id === '2' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.id}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {/* Right: Answer Paragraph */}
                  <div className="lg:col-span-6 pl-12 lg:pl-0">
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
