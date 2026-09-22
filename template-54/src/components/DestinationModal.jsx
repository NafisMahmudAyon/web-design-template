import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Calendar, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DestinationModal({ destination, onClose, onBook }) {
  if (!destination) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 z-10 text-gray-900"
        >
          {/* Header Media */}
          <div className="h-64 relative bg-gray-950">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500 text-white mb-2 inline-block">
                {destination.category}
              </span>
              <h3 className="text-2xl font-bold font-display leading-snug">
                {destination.title}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500 pb-4 border-b border-gray-100">
              <span className="flex items-center gap-1 font-semibold text-gray-800">
                <MapPin className="w-4 h-4 text-blue-500" />
                {destination.country}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                {destination.dateRange}
              </span>
              <span className="flex items-center gap-1 text-amber-600 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {destination.rating}
              </span>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                What's Included
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <li className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Curated Boutique Lodging</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Licensed Native Guides</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Private Ground Transfers</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Flexible Rescheduling</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-2xl font-extrabold text-gray-950 font-display">
                  {destination.price}
                  <span className="text-xs font-normal text-gray-500 ml-1">
                    {destination.period}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400">
                  {destination.inclusion}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBook && onBook(destination.title);
                }}
                className="px-6 py-3 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Reserve Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
