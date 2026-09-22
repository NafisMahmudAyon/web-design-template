import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/pollinateData';

export const FaqSection = ({ onSeeAllFaqs }) => {
  const [openId, setOpenId] = useState('q1');

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-700">FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Your Questions <br />
            Everything You <br />
            Need
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-8 leading-relaxed">
            Find clear answers to common questions about our services and features.
          </p>

          <button
            onClick={onSeeAllFaqs}
            className="px-6 py-2.5 rounded-full bg-[#0B0F15] hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-colors"
          >
            See All FAQ's
          </button>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-7 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B0F15] text-white shadow-xl'
                    : 'bg-[#F4F5F7] text-slate-900 hover:bg-slate-100/90'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="text-sm sm:text-base font-bold tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? 'border-white/20 bg-white/10 text-white'
                      : 'border-slate-300/80 bg-white text-slate-700'
                  }`}>
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
                      <div className="px-6 pb-6 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/10">
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
};
