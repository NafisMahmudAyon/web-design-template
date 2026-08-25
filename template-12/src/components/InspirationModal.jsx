import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wand2, Copy, Check } from 'lucide-react';

export default function InspirationModal({ isOpen, onClose, onUsePrompt }) {
  if (!isOpen) return null;

  const communityPrompts = [
    { title: 'Cyberpunk Mech Armor', prompt: '3D Cyberpunk Android with carbon fiber helmet and glowing orange hydraulic neck, Octane Render', style: '3D STYLES' },
    { title: 'Futuristic Mecha Helmet', prompt: 'Sleek white mecha helmet with glowing visor, high detail studio lighting, photorealistic 8k', style: 'DIGITAL' },
    { title: 'Mythological Astro God', prompt: 'Golden celestial deity with metallic wings standing in cosmic nebula, digital painting', style: 'MYTHOLOGICAL' },
    { title: 'Retro Sci-Fi Robot', prompt: '1980s vintage anime robot head illustration, vibrant neon colors, cel-shaded', style: 'ANIME' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121418] rounded-[36px] p-6 shadow-2xl z-10 border border-white/20 text-white overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold font-display text-white">Community Inspiration</h3>
          </div>
          <p className="text-xs text-gray-400 mb-6">Select a community prompt to remix into the AETHER 3D engine.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
            {communityPrompts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#1a1d24] p-4 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white">
                    {item.style}
                  </span>
                  <h4 className="text-xs font-bold text-white mt-2">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 italic mt-1 leading-snug">"{item.prompt}"</p>
                </div>

                <button
                  onClick={() => {
                    onUsePrompt(item.prompt);
                    onClose();
                  }}
                  className="w-full bg-white hover:bg-gray-200 text-gray-950 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Remix Prompt</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
