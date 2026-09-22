import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BedDouble, Bath, MapPin, Calendar, CheckCircle2, DollarSign, ArrowRight } from 'lucide-react';

export const PropertyModal = ({ isOpen, onClose, property, onScheduleTour }) => {
  if (!isOpen || !property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-800"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Property Image */}
          <div className="relative h-64 sm:h-72 w-full shrink-0 bg-slate-100">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1 rounded-full bg-brandLime text-brandDark text-xs font-bold uppercase tracking-wider">
                {property.tag || 'For Sale'}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-brandLime" />
                <span>{property.address || 'Highland Park, Denver, CO'}</span>
              </div>
            </div>
          </div>

          {/* Scrollable Details */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            {/* Specs & Pricing Grid */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  List Price
                </span>
                <span className="text-lg font-serif font-bold text-slate-900">
                  {property.price || '$3,567,980.00'}
                </span>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Bedrooms
                </span>
                <span className="text-lg font-serif font-bold text-slate-900">
                  {property.bedrooms || 5} Beds
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Bathrooms
                </span>
                <span className="text-lg font-serif font-bold text-slate-900">
                  {property.bathrooms || 2} Baths
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-slate-900 mb-2">
                Architectural Highlights
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Meticulously designed with passive solar heating, floor-to-ceiling double-glazed thermal glass, imported Scandinavian hardwood joinery, and private landscaped courtyard gardens.
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
            <div>
              <span className="text-xs text-slate-400 block">Est. Mortgage</span>
              <span className="text-sm font-bold text-slate-800">$12,450 / mo</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onScheduleTour?.(property);
              }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brandDark hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Schedule Private Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
