import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
            PEOPLE STAYED FOR <br />
            <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
              THE SMALL THINGS.
            </span>
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => {
            const isDark = t.isDark;

            return (
              <div
                key={idx}
                className={`rounded-3xl border-3 border-[#0b2416] p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 ${
                  isDark ? 'bg-[#0b2416] text-white' : 'bg-white text-[#0b2416]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className={`w-8 h-8 opacity-20 ${isDark ? 'text-[#bef264]' : 'text-[#0b2416]'}`} />
                  </div>

                  <p className="text-sm font-medium leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-black uppercase">
                      {t.author}
                    </h4>
                    <p className={`text-[10px] font-extrabold uppercase ${isDark ? 'text-[#bef264]' : 'text-gray-500'}`}>
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
