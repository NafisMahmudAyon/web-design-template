import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ArrowDownLeft, CheckCircle2, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TransferModal({ isOpen, onClose, mode = 'transfer' }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('500');
  const [note, setNote] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setRecipient('');
        setNote('');
      }, 1200);
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-black/5 text-[#141814]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#141814] text-white flex items-center justify-center">
                {mode === 'transfer' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {mode === 'transfer' ? 'Send Money Transfer' : 'Request Payment'}
                </h3>
                <p className="text-xs text-gray-500">Fast SEPA & ACH instant settlement</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 text-[#10B981] animate-bounce mb-2" />
              <h4 className="text-base font-bold">
                {mode === 'transfer' ? 'Transfer Dispatched!' : 'Request Sent!'}
              </h4>
              <p className="text-xs text-gray-500 mt-1">${amount} routed successfully to {recipient || 'recipient'}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
              {/* Recipient */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">
                  {mode === 'transfer' ? 'Recipient (Email / IBAN / Phone)' : 'Payer Contact'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. emma.john@company.com"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-sm text-gray-500">$</span>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-sm font-extrabold text-[#141814]"
                  />
                </div>
              </div>

              {/* Funding Source / Card */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Source Account</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]">
                  <option>Finora Treasury (**** 4356) - $22,426.10</option>
                  <option>Operating Capital (**** 7382) - $22,426.10</option>
                  <option>USD Vault Balance - $689,372.00</option>
                </select>
              </div>

              {/* Note */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Memo / Invoice Reference (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Q3 Retainer Settlement"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-5 py-2 rounded-xl bg-[#141814] hover:bg-black text-white font-bold shadow-sm transition-colors"
                >
                  {isProcessing ? 'Authorizing...' : mode === 'transfer' ? 'Authorize Transfer' : 'Send Request'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
