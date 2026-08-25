import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Building2, User, Mail, Phone, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookNowModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Beachside Villa',
    preferredDate: '',
    preferredTime: '10:00 AM'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onSubmitSuccess('Inspection Scheduled', `Your private tour for ${formData.propertyType} on ${formData.preferredDate} is confirmed.`);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

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
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-xl bg-black border border-white/20 text-white shadow-2xl z-10 overflow-hidden my-auto rounded-3xl p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F8BA8B]/20 text-[#F8BA8B] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif italic text-white">Private Tour Scheduled!</h3>
              <p className="text-xs text-white/70">Our luxury real estate advisor will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Schedule Private Inspection
                </h3>
                <p className="text-xs text-white/60 font-light mt-1">
                  Book an exclusive 1-on-1 walkthrough with a Housen senior architect.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Savannah Nguyen"
                      className="w-full bg-[#141414] border border-white/20 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 font-semibold mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="savannah@example.com"
                        className="w-full bg-[#141414] border border-white/20 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 font-semibold mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#141414] border border-white/20 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Select Estate */}
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Select Property</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#141414] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                  >
                    <option value="Beachside Villa">Beachside Villa ($1.2M)</option>
                    <option value="Urban Loft">Urban Loft ($1.2M)</option>
                    <option value="Penthouse View">Penthouse View ($1.2M)</option>
                    <option value="Desert Oasis Villa">Desert Oasis Villa ($2.4M)</option>
                    <option value="Coastal Sanctuary">Coastal Sanctuary ($3.1M)</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 font-semibold mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#141414] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 font-semibold mb-1">Preferred Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#141414] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F8BA8B]"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="05:00 PM">05:00 PM (Sunset Tour)</option>
                    </select>
                  </div>
                </div>

              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl cursor-pointer"
              >
                Confirm Inspection Booking
              </button>
            </form>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
