import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sprout, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [farmType, setFarmType] = useState('crop');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B7F436', '#183821', '#2E663D'],
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
          className="relative w-full max-w-lg rounded-3xl bg-white border border-terra-border p-8 shadow-2xl text-terra-dark"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-terra-subtle flex items-center justify-center text-terra-muted hover:text-terra-dark hover:bg-terra-border/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-terra-lime text-terra-forest flex items-center justify-center mx-auto mb-4 font-black">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-terra-dark">Consultation Request Received!</h3>
              <p className="text-sm text-terra-muted mt-2 max-w-xs mx-auto">
                Our agricultural engineering team will review your farm's telemetry needs and contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-terra-lime flex items-center justify-center text-terra-forest shadow-xs">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-terra-dark">Schedule Farm Consultation</h3>
                  <p className="text-xs text-terra-muted">Get custom telemetry and soil sensors for your land</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aaron Mitchell"
                    className="w-full py-2.5 px-4 rounded-xl bg-terra-subtle border border-terra-border text-sm text-terra-dark focus:outline-none focus:border-terra-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aaron@farmfields.com"
                    className="w-full py-2.5 px-4 rounded-xl bg-terra-subtle border border-terra-border text-sm text-terra-dark focus:outline-none focus:border-terra-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Primary Operation</label>
                  <select
                    value={farmType}
                    onChange={(e) => setFarmType(e.target.value)}
                    className="w-full py-2.5 px-4 rounded-xl bg-terra-subtle border border-terra-border text-sm text-terra-dark focus:outline-none focus:border-terra-forest"
                  >
                    <option value="crop">Row Crops (Corn, Soy, Wheat)</option>
                    <option value="orchard">Orchards & Vineyards</option>
                    <option value="greenhouse">High-Tech Greenhouses</option>
                    <option value="agribusiness">Commercial Agribusiness / Co-op</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Farm Notes</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Acreage, location, current irrigation setup..."
                    className="w-full py-2.5 px-4 rounded-xl bg-terra-subtle border border-terra-border text-sm text-terra-dark focus:outline-none focus:border-terra-forest resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-terra-forest text-white font-bold text-sm hover:bg-terra-dark transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
