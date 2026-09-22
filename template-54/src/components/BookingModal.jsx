import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Globe, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialDestination = 'Kyoto, Japan' }) {
  const [destination, setDestination] = useState(initialDestination);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [travelStyle, setTravelStyle] = useState('Luxury');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#F59E0B', '#10B981', '#000000']
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-9 shadow-2xl border border-gray-100 z-10 text-gray-900 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-max mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Journeo Custom Journey</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-gray-950 font-display">
                Plan Your Next Adventure
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Tell us your dream destination and our local curators will craft an exclusive custom itinerary.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Target Destination</label>
                  <div className="flex items-center px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF9]">
                    <Globe className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amalfi Coast, Italy"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-gray-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Travelers</label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF9] text-xs sm:text-sm text-gray-900 focus:outline-hidden"
                    >
                      <option value={1}>1 Solo Explorer</option>
                      <option value={2}>2 Travelers (Couple)</option>
                      <option value={4}>3-4 Family / Small Group</option>
                      <option value={6}>5+ Group Expedition</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Travel Style</label>
                    <select
                      value={travelStyle}
                      onChange={(e) => setTravelStyle(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF9] text-xs sm:text-sm text-gray-900 focus:outline-hidden"
                    >
                      <option value="Luxury">Luxury & Boutique</option>
                      <option value="Cultural">Cultural Immersion</option>
                      <option value="Adventure">Active Adventure</option>
                      <option value="Relaxation">Wellness & Retreat</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-hidden"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Build My Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">
                Adventure Registered!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm">
                Thank you, <span className="font-bold text-gray-950">{name}</span>! Our lead travel curator will send a customized proposal for <span className="font-bold text-gray-950">{destination}</span> to {email} shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
