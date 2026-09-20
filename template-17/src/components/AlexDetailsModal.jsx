import React from 'react';
import { motion } from 'framer-motion';
import { X, Award, CheckCircle, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export default function AlexDetailsModal({ isOpen, onClose, onBookWithAlex }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0e2218] border border-white/15 rounded-3xl w-full max-w-lg p-6 sm:p-8 text-white shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E2F844] bg-emerald-900 shadow-lg">
            <img
              src="/assets/testimonial-portrait.png"
              alt="Alex Carter"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-[#E2F844] tracking-wider uppercase">PGA Certified Coach</span>
            <h3 className="text-2xl font-bold">Alex Carter</h3>
            <p className="text-xs text-white/70">26 y.o • Scratch Golfer (Handicap +4)</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xl font-extrabold text-[#E2F844] block">+18%</span>
            <span className="text-[11px] text-white/60">Skill Gain</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xl font-extrabold text-white block">9.6/10</span>
            <span className="text-[11px] text-white/60">Student Rating</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xl font-extrabold text-white block">420+</span>
            <span className="text-[11px] text-white/60">Lessons Given</span>
          </div>
        </div>

        <p className="text-sm text-white/80 leading-relaxed mb-6">
          Alex specializes in high-speed 3D launch monitor swing analysis, putting stroke biomechanics, and course management for golfers looking to break 80.
        </p>

        <button
          onClick={() => {
            onClose();
            onBookWithAlex();
          }}
          className="w-full bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E2F844]/20"
        >
          <span>Schedule Lesson with Alex</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
