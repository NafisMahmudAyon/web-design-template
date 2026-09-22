import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CreditCard, 
  BarChart3, 
  FileText, 
  Layers, 
  Layout, 
  ShieldCheck 
} from 'lucide-react';
import { PLATFORM_PILLARS } from '../data/finexaData';

export default function FinancialClaritySection() {
  const [activeCardId, setActiveCardId] = useState('smart-payments');

  const getPillarIcon = (iconName, isActive) => {
    const iconClass = `w-5 h-5 ${isActive ? 'text-white' : 'text-slate-700'}`;
    switch (iconName) {
      case 'credit-card':
        return <CreditCard className={iconClass} />;
      case 'bar-chart':
        return <BarChart3 className={iconClass} />;
      case 'file-text':
        return <FileText className={iconClass} />;
      case 'zap':
        return <Layers className={iconClass} />;
      case 'layout':
        return <Layout className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#FAFCFF] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold">
            <Zap className="w-3.5 h-3.5 fill-blue-500" />
            <span>Financial Control</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            One Platform. Financial Clarity.
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            See your numbers clearly, automate daily tasks, and stay in control as you scale.
          </p>
        </div>

        {/* 6 Grid Cards with Zero-CLS Dynamic Active State (Rule 1A) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_PILLARS.map((pillar) => {
            const isActive = activeCardId === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveCardId(pillar.id)}
                className={`
                  h-[240px] rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between select-none relative overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-br from-[#0B1428] via-[#10244D] to-[#143B80] text-white shadow-xl scale-[1.01]' 
                    : 'bg-white border border-slate-200/80 text-slate-900 hover:border-blue-200 shadow-finexa-card'
                  }
                `}
              >
                {/* Decorative glow in active state */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                    isActive ? 'bg-white/10' : 'bg-slate-100'
                  }`}>
                    {getPillarIcon(pillar.icon, isActive)}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isActive ? 'text-slate-300 font-medium' : 'text-slate-500'
                  }`}>
                    {pillar.description}
                  </p>
                </div>

                {/* Sub badge */}
                <div className="flex items-center justify-between pt-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? 'text-blue-300' : 'text-slate-400'
                  }`}>
                    {pillar.badge}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
