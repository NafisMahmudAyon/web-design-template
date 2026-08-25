import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Sparkles, Send, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Launch celebratory confetti burst!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4F58B', '#B2E057', '#FF7A45', '#ffffff']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setComment('');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[32px] p-6 shadow-2xl z-10 border border-white/80 overflow-hidden"
        >
          {/* Top Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#d4f58b] flex items-center justify-center text-gray-900 mb-4 shadow-lg">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">Thank you for your feedback!</h3>
              <p className="text-xs text-gray-500">Your insights help us continuously improve the course experience.</p>
            </motion.div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-gray-900 font-display">Course Feedback</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6">How was your learning experience with Anna Novik's design course?</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Star Rating Bar */}
                <div className="flex items-center justify-center gap-2 py-2 bg-gray-50 rounded-2xl border border-gray-100">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star 
                        className={`w-7 h-7 transition-colors ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Review Comments</label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked or what could be improved..."
                    className="w-full text-xs font-medium p-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-black focus:outline-none transition-all resize-none text-gray-800"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#d4f58b] hover:bg-[#cbf168] text-gray-900 font-bold py-3.5 rounded-2xl shadow-md flex items-center justify-center gap-2 border border-[#beea6d] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </motion.button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
