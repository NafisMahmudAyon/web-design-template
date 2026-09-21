import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, MapPin, DollarSign, Calendar, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PlanTripModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    destination: 'Kyoto & Tokyo, Japan',
    durationDays: 7,
    budgetPerPerson: 1800,
    style: 'Nature & Spiritual Getaway',
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#0f1824] text-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
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
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400">
                  AI TRIP GENERATOR
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Craft Your Custom Itinerary
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Let Travelynx AI build your personalized trip complete with flight routes, hotels, and daily activities.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Destination or Region
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bali, Paris, Tokyo, Amalfi Coast"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Trip Duration
                    </label>
                    <span className="text-xs font-bold text-cyan-400">{formData.durationDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: parseInt(e.target.value) })}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Target Budget per Person
                    </label>
                    <span className="text-xs font-bold text-emerald-400">${formData.budgetPerPerson}</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={formData.budgetPerPerson}
                    onChange={(e) => setFormData({ ...formData, budgetPerPerson: parseInt(e.target.value) })}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Travel Experience Style
                  </label>
                  <select
                    value={formData.style}
                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                    className="w-full bg-[#0b131c] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Nature & Spiritual Getaway">Nature & Spiritual Getaway</option>
                    <option value="Luxury Coastal Escape">Luxury Coastal Escape</option>
                    <option value="Urban Architecture & Food">Urban Architecture & Food</option>
                    <option value="Backpacker & Solo Adventure">Backpacker & Solo Adventure</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500 text-black font-bold text-base hover:bg-cyan-400 transition-all shadow-cyan-glow flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-5 h-5 fill-black" />
                  <span>Generate Full AI Itinerary</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl font-bold text-white">
                  Trip Plan Generated!
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto font-sans">
                  Travelynx AI has compiled a <span className="font-bold text-cyan-400">{formData.durationDays}-day itinerary</span> for <span className="font-bold text-white">{formData.destination}</span> within budget <span className="font-bold text-emerald-400">${formData.budgetPerPerson}</span>.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Selected Experience:</span>
                  <span className="font-bold text-white">{formData.style}</span>
                </div>
                <div className="flex justify-between">
                  <span>Telemetry Scan:</span>
                  <span className="font-bold text-cyan-400">14 Verified Flight Routes & 8 Hotels</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                View Full Interactive Itinerary
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
