import React from 'react';
import { motion } from 'framer-motion';
import { Check, Play, Clock, BookOpen, ArrowUpRight, MessageSquareHeart } from 'lucide-react';

export default function CourseChapters({ 
  chapters, 
  activeChapterId, 
  onSelectChapter, 
  onOpenFeedback 
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Course Chapters Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="glass-panel rounded-[32px] p-5 shadow-xl border border-white/80 bg-white/90"
      >
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-4 px-1">
          <BookOpen className="w-4 h-4 text-gray-700" />
          <h2 className="text-base font-bold text-gray-900">Course chapters</h2>
        </div>

        {/* Chapters List */}
        <div className="flex flex-col gap-1.5 max-h-[300px] overflow-y-auto pr-1">
          {chapters.map((chapter) => {
            const isActive = activeChapterId === chapter.id;
            return (
              <motion.button
                key={chapter.id}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectChapter(chapter)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-gray-100/90 text-black font-semibold shadow-sm border border-gray-200/80' 
                    : 'hover:bg-gray-50/80 text-gray-700 font-medium'
                }`}
              >
                <span className="text-xs lg:text-sm tracking-tight flex items-center gap-2 truncate">
                  {chapter.title}
                </span>

                <div className="flex items-center gap-2">
                  {chapter.completed ? (
                    <div className="w-5 h-5 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-700">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  ) : (
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-black text-white font-semibold' 
                        : 'text-gray-400 bg-gray-100/50'
                    }`}>
                      {chapter.duration}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* "Leave your feedback" Lime Button Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.02, shadow: '0 10px 25px rgba(200, 240, 110, 0.4)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenFeedback}
          className="w-full bg-[#d4f58b] hover:bg-[#cbf168] text-gray-900 font-bold p-4 rounded-[24px] flex items-center justify-between shadow-md transition-all border border-[#beea6d]/70 group cursor-pointer"
        >
          <span className="text-sm font-bold tracking-tight flex items-center gap-2">
            <MessageSquareHeart className="w-4 h-4 text-emerald-800" />
            Leave your feedback
          </span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
