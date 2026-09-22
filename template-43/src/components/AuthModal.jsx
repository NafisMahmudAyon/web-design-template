import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Mail, Lock, User, Building } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthModal({ isOpen, type = 'signup', onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B5F52C', '#1855DE', '#38BDF8', '#10B981'],
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  const titles = {
    signup: 'Create Your Finexa Account',
    login: 'Welcome Back to Finexa',
    trial: 'Start Your 14-Day Free Trial',
    demo: 'Request an Executive Demo',
    contact: 'Contact Enterprise Advisory',
  };

  const subtitles = {
    signup: 'Join over 30M+ global users with zero transaction markups.',
    login: 'Sign in to monitor your global accounts and cash flow.',
    trial: 'Experience the full intelligent financial suite with zero card needed.',
    demo: 'See how Finexa centralizes liquidity for mid-market and enterprise teams.',
    contact: 'Our corporate finance architects will get back within 2 hours.',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                {titles[type] || 'Finexa Access'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {subtitles[type] || 'Intelligent global money management'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/50 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {type === 'login' ? 'Successfully Logged In!' : 'Account Initialized!'}
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Welcome to the future of financial intelligence. Redirecting to your workspace...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {(type === 'signup' || type === 'trial' || type === 'demo' || type === 'contact') && (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Daniel Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                {(type === 'demo' || type === 'contact') && (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Acme Global Inc."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>
                )}

                {type === 'login' && (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        required
                        className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>
                      {type === 'login' ? 'Sign In' : type === 'demo' ? 'Submit Demo Request' : 'Get Started Now'}
                    </span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Bank-grade 256-bit encryption · SOC2 Certified</span>
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
