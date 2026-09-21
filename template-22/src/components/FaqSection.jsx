import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Item 1 open by default matching mockup

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Common Questions from Smart Travelers
        </h2>
        <p className="text-base sm:text-lg text-gray-400 font-sans max-w-2xl mx-auto">
          Discover how our AI Travel Planner helps you create personalized trips, adjust plans instantly, and explore with confidence.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all border ${
                isOpen
                  ? 'bg-[#0f1824] border-cyan-400 shadow-cyan-glow'
                  : 'bg-[#0b131c] border-white/10 hover:border-white/25'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display text-lg sm:text-xl font-bold text-white">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-cyan-500 text-black rotate-180' : 'bg-white/10 text-white'
                  }`}
                >
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
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-300 font-sans leading-relaxed border-t border-white/10 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
