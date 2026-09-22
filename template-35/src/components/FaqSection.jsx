import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Headphones } from 'lucide-react';
import { faqsList } from '../data/contentData';

export default function FaqSection({ onBookConsultation }) {
  // Items 02 and 05 are open by default as shown in the mockup
  const [openItems, setOpenItems] = useState({ '02': true, '05': true });

  const toggleItem = (num) => {
    setOpenItems((prev) => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  return (
    <section id="faq" className="py-24 bg-[#F8F9F7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#141814] mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
            Quick Answers & Support
          </h2>
          <p className="text-sm text-[#6C736A] mt-2 font-medium">
            Everything you need to know, explained clearly and simply.
          </p>
        </div>

        {/* 2 Columns: Left Consultation Card & Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Consultation Support Card (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-card border border-black/[0.04]">
            <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100 relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=450&q=80"
                alt="Personal guidance specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                <span>Live Advisor Online</span>
              </div>
            </div>

            <h3 className="text-base font-bold text-[#141814]">Need personal guidance?</h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-medium">
              Our financial specialists are ready to help you make confident decisions.
            </p>

            <button
              onClick={onBookConsultation}
              className="mt-6 w-full py-3 rounded-full bg-[#141814] text-white text-xs font-bold shadow-sm hover:bg-black transition-all flex items-center justify-center gap-1.5 focus:outline-none"
            >
              <span>Book a consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Categorized FAQ Accordions (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Account Category */}
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 pl-1">
                Account
              </span>

              {faqsList.filter((f) => f.category === 'ACCOUNT').map((faq) => {
                const isOpen = !!openItems[faq.num];

                return (
                  <div
                    key={faq.num}
                    className="bg-white rounded-2xl border border-black/[0.04] shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleItem(faq.num)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400 font-mono">{faq.num}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#141814]">{faq.question}</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 flex-shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed pl-10">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Payments Category */}
            <div className="space-y-3 pt-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 pl-1">
                Payments
              </span>

              {faqsList.filter((f) => f.category === 'PAYMENTS').map((faq) => {
                const isOpen = !!openItems[faq.num];

                return (
                  <div
                    key={faq.num}
                    className="bg-white rounded-2xl border border-black/[0.04] shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleItem(faq.num)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400 font-mono">{faq.num}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#141814]">{faq.question}</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 flex-shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed pl-10">
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

      </div>
    </section>
  );
}
