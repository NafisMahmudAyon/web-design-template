import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/logistiqoData';

export default function ServicesSection({ onGetQuote }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => (prev === 0 ? SERVICES_LIST.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => (prev >= SERVICES_LIST.length - 2 ? 0 : prev + 1));
  };

  const displayedServices = [
    SERVICES_LIST[startIndex],
    SERVICES_LIST[(startIndex + 1) % SERVICES_LIST.length],
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
            // OUR SERVICES //
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display uppercase">
              Explore Our Services
            </h2>

            {/* Carousel Navigation Buttons & Counter (Rule 1B) */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-slate-400">
                (SERVICES {startIndex + 1}/04)
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                  title="Previous service"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                  title="Next service"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Big Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedServices.map((service) => (
            <div key={service.id} className="group cursor-pointer space-y-4">
              {/* Photo Frame */}
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-lg relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title & Status */}
              <div className="flex items-baseline justify-between gap-2 pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-red-600 transition">
                  {service.title}
                </h3>
                <span className="text-xs font-mono font-semibold text-slate-400 flex-shrink-0">
                  {service.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Spotlight Banner matching mockup */}
        <div className="pt-8 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo card */}
            <div className="md:col-span-4 flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                alt="Logistics Manager"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <span className="text-xs font-bold text-slate-900 block">Rock Bottom</span>
                <span className="text-[10px] text-slate-400 block font-mono">(Graphic Design - 2025)</span>
              </div>
            </div>

            {/* Right Text & Quote button */}
            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug max-w-lg font-display">
                We deliver logistics solutions that move your business forward, simplifying shipping so you can focus on growth.
              </p>

              <button
                onClick={onGetQuote}
                className="px-6 py-3 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-bold shadow-red-glow hover:shadow-lg transition active:scale-95 flex items-center gap-2 self-start sm:self-auto flex-shrink-0"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
