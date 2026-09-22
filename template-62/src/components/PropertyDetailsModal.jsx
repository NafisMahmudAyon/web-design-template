import React, { useState } from 'react';
import { X, MapPin, Check, Calendar, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PropertyDetailsModal({ project, isOpen, onClose, onScheduleTour }) {
  const [scheduled, setScheduled] = useState(false);

  if (!project) return null;

  const handleSchedule = () => {
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-100 z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Property Image Header */}
            <div className="h-64 sm:h-72 w-full relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-2xl sm:text-3xl font-black font-syne text-[#C88C48]">
                  {project.price}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-syne tracking-tight mt-0.5">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C88C48]" />
                  <span>{project.location}</span>
                </p>
              </div>
            </div>

            {/* Details Body */}
            <div className="p-6 sm:p-8">
              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3 pb-6 border-b border-neutral-100 text-center">
                <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                  <span className="text-xs text-neutral-400 font-bold block uppercase">Layout</span>
                  <span className="text-xs sm:text-sm font-extrabold text-neutral-900 mt-0.5 block">
                    {project.specs?.split('•')[0] || '4 Beds'}
                  </span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                  <span className="text-xs text-neutral-400 font-bold block uppercase">Baths</span>
                  <span className="text-xs sm:text-sm font-extrabold text-neutral-900 mt-0.5 block">
                    {project.specs?.split('•')[1] || '3.5 Baths'}
                  </span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                  <span className="text-xs text-neutral-400 font-bold block uppercase">Total Area</span>
                  <span className="text-xs sm:text-sm font-extrabold text-neutral-900 mt-0.5 block">
                    {project.specs?.split('•')[2] || '3,400 sq.ft'}
                  </span>
                </div>
              </div>

              {/* Architectural Description */}
              <div className="py-5">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Architectural Highlights
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Featuring floor-to-ceiling high-performance structural glass, sustainably sourced cedar soffits, custom artisan cabinetry, and integrated home automation powered by clean solar backup.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                <button
                  onClick={handleSchedule}
                  className={`flex-1 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-98 ${
                    scheduled
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#C88C48] hover:bg-[#B37836] text-white shadow-[#C88C48]/20'
                  }`}
                >
                  {scheduled ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Showing Booked!</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Private Showing</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
