import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onBook }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1A13]/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 z-10 text-gray-900"
        >
          {/* Header Image */}
          <div className="h-56 relative bg-gray-900">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-5 right-5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-lime text-gray-950 text-[11px] font-bold mb-1.5">
                {service.efficiency}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-200/70 text-xs">
              <div>
                <span className="text-gray-400 block font-medium">Expected Benefit</span>
                <span className="font-bold text-gray-900">{service.savings}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Warranty</span>
                <span className="font-bold text-emerald-700">25 Years Full Coverage</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBook && onBook();
                }}
                className="flex-1 py-3 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
