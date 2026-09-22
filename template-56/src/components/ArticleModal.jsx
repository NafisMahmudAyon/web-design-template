import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Share2, Heart, ArrowUpRight } from 'lucide-react';

export const ArticleModal = ({ isOpen, onClose, article, onBookTrip }) => {
  if (!isOpen || !article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandForestDark/85 backdrop-blur-md">
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

          {/* Hero Image */}
          <div className="relative h-64 sm:h-72 w-full shrink-0 bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1 rounded-full bg-brandAmber text-brandForestDark text-xs font-bold uppercase tracking-wider">
                {article.tag}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex items-center gap-3 text-xs text-slate-300 mb-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brandAmber" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brandAmber" />
                  5 min read
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {article.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Article Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-800 text-base sm:text-lg">
              Every year, millions of travelers flock to world-renowned landmarks. But for those who crave pristine serenity, unvarnished wilderness, and genuine cultural interactions, the real magic lies off the beaten track.
            </p>
            <p>
              In our latest editorial dispatch, the Wanderlust expedition team ventured deep into secluded valleys, turquoise bays sheltered from mainstream tourism, and ancient coastal villages where centuries-old traditions flourish untouched.
            </p>
            <h3 className="text-lg font-serif font-bold text-slate-900 pt-2">
              Bespoke Itinerary Recommendations
            </h3>
            <p>
              Whether you prefer chartering a quiet solar-powered catamaran through the Indonesian archipelago or participating in tea harvests along historical mountain trails in Honshu, our private local guides ensure every step is enriching and sustainable.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookTrip?.(article.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brandForest hover:bg-brandForestDark text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Explore Related Tours</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
