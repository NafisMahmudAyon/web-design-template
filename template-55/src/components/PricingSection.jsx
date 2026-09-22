import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingData } from '../data/finoraData';

export default function PricingSection({ onSelectPlan, onOpenCustomModal }) {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{pricingData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
          >
            {pricingData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
          >
            {pricingData.subtitle}
          </motion.p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-gray-950' : 'text-gray-400'}`}>
                Monthly
              </span>

              <button
                type="button"
                onClick={() => setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly')}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                  billingCycle === 'yearly' ? 'bg-gray-950 justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <motion.div layout className="w-5 h-5 rounded-full bg-white shadow-xs" />
              </button>

              <span className={`text-xs font-semibold ${billingCycle === 'yearly' ? 'text-gray-950' : 'text-gray-400'}`}>
                Yearly
              </span>
            </div>

            <span className="text-[11px] font-bold text-gray-500 tracking-wide">
              {pricingData.discountBadge}
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards - Constant Outer Height for Zero CLS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {pricingData.plans.map((plan) => {
            const isFeatured = activePlanId === plan.id;
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const cycleSuffix = billingCycle === 'yearly' ? '/ yearly' : '/ monthly';

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setActivePlanId(plan.id)}
                onClick={() => setActivePlanId(plan.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`rounded-[32px] p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[520px] ${
                  isFeatured
                    ? 'bg-[#111827] text-white shadow-2xl border border-gray-800'
                    : 'bg-white text-gray-900 border border-gray-200/80 shadow-xs hover:border-gray-400'
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.audience}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display">
                      {price}
                    </span>
                    <span className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>
                      {cycleSuffix}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlan && onSelectPlan(plan.name);
                    }}
                    className={`w-full mt-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md ${
                      isFeatured
                        ? 'bg-brand-lime hover:bg-brand-limeHover text-gray-950 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-gray-950 hover:bg-black text-white hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    Get Started
                  </button>

                  {/* Features List */}
                  <div className={`mt-8 pt-6 border-t ${isFeatured ? 'border-gray-800' : 'border-gray-100'} space-y-3`}>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs">
                        <Check className={`w-4 h-4 flex-shrink-0 ${isFeatured ? 'text-brand-lime' : 'text-emerald-600'}`} />
                        <span className={isFeatured ? 'text-gray-300' : 'text-gray-600'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Custom Financial Solution Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] bg-gray-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl border border-gray-900"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              {pricingData.customCallout.headline}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              {pricingData.customCallout.subtext}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCustomModal}
            className="px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex-shrink-0"
          >
            {pricingData.customCallout.buttonText}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
