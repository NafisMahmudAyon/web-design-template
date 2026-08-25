import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, ShieldCheck, Zap } from 'lucide-react';

export default function IngredientModal({ ingredient, onClose }) {
  if (!ingredient) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-[#152416] rounded-[36px] p-6 shadow-2xl z-10 border border-[#375839] text-[#e4f2df] overflow-hidden"
        >
          {/* Top Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Ingredient Header Image & Name */}
          <div className="relative h-44 rounded-2xl overflow-hidden mb-5 border border-white/10">
            <img 
              src={ingredient.image} 
              alt={ingredient.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152416] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                {ingredient.tag}
              </span>
              <h2 className="text-2xl font-extrabold font-display uppercase text-white mt-1">
                {ingredient.name}
              </h2>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 bg-black/30 rounded-2xl border border-white/10">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Energy / Portion</span>
              <span className="text-sm font-bold text-emerald-300">{ingredient.calories}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Key Micronutrients</span>
              <span className="text-xs font-bold text-white truncate block">{ingredient.vitamins}</span>
            </div>
          </div>

          {/* Detailed Health Benefit */}
          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Health & Detox Benefits
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              {ingredient.benefit}
            </p>
          </div>

          {/* Close CTA Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#9ad972] hover:bg-[#88c960] text-gray-950 font-bold py-3 rounded-2xl text-xs transition-colors shadow-md cursor-pointer"
          >
            Got it — Back to Smoothie
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
