import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, ArrowRight, Compass } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const [tab, setTab] = useState(defaultTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandForestDark/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-2 text-brandAmber text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Wanderlust Account</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            {tab === 'login' ? 'Welcome Back Traveler' : 'Join Wanderlust Club'}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            Access your saved itineraries, private guide contacts, and member flight discounts.
          </p>

          {/* Tabs */}
          <div className="flex rounded-xl bg-white/5 p-1 border border-white/10 mb-6">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                tab === 'login' ? 'bg-brandAmber text-brandForestDark shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                tab === 'register' ? 'bg-brandAmber text-brandForestDark shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {success ? (
            <div className="py-8 text-center text-emerald-400">
              <div className="text-3xl mb-2">✨</div>
              <p className="font-semibold text-base">Successfully authenticated!</p>
              <p className="text-xs text-slate-400 mt-1">Opening your travel dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-brandEmerald" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="traveler@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-brandAmber transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-brandEmerald" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-brandAmber transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3.5 rounded-full bg-gradient-to-r from-brandAmber to-amber-500 hover:from-amber-400 hover:to-amber-500 text-brandForestDark font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>{tab === 'login' ? 'Log In to Account' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
