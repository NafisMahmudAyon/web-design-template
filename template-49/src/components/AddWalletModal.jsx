import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Wallet, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AddWalletModal = ({ isOpen, onClose, onAddWallet }) => {
  const [currency, setCurrency] = useState('CAD');
  const [initialDeposit, setInitialDeposit] = useState('5000');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#105B3A', '#22C55E', '#0F172A'],
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl text-slate-900"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 font-bold">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Wallet Added!</h3>
              <p className="text-xs text-slate-500 mt-1">
                Your new {currency} wallet has been initialized with instant IBAN & SWIFT settlement.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Add New Currency Wallet</h3>
                  <p className="text-xs text-slate-400">Expand your global treasury account</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-700"
                  >
                    <option value="CAD">🇨🇦 CAD — Canadian Dollar</option>
                    <option value="AUD">🇦🇺 AUD — Australian Dollar</option>
                    <option value="SGD">🇸🇬 SGD — Singapore Dollar</option>
                    <option value="JPY">🇯🇵 JPY — Japanese Yen</option>
                    <option value="CHF">🇨🇭 CHF — Swiss Franc</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Initial Allocation</label>
                  <input
                    type="number"
                    required
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(e.target.value)}
                    placeholder="5000"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Create Wallet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
