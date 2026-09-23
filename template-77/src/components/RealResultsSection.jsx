import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { growthResults } from '../data/elevateData';

export default function RealResultsSection({ onWatchVideo }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="results" className="py-20 sm:py-28 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Soft Sage Background Enclosure */}
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#F0F5F3] p-8 sm:p-14 lg:p-16 border border-[#E1EBE7]">
          
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold text-[#182623] tracking-tight font-display"
            >
              Real Results, Real Growth
            </motion.h2>
          </div>

          {/* 3 Cards Grid: Strictly Zero CLS Spacing Stability */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Handpicked Curriculum & Quote Drawer */}
            <motion.div
              onMouseEnter={() => setHoveredCardId('syllabus')}
              onMouseLeave={() => setHoveredCardId(null)}
              /* Fixed container height h-[500px] */
              className={`h-[500px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                hoveredCardId === 'syllabus'
                  ? 'bg-[#2E5B53] text-white shadow-xl -translate-y-1.5'
                  : 'bg-[#DDEAE5] text-[#182623] shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                  Curriculum Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight font-display">
                  From handpicked ingredients to chef-inspired teaching, we bring you an unforgettable
                </h3>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/10">
                <p className="text-xs italic leading-relaxed opacity-85">
                  "This camp completely changed my performance. The coaching is next level."
                </p>

                <button
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide inline-flex items-center space-x-1.5 transition-colors ${
                    hoveredCardId === 'syllabus'
                      ? 'bg-white text-[#2E5B53]'
                      : 'bg-[#182623] text-white'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: Stadium Night Match with Interactive Play Overlay */}
            <motion.div
              onMouseEnter={() => setHoveredCardId('stadium')}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={onWatchVideo}
              /* Fixed container height h-[500px] */
              className={`relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-sm transition-all duration-300 group ${
                hoveredCardId === 'stadium'
                  ? 'shadow-xl ring-2 ring-[#2E5B53] -translate-y-1.5'
                  : ''
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Soccer match under stadium floodlights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Play Button Centerpiece */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl text-[#2E5B53] group-hover:scale-110 group-hover:bg-white transition-all">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold mb-2 inline-block">
                  Live Match Footage
                </span>
                <h4 className="text-base font-bold tracking-tight">
                  High-Intensity Night Exhibition
                </h4>
              </div>
            </motion.div>

            {/* Card 3: Young Dribbler with 92% Skill Improvement Badge */}
            <motion.div
              onMouseEnter={() => setHoveredCardId('dribble')}
              onMouseLeave={() => setHoveredCardId(null)}
              /* Fixed container height h-[500px] */
              className={`relative h-[500px] rounded-3xl overflow-hidden shadow-sm transition-all duration-300 group ${
                hoveredCardId === 'dribble'
                  ? 'shadow-xl ring-2 ring-[#2E5B53] -translate-y-1.5'
                  : ''
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Young boy training soccer footwork"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* 2 Floating Metric Badges on Bottom (Figma design detail) */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2.5">
                <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>92% skill accuracy improvement</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>88% tactical reaction speed</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
