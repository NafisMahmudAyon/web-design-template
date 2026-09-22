import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Ship, Plane, Truck, Calculator } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose }) {
  const [origin, setOrigin] = useState('Rotterdam, Netherlands');
  const [destination, setDestination] = useState('Singapore Port');
  const [mode, setMode] = useState('ocean');
  const [weight, setWeight] = useState('18.5');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E11D48', '#BE123C', '#38BDF8', '#10B981'],
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const estimatedRates = {
    ocean: '$3,850 - $4,200 (18-22 days)',
    air: '$8,400 - $9,100 (3-5 days)',
    ground: '$2,100 - $2,500 (5-7 days)',
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
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Instant Freight Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Calculate real-time maritime, air, and multimodal cargo rates
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/50 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Quote Dispatched!
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  A certified supply chain logistics architect will deliver your detailed contract within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Freight Mode Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Shipping Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'ocean', label: 'Ocean Freight', icon: Ship },
                      { id: 'air', label: 'Air Express', icon: Plane },
                      { id: 'ground', label: 'Road Freight', icon: Truck },
                    ].map(item => {
                      const Icon = item.icon;
                      const isSelected = mode === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setMode(item.id)}
                          className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition ${
                            isSelected
                              ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Origin & Destination */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Origin Port / City
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Destination Port / City
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                    />
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Gross Cargo Weight (Metric Tons)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                  />
                </div>

                {/* Instant Calculation Preview */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Estimated Benchmark
                  </span>
                  <div className="text-sm font-extrabold text-slate-900 font-mono">
                    {estimatedRates[mode]}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs sm:text-sm shadow-red-glow transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Request Official Rate Contract</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                <div className="pt-1 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>IATA & FMC Licensed Carrier · Guaranteed Capacity</span>
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
