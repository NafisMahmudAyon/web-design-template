import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Zap, Layers, ArrowRight } from 'lucide-react';
import { architectureCards } from '../data/agencyData';

const iconMap = {
  Terminal,
  ShieldAlert: ShieldCheck,
  Zap,
  Layers,
};

export default function ArchitectureCards({ onSelectCard }) {
  const [activeCardId, setActiveCardId] = useState(architectureCards[0].id);

  return (
    <section className="py-20 border-t border-[#1B2B1F]/50 relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Cards Grid with Zero-CLS Spacing Stability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {architectureCards.map((card) => {
            const Icon = iconMap[card.icon] || Zap;
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => onSelectCard(card.title)}
                className={`h-[280px] rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#101913] border-[#25E575] shadow-[0_0_30px_rgba(37,229,117,0.2)] -translate-y-1.5'
                    : 'bg-[#0D1510] border-[#1B2B1F] hover:border-[#1B2B1F]/90'
                }`}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                      isActive
                        ? 'bg-[#25E575] text-black shadow-[0_0_15px_rgba(37,229,117,0.5)]'
                        : 'bg-[#142017] text-[#25E575]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575] pt-2">
                  <span>{card.cta}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isActive ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
