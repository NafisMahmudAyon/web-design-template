import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { editorChoiceData } from '../data/mockData';

export default function EditorChoiceSection({ onSelectCard }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? editorChoiceData.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= editorChoiceData.length - 2 ? 0 : prev + 1));
  };

  const displayedCards = [
    editorChoiceData[startIndex % editorChoiceData.length],
    editorChoiceData[(startIndex + 1) % editorChoiceData.length]
  ];

  return (
    <section id="editor-choice" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-normal uppercase"
        >
          Editor's Choice
        </motion.h2>
      </div>

      {/* 2 Large Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        <AnimatePresence mode="wait">
          {displayedCards.map((card, idx) => (
            <motion.div
              key={`${card.id}-${startIndex}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectCard && onSelectCard(card)}
              className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[16/11] shadow-xl cursor-pointer bg-zinc-900"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover zoom-card-img group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Content text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic max-w-lg">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-md"
          aria-label="Previous editor choice"
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-white border border-zinc-300 text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-md"
          aria-label="Next editor choice"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
