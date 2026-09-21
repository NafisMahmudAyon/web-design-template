import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Mail, Lock, User, Wallet } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SignUpModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    fiatCurrency: 'USD',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#0e1012] text-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00e699]/20 text-[#00e699]">
                  INSTANT ACCESS
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Create Free Zypto Account
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Start trading digital assets and stocks with zero commission in under 4 minutes.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e699]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e699]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e699]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Preferred Base Currency
                  </label>
                  <select
                    value={formData.fiatCurrency}
                    onChange={(e) => setFormData({ ...formData, fiatCurrency: e.target.value })}
                    className="w-full bg-[#121417] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e699]"
                  >
                    <option value="USD">USD ($ United States Dollar)</option>
                    <option value="EUR">EUR (€ Euro)</option>
                    <option value="GBP">GBP (£ British Pound)</option>
                    <option value="BTC">BTC (₿ Bitcoin Native)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00e699] text-black font-bold text-base hover:bg-[#34d399] transition-all shadow-neon-emerald flex items-center justify-center gap-2 mt-4"
                >
                  <span>Launch Zypto Wallet</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#00e699]/20 text-[#00e699] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl font-bold text-white">
                  Welcome to Zypto, {formData.name}!
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto font-sans">
                  Your non-custodial crypto wallet has been initialized with base currency <span className="font-bold text-[#00e699]">{formData.fiatCurrency}</span>.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Account Email:</span>
                  <span className="font-bold text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee Tier:</span>
                  <span className="font-bold text-[#00e699]">0% Commission Active ($10K/mo)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#00e699] text-black font-bold text-sm hover:bg-[#34d399] transition-colors"
              >
                Go to Portfolio Dashboard
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
