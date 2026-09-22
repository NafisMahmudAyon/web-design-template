import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Mail, User, Building2, Send, PhoneCall, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, preselectedPlan = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: preselectedPlan || 'Professional Plan',
    date: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync preselectedPlan if it changes
  React.useEffect(() => {
    if (preselectedPlan) {
      setFormData(prev => ({ ...prev, plan: preselectedPlan }));
    }
  }, [preselectedPlan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep message visible or auto-close after 3s
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
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
            onClick={handleReset}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#141814] text-white rounded-3xl p-7 md:p-8 shadow-2xl border border-white/10 z-10 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#C7F263]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C7F263]/20 flex items-center justify-center text-[#C7F263] mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Confirmed!</h3>
                <p className="text-neutral-300 text-sm max-w-xs mb-6">
                  Thank you, <span className="font-semibold text-white">{formData.name || 'there'}</span>. A Finora wealth advisor will connect with you regarding the <span className="text-[#C7F263] font-semibold">{formData.plan}</span> within 15 minutes.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#C7F263] text-black font-semibold text-sm hover:bg-[#bbf050] transition-colors"
                >
                  Done & Back to Finora
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1 rounded-md bg-[#C7F263]/10 text-[#C7F263]">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#C7F263] font-semibold">Priority Concierge</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Book a Personalized Demo</h2>
                <p className="text-sm text-neutral-400 mb-6">
                  Discuss automated wealth management & institutional asset protection with our senior team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sophia Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7F263] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sophia@apex.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7F263] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Apex Holdings"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7F263] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">Interested Tier</label>
                      <select
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-[#1b211c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C7F263] transition-colors"
                      >
                        <option value="Basic Plan">Basic Plan ($19/mo)</option>
                        <option value="Professional Plan">Professional Plan ($49/mo)</option>
                        <option value="Ultimate Plan">Ultimate Plan ($99/mo)</option>
                        <option value="Custom Enterprise">Custom Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#1b211c] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C7F263] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Specific Needs or Questions (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="E.g. Multi-currency treasury management or API settlement..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7F263] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-[#C7F263] hover:bg-[#bbf050] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C7F263]/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Confirm Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-neutral-500">
                    No spam. Encrypted with 256-bit institutional banking standard.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
