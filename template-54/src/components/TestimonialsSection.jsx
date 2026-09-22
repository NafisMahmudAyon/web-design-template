import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Quote, X } from 'lucide-react';
import { testimonialsData } from '../data/journeoData';

export default function TestimonialsSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{testimonialsData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight font-display"
          >
            {testimonialsData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
          >
            {testimonialsData.subtitle}
          </motion.p>
        </div>

        {/* Content Layout: Left Video Card + Right 2 Stacked Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Media / Video Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 min-h-[460px] rounded-[32px] overflow-hidden relative shadow-card border border-gray-200/80 bg-gray-950 flex flex-col justify-between p-6 sm:p-8 group"
          >
            {/* Background Image */}
            <img
              src={testimonialsData.videoCard.image}
              alt="Traveler with map"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

            {/* Top Spacer */}
            <div className="relative z-10" />

            {/* Center Play Button */}
            <div className="relative z-10 flex items-center justify-center my-auto">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-gray-950 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:ring-4 group-hover:ring-white/30"
                aria-label="Play traveler story"
              >
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
            </div>

            {/* Bottom Caption & Author */}
            <div className="relative z-10 text-white">
              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed max-w-xs">
                "{testimonialsData.videoCard.caption}"
              </p>
              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {testimonialsData.videoCard.author}
                  </h4>
                  <p className="text-xs text-white/70">
                    {testimonialsData.videoCard.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Reviews (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {testimonialsData.stories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 rounded-[28px] bg-white border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative Giant Quote Watermark */}
                <div className="absolute top-4 right-6 text-gray-100 font-serif text-8xl font-black pointer-events-none select-none opacity-50">
                  "
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {story.content}
                  </p>
                </div>

                {/* Author & 5 Stars */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-11 h-11 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-950">
                        {story.author}
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  {/* Golden Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full bg-gray-950 flex flex-col items-center justify-center text-white p-8 text-center">
                <Play className="w-16 h-16 text-amber-400 animate-pulse mb-4" />
                <h3 className="text-xl font-bold">Traveler Journey Documentary</h3>
                <p className="text-xs text-gray-400 mt-2 max-w-sm">
                  Watch Michael Thompson share his experience traveling through Kyoto, Amalfi Coast, and the Swiss Alps with Journeo.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
