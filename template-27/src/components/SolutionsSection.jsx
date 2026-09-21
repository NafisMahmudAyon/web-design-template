import React, { useState } from 'react';
import { SOLUTIONS_LIST } from '../data/mockData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SolutionsSection() {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section id="solutions" className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
              <span>⚙ Our Solutions</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
              Financial Solutions <br />
              for Every Need
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Whether you're managing personal finances or growing a business, our platform provides secure, flexible, and powerful tools to simplify every transaction.
          </p>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 01-04 Accordion List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTIONS_LIST.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-[#090d16] text-white shadow-lg'
                      : 'bg-white text-[#090d16] border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-mono font-black ${isActive ? 'text-sky-400' : 'text-gray-400'}`}>
                      {item.num}
                    </span>
                    <h3 className="font-display text-base font-black">
                      {item.title}
                    </h3>
                  </div>

                  {isActive && (
                    <p className="mt-2 text-xs text-gray-300 font-medium leading-relaxed pl-8">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sky Blue Photo Card with 50M+ Badge (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-sky-500 border-4 border-white shadow-2xl h-[420px] group flex flex-col justify-end p-8">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85"
              alt="Solutions user"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent"></div>

            {/* Overlay Badge */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-200 text-[#090d16] space-y-1 shadow-xl max-w-sm">
              <span className="font-display text-3xl font-black text-[#090d16] block">
                50M+
              </span>
              <p className="text-xs font-bold text-gray-600">
                Secure transactions processed every year
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
