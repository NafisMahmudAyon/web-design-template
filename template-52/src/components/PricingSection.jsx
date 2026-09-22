import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/pollinateData';

export const PricingSection = ({ onSelectPlan }) => {
  const [activePlanId, setActivePlanId] = useState('pro');

  return (
    <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100/90">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-700">Pricing Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Flexible Plans for Every Need and Budget
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Choose the perfect plan to scale, save, and maximize value.
          </p>
        </div>

        {/* 3 Pricing Cards adhering strictly to Rule 1A */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isActive = activePlanId === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => {
                  setActivePlanId(plan.id);
                  if (onSelectPlan) onSelectPlan(plan);
                }}
                onMouseEnter={() => setActivePlanId(plan.id)}
                className={`relative rounded-3xl p-8 h-[520px] sm:h-[540px] flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#0B0F15] text-white shadow-2xl scale-[1.02] border border-slate-800 z-10'
                    : 'bg-white border border-slate-200/80 text-slate-900 shadow-pollinate hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Plan Name & Desc */}
                  <h3 className="text-lg font-black tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed min-h-[36px] ${
                    isActive ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-xs font-semibold ${
                        isActive ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectPlan) onSelectPlan(plan);
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all shadow-sm ${
                      isActive
                        ? 'bg-[#FF5520] hover:bg-[#E84512] text-white shadow-md shadow-[#FF5520]/25'
                        : 'bg-[#0B0F15] hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Features checklist */}
                <div className={`pt-6 border-t ${
                  isActive ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-[#FF5520] text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={isActive ? 'text-slate-200' : 'text-slate-600'}>
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
