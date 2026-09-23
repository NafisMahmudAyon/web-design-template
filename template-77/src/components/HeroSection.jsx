import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection({ onGetStarted, onBookCall }) {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
  ];

  return (
    <section id="home" className="p-3 sm:p-6 lg:p-8 bg-[#FAFDFB]">
      {/* Outer Forest Green Rounded Container (Figma design) */}
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#2E5B53] text-white relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Integrated Navbar */}
        <Navbar onBookCall={onBookCall} />

        {/* Hero Content Area */}
        <div className="px-6 sm:px-12 lg:px-16 pt-6 pb-12 sm:pb-16 lg:pb-20 relative z-10">
          
          {/* Top Headline */}
          <div className="text-left mb-6 sm:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display max-w-3xl leading-[1.08]"
            >
              Unlock Your Peak <br />
              <span className="text-emerald-200">Performance</span>
            </motion.h1>
          </div>

          {/* Grid Layout: Left Cards & CTA + Center Hero Visual + Right Testimonial Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Social Proof Box + Subtitle + Get Started Button */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pb-4">
              
              {/* Social Proof Badge Card (Figma top-left card) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 w-max max-w-full shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex -space-x-2">
                    {avatars.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="Customer avatar"
                        className="w-7 h-7 rounded-full border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-white">95%</span>
                </div>
                <p className="text-[11px] font-semibold text-emerald-100/90 tracking-wide">
                  Most Satisfied Customer
                </p>
              </motion.div>

              {/* Description + CTA */}
              <div className="space-y-6 pt-4">
                <p className="text-xs sm:text-sm text-emerald-50/90 leading-relaxed max-w-xs">
                  Join elite sports camps designed to sharpen skills, boost confidence, and elevate your game.
                </p>

                <button
                  onClick={onGetStarted}
                  className="bg-white hover:bg-emerald-50 text-[#1E433C] px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group w-max"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>

            {/* Center Visual: Female Athlete with Racket */}
            <div className="lg:col-span-5 flex justify-center items-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative max-w-[340px] sm:max-w-[400px] w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=700&h=850&q=80"
                  alt="Elevate Camp Athlete with Badminton Racket"
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 select-none"
                />
              </motion.div>
            </div>

            {/* Right Column: Floating Testimonial Video/Photo Card */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 max-w-[260px] w-full shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&h=260&q=80"
                  alt="Athletes training together on court"
                  className="w-full h-28 object-cover rounded-xl mb-3"
                />
                <p className="text-[11px] text-emerald-100 leading-snug">
                  "This camp completely changed my performance. The coaching is next level."
                </p>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
