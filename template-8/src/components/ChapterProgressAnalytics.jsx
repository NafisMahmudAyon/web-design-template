import React from 'react';
import { motion } from 'framer-motion';
import { FolderCheck, Clock, Layers, Sparkles, TrendingUp } from 'lucide-react';

export default function ChapterProgressAnalytics({ 
  currentProgress, 
  onSelectChapter 
}) {
  const cards = [
    {
      id: 'first-steps',
      chapterId: 'first-steps',
      title: 'First Steps Course Chapter Progress',
      lastVisit: 'Last visit: yesterday at 09:30',
      percentage: '26,39%',
      active: true,
      startTime: '23:32',
      endTime: '35:00',
      progressVal: 26.39,
    },
    {
      id: 'designing-header',
      chapterId: 'designing-header',
      title: 'Designing Header Chapter',
      lastVisit: 'Last visit: n/a',
      percentage: '0,00%',
      active: false,
      startTime: '00:00',
      endTime: '32:00',
      progressVal: 0,
    },
    {
      id: 'sidebar-essentials',
      chapterId: 'sidebar-essentials',
      title: 'Sidebar Essentials Chapter',
      lastVisit: 'Last visit: n/a',
      percentage: '0,00%',
      active: false,
      startTime: '00:00',
      endTime: '38:00',
      progressVal: 0,
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      {cards.map((card, idx) => {
        const isFirst = idx === 0;
        const progressPercentage = isFirst ? (currentProgress ? currentProgress.toFixed(2).replace('.', ',') + '%' : card.percentage) : card.percentage;
        const progressNum = isFirst ? (currentProgress || 26.39) : 0;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
            whileHover={{ y: -2, shadow: '0 15px 30px rgba(0, 0, 0, 0.05)' }}
            onClick={() => onSelectChapter(card.chapterId)}
            className="glass-panel rounded-[24px] p-5 border border-white/80 bg-white/90 shadow-md cursor-pointer transition-all duration-300 group"
          >
            {/* Top Info Header & Large Stat */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center mt-0.5 ${
                  isFirst 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <FolderCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-black">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{card.lastVisit}</p>
                </div>
              </div>

              {/* Large Percentage Stat */}
              <div className="text-right">
                <span className={`text-2xl md:text-3xl font-extrabold font-display tracking-tight ${
                  isFirst ? 'text-gray-900' : 'text-gray-300'
                }`}>
                  {progressPercentage}
                </span>
              </div>
            </div>

            {/* Custom Bar Spectrum Chart */}
            <div className="relative w-full h-7 bg-gray-100/70 rounded-xl overflow-hidden p-1 flex items-center gap-[2px]">
              {/* Generate 50 thin vertical spectrum bars */}
              {Array.from({ length: 48 }).map((_, i) => {
                const filled = (i / 48) * 100 <= progressNum;
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm transition-all duration-300 ${
                      filled
                        ? 'bg-[#b8f056] border-t border-[#9ed636]'
                        : 'bg-gray-200/60'
                    }`}
                    style={{ height: `${40 + (i % 5) * 12}%` }}
                  />
                );
              })}
            </div>

            {/* Timestamps Row */}
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mt-2 font-medium px-1">
              <span>{card.startTime}</span>
              <span>{card.endTime}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
