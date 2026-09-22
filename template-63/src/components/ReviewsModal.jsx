import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle, ThumbsUp, Shield, Filter } from 'lucide-react';
import { productData } from '../data/productData';

export default function ReviewsModal({ isOpen, onClose }) {
  const [filterRating, setFilterRating] = useState('all');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNewReviewAuthor('');
      setNewReviewText('');
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white border border-neutral-200 shadow-2xl z-10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-sm z-20">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                FIELD VERIFIED DISPATCHES
              </span>
              <h2 className="text-2xl font-serif text-neutral-900 mt-0.5">
                Customer Reviews ({productData.reviewsCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black transition-colors rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Rating Summary Scorecard */}
          <div className="p-6 bg-neutral-50 border-b border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-serif font-bold text-neutral-900">
                {productData.rating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  Based on 1,524 backcountry dispatches
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-500">5 star</span>
                <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-800 w-[93%]" />
                </div>
                <span className="w-8 text-right text-neutral-700">93%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-500">4 star</span>
                <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-800 w-[6%]" />
                </div>
                <span className="w-8 text-right text-neutral-700">6%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-500">3 star</span>
                <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-800 w-[1%]" />
                </div>
                <span className="w-8 text-right text-neutral-700">1%</span>
              </div>
            </div>
          </div>

          {/* Review List */}
          <div className="p-6 space-y-6 flex-1">
            {productData.customerReviews.map((rev, index) => (
              <div
                key={index}
                className="pb-6 border-b border-neutral-100 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 text-sm font-sans">
                      {rev.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Verified Owner
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{rev.date}</span>
                </div>

                <div className="text-xs font-mono text-neutral-500 mb-2">{rev.role}</div>

                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="text-sm font-bold text-neutral-900 mb-1">{rev.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {rev.comment}
                </p>
              </div>
            ))}

            {/* Submit a review form */}
            <div className="mt-8 pt-6 border-t border-neutral-200 bg-neutral-50 p-5 rounded-md">
              <h3 className="text-sm font-bold font-serif text-neutral-900 mb-1">
                Submit Your Field Log
              </h3>
              <p className="text-xs text-neutral-500 font-mono mb-4">
                Have you tested this jacket in the backcountry? Leave your report.
              </p>

              {submitted ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Thank you! Your dispatch has been queued for verification.
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Your Name & Guide Title
                    </label>
                    <input
                      type="text"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="e.g. Samuel Vance, Wilderness Ranger"
                      className="w-full text-xs font-mono px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Observations & Durability Notes
                    </label>
                    <textarea
                      rows={3}
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      placeholder="Detail weather exposure, terrain abrasions, and hardware performance..."
                      className="w-full text-xs font-sans px-3 py-2 border border-neutral-300 focus:outline-none focus:border-black bg-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    Post Field Report
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
