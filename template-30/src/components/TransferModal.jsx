import React, { useState } from 'react';
import { X, Send, ShieldCheck, Check } from 'lucide-react';

export default function TransferModal({ isOpen, onClose }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('USDT');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center font-bold">
              <Send className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Internal Transfer</h3>
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
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Transfer Completed!</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Sent {amount} {asset} instantly to {recipient}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            
            {/* Recipient */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Raxon Email or Wallet Tag
              </label>
              <input
                type="text"
                required
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="e.g. oripior@rynox.io"
                className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#E65D24] placeholder:text-slate-400"
              />
            </div>

            {/* Asset & Amount */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                  Asset
                </label>
                <select
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none"
                >
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                  Amount
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#E65D24]"
                />
              </div>
            </div>

            {/* Notice */}
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs flex items-center gap-2 border border-emerald-200/60 dark:border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>Zero transaction fee for Rynox internal platform transfers.</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-[#E65D24] hover:bg-[#CE4E1A] text-white font-bold text-sm rounded-xl shadow-md shadow-[#E65D24]/30 transition-all"
            >
              Send Transfer Now
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
