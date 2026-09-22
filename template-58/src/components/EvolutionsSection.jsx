import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, RefreshCw, ShieldCheck, ChevronRight } from 'lucide-react';
import { evolutionsData } from '../data/catalxgData';

export const EvolutionsSection = ({ onSelectFeature }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'credit-card':
        return <CreditCard className="w-6 h-6 text-amber-500" />;
      case 'refresh-cw':
        return <RefreshCw className="w-6 h-6 text-brandOrange" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <CreditCard className="w-6 h-6 text-brandOrange" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#FAFAFA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brandOrange text-xs font-bold uppercase tracking-wider mb-4">
              <span>{evolutionsData.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.18]">
              {evolutionsData.headline}
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-center h-full pt-2">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              {evolutionsData.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Feature Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {evolutionsData.features.map((feat) => (
            <div
              key={feat.id}
              onClick={() => onSelectFeature?.(feat)}
              className="h-[280px] rounded-3xl p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(feat.icon)}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2 group-hover:text-brandOrange transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-brandOrange transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
