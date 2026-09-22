import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/flowzyData';

export default function PricingSection({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex justify-center">
            <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Clear & Simple Pricing
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Choose the plan that fits your team. Upgrade anytime as your projects and collaboration grow.
          </p>
        </div>

        {/* Monthly / Yearly Switcher */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200/80">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition ${
                billingCycle === 'monthly'
                  ? 'bg-[#1A1235] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-[#1A1235] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] text-purple-400 font-extrabold">(Save 15%)</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`
                  rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative
                  ${isPro
                    ? 'bg-gradient-to-b from-[#EBF5FF] via-[#F3E8FF]/70 to-white border-2 border-purple-400/80 shadow-xl scale-[1.03]'
                    : 'bg-white border border-slate-200/90 shadow-flowzy-card hover:border-slate-300'
                  }
                `}
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-3">
                    {plan.name}
                  </span>

                  <p className="text-xs text-slate-500 mb-6 font-medium">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
                      {price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`
                      w-full py-3 rounded-2xl text-xs sm:text-sm font-bold transition active:scale-95 mb-8 shadow-xs
                      ${isPro
                        ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-purple-glow'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200'
                      }
                    `}
                  >
                    {plan.ctaText}
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What You Get
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 stroke-[2.5] flex-shrink-0 ${
                          isPro ? 'text-purple-600' : 'text-slate-700'
                        }`} />
                        <span className="text-xs font-semibold text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
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
