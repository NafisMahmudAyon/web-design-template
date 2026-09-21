import React, { useState } from 'react';
import { CreditCard, Check, Sparkles, Plus } from 'lucide-react';
import { CARDS_DATA } from '../data/mockData';

export default function CardsShowcaseSection({ onOpenAccount }) {
  const [activeCardId, setActiveCardId] = useState('flex');

  return (
    <section id="cards" className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
            PICK THE ONE THAT <br />
            <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
              FITS YOUR LIFE.
            </span>
          </h2>
        </div>

        {/* 3 Cards Grid - STRICT ZERO CLS FIXED HEIGHT CONTAINERS (h-[460px] sm:h-[480px]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS_DATA.map((card) => {
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className={`cursor-pointer rounded-3xl border-3 border-[#0b2416] p-6 sm:p-8 flex flex-col justify-between h-[460px] sm:h-[480px] transition-all duration-300 transform hover:-translate-y-1 ${card.bgColor} shadow-lg`}
              >
                {/* Top Card Badge Header */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-base font-black tracking-widest uppercase">
                      VELD
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase px-2.5 py-1 rounded ${card.tagColor}`}
                    >
                      {card.type}
                    </span>
                  </div>

                  {/* Graphic Debit Card Representation */}
                  <div className={`p-5 rounded-2xl ${card.cardSkin} space-y-4 shadow-md mb-6 transition-transform hover:scale-[1.02]`}>
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-6 rounded bg-amber-400/80 border border-amber-300"></div>
                      <span className="text-[10px] font-mono tracking-widest font-black opacity-80">
                        {card.type}
                      </span>
                    </div>
                    <p className="font-mono text-sm tracking-widest font-black">
                      {card.cardNumber}
                    </p>
                    <div className="flex justify-between text-[10px] font-extrabold uppercase">
                      <span>{card.cardHolder}</span>
                      <span>{card.expiry}</span>
                    </div>
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="font-display text-xl font-black uppercase tracking-tight mb-2">
                    {card.name}
                  </h3>
                  <p className="text-xs opacity-80 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Perks & Action CTA */}
                <div className="space-y-4 pt-4 border-t border-current/10">
                  <div className="space-y-1 text-[11px] font-bold">
                    {card.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 opacity-80" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAccount();
                    }}
                    className={`w-full py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                      card.isFeatured
                        ? 'bg-[#0b2416] text-[#bef264] hover:bg-[#123822]'
                        : 'bg-[#bef264] text-[#0b2416] hover:bg-[#aef043] border border-[#0b2416]'
                    }`}
                  >
                    SELECT {card.type} CARD
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
