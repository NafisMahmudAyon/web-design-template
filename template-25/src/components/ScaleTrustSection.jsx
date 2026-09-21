import React from 'react';
import { STATS } from '../data/mockData';

export default function ScaleTrustSection() {
  return (
    <section className="py-20 bg-[#eff1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0b2416] leading-tight uppercase tracking-tight">
              BUILT FOR SCALE, <br />
              <span className="text-[#0b2416] bg-[#bef264] px-3 py-0.5 rounded-xl border border-[#0b2416]">
                TRUSTED AT SCALE.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#0b2416]/80 font-medium leading-relaxed">
              We hold ourselves to a bank-grade standard and publish our numbers openly — because trust should be measurable.
            </p>
          </div>

          {/* Right 4 Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border-2 border-[#0b2416] shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display text-3xl sm:text-4xl font-black text-[#0b2416] block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-[#0b2416]/70 font-bold uppercase tracking-wide block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
