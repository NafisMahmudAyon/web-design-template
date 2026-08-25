import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, defaultTopic }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: defaultTopic || 'Custom Modular Construction',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
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
          className="relative w-full max-w-xl bg-zinc-950 text-white rounded-[32px] overflow-hidden border border-white/20 shadow-2xl p-6 sm:p-10 my-8"
        >
          {/* Close Button */}
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
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Project Inquiry Dispatched
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Breeze Architecture. Our principal partners at contact@ofspace.agency will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 rounded-full bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                Back to Overview
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  contact@ofspace.agency
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Let's Build Your Dream House
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Connect with our team to initiate complex modular and luxury architectural projects from scratch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
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
                    placeholder="name@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-400 mb-1">Project Focus</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/50"
                  >
                    <option value="Custom Modular Construction">Custom Modular Construction</option>
                    <option value="Deluxe Condo Acquisition">Deluxe Condo Acquisition</option>
                    <option value="Hillside Glass Pavilion">Hillside Glass Pavilion</option>
                    <option value="Architectural Partnership">Architectural Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-400 mb-1">Project Scope & Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your parcel, terrain, preferred square footage, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-zinc-900 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-xl flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
