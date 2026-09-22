import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner({ onLearnMore }) {
  return (
    <section className="bg-[#15181C] text-white py-16 sm:py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          {/* Left Text & Underlined Email */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight leading-tight">
              Interested To Build Your Home?
            </h2>
            <a
              href="mailto:demohome@design.uio"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C88C48] hover:text-amber-300 font-syne underline underline-offset-8 mt-3 transition-colors"
            >
              demohome@design.uio
            </a>
          </div>

          {/* Right Circular Learn More Button */}
          <button
            onClick={onLearnMore}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#C88C48] hover:bg-[#B37836] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 shrink-0 active:scale-95 border-2 border-white/20"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
