import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/finexaData';

export default function PricingSection({ onSelectPlan, onCustomSolution }) {
  const [isYearly, setIsYearly] = useState(true);
  // Default active is 'pro' matching the Figma screenshot
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section id="pricing" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
            Simple pricing. No hidden fees.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            Our pricing is transparent and straightforward, so you always know exactly what you're paying for.
          </p>

          {/* Billing Switcher with 65% OFF */}
          <div className="flex flex-col items-center gap-2 mt-8">
            <div className="inline-flex items-center gap-3 bg-gray-100 p-1 rounded-full border border-gray-200">
              <span
                onClick={() => setIsYearly(false)}
                className={`text-xs font-bold px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  !isYearly ? 'bg-white text-[#09182A] shadow-xs' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-10 h-5 bg-[#09182A] rounded-full p-0.5 relative"
                aria-label="Toggle billing"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-[#C5FF32] transition-transform ${
                    isYearly ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                onClick={() => setIsYearly(true)}
                className={`text-xs font-bold px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  isYearly ? 'bg-white text-[#09182A] shadow-xs' : 'text-gray-500'
                }`}
              >
                Yearly
              </span>
            </div>
            <span className="text-[10px] font-black text-blue-700 tracking-wider uppercase">
              ( GET 65% OFF )
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid with Zero-CLS Stability */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricingPlans.map((plan) => {
            const isActive = activePlanId === plan.id;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setActivePlanId(plan.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-8 flex flex-col justify-between min-h-[560px] transition-all duration-300 ${
                  isActive
                    ? 'bg-[#09182A] text-white shadow-2xl shadow-blue-950/20 border-2 border-blue-900'
                    : 'bg-[#FAF9FE] text-[#09182A] border border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="mb-4">
                    <h3
                      className={`text-lg font-bold font-display ${
                        isActive ? 'text-white' : 'text-[#09182A]'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 ${
                        isActive ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {plan.subhead}
                    </p>
                  </div>

                  <div
                    className={`flex items-baseline gap-1 mb-8 pb-6 border-b ${
                      isActive ? 'border-white/10' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                      {price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mb-8">
                    <button
                      onClick={() => onSelectPlan && onSelectPlan(plan)}
                      className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isActive
                          ? 'bg-white hover:bg-gray-100 text-[#09182A]'
                          : 'bg-[#09182A] hover:bg-black text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-center gap-2.5 text-xs ${
                          isActive ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 ${
                            isActive ? 'text-[#C5FF32]' : 'text-blue-600'
                          }`}
                        />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-6 text-center text-[10px] ${
                    isActive ? 'text-gray-400' : 'text-gray-400'
                  }`}
                >
                  Prorated billing • Cancel anytime
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Blue Banner */}
        <div className="rounded-3xl p-6 sm:p-8 finexa-blue-banner text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold font-display">Need a custom financial solution?</h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              We tailor plans to match your business complexity and scale.
            </p>
          </div>
          <button
            onClick={onCustomSolution}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-gray-100 text-[#09182A] text-xs font-bold flex-shrink-0 transition-colors shadow-sm"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
