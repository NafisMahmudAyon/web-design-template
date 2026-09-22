import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/flowzyData';

export default function PricingSection({ onSelectPlan }) {
  const [isYearly, setIsYearly] = useState(false);
  // Default active is 'pro' matching the Figma mockup
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section id="pricing" className="py-24 bg-[#FAF9FE] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
            Clear & Simple Pricing
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            Choose the plan that fits your team. Upgrade anytime as your projects and collaboration grow.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center gap-2 mt-8 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                !isYearly
                  ? 'bg-[#1E1B4B] text-white shadow-sm'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                isYearly
                  ? 'bg-[#1E1B4B] text-white shadow-sm'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Yearly (Save 15%)
            </button>
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
                className={`relative rounded-3xl p-8 flex flex-col justify-between min-h-[560px] transition-all duration-300 ${
                  isActive
                    ? 'bg-[#F5F3FF] border-2 border-purple-300 shadow-xl shadow-purple-500/10'
                    : 'bg-white border border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                <div>
                  {/* Plan Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700">
                      {plan.name}
                    </span>
                    <p className="text-xs text-gray-500 mt-2">
                      {plan.subhead}
                    </p>
                  </div>

                  {/* Price Header */}
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-gray-200/60">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-mono tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <button
                      onClick={() => onSelectPlan && onSelectPlan(plan)}
                      className={`w-full py-3 rounded-full text-xs font-bold transition-all shadow-sm ${
                        isActive
                          ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-purple-500/25'
                          : 'bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>

                  {/* What You Get List */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      What You Get
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-700">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-[#7C3AED] text-white' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 text-center text-[11px] text-gray-400">
                  {plan.id === 'free' ? 'No credit card required' : 'Cancel or change plans anytime'}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
