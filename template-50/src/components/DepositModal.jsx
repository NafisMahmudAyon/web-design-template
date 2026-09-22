import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, QrCode, ArrowDownRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function DepositModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [network, setNetwork] = useState('BEP20');
  const [depositAmount, setDepositAmount] = useState('');
  const [success, setSuccess] = useState(false);

  const address = '0x8A79B37E525fB5B2625Ab087B228cD977B132e64';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    if (!depositAmount || Number(depositAmount) <= 0) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setDepositAmount('');
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-[#121824] border border-white/10 rounded-2xl p-6 shadow-2xl text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <ArrowDownRight className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Deposit Crypto Assets</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {success ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10 animate-bounce">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Deposit Initiated!</h4>
              <p className="text-sm text-zinc-400 max-w-xs">
                ${depositAmount} USDT is being processed across the {network} network. Funds will reflect in 12 block confirmations.
              </p>
            </div>
          ) : (
            <form onSubmit={handleDeposit} className="mt-5 space-y-4">
              {/* Select Network */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Select Deposit Network
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'BEP20', label: 'BNB Smart Chain' },
                    { id: 'ERC20', label: 'Ethereum' },
                    { id: 'TRC20', label: 'Tron TRC20' },
                  ].map((net) => (
                    <button
                      key={net.id}
                      type="button"
                      onClick={() => setNetwork(net.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        network === net.id
                          ? 'bg-orange-500/20 border-orange-500 text-orange-400 font-semibold'
                          : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div>{net.id}</div>
                      <div className="text-[10px] opacity-70 truncate">{net.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Deposit Address with QR */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Deposit Address
                </label>
                <div className="flex items-center gap-2 p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-zinc-300">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-zinc-300 truncate select-all flex-1">
                    {address}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 text-xs font-medium flex items-center gap-1 shrink-0 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Amount Simulated */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Amount (USDT)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    placeholder="Enter deposit amount e.g. 500"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setDepositAmount('1000')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-orange-400 font-semibold hover:underline"
                  >
                    MAX
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/80">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Please only transfer USDT to this address using the {network} network. Sending any other tokens will result in permanent loss.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium text-zinc-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all"
                >
                  Confirm Deposit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
