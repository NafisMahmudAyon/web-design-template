import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export default function FaqSection({ onOpenGetStarted }) {
  const [openIdx, setOpenIdx] = useState(1); // Item 02 expanded by default

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Support Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
                <span>⚙ FAQ</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
                Frequently Asked <br />
                Questions
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2">
                Everything you need to know, explained clearly and simply.
              </p>
            </div>

            {/* Support Prompt Box */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm max-w-sm">
              <h4 className="font-display text-base font-black text-[#090d16]">
                Still Have Questions?
              </h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Our support team is here to help with anything you need, anytime.
              </p>
              <button
                onClick={onOpenGetStarted}
                className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-6 py-3 rounded-full shadow-sm transition-all"
              >
                <span>Contact Support</span>
              </button>
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left space-x-4"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono font-bold text-gray-400">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-base font-black text-[#090d16]">
                        {item.q}
                      </h3>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[#090d16]">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-xs text-gray-600 font-medium leading-relaxed pl-9 pt-2 border-t border-gray-100">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
