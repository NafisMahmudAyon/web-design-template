import React, { useState } from 'react';
import { X, Check, Calendar, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose }) {
  const [guests, setGuests] = useState(2);
  const [selectedActivity, setSelectedActivity] = useState('both');
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div 
            className="relative w-full max-w-lg bg-white rounded-[36px] p-8 sm:p-10 shadow-2xl z-10 overflow-hidden border border-gray-100"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 text-gray-400 hover:text-gray-900 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {booked ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reservation Confirmed!</h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  We look forward to welcoming you to Homeland Eco-Farm for an unforgettable weekend!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">Book Your Farm Experience</h3>
                    <p className="text-sm text-gray-500">Homeland Eco-Tourism Reserve</p>
                  </div>
                </div>

                {/* Experience Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Select Activity
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'grazing', label: 'Grazing' },
                      { id: 'shearing', label: 'Shearing' },
                      { id: 'both', label: 'Full Weekend' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedActivity(item.id)}
                        className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                          selectedActivity === item.id 
                            ? 'bg-black text-white shadow-sm' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      Date
                    </label>
                    <input 
                      type="date" 
                      defaultValue="2026-08-22"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                      Guests
                    </label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-1.5">
                      <button 
                        type="button" 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 rounded-xl bg-white text-gray-800 font-bold hover:bg-gray-100 flex items-center justify-center shadow-xs"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-bold text-sm text-gray-900">
                        {guests}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => setGuests(guests + 1)}
                        className="w-8 h-8 rounded-xl bg-white text-gray-800 font-bold hover:bg-gray-100 flex items-center justify-center shadow-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <button type="submit" className="w-full btn-black justify-center py-4 text-base mt-2">
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
