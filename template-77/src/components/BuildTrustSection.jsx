import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Trophy, ArrowUpRight } from 'lucide-react';

export default function BuildTrustSection({ onExplorePrograms }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-[#182623] tracking-tight font-display"
          >
            Build Trust Quickly
          </motion.h2>
        </div>

        {/* 2 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Kids on Turf with QR Code Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
          >
            <img
              src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&h=600&q=80"
              alt="Kids training on sports field"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Top Right Floating Text */}
            <div className="absolute top-6 right-6 max-w-xs text-right hidden sm:block">
              <p className="text-xs text-white/90 font-medium leading-relaxed bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/10">
                Join elite sports camps designed to sharpen skills, boost confidence, and elevate your game.
              </p>
            </div>

            {/* Bottom Left QR Code & Registration Box */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center space-x-3.5">
              <div className="p-2.5 bg-[#2E5B53] text-white rounded-xl shrink-0">
                <QrCode className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-gray-900 leading-tight">
                  Instant Camp Syllabus Download
                </p>
                <p className="text-[10px] text-gray-500 leading-tight truncate">
                  Scan to preview 2025 seasonal schedules & coaching rosters.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Young Tennis Players with 1200+ Players Trained Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[420px] sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
          >
            <img
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&h=600&q=80"
              alt="Two junior tennis champions"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom 1200+ Players Trained Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-white/40 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E5B53] flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5 text-[#2E5B53]" />
              </div>
              <div>
                <span className="text-xl font-black text-gray-900 leading-none block">
                  1200+
                </span>
                <span className="text-xs font-semibold text-gray-600">
                  Players Trained
                </span>
              </div>
            </div>

            {/* Top Right Quick Link */}
            <div className="absolute top-6 right-6">
              <button
                onClick={onExplorePrograms}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all shadow-md"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
