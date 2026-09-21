import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export default function FaqSection({ onOpenSignUp }) {
  const [openIndex, setOpenIndex] = useState(1); // Item 2 open by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title & Contact Prompt Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-black uppercase text-gray-400 tracking-widest block mb-2">
                | FAQ |
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#090d16]">
                Frequently Asked <br />
                Questions
              </h2>
            </div>

            {/* Support Prompt Box */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm max-w-sm">
              <h4 className="font-display text-base font-black text-[#090d16]">
                Still have a question?
              </h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Don't worry we're free for consultation. Reach out anytime and our team will get back in minutes.
              </p>
              <button
                onClick={onOpenSignUp}
                className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-6 py-3 rounded-full shadow-sm transition-all"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Accordion List Column */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;

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
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#090d16]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-xs text-gray-600 font-medium leading-relaxed pl-9 pt-2 border-t border-gray-100">
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
