import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const TourModal = ({ isOpen, onClose, initialPropertyTitle = '' }) => {
  const [propertyTitle, setPropertyTitle] = useState(initialPropertyTitle || 'The Pinnacle at Highland Park');
  const [tourType, setTourType] = useState('In-Person Private Tour');
  const [date, setDate] = useState('Tomorrow, 2:00 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {confirmed ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Tour Confirmation Sent!
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-900">{name || 'Valued Buyer'}</span>. Our senior architectural advisor has reserved your slot and sent full property access codes to {email || 'your email'}.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 mb-6">
                <div><strong className="text-slate-800">Property:</strong> {propertyTitle}</div>
                <div><strong className="text-slate-800">Type:</strong> {tourType}</div>
                <div><strong className="text-slate-800">Scheduled:</strong> {date}</div>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-full bg-brandDark hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Close & Return to Listings
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Private Showing</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Schedule an Exclusive Tour
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Experience the spatial craftsmanship, natural lighting, and prime neighborhood surroundings firsthand.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Select Showing Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['In-Person Private Tour', '3D 4K Virtual Walkthrough'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTourType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          tourType === type
                            ? 'bg-brandDark text-white border-brandDark'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brandDark transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brandDark transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-brandDark hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Reservation</span>
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
