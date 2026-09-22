import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
              alt="Architectural preview"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            
            <div className="absolute flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brandLime text-brandDark flex items-center justify-center shadow-lg mb-4">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                EverGreen Architectural Collection Showcase
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                Touring sustainable timber, panoramic glass structures, and minimalist off-grid sanctuaries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
