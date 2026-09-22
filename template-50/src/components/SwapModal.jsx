import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowDownUp, RefreshCw, CheckCircle2, Zap, Settings2 } from 'lucide-react';

export default function SwapModal({ isOpen, onClose }) {
  const [fromAmount, setFromAmount] = useState('500');
  const [fromToken, setFromToken] = useState('USDT');
  const [toToken, setToToken] = useState('BTC');
  const [slippage, setSlippage] = useState('0.5%');
  const [isSwapping, setIsSwapping] = useState(false);
  const [success, setSuccess] = useState(false);

  // Conversion rates mockup
  const rates = {
    'BTC': 68420,
    'ETH': 3540,
    'SOL': 145,
    'USDT': 1,
  };

  const getToAmount = () => {
    const fromVal = parseFloat(fromAmount) || 0;
    const rateFrom = rates[fromToken] || 1;
    const rateTo = rates[toToken] || 1;
    const result = (fromVal * rateFrom) / rateTo;
    return result > 1 ? result.toFixed(2) : result.toFixed(5);
  };

  const handleFlip = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-[#121824] border border-white/10 rounded-2xl p-6 shadow-2xl text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <ArrowDownUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Instant Token Swap</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {success ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Swap Completed!</h4>
              <p className="text-sm text-zinc-400">
                Swapped {fromAmount} {fromToken} for {getToAmount()} {toToken} successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSwap} className="mt-5 space-y-4">
              {/* You Pay */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                  <span>You Pay</span>
                  <span>Balance: 12,540.00 {fromToken}</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="any"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full bg-transparent font-mono text-xl font-bold text-white focus:outline-none"
                  />
                  <select
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="bg-[#1b2333] border border-white/10 rounded-lg px-2.5 py-1 text-sm font-semibold text-white focus:outline-none"
                  >
                    <option value="USDT">USDT</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="SOL">SOL</option>
                  </select>
                </div>
              </div>

              {/* Flip Button */}
              <div className="flex justify-center -my-2 relative z-10">
                <button
                  type="button"
                  onClick={handleFlip}
                  className="w-8 h-8 rounded-full bg-[#1e2738] border border-white/10 hover:border-orange-500 text-zinc-300 hover:text-orange-400 flex items-center justify-center transition-all shadow-md"
                >
                  <ArrowDownUp className="w-4 h-4" />
                </button>
              </div>

              {/* You Receive */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                  <span>You Receive (Estimated)</span>
                  <span>Rate: 1 {toToken} ≈ ${(rates[toToken] || 1).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full font-mono text-xl font-bold text-orange-400">
                    {getToAmount()}
                  </div>
                  <select
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="bg-[#1b2333] border border-white/10 rounded-lg px-2.5 py-1 text-sm font-semibold text-white focus:outline-none"
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="SOL">SOL</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>

              {/* Slippage & Details */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Settings2 className="w-3.5 h-3.5" />
                    <span>Slippage Tolerance</span>
                  </span>
                  <div className="flex items-center gap-1">
                    {['0.1%', '0.5%', '1.0%'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setSlippage(val)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                          slippage === val
                            ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                            : 'bg-white/5 border-transparent text-zinc-400 hover:text-white'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Network Gas Fee</span>
                  </span>
                  <span className="font-mono text-zinc-200">~$0.85 (BNB Chain)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSwapping}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  {isSwapping ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Swapping via DEX Router...</span>
                    </>
                  ) : (
                    <span>Confirm Swap</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
