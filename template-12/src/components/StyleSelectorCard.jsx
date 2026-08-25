import React from 'react';
import { motion } from 'framer-motion';

export default function StyleSelectorCard({ selectedStyles, toggleStyle }) {
  const styles = [
    'MYTHOLOGICAL',
    'ANIME',
    'FANTASY',
    'PHOTOGRAPHY',
    'SKETCH',
    'DIGITAL',
    'PIXEL ART',
    'ILLUSTRATION',
    '3D STYLES',
  ];

  return (
    <div className="bg-white text-gray-950 rounded-[32px] p-5 shadow-xl border border-black/10 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xs font-extrabold uppercase tracking-widest font-display text-gray-950 mb-4">
          Choose Styles
        </h3>

        {/* Style Pills Grid */}
        <div className="flex flex-wrap gap-2">
          {styles.map((style) => {
            const isSelected = selectedStyles.includes(style);
            return (
              <motion.button
                key={style}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleStyle(style)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gray-950 text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
                }`}
              >
                {style}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress Bar Indicator matching Screenshot (—— — —) */}
      <div className="flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100">
        <div className="w-8 h-1 bg-gray-950 rounded-full" />
        <div className="w-3 h-1 bg-gray-300 rounded-full" />
        <div className="w-3 h-1 bg-gray-300 rounded-full" />
        <div className="w-3 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
