import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Calendar, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactDrawer({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Residential Studio');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#e5e7eb', '#a1a1aa']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#131519] text-white border-l border-white/15 p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h2 className="text-lg font-bold font-display text-white">Book Interior Consultation</h2>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white text-gray-950 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Consultation Requested</h3>
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    Our lead interior design specialist will reach out within 24 hours to schedule your private studio consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#1b1e25] text-xs text-white placeholder-gray-500 py-3 pl-10 pr-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="eleanor@studio.com"
                        className="w-full bg-[#1b1e25] text-xs text-white placeholder-gray-500 py-3 pl-10 pr-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Project Scope</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#1b1e25] text-xs text-white py-3 px-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>Residential Living Room</option>
                      <option>Penthouse / Architecture Studio</option>
                      <option>Hospitality & Hotel Suite</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-gray-950 font-bold py-3.5 rounded-xl text-xs shadow-lg transition-colors cursor-pointer mt-4 flex items-center justify-center gap-2"
                  >
                    <span>Confirm Consultation Request</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>

            <div className="text-[11px] text-gray-500 pt-4 border-t border-white/10 text-center">
              Private Design Studio • London & New York
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
