import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const TourModal = ({ isOpen, onClose, initialPropertyTitle = '' }) => {
  const [propertyTitle, setPropertyTitle] = useState(initialPropertyTitle || 'Crystal Hogts Residence');
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
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {confirmed ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-lime-100 text-brandLime-dark flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Tour Booked Successfully!
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-900">{name || 'Adventurer'}</span>. Your private viewing session for <span className="font-semibold text-brandLime-dark">{propertyTitle}</span> has been confirmed.
              </p>
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2 text-brandLime-dark text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Tour Reservation</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Schedule Private Showing
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Inspect architecture, passive solar orientation, and scenic neighborhood parcels in person.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Property Selection
                  </label>
                  <input
                    type="text"
                    value={propertyTitle}
                    onChange={(e) => setPropertyTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brandLime-dark transition-colors"
                  />
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
                    placeholder="e.g. Liam Vance"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brandLime-dark transition-colors"
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
                    placeholder="liam@example.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brandLime-dark transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-brandLime hover:bg-brandLime-hover text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Private Showing</span>
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
