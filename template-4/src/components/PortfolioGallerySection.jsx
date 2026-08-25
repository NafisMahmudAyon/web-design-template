import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { portfolioGalleries } from '../data/mockData';

export default function PortfolioGallerySection({ onOpenLightbox }) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const currentGallery = portfolioGalleries[currentGalleryIndex];

  const handlePrev = () => {
    setCurrentGalleryIndex((prev) => (prev === 0 ? portfolioGalleries.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentGalleryIndex((prev) => (prev === portfolioGalleries.length - 1 ? 0 : prev + 1));
  };

  const item1 = currentGallery.items[0];
  const item2 = currentGallery.items[1];
  const item3 = currentGallery.items[2];

  return (
    <section id="portfolio" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Light DREAM HOME Watermark in background */}
      <div className="absolute -bottom-8 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <span className="font-bebas text-[140px] sm:text-[220px] lg:text-[290px] text-zinc-900/[0.04] leading-none tracking-tight block text-center whitespace-nowrap">
          DREAM HOME
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-normal uppercase"
        >
          Explore Our Portfolio Gallery
        </motion.h2>
      </div>

      {/* Asymmetric 3-Image Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8">
        {/* Left Column (2 Stacked Images) */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
          {/* Top Image */}
          <motion.div
            key={`${item1.id}-${currentGalleryIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => onOpenLightbox && onOpenLightbox(item1.image, item1.title, item1.location)}
            className="group relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[16/10] shadow-lg cursor-pointer bg-zinc-200"
          >
            <img
              src={item1.image}
              alt={item1.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" /> View Photo
              </span>
            </div>
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            key={`${item2.id}-${currentGalleryIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => onOpenLightbox && onOpenLightbox(item2.image, item2.title, item2.location)}
            className="group relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[16/10] shadow-lg cursor-pointer bg-zinc-200"
          >
            <img
              src={item2.image}
              alt={item2.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" /> View Photo
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (1 Large Tall Majestic Villa Image) */}
        <motion.div
          key={`${item3.id}-${currentGalleryIndex}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => onOpenLightbox && onOpenLightbox(item3.image, item3.title, item3.location)}
          className="lg:col-span-7 group relative rounded-[28px] sm:rounded-[38px] overflow-hidden aspect-[4/3] lg:aspect-auto min-h-[420px] lg:min-h-full shadow-2xl cursor-pointer bg-zinc-900"
        >
          <img
            src={item3.image}
            alt={item3.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-5 py-2.5 rounded-full backdrop-blur-md flex items-center gap-2">
              <Maximize2 className="w-4 h-4" /> Expand Full View
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Navigation Controls */}
      <div className="relative z-10 flex items-center justify-end gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-white border border-zinc-300 text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-md"
          aria-label="Previous portfolio set"
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-md"
          aria-label="Next portfolio set"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
