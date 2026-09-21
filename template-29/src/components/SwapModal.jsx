import React, { useState } from 'react';
import { X, Repeat, ArrowDown, Settings, Check } from 'lucide-react';

export default function SwapModal({ isOpen, onClose }) {
  const [fromAsset, setFromAsset] = useState('ETH');
  const [toAsset, setToAsset] = useState('USDT');
  const [fromAmount, setFromAmount] = useState('1.5');
  const [slippage, setSlippage] = useState('0.5%');
  const [isSwapping, setIsSwapping] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toAmount = (parseFloat(fromAmount || 0) * 1040.5).toFixed(2);

  const handleSwapCoins = () => {
    setFromAsset(toAsset);
    setToAsset(fromAsset);
  };

  const handleExecuteSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FF5B37]/10 text-[#FF5B37] flex items-center justify-center font-bold">
              <Repeat className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Instant Swap</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Swap Completed!</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Swapped {fromAmount} {fromAsset} for {toAmount} {toAsset} at best market rate.
            </p>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            
            {/* From Box */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-1.5">
                <span>You Pay</span>
                <span>Balance: 12.8 ETH</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent text-xl font-extrabold text-slate-900 dark:text-white focus:outline-none w-full"
                />
                <select
                  value={fromAsset}
                  onChange={(e) => setFromAsset(e.target.value)}
                  className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none"
                >
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="SOL">SOL</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
            </div>

            {/* Swap Direction Toggle Circle */}
            <div className="flex justify-center -my-2 relative z-10">
              <button
                onClick={handleSwapCoins}
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-md text-slate-600 dark:text-slate-300 hover:text-[#FF5B37] hover:border-[#FF5B37] transition-all"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* To Box */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-1.5">
                <span>You Receive (Est.)</span>
                <span>Balance: 10,250 USDT</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="text"
                  readOnly
                  value={toAmount}
                  className="bg-transparent text-xl font-extrabold text-slate-900 dark:text-white focus:outline-none w-full"
                />
                <select
                  value={toAsset}
                  onChange={(e) => setToAsset(e.target.value)}
                  className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none"
                >
                  <option value="USDT">USDT</option>
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
            </div>

            {/* Slippage Settings */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-slate-400 font-semibold">Slippage Tolerance</span>
              <div className="flex items-center gap-1.5 font-bold">
                {['0.1%', '0.5%', '1.0%'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlippage(s)}
                    className={`px-2 py-0.5 rounded-md text-[11px] transition-colors ${
                      slippage === s
                        ? 'bg-[#FF5B37] text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleExecuteSwap}
              disabled={isSwapping}
              className="w-full py-3.5 bg-[#FF5B37] hover:bg-[#E84A26] text-white font-bold text-sm rounded-xl shadow-md shadow-[#FF5B37]/30 transition-all flex items-center justify-center gap-2"
            >
              {isSwapping ? (
                <>
                  <Repeat className="w-4 h-4 animate-spin" />
                  <span>Swapping Assets...</span>
                </>
              ) : (
                <span>Execute Swap</span>
              )}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
