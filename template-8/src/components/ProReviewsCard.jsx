import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, ArrowUpRight, Star, CheckCircle, Share2 } from 'lucide-react';

export default function ProReviewsCard({ onOpenAllReviews }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(342);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="glass-panel rounded-[32px] p-6 shadow-xl border border-white/80 bg-white/90 flex flex-col justify-between h-full group"
    >
      <div>
        {/* Header Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-700" />
            <h2 className="text-base font-bold text-gray-900 font-sans">Pro Reviews</h2>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLike}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                isLiked 
                  ? 'bg-rose-50 text-rose-500 border border-rose-200' 
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200/80'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            </motion.button>

            <motion.button
              whileHover={{ rotate: 45, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenAllReviews}
              className="w-9 h-9 rounded-full bg-white text-gray-700 hover:text-black border border-gray-200/80 flex items-center justify-center shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Reviewer Profile Avatar */}
        <div className="flex flex-col items-center text-center my-4">
          <div className="relative mb-3">
            <img 
              src="/assets/ronda_williams_avatar.png" 
              alt="Ronda Williams" 
              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center border-2 border-white shadow">
              <span className="text-[10px] font-bold">C</span>
            </div>
          </div>
          
          <h3 className="font-bold text-gray-900 text-base leading-tight">Ronda Williams</h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">Mentor at Coursera</p>
        </div>

        {/* Review Quote Body */}
        <p className="text-xs text-gray-600 text-center leading-relaxed italic my-4 px-2">
          "This course will teach you how to design a website from start to finish. We will provide some easy steps and techniques for you, so you could really understand the process and would be able to answer the main question — 'Why?'"
        </p>
      </div>

      {/* Progress Metrics Footer */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-[11px] font-medium text-gray-400 mb-1.5 font-mono">
          <span className="flex items-center gap-1 text-gray-600 font-semibold">
            <span>@ 79,48%</span>
          </span>
          <span>20,52%</span>
        </div>

        {/* Dual Textured Meter Bar */}
        <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5 flex gap-1">
          <div className="h-full bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full w-[79.48%] shadow-inner transition-all duration-500" />
          <div className="h-full bg-gray-200/80 rounded-full flex-1" />
        </div>
      </div>
    </motion.div>
  );
}
