import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AddCardModal({ isOpen, onClose, onAddCard }) {
  const [lastFour, setLastFour] = useState('');
  const [expiry, setExpiry] = useState('11/29');
  const [cardType, setCardType] = useState('blue');
  const [brand, setBrand] = useState('Visa Business');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: `card-${Date.now()}`,
      number: `**** **** ${lastFour || '9120'}`,
      expiry,
      balance: '$10,000.00',
      type: cardType,
      holder: 'Sajibur Rahman',
      brand
    };

    onAddCard(newCard);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-black/5 text-[#141814]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Link New Corporate Card</h3>
                <p className="text-xs text-gray-500">Virtual or physical corporate debit card</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Last 4 Digits</label>
              <input
                type="text"
                maxLength={4}
                required
                placeholder="4356"
                value={lastFour}
                onChange={(e) => setLastFour(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Expiry Date (MM/YY)</label>
                <input
                  type="text"
                  required
                  placeholder="09/29"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Card Network</label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
                >
                  <option value="Visa Business">Visa Business</option>
                  <option value="Mastercard World">Mastercard World</option>
                </select>
              </div>
            </div>

            {/* Gradient Theme Picker */}
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Card Skin Color</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCardType('blue')}
                  className={`h-16 rounded-xl card-blue-gradient p-2.5 flex flex-col justify-between text-white text-left transition-all ${
                    cardType === 'blue' ? 'ring-2 ring-blue-600 scale-[1.02]' : 'opacity-80'
                  }`}
                >
                  <span className="text-[10px] font-bold">Deep Navy Blue</span>
                  <span className="text-[9px] opacity-80">Visa Corporate</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCardType('magenta')}
                  className={`h-16 rounded-xl card-magenta-gradient p-2.5 flex flex-col justify-between text-white text-left transition-all ${
                    cardType === 'magenta' ? 'ring-2 ring-rose-500 scale-[1.02]' : 'opacity-80'
                  }`}
                >
                  <span className="text-[10px] font-bold">Magenta Rose</span>
                  <span className="text-[9px] opacity-80">Mastercard World</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#141814] hover:bg-black text-white font-bold shadow-sm transition-colors"
              >
                Add Card
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
