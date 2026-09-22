import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MapPin, CheckCircle2, Compass, ArrowRight } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose, initialDestination = '' }) => {
  const [destination, setDestination] = useState(initialDestination || 'Bali, Indonesia');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [season, setSeason] = useState('Spring / Summer 2025');
  const [submitted, setSubmitted] = useState(false);

  const destinations = [
    'Bali, Indonesia - Tropical Sunset Cove',
    'Hiroshima, Japan - Miyajima Water Torii',
    'Bora Bora, Tahiti - Overwater Lagoon',
    'Amalfi Coast, Italy - Golden Sunset Path',
    'Dolomites, Italy - Alpine Summit Crossing',
    'El Nido, Philippines - Turquoise Archipelago'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandForestDark/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        >
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandAmber/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandEmerald/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Itinerary Request Received!
              </h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                Thank you, <span className="text-brandAmber font-semibold">{name || 'Adventurer'}</span>. Your personal Wanderlust Concierge will contact you within 2 business hours with your custom travel blueprint.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-left text-xs text-slate-300 space-y-1.5 mb-6">
                <div><strong className="text-white">Destination:</strong> {destination}</div>
                <div><strong className="text-white">Party:</strong> {guests} ({season})</div>
                <div><strong className="text-white">Contact:</strong> {email || 'Email on file'}</div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-brandAmber hover:bg-amber-400 text-brandForestDark font-bold text-sm transition-colors shadow-lg"
              >
                Close & Continue Exploring
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2 text-brandAmber text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>Bespoke Travel Inquiry</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Plan Your Next Great Journey
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6">
                Tell us where your wanderlust leads. Our specialists will design an unforgettable private itinerary.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Target Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-brandEmerald" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brandAmber transition-colors"
                    >
                      {destinations.map((dest) => (
                        <option key={dest} value={dest} className="bg-slate-900 text-white">
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Travel Party
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-brandEmerald" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brandAmber transition-colors"
                      >
                        <option value="1 Solo Traveler" className="bg-slate-900 text-white">1 Solo</option>
                        <option value="2 Guests (Couple / Pair)" className="bg-slate-900 text-white">2 Guests</option>
                        <option value="3-4 Guests (Family)" className="bg-slate-900 text-white">3-4 Guests</option>
                        <option value="5+ Group Expedition" className="bg-slate-900 text-white">5+ Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Preferred Timing
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-brandEmerald" />
                      <select
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brandAmber transition-colors"
                      >
                        <option value="Spring 2025" className="bg-slate-900 text-white">Spring 2025</option>
                        <option value="Summer 2025" className="bg-slate-900 text-white">Summer 2025</option>
                        <option value="Autumn 2025" className="bg-slate-900 text-white">Autumn 2025</option>
                        <option value="Winter Holiday" className="bg-slate-900 text-white">Winter Holiday</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-brandAmber transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-brandAmber transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-brandAmber to-amber-500 hover:from-amber-400 hover:to-amber-500 text-brandForestDark font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
