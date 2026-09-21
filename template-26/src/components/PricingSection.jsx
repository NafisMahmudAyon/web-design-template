import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

export default function PricingSection({ onOpenSignUp }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-black uppercase text-gray-400 tracking-widest block">
            | Pricing Plan |
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#090d16]">
            Simple and <em className="font-serif italic font-normal">Transparent Pricing</em>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Choose a plan that fits your financial journey.
          </p>

          {/* Billing Switch */}
          <div className="pt-4 inline-flex items-center space-x-3 bg-gray-200 p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs font-black transition-all ${
                !isYearly ? 'bg-[#090d16] text-white shadow-md' : 'text-gray-600 hover:text-[#090d16]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-xs font-black transition-all ${
                isYearly ? 'bg-[#090d16] text-white shadow-md' : 'text-gray-600 hover:text-[#090d16]'
              }`}
            >
              Yearly (Save 15%)
            </button>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border-2 flex flex-col justify-between shadow-sm relative transition-all duration-300 hover:shadow-xl ${
                  plan.isPopular ? 'border-[#090d16] md:-translate-y-2' : 'border-gray-200'
                }`}
              >
                {/* Popular Tag */}
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b0f92b] text-[#090d16] text-[10px] font-black uppercase px-4 py-1 rounded-full border border-[#090d16]">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-display text-xl font-black text-[#090d16] mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline space-x-1 mb-3">
                    <span className="font-display text-4xl font-black text-[#090d16]">
                      ${price}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">/month</span>
                  </div>

                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  <div className="space-y-3 border-t border-gray-100 pt-6 mb-8">
                    <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block">
                      What's included:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs font-bold text-gray-700">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenSignUp}
                  className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border-2 border-[#090d16] ${
                    plan.isPopular
                      ? 'bg-[#b0f92b] text-[#090d16] hover:bg-[#a0eb1b] shadow-md'
                      : 'bg-white text-[#090d16] hover:bg-[#090d16] hover:text-white'
                  }`}
                >
                  {plan.priceMonthly === 0 ? 'Get Started Free' : `Upgrade to ${plan.name}`}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
