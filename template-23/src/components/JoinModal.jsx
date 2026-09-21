import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Zap, Trophy, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '16',
    track: 'Trajectory (Intermediate-Advanced)',
    experience: '3 years competitive junior play',
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
          className="bg-[#080d14] text-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden"
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
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-vantageNeon text-black uppercase tracking-wider font-condensed">
                  ON-COURT EVALUATION
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
                BOOK PLAYER ASSESSMENT
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Schedule your 60-minute technical, physical, and match-craft evaluation at Vantage.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold font-condensed tracking-wider uppercase text-gray-300 mb-1">
                    Player Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Cresel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vantageNeon"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-condensed tracking-wider uppercase text-gray-300 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="player@vantage.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vantageNeon"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-condensed tracking-wider uppercase text-gray-300 mb-1">
                      Player Age
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-vantageNeon"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-condensed tracking-wider uppercase text-gray-300 mb-1">
                      Desired Track
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full bg-[#080d14] border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-vantageNeon"
                    >
                      <option value="Groundwork (Ages 8-13)">Groundwork (Ages 8-13)</option>
                      <option value="Trajectory (Intermediate-Advanced)">Trajectory (Intermediate)</option>
                      <option value="Apex Squad (National Ranked)">Apex Squad (National)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-vantageNeon text-black font-bold font-condensed tracking-wider uppercase text-base hover:bg-[#b8e600] transition-all shadow-neon-glow flex items-center justify-center gap-2 mt-4"
                >
                  <Zap className="w-5 h-5 fill-black" />
                  <span>Confirm Assessment Booking</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-vantageNeon/20 text-vantageNeon flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl font-bold uppercase text-white">
                  ASSESSMENT BOOKED!
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto font-sans">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Your on-court evaluation for squad track <span className="font-bold text-vantageNeon">{formData.track}</span> has been logged.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs text-gray-300">
                <div className="flex justify-between font-condensed font-bold">
                  <span>Confirmation Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between font-condensed font-bold">
                  <span>Assigned Site:</span>
                  <span className="text-vantageNeon">Centre Court — Larkfield Bay</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors uppercase font-condensed tracking-wider"
              >
                Return to Vantage Academy
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
