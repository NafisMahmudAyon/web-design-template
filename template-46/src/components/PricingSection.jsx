import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Rocket, Gem, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/finoviaData';

export const PricingSection = ({ onSelectPlan }) => {
  const [isYearly, setIsYearly] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-5 h-5 text-finovia-lime" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-finovia-dark" />;
      case 'diamond':
        return <Gem className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-finovia-lime" />;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-finovia-dark relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-finovia-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-finovia-lime mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Tiered Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Flexible Plans For Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-finovia-lime to-emerald-300">
              Financial Goal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 max-w-2xl mx-auto"
          >
            No hidden maintenance charges, no surprise fees. Cancel or switch plans anytime with one click.
          </motion.p>

          {/* Toggle Monthly / Yearly */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-finovia-card border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !isYearly
                  ? 'bg-white/10 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                isYearly
                  ? 'bg-finovia-lime text-finovia-dark shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                isYearly ? 'bg-finovia-dark text-finovia-lime' : 'bg-finovia-lime/20 text-finovia-lime'
              }`}>
                Save 30%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - Applying Rule 1A with Stable Height and Zero CLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isFeatured = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1c2415] to-[#12160e] border-2 border-finovia-lime shadow-2xl shadow-finovia-lime/10 p-8 sm:p-9'
                    : 'bg-finovia-card border border-white/10 hover:border-white/20 p-8'
                }`}
              >
                {/* Most Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-finovia-lime text-finovia-dark text-xs font-black uppercase tracking-wider shadow-lg">
                    {plan.badge || 'Most Popular'}
                  </div>
                )}

                <div>
                  {/* Icon & Plan Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isFeatured ? 'bg-finovia-lime text-finovia-dark' : 'bg-white/5 border border-white/10'
                    }`}>
                      {getIcon(plan.icon)}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {plan.name} Tier
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6">{plan.additionalInfo}</p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isFeatured ? 'bg-finovia-lime text-finovia-dark' : 'bg-white/10 text-finovia-lime'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-finovia-lime text-finovia-dark hover:bg-finovia-lime-glow hover:shadow-lg hover:shadow-finovia-lime/20'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Get Started With {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
