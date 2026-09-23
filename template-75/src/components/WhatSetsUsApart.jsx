import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import { whatSetsUsApart } from '../data/casalaData';

export default function WhatSetsUsApart({ onDiscover }) {
  const [expandedId, setExpandedId] = useState('quality');

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Interactive Accordion Cards + Discover Button */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-serif text-[#171A1F] tracking-tight mb-4"
            >
              What Sets Us Apart?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-[#60646C] leading-relaxed max-w-lg mb-8"
            >
              At Casala, we're not just another furniture store; we're a destination for comfort and style. Here's why you should choose us
            </motion.p>

            {/* Checklist / Accordion Cards */}
            <div className="space-y-3.5 mb-8 max-w-lg">
              {whatSetsUsApart.map((item, idx) => {
                const isOpen = expandedId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onClick={() => toggleAccordion(item.id)}
                    className={`rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen
                        ? 'bg-white border-casala-teal/40 shadow-md ring-1 ring-casala-teal/20'
                        : 'bg-white/80 border-gray-100 hover:border-gray-300 hover:bg-white shadow-xs'
                    }`}
                  >
                    <div className="p-4 sm:p-4.5 flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        {/* Black circle with white tick (Figma style) */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                            isOpen ? 'bg-casala-teal text-white' : 'bg-[#1A1D20] text-white'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-semibold text-[#1F2428] tracking-tight">
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-casala-teal' : ''
                        }`}
                      />
                    </div>

                    {/* Accordion Content Drawer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 pt-1 sm:px-4.5 border-t border-gray-50"
                        >
                          <p className="text-xs sm:text-[13px] text-[#60646C] leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Discover CTA Button (Figma Charcoal Pill) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={onDiscover}
                className="bg-[#565452] hover:bg-[#43413F] text-white px-9 py-3.5 rounded-sm font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 group"
              >
                <span>Discover</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Tall Pod Capsule Chair Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-[360px] sm:max-w-[420px] w-full group cursor-pointer"
            >
              {/* Floor Shadow */}
              <div className="absolute -bottom-4 right-1/4 w-3/4 h-8 bg-black/15 blur-xl rounded-full transition-transform duration-500 group-hover:scale-105" />

              <img
                src="/assets/sets-apart-chair.png"
                alt="Casala Capsule Acoustic Pod Chair"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
              />

              {/* Floating Feature Tag */}
              <div className="absolute top-1/3 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-gray-100 shadow-md hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-casala-teal animate-ping" />
                <div>
                  <p className="text-[11px] font-bold text-gray-900">Acoustic Shield</p>
                  <p className="text-[10px] text-gray-500">Dual-Tone Gabriel Wool</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
