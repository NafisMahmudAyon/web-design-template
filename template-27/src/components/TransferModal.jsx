import React, { useState } from 'react';
import { X, ArrowRightLeft, Send, CheckCircle2 } from 'lucide-react';

export default function TransferModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('1000');
  const [targetCurrency, setTargetCurrency] = useState('BDT');

  if (!isOpen) return null;

  const rates = {
    BDT: 121.6065,
    EUR: 0.9184,
    GBP: 0.7892,
    CAD: 1.3540,
    INR: 83.4500,
  };

  const currentRate = rates[targetCurrency] || 1;
  const converted = (parseFloat(amount || 0) * currentRate).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-[#090d16] text-white rounded-3xl border border-gray-700 shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <ArrowRightLeft className="w-5 h-5 text-sky-400" />
            <h3 className="font-display text-lg font-black uppercase text-sky-400">
              PAYLIO QUICK TRANSFER
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Conversion Form */}
        <div className="space-y-4">
          <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block">
              YOU SEND (USD)
            </span>
            <div className="flex justify-between items-center">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent font-display text-3xl font-black text-white focus:outline-none w-full"
              />
              <span className="bg-white/20 text-xs font-black px-3 py-1 rounded-lg">
                🇺🇸 USD
              </span>
            </div>
          </div>

          <div className="flex justify-center -my-2">
            <div className="w-8 h-8 rounded-full bg-sky-400 text-[#090d16] flex items-center justify-center font-black">
              ↓
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] font-black uppercase text-sky-400 tracking-wider block">
              RECIPIENT RECEIVES
            </span>
            <div className="flex justify-between items-center">
              <span className="font-display text-3xl font-black text-sky-400">
                {converted}
              </span>
              
              <select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-[#090d16] text-sky-400 text-xs font-black px-3 py-1.5 rounded-lg border border-white/20 focus:outline-none cursor-pointer"
              >
                <option value="BDT">🇧🇩 BDT</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="GBP">🇬🇧 GBP</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="INR">🇮🇳 INR</option>
              </select>
            </div>
          </div>

          <div className="space-y-1 text-xs text-white/70 font-bold pt-2 border-t border-white/10">
            <div className="flex justify-between">
              <span>Exchange Rate:</span>
              <span className="text-white">1 USD = {currentRate} {targetCurrency}</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Transfer Fee:</span>
              <span>$0.00 (Zero Fee)</span>
            </div>
          </div>

          <button
            onClick={() => {
              alert(`Transfer of $${amount} USD (${converted} ${targetCurrency}) initiated!`);
              onClose();
            }}
            className="w-full bg-[#090d16] hover:bg-black text-white font-black text-xs py-4 rounded-full border border-sky-400/40 shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all"
          >
            <span>SEND MONEY NOW</span>
            <Send className="w-4 h-4 text-sky-400" />
          </button>
        </div>

      </div>
    </div>
  );
}
