import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose, initialPlan = 'Custom Financial Solution' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [assetVolume, setAssetVolume] = useState('$100k - $500k');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4F442', '#10B981', '#0284C7', '#0A0A0A']
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-9 shadow-2xl border border-gray-100 z-10 text-gray-900 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Finora Advisory
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-gray-950 font-display mt-2">
                {initialPlan}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Schedule a 1-on-1 strategy call with our institutional wealth & corporate treasury specialists.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Belfort"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-gray-900 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Business Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-gray-900 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Company / Entity</label>
                    <input
                      type="text"
                      placeholder="Apex Ventures"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-gray-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Annual Volume</label>
                    <select
                      value={assetVolume}
                      onChange={(e) => setAssetVolume(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF9] text-xs sm:text-sm focus:outline-hidden"
                    >
                      <option value="Under $100k">Under $100k</option>
                      <option value="$100k - $500k">$100k - $500k</option>
                      <option value="$500k - $2M">$500k - $2M</option>
                      <option value="$2M+">$2M+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-gray-950 hover:bg-black text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SOC2 Type II Certified • Bank-Grade 256-bit Encryption</span>
                </p>
              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center text-gray-950 mb-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">
                Consultation Requested!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm">
                Thank you, <span className="font-bold text-gray-950">{name}</span>! A senior financial advisor will reach out to {email} within 2 business hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
