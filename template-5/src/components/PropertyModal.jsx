import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Square, MapPin, CheckCircle, Calendar, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PropertyModal({ property, onClose }) {
  const [tourBooked, setTourBooked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('2026-08-25');

  if (!property) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setTourBooked(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
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
          className="relative w-full max-w-4xl bg-zinc-950 text-white rounded-[32px] overflow-hidden border border-white/20 shadow-2xl my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image Banner */}
          <div className="relative aspect-[16/9] w-full bg-zinc-900">
            <img
              src={property.image}
              alt={property.title || property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-white backdrop-blur-md mb-2">
                  {property.location || 'Breeze Certified Residence'}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {property.title || property.name}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 uppercase tracking-wider block">Investment Value</span>
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {property.price || '$1,850,000'}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick Specs Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <Bed className="w-5 h-5 text-zinc-400" />
                <span className="text-sm font-semibold">{property.beds || 3} Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-x border-white/10">
                <Bath className="w-5 h-5 text-zinc-400" />
                <span className="text-sm font-semibold">{property.baths || 2.5} Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Square className="w-5 h-5 text-zinc-400" />
                <span className="text-sm font-semibold">{property.sqft || '2,400 sq ft'}</span>
              </div>
            </div>

            {/* Description & Booking Form */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-lg font-semibold text-zinc-200">Architectural & Material Standards</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {property.description || property.specs}
                </p>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3">Key Features & Finishes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(property.features || [
                      "Motorized Solar Louvers",
                      "Walk-in Master Wardrobe",
                      "Triple-Glazed Acoustic Panes",
                      "Net-Zero Geothermal Energy"
                    ]).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-breeze-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="md:col-span-5 bg-zinc-900 p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-zinc-400" /> Book Private Viewing
                  </h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Schedule a private on-site inspection or 8K VR digital tour.
                  </p>

                  {tourBooked ? (
                    <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-2">
                      <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                      <p className="text-sm font-semibold text-emerald-200">Private Tour Confirmed!</p>
                      <p className="text-xs text-zinc-300">
                        Our architectural team has logged your appointment and sent calendar confirmation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleBooking} className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-950 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-950 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                      />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-950 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-white text-zinc-900 font-semibold py-2.5 rounded-xl text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg"
                      >
                        <Send className="w-3.5 h-3.5" /> Request VIP Tour
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
