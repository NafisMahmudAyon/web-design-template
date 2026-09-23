import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/groceryData';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [activeFaqId, setActiveFaqId] = useState(2); // Item 2 is default expanded in mockup

  const toggleFaq = (id) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-16 bg-[#fafcfa] border-t border-emerald-900/10 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Frequently <span className="text-[#0c6b3e]">Asked Questions</span>
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#0c6b3e] text-white border-[#0c6b3e] shadow-lg'
                    : 'bg-white text-gray-900 border-gray-100 hover:border-emerald-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base cursor-pointer"
                >
                  <span className={isOpen ? 'text-white' : 'text-gray-800'}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-white/20 text-white' : 'text-gray-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-emerald-100/90 leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
