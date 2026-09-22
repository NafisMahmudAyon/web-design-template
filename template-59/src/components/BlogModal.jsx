import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogModal = ({ isOpen, onClose, blog, onScheduleShowing }) => {
  if (!isOpen || !blog) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-72 w-full shrink-0 bg-slate-900">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1 rounded-full bg-brandLime text-slate-950 text-xs font-bold uppercase tracking-wider">
                {blog.tag}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
                <Calendar className="w-3.5 h-3.5 text-brandLime" />
                <span>{blog.date}</span>
                <span>•</span>
                <Clock className="w-3.5 h-3.5 text-brandLime" />
                <span>4 min read</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {blog.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 overflow-y-auto space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-800 text-base">
              The modern residential landscape is experiencing a paradigm shift towards sustainable energy independence, local materials, and integrated solar architecture.
            </p>
            <p>
              In this editorial guide, we analyze how intelligent micro-grids, passive ventilation pathways, and locally harvested mass-timber framing allow homeowners to slash carbon footprints while enjoying luxury architectural comfort.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-400">EverGreen Architectural Editorial</span>
            <button
              onClick={() => {
                onClose();
                onScheduleShowing?.();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              <span>Explore Sustainable Homes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
