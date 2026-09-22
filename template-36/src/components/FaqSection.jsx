import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Download, HelpCircle } from 'lucide-react';
import { faqsList } from '../data/cryptoData';

export default function FaqSection({ onConsultationClick }) {
  // Question 02 is open by default as shown in the design mockup
  const [openIds, setOpenIds] = useState({ '02': true });

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-24 bg-[#F9FBFA] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Still Have a Question Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200/70 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
                Frequently Asked <br />
                Questions
              </h2>
            </div>

            {/* Still have a question card */}
            <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B1A1C]">Still have a question?</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Don't worry we're free for consultation. Speak with our digital asset architects.
                </p>
              </div>
              <button
                onClick={onConsultationClick}
                className="px-5 py-2.5 rounded-full bg-[#0B1A1C] text-white text-xs font-semibold hover:bg-[#163337] transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#00D287]" />
                <span>Download App</span>
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
                      ? 'bg-white border-gray-300 shadow-sm'
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
                      <span className="text-sm sm:text-base font-bold text-[#0B1A1C] font-display">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0B1A1C] text-white' : 'bg-gray-100 text-gray-600'
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
                        <div className="px-5 pb-5 pl-14 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-2 font-normal">
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
