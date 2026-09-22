import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/agroviaData';

export const FaqSection = ({ onContactSupport }) => {
  const [openId, setOpenId] = useState('faq-2'); // default open second item as in mockup

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 bg-agro-cream border-t border-agro-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center mb-16">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agro-subtle border border-agro-border text-xs font-semibold text-agro-forest mb-4">
          <span>•</span>
          <span>FAQ</span>
          <span>•</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-agro-dark">
          Common Farmer <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-agro-forest">Questions</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-agro-muted max-w-xl mx-auto">
          Got questions? We've got answers to help you get the most out of Agrovia.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isOpen
                  ? 'bg-agro-subtle border-agro-border shadow-xs'
                  : 'bg-white border-agro-border hover:border-agro-forest/40'
              }`}
            >
              <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-bold text-agro-dark text-left">
                  {item.question}
                </h3>

                <div className="w-8 h-8 rounded-full bg-agro-cream border border-agro-border flex items-center justify-center text-agro-dark shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-agro-muted border-t border-agro-border/40 text-left leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Bottom CTA Button */}
        <div className="pt-8 text-center">
          <button
            onClick={onContactSupport}
            className="px-8 py-3.5 rounded-full bg-agro-forest text-white text-xs sm:text-sm font-bold hover:bg-agro-dark transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Still have question?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
