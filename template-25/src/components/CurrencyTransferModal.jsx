import React, { useState } from 'react';
import { X, ArrowRightLeft, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CurrencyTransferModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('1000');
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');

  if (!isOpen) return null;

  const rates = {
    EUR: 0.9184,
    GBP: 0.7892,
    CAD: 1.3540,
    AUD: 1.5120,
    JPY: 154.20,
  };

  const currentRate = rates[targetCurrency] || 1;
  const converted = (parseFloat(amount || 0) * currentRate).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-[#0b2416] text-white rounded-3xl border-3 border-[#0b2416] shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <ArrowRightLeft className="w-5 h-5 text-[#bef264]" />
            <h3 className="font-display text-xl font-black uppercase text-[#bef264]">
              GLOBAL TRANSFER CALCULATOR
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Converter Form */}
        <div className="space-y-4">
          
          {/* Send Box */}
          <div className="bg-emerald-950 p-4 rounded-2xl border border-emerald-800/40 space-y-2">
            <span className="text-[10px] font-black uppercase text-white/60 tracking-wider block">
              YOU SEND
            </span>
            <div className="flex justify-between items-center">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent font-display text-3xl font-black text-white focus:outline-none w-full"
              />
              <span className="bg-[#0b2416] text-white text-xs font-black px-3 py-1.5 rounded-lg border border-emerald-700">
                USD ($)
              </span>
            </div>
          </div>

          {/* Swap divider icon */}
          <div className="flex justify-center -my-2">
            <div className="w-8 h-8 rounded-full bg-[#bef264] text-[#0b2416] flex items-center justify-center font-black border-2 border-[#0b2416]">
              ↓
            </div>
          </div>

          {/* Receive Box */}
          <div className="bg-emerald-950 p-4 rounded-2xl border border-emerald-800/40 space-y-2">
            <span className="text-[10px] font-black uppercase text-[#bef264] tracking-wider block">
              THEY RECEIVE
            </span>
            <div className="flex justify-between items-center">
              <span className="font-display text-3xl font-black text-[#bef264]">
                {converted}
              </span>
              
              <select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-[#0b2416] text-[#bef264] text-xs font-black px-3 py-1.5 rounded-lg border border-emerald-700 focus:outline-none cursor-pointer"
              >
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="CAD">CAD ($)</option>
                <option value="AUD">AUD ($)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>

          {/* Transfer Info */}
          <div className="space-y-2 text-xs font-bold text-white/80 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex justify-between">
              <span className="text-white/60">Interbank FX Rate:</span>
              <span>1 USD = {currentRate} {targetCurrency}</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Transfer Fee:</span>
              <span>$0.00 (Zero Fee)</span>
            </div>
            <div className="flex justify-between text-[#bef264]">
              <span>Estimated Arrival:</span>
              <span>~8 Seconds (Instant)</span>
            </div>
          </div>

          <button
            onClick={() => {
              alert(`Initiating transfer of $${amount} USD to ${converted} ${targetCurrency}!`);
              onClose();
            }}
            className="w-full bg-[#bef264] hover:bg-[#aef043] text-[#0b2416] font-black text-xs py-4 rounded-full border-2 border-[#0b2416] shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all"
          >
            <span>SEND {amount} USD NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
