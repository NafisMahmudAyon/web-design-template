import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, CheckCircle2, X } from 'lucide-react';
import { TRAINING_TRACKS } from '../data/mockData';

export default function TrainWithIntentSection({ onOpenJoin }) {
  const [activeTrackId, setActiveTrackId] = useState('track-02');
  const [selectedModalTrack, setSelectedModalTrack] = useState(null);

  return (
    <section id="tracks" className="py-24 bg-[#080d14] border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#ccff00] tracking-tight leading-tight uppercase"
            >
              TRAIN WITH INTENT.
            </motion.h2>
          </div>

          <p className="text-sm sm:text-base text-gray-300 max-w-md font-sans leading-relaxed">
            Three tracks, one standard. Every player is assessed on court before placement, then reviewed every eight weeks.
          </p>
        </div>

        {/* 3 Training Track Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Track 01 Groundwork (Left 5 cols) */}
          <div className="lg:col-span-5">
            {TRAINING_TRACKS.slice(0, 1).map((track) => {
              const isActive = activeTrackId === track.id;

              return (
                <div
                  key={track.id}
                  onMouseEnter={() => setActiveTrackId(track.id)}
                  onClick={() => setSelectedModalTrack(track)}
                  /* Fixed height container prevents layout shift (Zero CLS) */
                  className={`h-[480px] sm:h-[520px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-2xl border flex flex-col justify-between relative ${
                    isActive ? 'border-vantageNeon shadow-neon-glow' : 'border-white/15 hover:border-white/30'
                  }`}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                    <img
                      src={track.image}
                      alt={track.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.7]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-[#080d14]/50 to-transparent" />
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
                    <div className="text-xs font-bold uppercase tracking-wider text-vantageNeon">
                      {track.trackNum}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-vantageNeon transition-colors">
                        {track.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed font-sans">
                        {track.desc}
                      </p>

                      <div className="text-[11px] font-bold text-gray-400 font-condensed tracking-wider pt-2">
                        {track.level}
                      </div>

                      <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                        <span className="text-white font-bold">Inspect Track</span>
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                            isActive ? 'bg-vantageNeon text-black translate-x-1' : 'bg-white/20 text-white'
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

          {/* Tracks 02 & 03 (Right 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            {TRAINING_TRACKS.slice(1).map((track) => {
              const isActive = activeTrackId === track.id;

              return (
                <div
                  key={track.id}
                  onMouseEnter={() => setActiveTrackId(track.id)}
                  onClick={() => setSelectedModalTrack(track)}
                  /* Fixed height container prevents layout shift (Zero CLS) */
                  className={`h-[240px] sm:h-[246px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-xl border relative ${
                    isActive ? 'border-vantageNeon shadow-neon-glow' : 'border-white/15 hover:border-white/30'
                  }`}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                    <img
                      src={track.image}
                      alt={track.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.7]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080d14] via-[#080d14]/80 to-transparent" />
                  </div>

                  {track.tag && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-vantageNeon text-black uppercase tracking-wider">
                        {track.tag}
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full max-w-lg">
                    <div className="text-xs font-bold uppercase tracking-wider text-vantageNeon">
                      {track.trackNum}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-vantageNeon transition-colors mb-1">
                        {track.title}
                      </h3>

                      <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-sans">
                        {track.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 font-condensed tracking-wider pt-2 border-t border-white/10">
                      <span>{track.level}</span>
                      <ArrowUpRight className={`w-4 h-4 transition-all ${isActive ? 'text-vantageNeon translate-x-1' : 'text-white'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Track Detail Modal */}
      <AnimatePresence>
        {selectedModalTrack && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalTrack(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#080d14] text-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden"
              >
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                  <img src={selectedModalTrack.image} alt={selectedModalTrack.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-[#080d14]/50 to-transparent" />
                  <button
                    onClick={() => setSelectedModalTrack(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 sm:left-8">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-vantageNeon text-black uppercase">
                      {selectedModalTrack.trackNum}
                    </span>
                    <h3 className="font-display text-3xl font-bold mt-1 uppercase">{selectedModalTrack.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                  {selectedModalTrack.desc}
                </p>

                <div className="bg-white/5 rounded-2xl p-4 text-xs space-y-2 mb-6">
                  <div className="flex justify-between border-b border-white/10 pb-2 font-condensed font-bold">
                    <span className="text-gray-400">Target Level:</span>
                    <span className="text-vantageNeon">{selectedModalTrack.level}</span>
                  </div>
                  <p className="text-gray-300 pt-1">{selectedModalTrack.details}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedModalTrack(null);
                      onOpenJoin();
                    }}
                    className="flex-1 py-3 rounded-xl bg-vantageNeon hover:bg-[#b8e600] text-black font-bold text-sm transition-colors flex items-center justify-center gap-2 font-condensed tracking-wider uppercase"
                  >
                    <span>Apply for Track Placement</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedModalTrack(null)}
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
