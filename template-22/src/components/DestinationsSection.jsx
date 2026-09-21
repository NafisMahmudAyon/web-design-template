import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Users, X, Bookmark } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

export default function DestinationsSection({ onOpenPlanTrip }) {
  const [activeFilter, setActiveFilter] = useState('All Trips');
  const [hoveredDestId, setHoveredDestId] = useState('dest-2');
  const [selectedDestModal, setSelectedDestModal] = useState(null);

  const filteredDestinations = activeFilter === 'All Trips'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.filterTag === activeFilter);

  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Discover your dreaming journey
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-gray-400 max-w-md font-sans leading-relaxed"
        >
          Discover AI-curated travel experiences crafted to fit your style, budget, and mood from peaceful getaways to exciting adventures, all personalized for you.
        </motion.p>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {['All Trips', 'Beach', 'City', 'Nature', 'Cultural Tours', 'Luxury'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeFilter === filter
                ? 'bg-white text-black font-bold shadow-md'
                : 'bg-[#162334] text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Destinations Cards Grid - Card Polymorphism Zero CLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => {
          const isActive = hoveredDestId === dest.id;

          return (
            <div
              key={dest.id}
              onMouseEnter={() => setHoveredDestId(dest.id)}
              onClick={() => setSelectedDestModal(dest)}
              /* Fixed container height prevents height jumps (Zero CLS) */
              className={`relative h-[480px] sm:h-[500px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-2xl border flex flex-col justify-between ${
                isActive ? 'border-cyan-400 shadow-cyan-glow' : 'border-white/15 hover:border-white/30'
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.7]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b131c] via-[#0b131c]/50 to-transparent" />
              </div>

              {/* Top Country Tag & Bookmark */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                  {dest.country}
                </span>
                <button className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Price Badge on bottom-right or content stack */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                <div />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-cyan-300 transition-colors">
                      {dest.title}
                    </h3>
                    <span className="text-sm font-bold font-mono px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {dest.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-300 font-sans">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {dest.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-cyan-400" /> {dest.capacity}</span>
                  </div>

                  <p className="text-xs text-gray-400 font-sans">{dest.category}</p>

                  {/* Polymorphic Content Drawer */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300">Inspect Package</span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-white text-black translate-x-1' : 'bg-white/20 text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Destination Modal */}
      <AnimatePresence>
        {selectedDestModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDestModal(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f1824] text-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="relative h-48 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                  <img src={selectedDestModal.image} alt={selectedDestModal.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1824] via-[#0f1824]/50 to-transparent" />
                  <button
                    onClick={() => setSelectedDestModal(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 sm:left-8 flex items-baseline justify-between right-6 sm:right-8">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-black">
                        {selectedDestModal.country}
                      </span>
                      <h3 className="font-display text-3xl font-bold mt-1">{selectedDestModal.title}</h3>
                    </div>
                    <span className="text-xl font-bold font-mono text-cyan-400">{selectedDestModal.price}</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 text-xs space-y-3 mb-6">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Duration & Capacity:</span>
                    <span className="font-bold text-white">{selectedDestModal.duration} | {selectedDestModal.capacity}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-white block uppercase text-[10px] tracking-wider text-cyan-400">
                      AI Itinerary Highlights:
                    </span>
                    {selectedDestModal.highlights?.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="text-cyan-400">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedDestModal(null);
                      onOpenPlanTrip();
                    }}
                    className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book Trip Package</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedDestModal(null)}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
