import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/evergreenData';

export const FAQSection = () => {
  const [openId, setOpenId] = useState('faq-1'); // First item open by default as in Figma

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
              {faqData.headline}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
              {faqData.subtitle}
            </p>
          </div>
        </div>

        {/* 5 Accordion Items */}
        <div className="flex flex-col gap-4">
          {faqData.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-serif font-medium text-slate-900">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-slate-500 bg-slate-100">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-7 pt-2 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          <div className={item.image ? 'md:col-span-8' : 'md:col-span-12'}>
                            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                              {item.answer}
                            </p>
                          </div>

                          {item.image && (
                            <div className="md:col-span-4 h-36 rounded-xl overflow-hidden shadow-sm bg-slate-100">
                              <img
                                src={item.image}
                                alt="Living Room Interior"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
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
};
