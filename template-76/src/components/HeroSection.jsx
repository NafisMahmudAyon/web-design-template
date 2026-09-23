import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection({ onGetStarted, onLoginClick }) {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
  ];

  return (
    <section className="p-3 sm:p-6 lg:p-8 bg-white">
      {/* Outer Dark Rounded Hero Container (Figma design) */}
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#111319] text-white relative overflow-hidden border border-gray-800/80 shadow-2xl">
        
        {/* Subtle Concentric Wireframe Arcs (Figma motif) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
          <svg viewBox="0 0 500 500" className="w-full h-full text-purple-400 stroke-current fill-none">
            <ellipse cx="380" cy="250" rx="340" ry="240" strokeWidth="1" />
            <ellipse cx="380" cy="250" rx="270" ry="190" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="380" cy="250" rx="200" ry="140" strokeWidth="1" />
            <ellipse cx="380" cy="250" rx="130" ry="90" strokeWidth="1" />
          </svg>
        </div>

        {/* Integrated Navigation Header */}
        <Navbar onLoginClick={onLoginClick} onGetStarted={onGetStarted} />

        {/* Hero Main Content */}
        <div className="px-6 sm:px-12 lg:px-16 pt-8 pb-12 sm:pb-16 lg:pb-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* Left Column: Heading, Subtitle, CTA, Social Proof */}
            <div className="lg:col-span-7 pb-8 lg:pb-24 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 font-display"
              >
                Redefining <br />
                How <span className="text-[#8B5CF6]">Business</span> <br />
                Gets Done
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-lg mb-8"
              >
                At The Heart Of Everything We Do Is A Commitment To Making Your Business Stronger, Faster, And More Efficient.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center space-x-4 mb-10"
              >
                <button
                  onClick={onGetStarted}
                  className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white pl-6 pr-3 py-3 rounded-full text-sm font-semibold tracking-wide flex items-center space-x-3 transition-all duration-300 shadow-[0_10px_30px_rgba(109,40,217,0.4)] hover:shadow-[0_15px_35px_rgba(109,40,217,0.6)] hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>Get Started</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </motion.div>

              {/* Social Proof Avatars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <div className="flex -space-x-2">
                  {avatars.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="User avatar"
                      className="w-9 h-9 rounded-full border-2 border-[#111319] object-cover"
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-400">
                  <div className="flex items-center space-x-1 text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="text-white font-bold ml-1">4.9/5</span>
                  </div>
                  <span className="text-gray-400">from 1,200+ enterprise leaders</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative max-w-[420px] lg:max-w-[480px] w-full"
              >
                <img
                  src="/assets/hero-portrait.png"
                  alt="Young professional business leader"
                  className="w-full h-auto object-contain select-none filter contrast-[1.02]"
                />
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
