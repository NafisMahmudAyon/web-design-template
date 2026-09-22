import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-[16/9]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/50 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Embedded Simulation / Video player */}
          <div className="w-full h-full relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=85"
              alt="Ocean freight cargo in action"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-4 text-white text-center p-6">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-red-glow animate-pulse">
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display">
                How LOGISTIQO Powers Global Trade
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                End-to-end maritime operations, real-time IoT cargo sensors, and automated transshipment routing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
