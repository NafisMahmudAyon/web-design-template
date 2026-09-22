import React, { useState } from 'react';
import { ShoppingCart, Users, Package, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { KPI_CARDS } from '../data/boltshiftData';

export const KpiCardsRow = ({ onCardClick }) => {
  const [activeCardId, setActiveCardId] = useState('total-sales');

  const getIcon = (type) => {
    switch (type) {
      case 'cart':
        return <ShoppingCart className="w-4 h-4" />;
      case 'users':
        return <Users className="w-4 h-4" />;
      case 'box':
        return <Package className="w-4 h-4" />;
      case 'dollar':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <ShoppingCart className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {KPI_CARDS.map((card) => {
        const isActive = activeCardId === card.id;

        return (
          <div
            key={card.id}
            onClick={() => {
              setActiveCardId(card.id);
              if (onCardClick) onCardClick(card);
            }}
            onMouseEnter={() => setActiveCardId(card.id)}
            className={`relative rounded-3xl p-6 h-[172px] sm:h-[180px] flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${
              isActive
                ? 'bg-gradient-to-br from-[#5E43F3] to-[#4D32E0] text-white shadow-boltshift-purple -translate-y-1'
                : 'bg-white border border-slate-200/80 text-slate-900 shadow-boltshift hover:border-slate-300'
            }`}
          >
            {/* Top Row: Label & Icon */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold tracking-wide ${
                isActive ? 'text-white/80' : 'text-slate-500'
              }`}>
                {card.title}
              </span>

              {/* Icon Circular Badge */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-white text-[#5E43F3] shadow-sm'
                  : card.id === 'new-customer'
                  ? 'bg-amber-500 text-white'
                  : card.id === 'return-products'
                  ? 'bg-blue-500 text-white'
                  : card.id === 'total-revenue'
                  ? 'bg-[#5E43F3] text-white'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {getIcon(card.iconType)}
              </div>
            </div>

            {/* Middle: Big Metric Value & Badge */}
            <div className="flex items-baseline gap-2.5 my-auto">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {card.value}
              </span>

              {card.badge && (
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-0.5 ${
                  isActive
                    ? 'bg-white/20 text-white backdrop-blur-xs'
                    : card.isPositive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'bg-rose-50 text-rose-600'
                }`}>
                  {card.badge}
                </span>
              )}
            </div>

            {/* Footer: Last Month comparison */}
            <div className={`text-[11px] font-medium ${
              isActive ? 'text-white/70' : 'text-slate-400'
            }`}>
              {card.lastMonth}
            </div>
          </div>
        );
      })}
    </div>
  );
};
