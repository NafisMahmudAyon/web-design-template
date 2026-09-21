import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../data/mockData';

export default function PricingSection({ onOpenJoin }) {
  const [hoveredTierId, setHoveredTierId] = useState('performance');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight">
          YOUR COURT. YOUR STANDARD.
        </h2>
        <p className="text-sm sm:text-base text-gray-300 font-sans">
          Month to month, no joining fee. Court access is bookable 14 days ahead and coaching credits roll over once.
        </p>
      </div>

      {/* 3 Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {MEMBERSHIP_TIERS.map((tier) => {
          const isActive = hoveredTierId === tier.id;

          return (
            <div
              key={tier.id}
              onMouseEnter={() => setHoveredTierId(tier.id)}
              /* Fixed container height prevents height jumps (Zero CLS) */
              className={`h-[460px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative border ${
                tier.isPopular || isActive
                  ? 'bg-[#0f1824] border-vantageNeon shadow-neon-glow scale-102'
                  : 'bg-[#080d14] border-white/15 hover:border-white/30'
              }`}
            >
              {tier.tag && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-vantageNeon text-black uppercase tracking-wider">
                    {tier.tag}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-condensed text-2xl font-bold uppercase tracking-wider text-white mb-4">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-5xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-sm text-gray-400 font-sans">{tier.period}</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-300 font-sans">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vantageNeon shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={onOpenJoin}
                  className={`w-full py-3.5 rounded-xl font-condensed font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.isPopular || isActive
                      ? 'bg-vantageNeon text-black shadow-neon-glow hover:bg-[#b8e600]'
                      : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <span>CHOOSE {tier.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
