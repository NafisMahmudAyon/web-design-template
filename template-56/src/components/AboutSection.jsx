import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Compass, MapPin } from 'lucide-react';
import { aboutData } from '../data/wanderlustData';

export const AboutSection = ({ onOpenBooking }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'slide-1',
      title: 'Young Adventurer Exploration',
      location: 'Kyoto Trails, Japan',
      tag: 'CULTURE & TREK',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop',
      desc: 'Guided pathfinding through ancient cedar forests, sacred shrines, and heritage village workshops.'
    },
    {
      id: 'slide-2',
      title: 'Turquoise Archipelago Kayak',
      location: 'El Nido, Philippines',
      tag: 'ISLAND EXPEDITION',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop',
      desc: 'Crystal-clear lagoons, hidden karst limestone caverns, and private catamaran sunset dinner.'
    },
    {
      id: 'slide-3',
      title: 'Alpine Summit Crossing',
      location: 'Dolomites, Italy',
      tag: 'HIGH PEAKS',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop',
      desc: 'Heli-supported ridge walks, cozy rifugio gastronomy, and breathtaking panoramic starry nights.'
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-slate-800 relative overflow-hidden">
      {/* Subtle background topographical grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B2017_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Step indicator & Tag */}
        <div className="flex items-center gap-4 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
          <span className="text-brandEmerald font-bold">{aboutData.step}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="text-slate-600 font-sans tracking-wider">{aboutData.tag}</span>
        </div>

        {/* Section Headline & Intro Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-[1.2]">
              {aboutData.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              {aboutData.description}
            </p>
          </div>
        </div>

        {/* Two-Column Grid: Left Featured Night Card vs Right Interactive Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Tall Card - Stable height, zero CLS */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl group border border-slate-200/80 bg-slate-900">
              <img
                src={aboutData.leftCard.image}
                alt="Travel Far and Wide"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-brandAmber animate-spin-slow" />
                <span>Featured Expedition</span>
              </div>

              {/* Bottom Caption & Action */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                  {aboutData.leftCard.caption}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  Uncover remote sanctuaries and untouched natural wonders with our hand-selected local naturalists and private transport.
                </p>
                <button
                  onClick={() => onOpenBooking?.()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brandAmber text-brandForestDark text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors shadow"
                >
                  <span>Explore Route</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel Controls + Slides with Zero CLS */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Header with Carousel Navigation Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                  Featured Destinations
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  Slide {activeSlide + 1} of {slides.length}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-100 hover:border-slate-400 text-slate-700 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-slate-900 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-slate-900/10"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Slide Display Container (Stable Height h-[380px] sm:h-[440px]) */}
            <div className="relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[activeSlide].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-brandAmber text-brandForestDark text-xs font-bold tracking-wider">
                      {slides[activeSlide].tag}
                    </span>
                  </div>

                  {/* Content Drawer */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-brandAmber font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{slides[activeSlide].location}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-serif mb-2">
                      {slides[activeSlide].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4 font-light">
                      {slides[activeSlide].desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onOpenBooking?.(slides[activeSlide].title)}
                        className="px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md text-xs font-semibold transition-all duration-200"
                      >
                        Book This Experience ↗
                      </button>

                      {/* Pagination Dots */}
                      <div className="flex items-center gap-1.5">
                        {slides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === activeSlide ? 'w-6 bg-brandAmber' : 'w-2 bg-white/40'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
