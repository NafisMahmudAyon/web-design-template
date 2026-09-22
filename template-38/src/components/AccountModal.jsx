import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';

export default function AccountModal({ isOpen, onClose, initialMode = 'trial', exchangeData = null, selectedPlan = '' }) {
  const [mode, setMode] = useState(initialMode); // 'trial', 'exchange', 'contact'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialMode) setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl border border-gray-100 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#09182A] mb-1">
                  {mode === 'exchange' ? 'Exchange Executed!' : 'Welcome to Finexa!'}
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  {mode === 'exchange'
                    ? `Your conversion of ${exchangeData?.from || '1000'} USD to ${exchangeData?.to || '121,606.50'} BDT has been queued with zero hidden fees.`
                    : `Account credentials generated for ${name || 'your profile'}. Access your global multi-currency wallet now.`}
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#09182A] text-white text-xs font-bold shadow-md"
                >
                  Enter Portal
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
                    {mode === 'exchange' ? 'Instant Settlement' : 'Priority Setup'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#09182A] mb-1">
                  {mode === 'exchange' ? 'Confirm Currency Conversion' : 'Start Your Free 14-Day Trial'}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  {mode === 'exchange'
                    ? 'Execute cross-border exchange with real-time rate lock.'
                    : `Instant setup for ${selectedPlan || 'Professional Plan'} with zero credit card required.`}
                </p>

                {mode === 'exchange' && exchangeData && (
                  <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-gray-200 mb-4 space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-500">
                      <span>Converting:</span>
                      <span className="font-bold text-[#09182A]">{exchangeData.from} USD</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Receiving:</span>
                      <span className="font-bold text-[#09182A]">{exchangeData.to} BDT</span>
                    </div>
                    <div className="flex justify-between text-gray-500 pt-1 border-t border-gray-200 text-[10px]">
                      <span>Guaranteed Rate:</span>
                      <span className="font-mono text-blue-600 font-bold">1 USD = 121.60 BDT</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jonathan Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jonathan@sterlingcap.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-[#C5FF32] hover:bg-[#b5f51e] text-[#09182A] font-extrabold text-xs tracking-wide shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{mode === 'exchange' ? 'Confirm Exchange' : 'Start Free Trial Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-center text-[10px] text-gray-400">
                    256-bit bank grade encryption • Regulated global financial services
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
