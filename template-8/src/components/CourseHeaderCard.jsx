import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CourseHeaderCard({ onOpenMentorDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-panel rounded-[32px] p-6 shadow-xl border border-white/80 flex flex-col justify-between h-full bg-white/90 relative overflow-hidden group"
    >
      {/* Background soft ambient highlight */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-lime-200/40 to-amber-100/30 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

      <div>
        {/* Top Location / Category Pin */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-100/80 flex items-center justify-center text-gray-700 shadow-inner">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Course</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight mb-5 font-sans tracking-tight">
          How to design a website
        </h1>

        {/* Mentor Card Pill */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={onOpenMentorDetails}
          className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 hover:bg-gray-100/90 border border-gray-200/60 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/assets/anna_novik_avatar.png" 
                alt="Anna Novik" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug flex items-center gap-1.5">
                Anna Novik
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              </h3>
              <p className="text-xs text-gray-500 font-medium">Mentor & Sr. UX Architect</p>
            </div>
          </div>
          <motion.div 
            whileHover={{ rotate: 45 }}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm border border-gray-200/80 group-hover:bg-black group-hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Course Description */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Description</h4>
        <p className="text-xs lg:text-[13px] text-gray-600 leading-relaxed space-y-2">
          <span>This course will teach you how to design a website from start to finish.</span>
          <br className="mb-1" />
          <span className="block mt-1 text-gray-500">
            We will provide some easy steps and techniques for you, so you could really understand the process and would be able to answer the main question — <strong className="text-gray-800 font-semibold">"Why?"</strong>
          </span>
        </p>

        {/* Quick Highlights badges */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100/80">
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Certificate Included
          </span>
          <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" /> 4.9 Stars (1.2k)
          </span>
        </div>
      </div>
    </motion.div>
  );
}
