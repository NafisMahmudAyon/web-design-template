import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/contentData';

export default function PricingSection({ onSelectPlan, onCustomSolutionClick }) {
  const [isYearly, setIsYearly] = useState(true);
  const [activePlanId, setActivePlanId] = useState('pro'); // Default active as shown in mockup

  return (
    <section id="pricing" className="py-24 bg-[#F8F9F7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#141814] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
            Our pricing is simple with no hidden fees
          </h2>
          <p className="text-sm text-[#6C736A] mt-3 font-medium">
            Our pricing is transparent and straightforward, so you always know exactly what you're paying for.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                !isYearly ? 'bg-[#141814] text-white shadow-sm' : 'text-gray-600 hover:text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                isYearly ? 'bg-[#141814] text-white shadow-sm' : 'text-gray-600 hover:text-black'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] font-extrabold text-[#C7F263] uppercase">
                (GET 65% OFF)
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards (Zero-CLS Polymorphic Container) */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          onMouseLeave={() => setActivePlanId('pro')}
        >
          {pricingPlans.map((plan) => {
            const isActive = activePlanId === plan.id;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/yearly' : '/monthly';

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setActivePlanId(plan.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative min-h-[480px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-card ${
                  isActive
                    ? 'bg-[#141814] text-white ring-2 ring-black/10 shadow-2xl scale-[1.01]'
                    : 'bg-white text-[#141814] border border-black/[0.04]'
                }`}
              >
                <div>
                  {/* Plan Name & Subtitle */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold">{plan.name}</h3>
                    {isActive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#C7F263] px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-1 font-medium ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.for}
                  </p>

                  {/* Price */}
                  <div className="my-6">
                    <span className="text-4xl font-extrabold tracking-tight">{price}</span>
                    <span className={`text-xs font-semibold ml-1 ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                      {period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan && onSelectPlan(plan)}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all shadow-sm focus:outline-none ${
                      isActive
                        ? 'bg-[#C7F263] text-[#141814] hover:bg-[#B4EE58]'
                        : 'bg-[#141814] text-white hover:bg-black'
                    }`}
                  >
                    Get Started
                  </button>

                  {/* Features List */}
                  <div className="mt-8 space-y-3 text-xs">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isActive ? 'bg-white/15 text-[#C7F263]' : 'bg-gray-100 text-[#141814]'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className={`font-medium ${isActive ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footnote */}
                <div className="pt-6 border-t border-black/5 mt-6">
                  <span className={`text-[11px] font-medium ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                    30-day money-back guarantee • Cancel anytime
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-8 rounded-3xl p-6 sm:p-8 bg-[#141814] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-base font-bold">Need a custom financial solution?</h4>
            <p className="text-xs text-gray-400 mt-0.5">We tailor plans to match your business complexity and scale.</p>
          </div>
          <button
            onClick={onCustomSolutionClick}
            className="px-6 py-2.5 rounded-full bg-white text-[#141814] text-xs font-bold shadow-sm hover:bg-gray-100 transition-colors focus:outline-none flex-shrink-0"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
