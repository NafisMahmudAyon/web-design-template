import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bed, Bath, Maximize2, Shield, Heart, ArrowUpRight } from 'lucide-react';

export default function PropertyQuickViewModal({ property, onClose, onBookInspection, onToggleSave, isSaved }) {
  if (!property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl bg-black border border-white/20 text-white shadow-2xl z-10 overflow-hidden my-auto rounded-3xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Showcase */}
          <div className="w-full md:w-1/2 relative bg-neutral-900 min-h-[300px] flex items-center justify-center">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <span className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {property.tag}
            </span>
          </div>

          {/* Right Column: Specs & Inspection Action */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F8BA8B]" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#F8BA8B] block">
                    {property.price}
                  </span>
                  <span className="text-[10px] text-white/50 uppercase">Verified Listing</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-white/10 text-center">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <span className="block text-sm font-bold text-white">{property.beds}</span>
                  <span className="text-[10px] text-white/50 uppercase font-medium">Bedrooms</span>
                </div>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <span className="block text-sm font-bold text-white">{property.baths}</span>
                  <span className="text-[10px] text-white/50 uppercase font-medium">Bathrooms</span>
                </div>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <span className="block text-xs font-bold text-white truncate">{property.sqft}</span>
                  <span className="text-[10px] text-white/50 uppercase font-medium">Area</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-white/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookInspection(property);
                  }}
                  className="flex-1 py-4 bg-[#F8BA8B] hover:bg-[#F6A870] text-black text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Book Private Inspection</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onToggleSave(property)}
                  className={`p-4 border border-white/20 rounded-full transition-colors ${
                    isSaved ? 'bg-white text-red-500' : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
