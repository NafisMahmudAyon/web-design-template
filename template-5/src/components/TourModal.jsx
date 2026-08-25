import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Sparkles, Video, Compass, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TourModal({ isOpen, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState('Thursday 3:00 PM — Virtual 8K Tour');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
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
          className="relative w-full max-w-xl bg-zinc-950 text-white rounded-[32px] overflow-hidden border border-white/20 shadow-2xl p-6 sm:p-8 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {booked ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Two-Tour Pass Confirmed!
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                You're booked for this week's verified architectural twin tour. Verified VR links and broker access PIN sent to your email.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-2.5 rounded-full bg-white text-zinc-900 font-semibold text-xs hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-0.5 rounded-full bg-breeze-500/20 text-breeze-300 text-[11px] font-semibold border border-breeze-500/30">
                    Weekly VIP Experience
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Every Week There is a Set for Two-Tours
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  High-quality photos, verified floor plans, and interactive virtual 8K tours for all showcased residences.
                </p>
              </div>

              {/* Showcase Dual Cards */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-2.5 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=150&q=80"
                    alt="Tour 1"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">Marden Cortes</p>
                    <p className="text-[10px] text-zinc-400">Mountain Terrace</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=150&q=80"
                    alt="Tour 2"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">Lila Bennett</p>
                    <p className="text-[10px] text-zinc-400">Luxury Soffit Villa</p>
                  </div>
                </div>
              </div>

              {/* Slot selector */}
              <form onSubmit={handleBooking} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-400 mb-1">Select Available Tour Session</label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/50"
                  >
                    <option value="Thursday 3:00 PM — Virtual 8K Tour">Thursday 3:00 PM — Virtual 8K Tour</option>
                    <option value="Saturday 11:00 AM — Private Chauffeured On-Site">Saturday 11:00 AM — Private Chauffeured On-Site</option>
                    <option value="Sunday 2:00 PM — Live Drone & Interior Walkthrough">Sunday 2:00 PM — Live Drone & Interior Walkthrough</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-zinc-900 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-xl flex items-center justify-center gap-2 mt-3"
                >
                  <Video className="w-4 h-4" /> Confirm 2-Tour Access
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
