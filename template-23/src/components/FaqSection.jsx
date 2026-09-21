import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-vantageBeige text-[#0b121b] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight text-[#0b121b]">
            BEFORE YOU BOOK.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-black/15 border-y border-black/15">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-condensed text-lg sm:text-xl font-bold uppercase tracking-wider text-[#0b121b] group-hover:text-vantageBlue-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/5 text-black flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 text-sm text-slate-700 font-sans leading-relaxed">
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
