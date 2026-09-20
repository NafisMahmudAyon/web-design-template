import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, TrendingUp, Info, ChevronRight, CheckCircle2 } from 'lucide-react';

const HOLE_DATA = {
  1: { number: 1, par: 4, yards: '345 yds', difficulty: 'Medium', rating: '9.4/10', improvement: '+12%', satisfaction: '86%' },
  2: { number: 2, par: 5, yards: '520 yds', difficulty: 'Championship', rating: '9.6/10', improvement: '+18%', satisfaction: '89%' },
  3: { number: 3, par: 3, yards: '185 yds', difficulty: 'Technical', rating: '9.5/10', improvement: '+15%', satisfaction: '91%' },
  4: { number: 4, par: 4, yards: '410 yds', difficulty: 'Hard', rating: '9.7/10', improvement: '+22%', satisfaction: '94%' },
};

export default function HeroSection({ onOpenBooking, onOpenLessons, onOpenAlexModal }) {
  const [selectedHole, setSelectedHole] = useState(2);
  const currentHole = HOLE_DATA[selectedHole];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pb-28 overflow-hidden flex flex-col justify-between">
      {/* 1. Aerial Golf Course Map Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-clean-bg.jpg"
          alt="Golfio Championship Aerial Course"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Subtle Dark Vignette & Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1711] via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1711]/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between pt-6 md:pt-10">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Typography (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Play Better Golf <br />
              <span className="text-white">Book Smarter</span>
            </h1>

            {/* Interactive Hole Selector Pill Stack */}
            <div className="mt-8 flex flex-col gap-2 w-fit">
              {[1, 2, 3, 4].map((holeNum) => {
                const isActive = selectedHole === holeNum;
                return (
                  <button
                    key={holeNum}
                    onClick={() => setSelectedHole(holeNum)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 text-left flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-[#E2F844] text-[#0a1711] shadow-lg shadow-[#E2F844]/25 scale-105'
                        : 'bg-[#152e21]/70 hover:bg-[#1a3828]/80 text-white/80 border border-white/10 backdrop-blur-md'
                    }`}
                  >
                    <span>Hole {holeNum}</span>
                    {isActive && <span className="text-xs font-bold px-2 py-0.5 bg-black/10 rounded-full">{currentHole.yards}</span>}
                  </button>
                );
              })}
            </div>

            {/* Subtitle & CTAs */}
            <p className="mt-8 text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-lg">
              Book world-class golf courses and lessons in a few clicks from tee times to training, everything you need.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-xl shadow-[#E2F844]/20 flex items-center gap-2 group"
              >
                <span>Book a Tee Time</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenLessons}
                className="bg-[#152e21]/70 hover:bg-[#1a3828]/80 text-white border border-white/15 backdrop-blur-md font-medium text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:border-white/30"
              >
                Find Golf Lessons
              </button>
            </div>
          </motion.div>

          {/* Right Floating Glass HUD Card: Skill Improvement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:ml-auto w-full max-w-sm"
          >
            <div className="bg-[#12281c]/80 border border-white/15 backdrop-blur-xl rounded-3xl p-5 shadow-2xl text-white">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/90">
                  Skill Improvement
                </span>
                <span className="text-xs font-bold text-[#E2F844] flex items-center gap-1">
                  {currentHole.improvement} <span className="text-sm">↑</span>
                </span>
              </div>

              {/* Player Profile Item */}
              <div
                onClick={onOpenAlexModal}
                className="mt-4 flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E2F844]/40 bg-emerald-800 flex items-center justify-center">
                    <img
                      src="/assets/testimonial-portrait.png"
                      alt="Alex Carter"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#E2F844] transition-colors">
                      Alex Carter
                    </h4>
                    <p className="text-xs text-white/60">26 y.o (handicap 14)</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
              </div>

              {/* Rating Metric */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between">
                <div>
                  <p className="text-xs text-[#E2F844] font-medium">Up 7% from last month</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{currentHole.rating}</span>
                    <span className="text-xs text-white/60">(Rating)</span>
                  </div>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#E2F844] hover:text-[#E2F844] transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Floating Cards Row */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Center Card: Golf Made Effortless */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 lg:col-span-8 bg-[#12281c]/80 border border-white/15 backdrop-blur-xl rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 shadow-2xl"
          >
            <div className="w-full sm:w-44 h-36 rounded-2xl overflow-hidden flex-shrink-0 relative group">
              <img
                src="/assets/hero-effortless.jpg"
                alt="Golfer putting on green"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/90">
                  Experience & Lifestyle
                </span>
                <Info className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Golf Made Effortless
              </h3>
              <p className="text-sm text-white/70 mt-1 leading-relaxed">
                Stress-free tee-time bookings and lessons tailored to your schedule.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Performance Data (Circular Donut) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-4 bg-[#12281c]/80 border border-white/15 backdrop-blur-xl rounded-3xl p-5 shadow-2xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/90">
                Performance Data
              </span>
              <Info className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
            </div>

            {/* Circular Progress Gauge */}
            <div className="my-3 flex items-center justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Track Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Dash Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E2F844"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.89)}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-extrabold text-white tracking-tight">{currentHole.satisfaction}</span>
                  <span className="text-[10px] text-white/60 -mt-0.5">Player Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/90">Player Satisfaction</span>
              <button
                onClick={onOpenBooking}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#E2F844] hover:text-[#E2F844] transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
