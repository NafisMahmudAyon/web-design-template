import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqsList } from '../data/flowzyData';

export default function FaqSection({ onContactSales }) {
  // Item 02 is open by default as shown in design mockup
  const [openIds, setOpenIds] = useState({ '02': true });

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF9FE] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Consultation Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex mb-4">
                <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
                Frequently Asked <br />
                Questions
              </h2>
            </div>

            {/* Still have a question Card */}
            <div className="bg-white rounded-3xl p-7 border border-purple-100/70 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">Still have a question?</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Don't worry we're free for consultation. Speak with our workflow architects today.
                </p>
              </div>
              <button
                onClick={onContactSales}
                className="px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-sm shadow-purple-500/20"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: Numbered Accordions (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqsList.map((faq) => {
              const isOpen = !!openIds[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-purple-200 shadow-sm'
                      : 'bg-white/80 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-gray-400">
                        {faq.id}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#0F172A] font-display">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-[#7C3AED] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pl-14 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-2">
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
      </div>
    </section>
  );
}
