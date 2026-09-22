import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Mail, Lock, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AuthModal = ({ isOpen, onClose, initialMode = 'signup', selectedPlan = null }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d2fc3b', '#ffffff', '#10b981'],
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md rounded-3xl bg-finovia-card border border-white/10 p-8 shadow-2xl text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-finovia-lime text-finovia-dark flex items-center justify-center mx-auto mb-4 font-black">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-black text-white">Welcome to Finovia!</h3>
              <p className="text-sm text-slate-300 mt-2">
                Your financial dashboard is now ready. Redirecting you...
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-10 h-10 rounded-full bg-finovia-lime flex items-center justify-center mx-auto mb-3 text-finovia-dark font-black text-lg">
                  F
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {mode === 'signup' ? 'Create Your Finovia Account' : 'Welcome Back to Finovia'}
                </h3>
                {selectedPlan ? (
                  <p className="text-xs text-finovia-lime mt-1 font-semibold">
                    Selected Plan: {selectedPlan.name} ({selectedPlan.monthlyPrice}/mo)
                  </p>
                ) : (
                  <p className="text-xs text-slate-400 mt-1">
                    Smart personal finance and automated cash management
                  </p>
                )}
              </div>

              {/* Mode Switcher */}
              <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 mb-6">
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                    mode === 'signup'
                      ? 'bg-finovia-lime text-finovia-dark shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                    mode === 'login'
                      ? 'bg-finovia-lime text-finovia-dark shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-finovia-lime"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@finovia.io"
                      className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-finovia-lime"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-finovia-lime"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-finovia-lime text-finovia-dark font-extrabold text-sm hover:bg-finovia-lime-glow hover:shadow-lg hover:shadow-finovia-lime/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>{mode === 'signup' ? 'Get Started Instant' : 'Sign In to Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Security guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>256-Bit SSL Encrypted & SOC-2 Certified</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
