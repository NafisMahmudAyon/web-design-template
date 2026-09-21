import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, TrendingUp, Layers } from 'lucide-react';

export default function CoreFeaturesSection({ onOpenSignUp }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Built for Individuals and Businesses',
      desc: 'Whether you are managing personal budgets or handling business accounts, our tools adapt to your financial goals.'
    },
    {
      title: 'Real Time Financial Insights',
      desc: 'Instant data processing and smart category tagging give you absolute clarity on cash flow.'
    },
    {
      title: 'Secure and Reliable Infrastructure',
      desc: 'Bank-grade encryption protocols and continuous threat monitoring protect every single cent.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase text-gray-400 tracking-widest block">
              | Core Features |
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#090d16]">
              Built for Individuals <em className="font-serif italic font-normal">and</em> Businesses
            </h2>

            <div className="space-y-4 pt-2">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                    activeFeature === idx
                      ? 'bg-white border-[#090d16] shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeFeature === idx ? 'bg-[#b0f92b] text-[#090d16]' : 'bg-gray-200 text-gray-600'
                    }`}>
                      ✓
                    </div>
                    <h3 className="font-display text-base font-black text-[#090d16]">
                      {feat.title}
                    </h3>
                  </div>

                  {activeFeature === idx && (
                    <p className="mt-2 text-xs text-gray-600 font-medium leading-relaxed pl-9">
                      {feat.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenSignUp}
                className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-7 py-3.5 rounded-full shadow-md transition-all"
              >
                <span>Explore More</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-6 relative">
            <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-8 rounded-3xl shadow-xl relative overflow-hidden text-white min-h-[420px] flex flex-col justify-between">
              
              {/* Currency Balance Card Stack */}
              <div className="bg-white/95 text-[#090d16] p-5 rounded-2xl shadow-lg space-y-3 max-w-sm border border-gray-100">
                <div className="flex items-center justify-between text-xs font-black">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">🇺🇸</span>
                    <span>United States</span>
                  </div>
                  <span className="font-display text-sm font-black">$1,500</span>
                </div>

                <div className="flex items-center justify-between text-xs font-black border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">🇫🇷</span>
                    <span>France</span>
                  </div>
                  <span className="font-display text-sm font-black">€1,200</span>
                </div>

                <div className="flex items-center justify-between text-xs font-black border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">🇬🇧</span>
                    <span>United Kingdom</span>
                  </div>
                  <span className="font-display text-sm font-black">£900</span>
                </div>
              </div>

              {/* Floating Performance Analytics Highlight Pill */}
              <div className="absolute top-16 right-6 bg-[#b0f92b] text-[#090d16] p-4 rounded-2xl shadow-2xl border-2 border-[#090d16] space-y-1 transform rotate-3 hover:rotate-0 transition-transform">
                <span className="text-[10px] font-black uppercase text-gray-700 block">
                  Performance Analytics
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-2xl font-black">35%</span>
                  <TrendingUp className="w-5 h-5 text-[#090d16]" />
                </div>
                <span className="text-[10px] font-bold text-gray-800 bg-white/60 px-2 py-0.5 rounded inline-block">
                  Best insights
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
