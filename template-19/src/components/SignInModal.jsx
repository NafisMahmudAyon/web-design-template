import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, Key, ShieldCheck, Check } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-[#0A0D12] border border-gold-500/40 rounded-3xl p-8 max-w-md w-full shadow-2xl z-10 text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white">Collector Access</h3>
            <p className="text-xs text-gray-400 mt-1">
              Enter your registered collector credentials to view encrypted private vault holdings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                Client Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="collector@domain.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSuccess}
              className={`w-full py-3.5 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 shadow-gold-subtle flex items-center justify-center gap-2 ${
                isSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black shadow-gold-glow'
              }`}
            >
              {isSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>AUTHENTICATED • OPENING VAULT</span>
                </>
              ) : (
                <span>ACCESS PRIVATE VAULT</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-center gap-2 text-[10px] font-mono text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>FIDO2 / WEBAUTHN HARDWARE KEY SUPPORTED</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
