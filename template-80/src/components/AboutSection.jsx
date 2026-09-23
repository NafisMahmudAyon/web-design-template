import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SoundwavesDoodle } from './HandDoodles';

export const AboutSection = ({ onReadMore }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FBFBFB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200">
          {/* Main Background Image: Teacher at Green Blackboard with Physics Equations */}
          <div className="relative h-[480px] sm:h-[540px] w-full">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85"
              alt="Dr. Angela Doe explaining physics equations at chalkboard"
              className="w-full h-full object-cover object-right sm:object-center"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

            {/* Chalkboard Equations Overlay for authentic physics vibe */}
            <div className="absolute top-8 right-12 text-white/30 font-serif text-sm hidden md:block select-none pointer-events-none">
              <p>(x+c)(x²-xc)=x</p>
              <p className="mt-1">cos²θ + sin²θ = 1</p>
              <p className="mt-1">∫ e^(-x²) dx = √π</p>
            </div>

            {/* Left Glassmorphic Content Card */}
            <div className="absolute inset-y-6 left-6 sm:left-10 max-w-md flex items-center">
              <div className="glass-panel p-8 sm:p-10 rounded-2xl shadow-xl border border-white/80 animate-fadeIn">
                {/* 3 Soundwaves Doodle Accent */}
                <div className="mb-3">
                  <SoundwavesDoodle className="text-neutral-900" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                  About Angela Doe
                </h3>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                  With over 21 years of teaching experience, Angela offers expert online tutoring in Physics. Our goal is to help you achieve academic excellence through personalized, one-on-one sessions designed to fit your unique learning style.
                </p>

                <button
                  onClick={onReadMore}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#548A63] transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Dotted Grid Motif at bottom left */}
            <div className="absolute bottom-4 left-4 grid grid-cols-6 gap-1.5 opacity-25 pointer-events-none hidden sm:grid">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
