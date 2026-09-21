import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

export default function PricingSection({ onOpenAccount }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  return (
    <section id="pricing" className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
            SIMPLE PRICING. <br />
            <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
              NO ASTERISKS.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0b2416]/80 font-medium">
            Start free, upgrade the day it makes sense. Cancel in two taps, keep your account.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 inline-flex items-center space-x-3 bg-white p-1.5 rounded-full border-2 border-[#0b2416] shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-black transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#0b2416] text-[#bef264]'
                  : 'text-[#0b2416]/70 hover:text-[#0b2416]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-black transition-all flex items-center space-x-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-[#0b2416] text-[#bef264]'
                  : 'text-[#0b2416]/70 hover:text-[#0b2416]'
              }`}
            >
              <span>Yearly</span>
              <span className="bg-[#bef264] text-[#0b2416] text-[10px] font-black px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl border-3 border-[#0b2416] p-8 flex flex-col justify-between transition-all duration-300 relative shadow-md ${
                  tier.isPopular
                    ? 'bg-[#0b2416] text-white shadow-2xl md:-translate-y-2'
                    : 'bg-white text-[#0b2416]'
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#bef264] text-[#0b2416] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full border border-[#0b2416]">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className={`font-display text-2xl font-black uppercase mb-1 ${tier.isPopular ? 'text-[#bef264]' : 'text-[#0b2416]'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs font-medium mb-6 ${tier.isPopular ? 'text-white/80' : 'text-[#0b2416]/70'}`}>
                    {tier.tagline}
                  </p>

                  <div className="flex items-baseline space-x-1 mb-8">
                    <span className="font-display text-5xl font-black">
                      ${price % 1 === 0 ? price : price.toFixed(2)}
                    </span>
                    <span className={`text-xs font-bold ${tier.isPopular ? 'text-white/70' : 'text-[#0b2416]/70'}`}>
                      /month
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8 border-t border-current/10 pt-6">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs font-bold">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.isPopular ? 'text-[#bef264]' : 'text-emerald-700'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={onOpenAccount}
                  className={`w-full py-4 rounded-full text-xs font-black uppercase tracking-wider transition-all border-2 border-[#0b2416] ${
                    tier.isPopular
                      ? 'bg-[#bef264] text-[#0b2416] hover:bg-[#aef043] shadow-lg'
                      : 'bg-[#0b2416] text-white hover:bg-[#123822]'
                  }`}
                >
                  {tier.monthlyPrice === 0 ? 'START FREE' : `GET ${tier.name.toUpperCase()}`}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
