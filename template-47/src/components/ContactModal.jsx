import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sprout, Send, MapPin, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [farmSize, setFarmSize] = useState('100-500');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#B7F436', '#1E3A24', '#22c55e'],
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-white border border-agro-border p-8 shadow-2xl text-agro-dark"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-agro-subtle flex items-center justify-center text-agro-muted hover:text-agro-dark hover:bg-agro-border/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-agro-lime text-agro-forest flex items-center justify-center mx-auto mb-4 font-black">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-agro-dark">Message Sent!</h3>
              <p className="text-sm text-agro-muted mt-2 max-w-xs mx-auto">
                Thank you for reaching out. An Agrovia agronomist will review your farm requirements and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-agro-lime flex items-center justify-center text-agro-forest shadow-xs">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agro-dark">Connect With Agrovia</h3>
                  <p className="text-xs text-agro-muted">Schedule your personal farm telemetry consultation</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Lindqvist"
                    className="w-full py-2.5 px-4 rounded-xl bg-agro-subtle border border-agro-border text-sm text-agro-dark focus:outline-none focus:border-agro-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@nordicfarms.com"
                    className="w-full py-2.5 px-4 rounded-xl bg-agro-subtle border border-agro-border text-sm text-agro-dark focus:outline-none focus:border-agro-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Estimated Acreage</label>
                  <select
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                    className="w-full py-2.5 px-4 rounded-xl bg-agro-subtle border border-agro-border text-sm text-agro-dark focus:outline-none focus:border-agro-forest"
                  >
                    <option value="under-100">Under 100 Acres</option>
                    <option value="100-500">100 – 500 Acres</option>
                    <option value="500-2000">500 – 2,000 Acres</option>
                    <option value="2000-plus">2,000+ Commercial Acres</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Tell Us About Your Operation</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Crops planted, irrigation setup, primary challenges..."
                    className="w-full py-2.5 px-4 rounded-xl bg-agro-subtle border border-agro-border text-sm text-agro-dark focus:outline-none focus:border-agro-forest resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-agro-forest text-white font-bold text-sm hover:bg-agro-dark transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
