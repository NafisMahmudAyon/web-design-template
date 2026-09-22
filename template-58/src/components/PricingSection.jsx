import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { pricingData } from '../data/catalxgData';

export const PricingSection = ({ onSelectPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState('growth');

  return (
    <section id="pricing" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brandOrange text-xs font-bold uppercase tracking-wider mb-4">
            <span>{pricingData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            {pricingData.headline}
          </h2>
          <p className="mt-3 text-slate-500 text-base font-sans">
            {pricingData.subtitle}
          </p>
        </div>

        {/* 3 Pricing Cards Grid (Zero-CLS Spacing Stability, Fixed Container Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingData.plans.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setSelectedPlanId(plan.id)}
                className={`h-[560px] rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative border ${
                  isFeatured
                    ? 'bg-brandOrange text-white border-brandOrange shadow-xl shadow-brandOrange/25 -translate-y-2'
                    : 'bg-[#FAFAFA] text-slate-800 border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold font-display ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>

                    {plan.badge && (
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase border border-white/30 backdrop-blur-sm">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs mb-6 font-sans ${isFeatured ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-4xl sm:text-5xl font-extrabold font-display ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs font-semibold ${isFeatured ? 'text-white/80' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => onSelectPlan?.(plan)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md ${
                      isFeatured
                        ? 'bg-white text-brandOrange hover:bg-slate-100 hover:shadow-lg'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features List */}
                <div className="pt-6 border-t border-slate-200/50">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-4 ${isFeatured ? 'text-white/80' : 'text-slate-400'}`}>
                    Features
                  </span>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            isFeatured ? 'text-white' : 'text-brandOrange'
                          }`}
                        />
                        <span className={isFeatured ? 'text-white' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
