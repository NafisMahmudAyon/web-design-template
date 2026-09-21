import React, { useState } from 'react';
import { X, ArrowDownLeft, AlertCircle, Check } from 'lucide-react';

export default function WithdrawModal({ isOpen, onClose }) {
  const [asset, setAsset] = useState('BTC');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
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
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Withdraw Funds</h3>
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
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Withdrawal Submitted!</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Your request for {amount} {asset} to {address.slice(0, 8)}... has been submitted to the blockchain.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            
            {/* Asset */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Currency
              </label>
              <select
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#FF5B37]"
              >
                <option value="BTC">Bitcoin (BTC) - Available: 1.45 BTC</option>
                <option value="ETH">Ethereum (ETH) - Available: 12.80 ETH</option>
                <option value="SOL">Solana (SOL) - Available: 140.0 SOL</option>
                <option value="USDT">Tether (USDT) - Available: 10,250 USDT</option>
              </select>
            </div>

            {/* Recipient Address */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Withdrawal Address
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Paste destination wallet address"
                className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-xs font-mono p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#FF5B37] placeholder:text-slate-400"
              />
            </div>

            {/* Amount */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Amount
                </label>
                <button
                  type="button"
                  onClick={() => setAmount('1.45')}
                  className="text-[11px] font-bold text-[#FF5B37] hover:underline"
                >
                  MAX
                </button>
              </div>
              <div className="relative">
                <input
                  type="number"
                  step="any"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm font-bold p-3 pr-16 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#FF5B37]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  {asset}
                </span>
              </div>
            </div>

            {/* Network Fee summary */}
            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Network Fee</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">0.00015 {asset}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Arrival</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">~ 5-10 mins</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-[#FF5B37] hover:bg-[#E84A26] text-white font-bold text-sm rounded-xl shadow-md shadow-[#FF5B37]/30 transition-all"
            >
              Confirm Withdrawal
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
