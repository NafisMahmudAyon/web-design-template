import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Crown, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const UpgradeModal = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#105B3A', '#22C55E', '#F59E0B'],
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
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
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 font-bold">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Upgraded to Pro!</h3>
              <p className="text-xs text-slate-500 mt-1">
                You now have unlimited multi-currency vaults and automated cashflow forecasting.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <Crown className="w-4 h-4 fill-amber-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">OripioFin Pro</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Unlock Enterprise Treasury
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Designed for hyper-growth teams scaling international transactions.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Unlimited Multi-Currency Wallets',
                  'Sub-Second Global SWIFT Routing',
                  'Automated Tax Breakdown & ERP Sync',
                  'Priority Dedicated Account Manager',
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 flex items-baseline justify-between">
                <div>
                  <div className="text-2xl font-black text-slate-900">$49<span className="text-xs text-slate-500 font-normal"> / month</span></div>
                  <div className="text-[11px] text-slate-400">Billed annually, cancel anytime</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  Save 20%
                </span>
              </div>

              <button
                onClick={handleUpgrade}
                className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Upgrade to Pro Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
