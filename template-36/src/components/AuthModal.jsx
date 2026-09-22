import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, CheckCircle2, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin', selectedPlan = '' }) {
  const [mode, setMode] = useState(initialMode); // 'signin', 'signup', 'wallet'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [connected, setConnected] = useState(false);
  const [walletType, setWalletType] = useState('');

  // Keep state in sync with initialMode
  React.useEffect(() => {
    if (initialMode) setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConnected(true);
  };

  const handleWalletSelect = (wallet) => {
    setWalletType(wallet);
    setConnected(true);
  };

  const handleClose = () => {
    setConnected(false);
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0F2527] text-white rounded-3xl p-7 shadow-2xl border border-white/10 z-10 overflow-hidden"
          >
            {/* Top Glow Accent */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#00D287]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {connected ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#00D287]/20 flex items-center justify-center text-[#00D287] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome to Raxon!</h3>
                <p className="text-xs text-gray-300 max-w-xs mb-6">
                  {walletType
                    ? `Successfully linked ${walletType} to your decentralized trading session.`
                    : `Account authenticated with access to ${selectedPlan || 'Pro features'}.`}
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#00D287] text-[#0B1A1C] font-bold text-xs hover:bg-[#22C55E] transition-colors"
                >
                  Enter Exchange
                </button>
              </div>
            ) : (
              <div>
                {/* Header / Tabs */}
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                  <button
                    onClick={() => setMode('signin')}
                    className={`text-xs font-bold transition-colors pb-1 relative ${
                      mode === 'signin' ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Sign In
                    {mode === 'signin' && (
                      <div className="absolute bottom-[-13px] inset-x-0 h-0.5 bg-[#00D287]" />
                    )}
                  </button>
                  <span className="text-gray-600">|</span>
                  <button
                    onClick={() => setMode('signup')}
                    className={`text-xs font-bold transition-colors pb-1 relative ${
                      mode === 'signup' ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Create Account
                    {mode === 'signup' && (
                      <div className="absolute bottom-[-13px] inset-x-0 h-0.5 bg-[#00D287]" />
                    )}
                  </button>
                  <span className="text-gray-600">|</span>
                  <button
                    onClick={() => setMode('wallet')}
                    className={`text-xs font-bold transition-colors pb-1 relative ${
                      mode === 'wallet' ? 'text-[#00D287]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Web3 Wallet
                    {mode === 'wallet' && (
                      <div className="absolute bottom-[-13px] inset-x-0 h-0.5 bg-[#00D287]" />
                    )}
                  </button>
                </div>

                {selectedPlan && (
                  <div className="mb-4 p-2.5 rounded-xl bg-white/5 border border-[#00D287]/30 flex items-center justify-between text-xs">
                    <span className="text-gray-300">Selected Plan:</span>
                    <span className="font-bold text-[#00D287]">{selectedPlan}</span>
                  </div>
                )}

                {mode === 'wallet' ? (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-400 mb-4">
                      Connect your self-custody wallet for non-custodial crypto trading:
                    </p>
                    {['MetaMask', 'Phantom', 'Coinbase Wallet', 'WalletConnect'].map((w) => (
                      <button
                        key={w}
                        onClick={() => handleWalletSelect(w)}
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D287] hover:bg-white/10 flex items-center justify-between text-xs font-bold text-white transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <Wallet className="w-4 h-4 text-[#00D287]" />
                          <span>{w}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {mode === 'signup' && (
                      <div>
                        <label className="block text-[11px] font-medium text-gray-300 mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Alex Thorne"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00D287]"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-medium text-gray-300 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="email"
                          required
                          placeholder="alex@raxon.io"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00D287]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-gray-300 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="password"
                          required
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00D287]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-3 py-2.5 rounded-xl bg-[#00D287] text-[#0B1A1C] font-bold text-xs hover:bg-[#22C55E] flex items-center justify-center gap-1.5 shadow-lg shadow-[#00D287]/20 transition-all"
                    >
                      <span>{mode === 'signup' ? 'Create Account' : 'Sign In to Raxon'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
