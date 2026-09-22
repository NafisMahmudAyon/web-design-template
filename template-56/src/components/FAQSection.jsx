import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { faqData } from '../data/wanderlustData';

export const FAQSection = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState('faq-2'); // Item 2 open by default as in Figma

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brandEmerald" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {faqData.headline}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about our bespoke travel itineraries, booking guarantees, and support.
          </p>
        </div>

        {/* 2-Column Content: Left Traveler Visual & Support Card, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Showcase & Direct Help Pill */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] bg-slate-900 border border-slate-100 group">
              <img
                src={faqData.illustration}
                alt="Traveler exploring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandForestDark/90 via-transparent to-black/20" />

              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-brandAmber" />
                  <span>24/7 Global Concierge</span>
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Still Have Questions?</h3>
                <p className="text-sm text-slate-200 mb-4 font-light">
                  Our destination specialists are ready to craft a tailor-made journey tailored to your rhythm.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking?.()}
                    className="px-5 py-2.5 rounded-full bg-brandAmber text-brandForestDark text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors shadow"
                  >
                    Contact Concierge
                  </button>
                  <a
                    href="tel:+880170107008"
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-colors"
                    aria-label="Call support"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqData.items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'border-brandEmerald/40 bg-emerald-50/40 shadow-sm'
                      : 'border-slate-200/90 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-serif font-medium text-slate-900">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-brandEmerald text-white rotate-180'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-emerald-100/60 font-sans">
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
