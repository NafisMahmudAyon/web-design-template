import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Sparkles, CheckCircle2, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AddRecordModal({ isOpen, onClose, onAddSuccess }) {
  const [recordType, setRecordType] = useState('Revenue');
  const [amount, setAmount] = useState('');
  const [accountName, setAccountName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00e676', '#00c865', '#ff5722', '#ffffff']
    });

    if (onAddSuccess) {
      onAddSuccess({ type: recordType, amount, accountName });
    }

    setTimeout(() => {
      setIsSuccess(false);
      setAmount('');
      setAccountName('');
      onClose();
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-[#16181d] rounded-[32px] p-6 shadow-2xl z-10 border border-white/10 text-white overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#00e676] text-gray-950 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">Record Added!</h3>
              <p className="text-xs text-gray-400">Metrics updated cleanly across analytics grid.</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#00e676]" />
                <h3 className="text-xl font-bold font-display text-white">Add New Record</h3>
              </div>
              <p className="text-xs text-gray-400 mb-6">Log new transaction revenue or customer metrics into Kortex engine.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Record Category</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Revenue', 'Customer', 'Order'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setRecordType(type)}
                        className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                          recordType === type
                            ? 'bg-[#00e676] text-gray-950 border-[#00e676] font-bold'
                            : 'bg-[#20232b] text-gray-400 border-white/5 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Account / Enterprise Name</label>
                  <input
                    type="text"
                    required
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    placeholder="e.g. TechNova Inc"
                    className="w-full bg-[#20232b] text-xs text-white placeholder-gray-500 py-3 px-3.5 rounded-xl border border-white/10 focus:border-[#00e676] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Amount / Value ($)</label>
                  <input
                    type="text"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 3,200"
                    className="w-full bg-[#20232b] text-xs text-white placeholder-gray-500 py-3 px-3.5 rounded-xl border border-white/10 focus:border-[#00e676] focus:outline-none transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#00e676] hover:bg-[#00c865] text-gray-950 font-bold py-3.5 rounded-xl text-xs shadow-md transition-colors cursor-pointer mt-2"
                >
                  Save Record
                </motion.button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
