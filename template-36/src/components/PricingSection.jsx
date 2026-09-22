import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/cryptoData';

export default function PricingSection({ onSelectPlan }) {
  const [isYearly, setIsYearly] = useState(false);
  // Default active is 'pro' matching the static mockup recommendation
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section id="pricing" className="py-24 bg-[#F9FBFA] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200/70 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
            Pricing & Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
            Simple Pricing for Every <br />
            Crypto Investor
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 font-normal">
            Choose the plan that fits your trading goals. Upgrade anytime as your portfolio and trading volume grow.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <span
              className={`text-xs font-bold cursor-pointer pl-3 transition-colors ${
                !isYearly ? 'text-[#0B1A1C]' : 'text-gray-400'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Billed Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 bg-[#0B1A1C] rounded-full p-0.5 relative transition-colors"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00D287] shadow-sm transform transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-xs font-bold cursor-pointer pr-3 transition-colors ${
                isYearly ? 'text-[#0B1A1C]' : 'text-gray-400'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Billed yearly
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid with Zero-CLS Stability */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isActive = activePlanId === plan.id;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setActivePlanId(plan.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between min-h-[560px] bg-white transition-all duration-300 ${
                  isActive
                    ? 'border-2 border-[#132B2E] shadow-2xl shadow-[#132B2E]/10'
                    : 'border border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                {/* Top Recommendation Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#132B2E] text-[#00D287] text-[11px] font-bold shadow-md tracking-wide">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Title & Subhead */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#0B1A1C] font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {plan.subhead}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-gray-100">
                    <span className="text-4xl sm:text-5xl font-black text-[#0B1A1C] font-mono tracking-tight">
                      {price}
                    </span>
                    {plan.period && (
                      <span className="text-xs font-medium text-gray-500">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-700">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-[#00D287] text-[#0B1A1C]' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button & Footnote */}
                <div>
                  <button
                    onClick={() => onSelectPlan && onSelectPlan(plan)}
                    className={`w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      isActive
                        ? 'bg-[#132B2E] text-white hover:bg-[#1A3B3F]'
                        : 'bg-white text-[#0B1A1C] border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-3 font-normal">
                    {plan.note}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
