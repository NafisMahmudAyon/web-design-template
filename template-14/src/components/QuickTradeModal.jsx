import React, { useState } from 'react';
import { X, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function QuickTradeModal({ isOpen, onClose, stock }) {
  const [orderType, setOrderType] = useState('BUY');
  const [shares, setShares] = useState(100);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !stock) return null;

  const price = parseFloat(stock.lip) || 130.4;
  const total = (shares * price).toFixed(2);

  const handleOrder = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-[#191C21] border border-[#2B313A] rounded-3xl p-6 max-w-md w-full shadow-2xl text-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#252B33] mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">{stock.instrument}</h3>
                <p className="text-xs text-slate-400">Current LIP: ${stock.lip}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#252B33] flex items-center justify-center text-slate-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-base font-bold text-white">Order Executed Successfully!</h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                {orderType} {shares} shares of {stock.instrument} @ ${price}
              </p>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="space-y-4">
              {/* Buy / Sell Selector */}
              <div className="flex items-center gap-2 p-1 bg-[#121417] rounded-xl border border-[#242A32]">
                <button
                  type="button"
                  onClick={() => setOrderType('BUY')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'BUY'
                      ? 'bg-emerald-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  BUY
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('SELL')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'SELL'
                      ? 'bg-red-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SELL
                </button>
              </div>

              {/* Shares Input */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Shares Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={shares}
                  onChange={(e) => setShares(Number(e.target.value))}
                  className="w-full text-sm font-mono px-3.5 py-2.5 rounded-xl bg-[#121417] border border-[#2B313A] focus:outline-none focus:border-emerald-500 text-white"
                />
              </div>

              {/* Order Estimation */}
              <div className="p-3.5 rounded-2xl bg-[#131518] border border-[#242A32] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Price per Share</span>
                  <span className="text-white">${price}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Estimated Fee</span>
                  <span className="text-emerald-400">$0.00 (Commission Free)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#20252D] text-sm font-bold">
                  <span className="text-slate-200">Total Amount</span>
                  <span className="text-emerald-400">${total}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-98 ${
                  orderType === 'BUY'
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    : 'bg-red-500 hover:bg-red-400 text-white'
                }`}
              >
                Place {orderType} Order
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
