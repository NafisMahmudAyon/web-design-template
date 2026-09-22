import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Plus, Minus, ArrowRight, Mail } from 'lucide-react';
import { faqData } from '../data/greenovaData';

export default function FAQSection({ onOpenContactModal }) {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Callout Box */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-gray-400/80 bg-white/80 text-xs font-semibold text-gray-800 shadow-xs mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-gray-700" />
                <span>{faqData.sectionTag}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight font-display"
              >
                Frequently Asked <br />
                Questions
              </motion.h2>
            </div>

            {/* Still have a question? Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-12 sm:mt-24 p-6 sm:p-7 rounded-[26px] bg-white border border-gray-200/80 shadow-card"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                {faqData.callout.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
                {faqData.callout.subtitle}
              </p>

              <div className="mt-6">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  {faqData.callout.buttonText}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
            {faqData.questions.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                        isOpen ? 'text-gray-950 font-bold' : 'text-gray-800 group-hover:text-gray-950'
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`p-1.5 rounded-full transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm text-gray-600 leading-relaxed max-w-2xl font-normal">
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
