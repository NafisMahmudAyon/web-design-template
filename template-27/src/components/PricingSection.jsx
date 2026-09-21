import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

export default function PricingSection({ onOpenGetStarted }) {
  return (
    <section id="pricing" className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
              <span>⚙ Pricing Plans</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
              Simple Pricing for Every <br />
              Financial Need
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Choose a plan that fits your personal or business needs. Upgrade anytime as you grow.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between border-2 transition-all duration-300 relative shadow-sm hover:shadow-xl ${
                tier.isPopular
                  ? 'bg-[#090d16] text-white border-[#090d16] md:-translate-y-2'
                  : 'bg-white text-[#090d16] border-gray-200'
              }`}
            >
              {/* Popular Tag */}
              {tier.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-400 text-[#090d16] text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-xl font-black">
                    {tier.name}
                  </h3>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded ${
                    tier.isPopular ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tier.badge}
                  </span>
                </div>

                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="font-display text-4xl font-black">
                    {tier.price}
                  </span>
                  <span className={`text-xs font-bold ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tier.period}
                  </span>
                </div>

                <p className={`text-xs font-medium leading-relaxed mb-6 ${tier.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {tier.desc}
                </p>

                <div className="space-y-3 border-t border-current/10 pt-6 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider block opacity-70">
                    What's included:
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs font-bold">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.isPopular ? 'text-sky-400' : 'text-emerald-600'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenGetStarted}
                className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                  tier.isPopular
                    ? 'bg-white text-[#090d16] hover:bg-sky-400 shadow-md'
                    : 'bg-[#090d16] text-white hover:bg-black'
                }`}
              >
                <span>Get Started For Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
