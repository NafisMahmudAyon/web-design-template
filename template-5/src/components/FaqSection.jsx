import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open as in the design

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1000px] mx-auto relative">
      {/* Background Dotted Matrix Pattern */}
      <div className="absolute inset-0 opacity-20 dotted-city-bg pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-4"
        >
          Discover Frequently <br />
          Asked Questions
        </motion.h2>

        <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Explore FAQs about Evodwell and our custom home approach. <br />
          Contact our team for more information.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 relative z-10">
        {faqList.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-b border-zinc-300/80 pb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-3 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-medium text-zinc-900 group-hover:text-breeze-600 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-600 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-zinc-900' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed pt-1 pb-3 pr-8 font-normal">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
