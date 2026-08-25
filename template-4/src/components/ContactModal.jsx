import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, defaultTopic }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: defaultTopic || 'Luxury Acquisitions',
    budget: '$1M - $5M',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#090A0D] text-white rounded-[32px] overflow-hidden border border-white/20 shadow-2xl p-6 sm:p-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                Message Received
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for connecting with RealWorld. One of our dedicated managing partners will reach out to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 rounded-full bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Direct Inquiries
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mt-1">
                  Let's Discuss Your Vision
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Connect directly with our luxury estate advisory team for confidential consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@vance.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/50"
                    >
                      <option value="Luxury Acquisitions">Luxury Acquisitions</option>
                      <option value="Home Renovation & Modern Staging">Home Renovation & Modern Staging</option>
                      <option value="Property Presentation & Operations">Property Presentation & Operations</option>
                      <option value="Leasing & Private Rental Solutions">Leasing & Private Rental Solutions</option>
                      <option value="Careers & Joining Team">Careers & Joining Team</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">Budget Allocation</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/50"
                    >
                      <option value="Under $1M">Under $1M</option>
                      <option value="$1M - $3M">$1M - $3M</option>
                      <option value="$3M - $10M">$3M - $10M</option>
                      <option value="$10M+">$10M+ Institutional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-400 mb-1">Specific Requirements or Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the property style, preferred locations, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-zinc-900 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-xl flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" /> Send Confidential Inquiry
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
