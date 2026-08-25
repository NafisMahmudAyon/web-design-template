import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, BookOpen, Users, Star, ArrowUpRight } from 'lucide-react';

export default function MentorDetailsModal({ isOpen, onClose }) {
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

        {/* Modal Body */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] p-6 shadow-2xl z-10 border border-white/80 overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/assets/anna_novik_avatar.png" 
              alt="Anna Novik" 
              className="w-20 h-20 rounded-full object-cover ring-4 ring-lime-200 shadow-md"
            />
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-lime-100 text-emerald-900 border border-lime-300 inline-block mb-1">
                Lead Instructor
              </span>
              <h2 className="text-2xl font-bold text-gray-900 font-display">Anna Novik</h2>
              <p className="text-xs text-gray-500 font-medium">Senior Product Designer & UX Mentor</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100 mb-6 text-center">
            <div>
              <div className="text-sm font-bold text-gray-900 flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-lime-600" /> 18.4k
              </div>
              <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">Students</p>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 flex items-center justify-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> 12
              </div>
              <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">Courses</p>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> 4.9
              </div>
              <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">Rating</p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-3 text-xs text-gray-600 leading-relaxed mb-6">
            <p>
              Anna Novik is a renowned UX Architect with over 10 years of experience designing scalable digital products for Fortune 500 tech companies.
            </p>
            <p>
              Her courses focus on practical user-centered design, layout balance, design systems, and responsive web aesthetics.
            </p>
          </div>

          {/* Action button */}
          <button 
            onClick={onClose}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-2xl shadow-md transition-colors text-xs flex items-center justify-center gap-2"
          >
            <span>Book 1-on-1 Mentorship Session</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
