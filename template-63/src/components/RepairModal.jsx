import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Wrench, Droplet, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RepairModal({ isOpen, onClose }) {
  const [ticketSent, setTicketSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serial: 'FF-TCFJ-2024',
    serviceType: 'rewaxing',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketSent(true);
    setTimeout(() => {
      setTicketSent(false);
      onClose();
    }, 3500);
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl z-10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-sm z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-900/10 flex items-center justify-center text-emerald-900">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                  GUARANTEE OF CRAFT
                </span>
                <h2 className="text-xl font-serif text-neutral-900">
                  Free Repairs For Life
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black transition-colors rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Philosophy text */}
            <div className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              We build gear intended to outlive its original wearer. If your Tin Cloth Field Jacket suffers blown stitches, torn canvas from brush thorns, or broken brass snaps during any expedition, send it back to our Seattle workshop. We repair it by hand at no labor cost.
            </div>

            {/* Service Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-neutral-50 border border-neutral-200">
                <Wrench className="w-4 h-4 text-neutral-800 mb-1.5" />
                <span className="font-bold block text-neutral-900">Hardware & Seams</span>
                <span className="text-[11px] text-neutral-500">Brass rivets & thread restitching free forever.</span>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200">
                <Droplet className="w-4 h-4 text-neutral-800 mb-1.5" />
                <span className="font-bold block text-neutral-900">Annual Rewaxing</span>
                <span className="text-[11px] text-neutral-500">Complimentary factory hot-wax immersion.</span>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200">
                <ShieldCheck className="w-4 h-4 text-neutral-800 mb-1.5" />
                <span className="font-bold block text-neutral-900">Patched Patina</span>
                <span className="text-[11px] text-neutral-500">Matching 12oz waxed twill gusset repair.</span>
              </div>
            </div>

            {/* Service Request Form */}
            {ticketSent ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded text-emerald-900 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  Repair Dossier Initiated
                </div>
                <p>
                  A prepaid insured shipping label has been dispatched to your email. Pack your garment and drop it at any field post.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-neutral-200">
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-900">
                  Initiate Workshop Service Request
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Roland Thorne"
                      className="w-full text-xs font-mono px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ranger@fieldandform.com"
                      className="w-full text-xs font-mono px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                    Requested Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full text-xs font-mono px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black bg-white"
                  >
                    <option value="rewaxing">Factory Paraffin Rewaxing & Weatherproofing</option>
                    <option value="hardware">Brass Snap / YKK Zipper Replacement</option>
                    <option value="tear">Torn Canvas Patching & Re-enforcement</option>
                    <option value="lining">Mackinaw Wool Lining Mending</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                    Describe Wear & Expedition History
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly state areas needing reinforcement..."
                    className="w-full text-xs font-sans px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Service Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
