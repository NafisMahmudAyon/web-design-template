import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2); // Item 3 open by default matching mockup

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
            • FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            We help to keep track of your expense and incomes, it shows the flow of records over a specific period of time. Such as weekly, monthly or yearly.
          </p>
        </div>

        {/* 2-Column Accordion Layout matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 dark:text-white hover:text-[#635BFF] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                    {isOpen ? <Minus className="w-4 h-4 text-[#635BFF]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
