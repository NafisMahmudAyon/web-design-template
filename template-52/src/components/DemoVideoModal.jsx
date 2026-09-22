import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, Maximize2, Sparkles } from 'lucide-react';

export default function DemoVideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5520] animate-pulse" />
              <h3 className="text-xs font-bold tracking-wide text-slate-200">
                Pollinate Product Walkthrough & Live Architecture Demo
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Canvas Mockup */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-[#10141D] to-[#1E1929] flex flex-col items-center justify-center p-8 overflow-hidden group">
            {/* Ambient Background Elements */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FF5520]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-lg">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-[#FF5520] hover:bg-[#E84512] text-white flex items-center justify-center mx-auto shadow-2xl shadow-[#FF5520]/50 hover:scale-105 transition-all mb-6"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-white ml-1" />}
              </button>

              <h4 className="text-2xl font-black tracking-tight mb-2">
                Unified Signature Governance & Smart Banners
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Watch how Fortune 500 teams use Pollinate to convert standard employee emails into high-performing customer acquisition pipelines.
              </p>
            </div>

            {/* Simulated Player Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px]">02:45 / 04:30</span>
              </div>

              {/* Scrubber Bar */}
              <div className="flex-1 mx-6 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div className="w-[62%] h-full bg-[#FF5520] rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
