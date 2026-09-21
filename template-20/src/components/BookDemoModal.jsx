import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    assetsCount: 250,
    primaryRisk: 'Climate Risk & Floods',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#16181b] text-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#22c55e]/20 text-[#22c55e]">
                  LIVE PLATFORM PREVIEW
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Request EcoIntel Platform Access
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Schedule a custom risk exposure simulation for your physical assets and supply chain.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Global Real Estate"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Monitored Assets Count
                    </label>
                    <span className="text-xs font-bold text-[#22c55e]">{formData.assetsCount} Assets</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={formData.assetsCount}
                    onChange={(e) => setFormData({ ...formData, assetsCount: parseInt(e.target.value) })}
                    className="w-full accent-[#22c55e] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Primary Environmental Focus
                  </label>
                  <select
                    value={formData.primaryRisk}
                    onChange={(e) => setFormData({ ...formData, primaryRisk: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22c55e]"
                  >
                    <option value="Climate Risk & Floods" className="bg-[#16181b]">Climate Risk & Floods</option>
                    <option value="Wildfire & Heat Exposure" className="bg-[#16181b]">Wildfire & Heat Exposure</option>
                    <option value="Water Stress & Quality" className="bg-[#16181b]">Water Stress & Quality</option>
                    <option value="CSRD & ESG Compliance" className="bg-[#16181b]">CSRD & ESG Compliance</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  <span>Generate Instant Risk Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-white">
                  Simulation Request Confirmed!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. We're generating a custom portfolio audit for <span className="text-white font-bold">{formData.company}</span> covering <span className="text-[#22c55e] font-bold">{formData.assetsCount} assets</span>.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Target Risk Sector:</span>
                  <span className="font-bold text-white">{formData.primaryRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Status:</span>
                  <span className="font-bold text-[#22c55e]">Processing 10m Geospatial Grid</span>
                </div>
                <div className="flex justify-between">
                  <span>Confirmation Sent To:</span>
                  <span className="font-bold text-white">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white text-[#18191c] font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Back to EcoIntel Platform
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
