import React from 'react';
import { HERO_ASSETS } from '../data/mockData';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-[#eae6df] border-t border-[#0a4b5c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border-3 border-[#0a4b5c] p-6 sm:p-12 shadow-xl relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="absolute top-0 right-0 bg-[#b8ff00] text-[#0a4b5c] text-xs font-black px-6 py-2 rounded-bl-2xl border-b-2 border-l-2 border-[#0a4b5c] uppercase tracking-widest hidden sm:block">
            EST. 2024 • SAN DIEGO
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#0a4b5c] shadow-lg relative group">
                <img
                  src={HERO_ASSETS.storyGuy}
                  alt="Founder Story"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4b5c]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-script text-2xl text-[#b8ff00] font-bold block">
                    from our kitchen table
                  </span>
                  <p className="text-xs font-bold text-white/90">JULIAN & ELENA — FOUNDERS</p>
                </div>
              </div>
            </div>

            {/* Right Story Copy Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
                  our origin story
                </span>
              </div>

              <h2 className="font-display-title text-3xl sm:text-5xl font-black text-[#0a4b5c] uppercase leading-tight tracking-tight">
                DRINKS SHOULD BE REFRESHING, NOT COMPLICATED.
              </h2>

              <p className="text-sm sm:text-base text-[#0a4b5c]/80 leading-relaxed font-medium">
                We started VERDA because we got tired of choosing between sugary sodas loaded with artificial syrup and plain sparkling waters that tasted like disappointment. We knew there had to be a middle path: real cold-pressed fruits, whole botanicals, and zero fake stuff.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#eae6df] p-4 rounded-xl border border-[#0a4b5c]/10">
                  <span className="font-display-title text-2xl font-black text-[#0a4b5c]">100%</span>
                  <p className="text-xs text-[#0a4b5c]/80 font-bold uppercase">Organic Botanical Extraction</p>
                </div>
                <div className="bg-[#eae6df] p-4 rounded-xl border border-[#0a4b5c]/10">
                  <span className="font-display-title text-2xl font-black text-emerald-800">ZERO</span>
                  <p className="text-xs text-[#0a4b5c]/80 font-bold uppercase">Concentrates & Lab Flavors</p>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4 border-t border-[#0a4b5c]/10">
                <span className="font-script text-3xl font-bold text-[#0a4b5c]">
                  Julian & Elena
                </span>
                <span className="text-xs font-bold text-[#0a4b5c]/60 uppercase tracking-widest">
                  Co-Founders of VERDA
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
