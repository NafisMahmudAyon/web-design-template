import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { faqList } from '../data/saasData';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState('switch');

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-display"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'bg-[#F9FAFB] border-gray-300 shadow-xs'
                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                    {faq.question}
                  </h3>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-gray-500">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-100"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
