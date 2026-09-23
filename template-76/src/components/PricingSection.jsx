import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/saasData';

export default function PricingSection({ onSelectPlan }) {
  const [isAnnual, setIsAnnual] = useState(false);
  // Default active is 'pro' if no mouse interaction, but hovering ANY card dynamically shifts the active style
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight font-display mb-4"
          >
            Our Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mx-auto mb-8"
          >
            Transparent and flexible pricing engineered to scale seamlessly alongside your business operations.
          </motion.p>

          {/* Billing Toggle (Monthly vs Annual) */}
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full border border-gray-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !isAnnual ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                isAnnual ? 'bg-[#6D28D9] text-white shadow-xs' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>Annually</span>
              <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid: Zero CLS Spacing Stability & The "One Different Card" Rule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isActive = activePlanId === plan.id;
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setActivePlanId(plan.id)}
                onClick={() => setActivePlanId(plan.id)}
                /* Zero CLS: Fixed container height h-[540px] with zero jump */
                className={`relative h-[540px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#111319] text-white border-2 border-purple-500/80 shadow-2xl shadow-purple-950/20 -translate-y-2'
                    : 'bg-white text-gray-900 border border-gray-200/90 shadow-xs hover:border-gray-300'
                }`}
              >
                <div>
                  {/* Top Tier Name + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-semibold tracking-wide ${
                        isActive ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {plan.name}
                    </span>

                    {/* Popular Badge */}
                    {plan.badge && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${
                          isActive
                            ? 'bg-white/10 text-purple-300 border-purple-500/40'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline space-x-1 mb-6">
                    <span
                      className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-display ${
                        isActive ? 'text-white' : 'text-gray-950'
                      }`}
                    >
                      ${price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlan(plan);
                    }}
                    className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm ${
                      isActive
                        ? 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-purple-900/40 hover:shadow-md'
                        : 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>

                  {/* Features List */}
                  <ul className="mt-8 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 stroke-[2.5] shrink-0 ${
                            isActive ? 'text-purple-400' : 'text-purple-600'
                          }`}
                        />
                        <span className={isActive ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Bottom Guarantee note */}
                <div
                  className={`pt-4 border-t text-[11px] font-medium flex items-center justify-between ${
                    isActive ? 'border-gray-800 text-gray-500' : 'border-gray-100 text-gray-400'
                  }`}
                >
                  <span>14-day free trial</span>
                  <span>No card required</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
