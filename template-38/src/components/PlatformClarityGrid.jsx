import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, FileText, Layers, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import { platformClarityCards } from '../data/finexaData';

export default function PlatformClarityGrid({ onCardClick }) {
  // Implements the "One Different Card" rule:
  // Default active is 'payments' matching the static mockup,
  // but hovering over ANY card dynamically transforms it into the active state with zero CLS!
  const [activeCardId, setActiveCardId] = useState('payments');

  const iconMap = {
    payments: CreditCard,
    insights: TrendingUp,
    billing: FileText,
    integrations: Layers,
    dashboard: BarChart2,
    treasury: ShieldCheck,
  };

  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>Financial Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
            One Platform. Financial Clarity.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            See your numbers clearly, automate daily tasks, and stay in control as you scale.
          </p>
        </div>

        {/* 6-Card Grid with Zero-CLS Polymorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformClarityCards.map((card) => {
            const IconComp = iconMap[card.id] || CreditCard;
            const isActive = activeCardId === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => onCardClick && onCardClick(card.title)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-8 flex flex-col justify-between min-h-[220px] cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0B2545] text-white shadow-xl shadow-blue-950/20 border border-blue-900'
                    : 'bg-white text-[#09182A] border border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#C5FF32]'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3
                    className={`text-lg font-bold font-display tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-[#09182A]'
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                <p
                  className={`text-xs sm:text-sm mt-3 leading-relaxed transition-colors ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
