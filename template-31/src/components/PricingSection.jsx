import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

export default function PricingSection({ openAuthModal }) {
  const [activeCardId, setActiveCardId] = useState('growth'); // Default growth active matching mockup

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
            • Pricing Plan
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Flexible Plans for Every Business
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Choose the perfect plan tailored to your business needs and goals.
          </p>
        </div>

        {/* 3 Cards Grid with Fixed Container Heights (Zero CLS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isActive = activeCardId === plan.id;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => setActiveCardId(plan.id)}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between h-[520px] relative ${
                  isActive
                    ? 'bg-[#635BFF] text-white border-[#635BFF] shadow-2xl scale-[1.02] z-10'
                    : 'bg-[#F8FAFC] dark:bg-slate-800/80 text-slate-900 dark:text-white border-slate-200/80 dark:border-slate-700/80 hover:border-[#635BFF]/40'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-extrabold mb-1 ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-medium mb-6 ${isActive ? 'text-purple-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.subtitle}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">{plan.price}</span>
                    <span className={`text-xs font-semibold ${isActive ? 'text-purple-200' : 'text-slate-400'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openAuthModal('signup')}
                    className={`w-full py-3.5 rounded-2xl font-extrabold text-xs shadow-md transition-all ${
                      isActive
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  <div className="my-6 border-t border-current opacity-10" />

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-purple-200' : 'text-slate-400'}`}>
                      Features
                    </p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#635BFF]'}`} />
                        <span className={isActive ? 'text-purple-50' : 'text-slate-700 dark:text-slate-300'}>
                          {feat}
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
