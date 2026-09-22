import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/flowzyData';

export default function FaqSection({ onContactUs }) {
  const [openItems, setOpenItems] = useState({
    '02': true, // Open by default matching screenshot
  });

  const toggleItem = (num) => {
    setOpenItems(prev => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Subcard */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex p-1.5 rounded-xl bg-purple-100 text-purple-700">
                <HelpCircle className="w-4 h-4" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                Frequently Asked <br />
                Questions
              </h2>
            </div>

            {/* Still have a question subcard matching screenshot */}
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                Still have a question?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Don't worry, our team is ready to answer questions and walk you through a tailored demo.
              </p>
              <div className="pt-2">
                <button
                  onClick={onContactUs}
                  className="px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-100">
            {FAQ_ITEMS.map((item) => {
              const isOpen = !!openItems[item.num];
              return (
                <div key={item.num} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleItem(item.num)}
                    className="w-full text-left flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-600 transition">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition">
                        {item.question}
                      </span>
                    </div>

                    <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-purple-300 flex-shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="pl-9 pt-3 text-xs text-slate-600 leading-relaxed">
                          {item.answer}
                        </p>
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
