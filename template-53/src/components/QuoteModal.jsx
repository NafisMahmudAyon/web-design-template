import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SunMedium, Zap, CheckCircle2, ArrowRight, Calculator, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, initialType = 'quote' }) {
  const [propertyType, setPropertyType] = useState('residential');
  const [monthlyBill, setMonthlyBill] = useState(240);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Solar Calculation
  const estimatedSavings = Math.round(monthlyBill * 0.72 * 12);
  const recommendedKw = (monthlyBill / 26).toFixed(1);
  const co2OffsetTons = (monthlyBill * 0.045).toFixed(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DCF852', '#0284C7', '#10B981', '#F59E0B']
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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1A13]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-xl bg-white rounded-[32px] p-6 sm:p-9 shadow-2xl border border-gray-100 overflow-hidden z-10 text-gray-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-max mb-3">
                <SunMedium className="w-4 h-4 text-emerald-600" />
                <span>Instant Clean Energy Calculator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 font-display">
                Get Your Free Solar Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                Calculate estimated annual savings and receive a complimentary 3D drone roof assessment.
              </p>

              {/* Property Toggle */}
              <div className="mt-5 grid grid-cols-2 gap-2 p-1 rounded-2xl bg-gray-100">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    propertyType === 'residential'
                      ? 'bg-white text-gray-950 shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Residential Home
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    propertyType === 'commercial'
                      ? 'bg-white text-gray-950 shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Commercial Facility
                </button>
              </div>

              {/* Monthly Bill Slider */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200/70">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700">Average Monthly Electric Bill</span>
                  <span className="text-lg font-extrabold text-gray-950 font-display">
                    ${monthlyBill} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="800"
                  step="10"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full mt-3 accent-brand-lime cursor-pointer"
                />
                
                {/* Instant Calculation Pill Bar */}
                <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-gray-200/80 text-center">
                  <div className="p-2 rounded-xl bg-white border border-gray-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Est. Savings</div>
                    <div className="text-sm font-extrabold text-emerald-600 font-display">
                      ${estimatedSavings.toLocaleString()}/yr
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-gray-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold">System Size</div>
                    <div className="text-sm font-extrabold text-gray-950 font-display">
                      {recommendedKw} kW
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-gray-100">
                    <div className="text-[10px] text-gray-400 uppercase font-bold">CO2 Offset</div>
                    <div className="text-sm font-extrabold text-sky-600 font-display">
                      {co2OffsetTons} Tons/yr
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Custom Clean Energy Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No obligation • 100% Free Consultation • 25-Year Warranty</span>
                </p>
              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center text-gray-950 mb-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">
                Blueprint Generated!
              </h3>
              <p className="text-sm text-gray-600 mt-2 max-w-sm">
                Thank you, <span className="font-bold text-gray-950">{name}</span>! A Greenova clean power specialist will contact you at <span className="font-bold text-gray-950">{phone || email}</span> within 2 hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
