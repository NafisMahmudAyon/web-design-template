import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Plus, CreditCard } from 'lucide-react';
import { initialCards } from '../data/mockFinanceData';

export default function YourCardsCard({ cards, onAddCardClick, onSelectCard }) {
  const currentCards = cards || initialCards;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-[#141814] tracking-tight">
          Your Cards
        </h3>
        <button 
          title="Card options"
          className="w-6 h-6 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {currentCards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectCard && onSelectCard(card)}
            className="group flex items-center justify-between p-2 rounded-2xl hover:bg-[#F8F9F7] transition-all cursor-pointer border border-transparent hover:border-black/[0.04]"
          >
            {/* Card Thumbnail & Numbers */}
            <div className="flex items-center gap-3">
              <div className={`w-11 h-7 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm ${
                card.type === 'blue' ? 'card-blue-gradient' : 'card-magenta-gradient'
              }`}>
                {/* Chip illustration */}
                <div className="w-2.5 h-2 rounded-[2px] bg-amber-300/80 border border-amber-400" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#141814] tracking-wide group-hover:text-blue-600 transition-colors">
                  {card.number}
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  {card.expiry}
                </p>
              </div>
            </div>

            {/* Balance */}
            <div className="text-right">
              <span className="text-xs font-bold text-[#141814]">
                {card.balance}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add New Card Button */}
      <div className="mt-4 pt-2">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onAddCardClick}
          className="w-full py-2.5 rounded-2xl bg-[#F8F9F7] hover:bg-[#ECEEE9] text-[#141814] text-xs font-bold flex items-center justify-center gap-1.5 transition-all focus:outline-none border border-black/[0.03]"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Add New Card</span>
        </motion.button>
      </div>

    </div>
  );
}
