import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { faqsList } from '../data/finexaData';

export default function FaqGrid() {
  // Items 3 and 4 are open by default as shown in the design mockup
  const [openIds, setOpenIds] = useState({ 3: true, 4: true });

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Odd IDs on left, Even IDs on right
  const leftFaqs = faqsList.filter((f) => f.id % 2 !== 0);
  const rightFaqs = faqsList.filter((f) => f.id % 2 === 0);

  const renderFaqItem = (faq) => {
    const isOpen = !!openIds[faq.id];

    return (
      <div
        key={faq.id}
        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? 'bg-white border-blue-200 shadow-sm'
            : 'bg-[#FAF9FE] border-gray-200 hover:border-gray-300'
        }`}
      >
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full flex items-center justify-between p-5 text-left gap-4"
        >
          <span className="text-xs sm:text-sm font-bold text-[#09182A] font-display">
            {faq.question}
          </span>
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 flex-shrink-0">
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
              <div className="px-5 pb-5 text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-2.5">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            Everything you need to know, answered clearly in one place.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">{leftFaqs.map(renderFaqItem)}</div>
          <div className="space-y-4">{rightFaqs.map(renderFaqItem)}</div>
        </div>

      </div>
    </section>
  );
}
