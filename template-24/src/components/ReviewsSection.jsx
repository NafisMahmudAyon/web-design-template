import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-[#eae6df] border-t border-[#0a4b5c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
              real sips, real feedback
            </span>
          </div>
          
          <h2 className="font-display-title text-4xl sm:text-6xl font-black text-[#0a4b5c] uppercase tracking-tight">
            PEOPLE ARE INTO IT.
          </h2>

          {/* Overall Rating Badge */}
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-2.5 rounded-full border-2 border-[#0a4b5c] shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display-title text-xl font-extrabold text-[#0a4b5c]">4.8 / 5.0</span>
            <span className="text-xs font-bold text-[#0a4b5c]/70 border-l border-gray-300 pl-3">
              BASED ON 1,420+ VERIFIED SIPS
            </span>
          </div>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, index) => {
            let cardBg = 'bg-white text-[#0a4b5c] border-[#0a4b5c]';
            if (rev.isDark) {
              cardBg = 'bg-[#0a4b5c] text-white border-[#0a4b5c]';
            } else if (rev.isYellow) {
              cardBg = 'bg-[#f7c948] text-[#0a4b5c] border-[#0a4b5c]';
            }

            return (
              <div
                key={index}
                className={`rounded-3xl border-2 ${cardBg} p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className={`w-6 h-6 opacity-30 ${rev.isDark ? 'text-white' : 'text-[#0a4b5c]'}`} />
                  </div>

                  <p className="text-sm font-medium leading-relaxed italic">
                    {rev.quote}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-current/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display-title text-base font-black uppercase tracking-tight">
                      {rev.author}
                    </h4>
                    <p className="text-[10px] font-bold tracking-widest opacity-80 uppercase">
                      {rev.role} • {rev.city}
                    </p>
                  </div>
                  <span className="text-xs font-black px-2 py-1 rounded bg-black/10">
                    {rev.rating}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
