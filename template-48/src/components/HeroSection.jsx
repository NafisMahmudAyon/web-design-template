import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection = ({ onStartInvesting, onMeetFarmers }) => {
  return (
    <section id="home" className="relative pt-6 pb-20 sm:pb-28 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Rounded Hero Container */}
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] shadow-2xl border border-white/20">
          
          {/* Hands holding golden seeds photography */}
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&auto=format&fit=crop&q=85"
            alt="Hands holding fresh agricultural harvest seeds"
            className="w-full h-full object-cover object-center"
          />

          {/* Soft natural gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

          {/* Right Floating Content */}
          <div className="absolute top-1/3 sm:top-1/2 -translate-y-1/2 right-6 sm:right-12 lg:right-16 max-w-sm sm:max-w-md text-right z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Smart Farming for <br />
              Future Generations
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 flex items-center justify-end gap-3 flex-wrap"
            >
              <button
                onClick={onStartInvesting}
                className="px-6 py-3 rounded-full bg-terra-lime text-terra-forest text-xs sm:text-sm font-extrabold hover:bg-terra-lime-hover hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Start Investing
              </button>

              <button
                onClick={onMeetFarmers}
                className="px-5 py-3 rounded-full glass-pill text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Meet the Farmers
              </button>
            </motion.div>
          </div>

          {/* Left Social Proof Pill */}
          <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-12 z-10 flex items-center gap-2.5 glass-pill px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 1"
                className="w-5 h-5 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 2"
                className="w-5 h-5 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 3"
                className="w-5 h-5 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-white/90">10k+ Farmers</span>
          </div>

          {/* Giant Wordmark "TerraFarm" across the bottom of the card */}
          <div className="absolute -bottom-3 sm:-bottom-6 lg:-bottom-10 left-0 right-0 z-10 px-4 sm:px-8 pointer-events-none select-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[14vw] sm:text-[15vw] font-black tracking-tighter text-white/95 leading-none text-center drop-shadow-2xl"
            >
              TerraFarm
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
