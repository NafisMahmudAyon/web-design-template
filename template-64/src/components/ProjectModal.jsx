import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectModal({ isOpen, onClose, initialService = '' }) {
  const [selectedService, setSelectedService] = useState(initialService || 'Enterprise SaaS');
  const [budget, setBudget] = useState('$25k - $50k');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#25E575', '#34D399', '#10B981', '#FFFFFF'],
      });
    } catch (err) {
      // safe fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  const services = [
    'Enterprise SaaS',
    'Mobile Apps (iOS & Android)',
    'Seamless API & IoT',
    'AI & Automation',
    'Headless WordPress',
    'Security & Cloud Infrastructure',
  ];

  const budgetTiers = ['< $15k', '$15k - $30k', '$30k - $60k', '$60k+'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#0D1510] border border-[#1B2B1F] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-white overflow-hidden"
        >
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#25E575]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1B2B1F]/60">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#25E575] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                INITIATE PARTNERSHIP
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Start Your Project
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#132218] border border-[#25E575]/40 text-[#25E575] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Scope Received</h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                Our principal technical architect is reviewing your submission. You will receive an architecture brief and calendar invite within 4 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Select Core Requirement
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all border ${
                        selectedService === srv
                          ? 'bg-[#16271D] border-[#25E575] text-[#25E575]'
                          : 'bg-[#070908] border-[#1B2B1F] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudget(tier)}
                      className={`py-2 rounded-xl text-center text-xs font-mono font-medium transition-all border ${
                        budget === tier
                          ? 'bg-[#25E575] text-black border-[#25E575] font-bold'
                          : 'bg-[#070908] border-[#1B2B1F] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Liam Sterling"
                    className="w-full text-xs bg-[#070908] border border-[#1B2B1F] rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#25E575]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="liam@enterprise.com"
                    className="w-full text-xs bg-[#070908] border border-[#1B2B1F] rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#25E575]"
                  />
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                  Brief Project Objectives
                </label>
                <textarea
                  rows={2}
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Outline key features, target timeline, or tech stack requirements..."
                  className="w-full text-xs bg-[#070908] border border-[#1B2B1F] rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#25E575]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#25E575] hover:bg-[#1fd368] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(37,229,117,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
