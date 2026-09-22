import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/finexaData';

export default function PricingSection({ onSelectPlan, onContactUs }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold">
            <Zap className="w-3.5 h-3.5 fill-blue-500" />
            <span>Pricing Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Simple pricing. No hidden fees.
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Our pricing is transparent and straightforward, so you always know exactly what you're paying for.
          </p>
        </div>

        {/* Billing Cycle Switcher */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>

          <button
            onClick={() => setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly')}
            className="w-12 h-6 rounded-full bg-slate-900 p-1 flex items-center transition relative"
            title="Toggle monthly / yearly"
          >
            <motion.div
              animate={{ x: billingCycle === 'yearly' ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-4 h-4 rounded-full bg-white shadow-sm"
            />
          </button>

          <span className={`text-xs font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>

          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/50">
            ( GET 65% OFF )
          </span>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const period = billingCycle === 'yearly' ? '/yearly' : '/monthly';

            return (
              <div
                key={plan.id}
                className={`
                  rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden
                  ${isPro
                    ? 'bg-gradient-to-b from-[#0B1327] via-[#0E2046] to-[#14326B] text-white shadow-2xl scale-[1.02] border border-blue-400/20'
                    : 'bg-white border border-slate-200/90 text-slate-900 shadow-finexa-card hover:border-slate-300'
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-base font-bold ${isPro ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-xs ${isPro ? 'text-slate-300' : 'text-slate-500'} mb-6`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-4xl font-extrabold tracking-tight font-display ${isPro ? 'text-white' : 'text-slate-900'}`}>
                      {price}
                    </span>
                    <span className={`text-xs font-semibold ${isPro ? 'text-slate-400' : 'text-slate-400'}`}>
                      {period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`
                      w-full py-3 rounded-2xl text-xs sm:text-sm font-bold transition active:scale-95 mb-8 shadow-xs
                      ${isPro
                        ? 'bg-white hover:bg-slate-100 text-slate-950 shadow-md'
                        : 'bg-slate-900 hover:bg-black text-white'
                      }
                    `}
                  >
                    {plan.ctaText}
                  </button>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 stroke-[2.5] flex-shrink-0 ${
                          isPro ? 'text-blue-300' : 'text-slate-700'
                        }`} />
                        <span className={`text-xs font-semibold ${
                          isPro ? 'text-slate-200' : 'text-slate-600'
                        }`}>
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

        {/* Bottom Custom Solution Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0F234D] to-[#17418F] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-bold">
              Need a custom financial solution?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              We tailor plans to match your business complexity and scale.
            </p>
          </div>

          <button
            onClick={onContactUs}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-md hover:shadow-lg transition active:scale-95 self-start sm:self-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
