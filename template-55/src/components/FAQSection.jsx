import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { faqData } from '../data/finoraData';

export default function FAQSection({ onOpenConsultation }) {
  const [openItems, setOpenItems] = useState({ '02': true, '05': true });

  const toggleItem = (num) => {
    setOpenItems((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{faqData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
          >
            {faqData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
          >
            {faqData.subtitle}
          </motion.p>
        </div>

        {/* Content Layout: Left Advisor Card + Right Categorized Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Advisor Photo Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-7 shadow-xs hover:shadow-card transition-all"
            >
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={faqData.advisorCard.image}
                  alt="Customer support specialist"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-950 font-display">
                  {faqData.advisorCard.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                  {faqData.advisorCard.description}
                </p>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="mt-5 w-full py-3 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-1.5"
                >
                  <span>{faqData.advisorCard.buttonText}</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Categorized FAQ Items */}
          <div className="lg:col-span-8 space-y-10">
            {faqData.categories.map((cat) => (
              <div key={cat.category}>
                <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 block mb-4">
                  {cat.category}
                </span>

                <div className="space-y-3">
                  {cat.items.map((item) => {
                    const isOpen = !!openItems[item.num];

                    return (
                      <div
                        key={item.num}
                        className={`rounded-2xl border transition-all duration-200 ${
                          isOpen
                            ? 'bg-[#FAFAF9] border-gray-300/90 shadow-xs'
                            : 'bg-white border-gray-200/80 hover:border-gray-300'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(item.num)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-gray-400 font-display">
                              {item.num}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-gray-900">
                              {item.question}
                            </span>
                          </div>

                          <div className="text-gray-400 flex-shrink-0">
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60">
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
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
