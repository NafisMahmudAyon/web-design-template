import React, { useState } from 'react';
import { X, ArrowUpDown, PlusCircle, ArrowUpRight, ArrowLeftRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ActionModal({ isOpen, onClose, initialType = 'deposit' }) {
  const [activeType, setActiveType] = useState(initialType);
  const [amount, setAmount] = useState('500');
  const [asset, setAsset] = useState('SOL');
  const [targetAsset, setTargetAsset] = useState('USDT');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-[#12151F] rounded-3xl w-full max-w-md shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Type Selector */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1 bg-[#181B26] p-1 rounded-full border border-white/5">
            {[
              { id: 'deposit', label: 'Deposit' },
              { id: 'withdraw', label: 'Withdraw' },
              { id: 'transfer', label: 'Transfer' },
              { id: 'swap', label: 'Swap' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveType(t.id)}
                className={`
                  px-3 py-1 rounded-full text-xs font-semibold transition
                  ${activeType === t.id 
                    ? 'bg-indigo-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                  }
                `}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-2 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="text-base font-bold text-white">Transaction Broadcasted!</h4>
              <p className="text-xs text-slate-400">Your {activeType} order is being verified on the blockchain.</p>
            </div>
          ) : (
            <>
              {activeType === 'swap' ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">You Pay</label>
                    <div className="flex items-center gap-2 bg-[#181B26] border border-white/10 rounded-2xl p-3">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-transparent text-lg font-bold text-white focus:outline-none"
                      />
                      <select
                        value={asset}
                        onChange={(e) => setAsset(e.target.value)}
                        className="bg-[#202534] text-xs font-bold text-white px-2.5 py-1 rounded-xl border border-white/10 focus:outline-none"
                      >
                        <option value="SOL">SOL</option>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="ADA">ADA</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-glow-primary">
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">You Receive (Estimated)</label>
                    <div className="flex items-center gap-2 bg-[#181B26] border border-white/10 rounded-2xl p-3">
                      <div className="w-full text-lg font-bold text-white">
                        {(Number(amount || 0) * 168.75).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <span className="bg-[#202534] text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-xl border border-white/10">
                        {targetAsset}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Amount</label>
                    <div className="flex items-center gap-2 bg-[#181B26] border border-white/10 rounded-2xl p-3">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-transparent text-lg font-bold text-white focus:outline-none"
                        placeholder="0.00"
                        required
                      />
                      <select
                        value={asset}
                        onChange={(e) => setAsset(e.target.value)}
                        className="bg-[#202534] text-xs font-bold text-white px-2.5 py-1 rounded-xl border border-white/10 focus:outline-none"
                      >
                        <option value="USD">USD</option>
                        <option value="USDT">USDT</option>
                        <option value="SOL">SOL</option>
                        <option value="ETH">ETH</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-[#181B26] rounded-2xl border border-white/5 space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Network Fee</span>
                      <span className="text-white font-medium">$0.00 (Zero Fee Promotion)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settlement Speed</span>
                      <span className="text-emerald-400 font-medium">Instant (~1.2s)</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-glow-primary transition mt-4"
              >
                Confirm {activeType.charAt(0).toUpperCase() + activeType.slice(1)}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
