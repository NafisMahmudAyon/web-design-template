import React, { useState } from 'react';
import { Briefcase, Tag, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/salehouseData';

const iconMap = {
  Briefcase: Briefcase,
  Tag: Tag,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
};

export default function DifferentiatorsSection({ onSelectDifferentiator }) {
  const [activeCardId, setActiveCardId] = useState('competitive');

  return (
    <section id="why-medix" className="w-full py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Architectural Photo on Left, Title on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column / Image banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] w-full max-w-lg border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#ffe875] text-gray-900 mb-2">
                  Architecture & Engineering
                </span>
                <p className="text-sm font-semibold text-white/90">
                  Precision engineered modern developments since 2014.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column / Headings */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-16 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
              What Make Us <br />
              Different?
            </h2>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-6">
              Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-[#ffe875] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Our Commitments</span>
            </div>
          </div>
        </div>

        {/* Floating Polymorphic Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="w-full bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DIFFERENTIATORS.map((diff) => {
              const IconComponent = iconMap[diff.icon] || Briefcase;
              const isActive = activeCardId === diff.id;

              return (
                <div
                  key={diff.id}
                  onMouseEnter={() => setActiveCardId(diff.id)}
                  onClick={() => {
                    setActiveCardId(diff.id);
                    onSelectDifferentiator?.(diff);
                  }}
                  className={`relative h-[250px] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white shadow-xl ring-2 ring-[#ffe875] -translate-y-1'
                      : 'bg-white/60 hover:bg-white/90 border border-gray-100/80 shadow-sm'
                  }`}
                >
                  {/* Top: Icon */}
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#0052ff] flex items-center justify-center text-white shadow-md mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 capitalize mb-2">
                      {diff.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {diff.description}
                    </p>
                  </div>

                  {/* Bottom: Learn more link */}
                  <div className="pt-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all ${
                        isActive ? 'text-[#0052ff] gap-2.5' : 'text-gray-400 hover:text-[#0052ff]'
                      }`}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Active Indicator Accent Dot */}
                  {isActive && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#ffe875]" />
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
