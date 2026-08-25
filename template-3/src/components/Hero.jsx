import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="w-full px-6 md:px-14 pb-16 pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column: Pastel Blue Squircle Text Card */}
        <motion.div 
          className="bg-[#E8F0FE] rounded-[40px] p-8 md:p-14 flex flex-col justify-between items-start min-h-[480px] lg:min-h-[540px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Circular Farmer/Sheep Icon */}
          <div className="w-16 h-16 rounded-full border-2 border-[#3B82F6]/30 bg-white/70 backdrop-blur-sm flex items-center justify-center mb-8 shadow-sm">
            <svg 
              className="w-8 h-8 text-blue-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Farmer Hat & Sheep Face Line Art */}
              <path d="M12 3a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" />
              <path d="M4 10h16" />
              <circle cx="9" cy="14" r="1" fill="currentColor" />
              <circle cx="15" cy="14" r="1" fill="currentColor" />
              <path d="M10 17c.8.6 3.2.6 4 0" />
            </svg>
          </div>

          {/* Heading and Paragraph */}
          <div className="space-y-5 my-auto max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Sheep grazing and shearing
            </h1>
            <p className="text-gray-600 font-normal text-base sm:text-lg leading-relaxed">
              Discover a unique experience of sheep care on our farm! You&apos;ll not only observe these adorable animals but also participate in their grazing and shearing.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="btn-black" onClick={onOpenBooking}>
              Book
              <ArrowUpRight className="arrow-icon w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: High-Res Farm Visual Media Card */}
        <motion.div 
          className="rounded-[40px] overflow-hidden min-h-[480px] lg:min-h-[540px] relative shadow-md img-zoom-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/images/hero_sheep.png" 
            alt="Sheep grazing peacefully near wooden farmhouse" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient glow at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
