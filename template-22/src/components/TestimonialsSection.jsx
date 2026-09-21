import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Heart, Users } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function TestimonialsSection({ onOpenPlanTrip }) {
  const [hoveredCardId, setHoveredCardId] = useState('t-2');

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Loved by Explorers Worldwide
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-400 max-w-md font-sans leading-relaxed">
          Discover how our AI-powered planner has transformed the way travelers explore the world — from seamless itineraries to stress-free adventures.
        </p>
      </div>

      {/* 12M+ Travelers Stat Banner */}
      <div className="mb-12 inline-flex items-center gap-4 bg-[#0f1824] border border-white/15 px-6 py-3 rounded-full shadow-lg">
        <div className="flex -space-x-2">
          {TESTIMONIALS.map((t, i) => (
            <img
              key={i}
              src={t.avatar}
              alt={t.author}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-500"
            />
          ))}
        </div>
        <div className="text-xs">
          <span className="font-bold text-white text-sm">12M+ travelers </span>
          <span className="text-gray-400 font-sans">explored with Travelynx</span>
        </div>
      </div>

      {/* 3 Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item) => {
          const isActive = hoveredCardId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCardId(item.id)}
              className={`bg-[#0f1824] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                isActive ? 'border-cyan-400 shadow-cyan-glow -translate-y-1' : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-500/50" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* Trip Photo Preview */}
                <div className="relative h-28 rounded-xl overflow-hidden my-3">
                  <img src={item.tripPhoto} alt="Trip Preview" className="w-full h-full object-cover brightness-[0.85]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1824] via-transparent to-transparent" />
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <button
                  onClick={onOpenPlanTrip}
                  className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>• View All</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
