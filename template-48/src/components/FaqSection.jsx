import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_LIST } from '../data/terraFarmData';

export const FaqSection = ({ onContactUs }) => {
  const [openNum, setOpenNum] = useState('02'); // item 02 is open by default as in mockup

  const toggle = (num) => {
    setOpenNum(openNum === num ? null : num);
  };

  return (
    <section className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terra-muted uppercase tracking-wider mb-4">
                <span>[</span>
                <span className="text-terra-forest">FAQ</span>
                <span>]</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
                Frequently Asked <br />
                <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">
                  Questions
                </span>
              </h2>
            </div>

            {/* Still have a question card */}
            <div className="p-8 rounded-3xl bg-white border border-terra-border shadow-terra-soft space-y-4">
              <h3 className="text-lg font-bold text-terra-dark">Still have a question?</h3>
              <p className="text-xs sm:text-sm text-terra-muted leading-relaxed">
                Don't worry we're free for consultation. Contact us anytime for farm guidance.
              </p>
              <button
                onClick={onContactUs}
                className="px-6 py-3 rounded-full bg-terra-forest text-white text-xs font-bold hover:bg-terra-dark transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 01-05 Numbered Accordion Rows (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_LIST.map((item) => {
              const isOpen = openNum === item.num;

              return (
                <div
                  key={item.num}
                  onClick={() => toggle(item.num)}
                  className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                    isOpen
                      ? 'bg-terra-subtle border-terra-border shadow-xs'
                      : 'bg-white border-terra-border hover:border-terra-forest/40'
                  }`}
                >
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs sm:text-sm font-bold text-terra-muted font-mono">
                        {item.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-terra-dark text-left">
                        {item.question}
                      </h3>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white border border-terra-border flex items-center justify-center text-terra-dark shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-terra-muted border-t border-terra-border/50 text-left pl-12 sm:pl-14 leading-relaxed">
                          {item.answer}
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
};
