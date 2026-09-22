import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-finovia-card border border-white/15 overflow-hidden shadow-2xl"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-slate-300 ml-2">
                Finovia Interactive Product Walkthrough — Personal Wealth & Global Vaults
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Container (Rich dynamic simulated interface) */}
          <div className="relative aspect-video bg-gradient-to-br from-[#0e130a] via-[#151c11] to-[#0a0d07] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
            {/* Ambient pulse */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(210,252,59,0.15)_0,_transparent_70%)] pointer-events-none" />

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 max-w-md p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md"
            >
              <div className="w-16 h-16 rounded-full bg-finovia-lime text-finovia-dark flex items-center justify-center mx-auto mb-4 shadow-xl shadow-finovia-lime/20">
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </div>
              <h4 className="text-xl font-black text-white">Live Product Walkthrough</h4>
              <p className="text-xs text-slate-300 mt-2">
                Watch how Finovia automates multi-currency payouts, optimizes spending tiers, and keeps your balance secure.
              </p>
            </motion.div>

            {/* Simulated Live Track Bar */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 bg-black/60 px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md z-20">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-finovia-lime hover:text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '100%' : '45%' }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="h-full bg-finovia-lime rounded-full"
                />
              </div>

              <span className="text-[11px] font-mono text-slate-300">01:48 / 03:20</span>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
