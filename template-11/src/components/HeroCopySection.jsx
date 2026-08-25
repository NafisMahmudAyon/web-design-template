import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroCopySection({ activeIndex, setActiveIndex, products }) {
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-between h-full py-4 pr-0 lg:pr-6">
      
      {/* Top Headline Block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display uppercase tracking-tight text-white leading-[1.15] max-w-xl">
          Modern Designs. <br />
          Effortless Comfort. <br />
          Lasting Quality.
        </h1>
      </motion.div>

      {/* Middle Interactive Product Carousel Row */}
      <div className="my-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {products.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border cursor-pointer shrink-0 transition-all ${
                  isActive
                    ? 'border-white ring-2 ring-white/40 shadow-xl'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Expand icon in top right of thumbnail */}
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Arrow Navigation Controls (Matching Screenshot Arrow Buttons) */}
        <div className="flex items-center gap-2 mt-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePrev}
            className="w-10 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleNext}
            className="w-10 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Description Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed font-medium mt-4"
      >
        Contemporary chairs crafted for your lifestyle, designed to bring effortless elegance into your everyday spaces.
      </motion.p>

    </div>
  );
}
