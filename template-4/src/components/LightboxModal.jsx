import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, image, title, location }) {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative rounded-[28px] overflow-hidden border border-white/20 shadow-2xl bg-zinc-950 max-h-[80vh] w-full flex items-center justify-center">
            <img
              src={image}
              alt={title || "RealWorld Architectural Asset"}
              className="w-full h-full object-contain max-h-[75vh]"
            />
          </div>

          {/* Caption */}
          {(title || location) && (
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
              {location && (
                <p className="text-zinc-400 text-xs flex items-center justify-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-zinc-400" /> {location}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
