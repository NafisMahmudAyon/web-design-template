import React, { useState } from 'react';
import { X, Plus, CheckCircle2 } from 'lucide-react';

export default function AddTransactionModal({ isOpen, onClose }) {
  const [asset, setAsset] = useState('NVDA');
  const [type, setType] = useState('buy');
  const [amount, setAmount] = useState('10');
  const [price, setPrice] = useState('203.34');
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
  };

  const handleReset = () => {
    setCompleted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={handleReset}></div>

      <div className="relative w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-8 z-10 text-[#090d16] space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h3 className="font-display text-xl font-black">
            Add Portfolio Transaction
          </h3>
          <button
            onClick={handleReset}
            className="p-1.5 text-gray-400 hover:text-[#090d16] rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>
            <h4 className="font-display text-2xl font-black uppercase">
              TRANSACTION ADDED!
            </h4>
            <p className="text-xs text-gray-600 font-medium max-w-xs mx-auto">
              Added {amount} shares of <strong className="text-[#090d16]">{asset}</strong> at ${price} per unit to your Investo portfolio.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-[#090d16] text-white font-extrabold text-xs py-3.5 rounded-full shadow-md hover:bg-black transition-all"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Buy / Sell switch */}
            <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl text-xs font-black">
              <button
                type="button"
                onClick={() => setType('buy')}
                className={`py-2 rounded-lg transition-all ${
                  type === 'buy' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                BUY ASSET
              </button>
              <button
                type="button"
                onClick={() => setType('sell')}
                className={`py-2 rounded-lg transition-all ${
                  type === 'sell' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                SELL ASSET
              </button>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-wider block mb-1">
                ASSET SYMBOL
              </label>
              <input
                type="text"
                required
                value={asset}
                onChange={(e) => setAsset(e.target.value.toUpperCase())}
                placeholder="NVDA, BTC, AAPL..."
                className="w-full bg-[#f8fafc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-black uppercase"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-black uppercase tracking-wider block mb-1">
                  QUANTITY
                </label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-wider block mb-1">
                  PRICE ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-gray-300 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#090d16] font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#090d16] hover:bg-black text-white font-black text-xs py-4 rounded-full shadow-lg flex items-center justify-center space-x-2 tracking-wider transition-all"
            >
              <span>CONFIRM TRANSACTION</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
