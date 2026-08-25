import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProgramSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax dome scale effect
  const domeScale = useTransform(scrollYProgress, [0, 0.4], [0.94, 1]);
  const domeY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  return (
    <section ref={containerRef} className="w-full pt-6 pb-16 px-4 sm:px-6 md:px-14 overflow-hidden">
      {/* Peach Arched Dome Wrapper */}
      <motion.div 
        style={{ scale: domeScale, y: domeY }}
        className="w-full bg-[#FDE5D4] rounded-t-[100px] sm:rounded-t-[160px] md:rounded-t-[200px] rounded-b-[48px] px-6 sm:px-10 md:px-16 pt-16 pb-20 transition-all duration-300"
      >
        {/* Header Content */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="tag-pill">Program</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What&apos;s in store for you
          </motion.h2>
        </div>

        {/* Program Cards Stack */}
        <div className="space-y-8 max-w-5xl mx-auto">

          {/* Card 1: Grazing */}
          <motion.div 
            className="rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[420px] relative shadow-lg img-zoom-wrapper group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Image */}
            <img 
              src="/images/grazing.png" 
              alt="Sheep grazing in lush field" 
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay for left-aligned text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end items-start max-w-xl text-white space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="tag-pill-dark">Relax</span>
                <span className="tag-pill-dark">Animals</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Grazing
              </h3>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                Take a leisurely walk with the sheep across picturesque, lush fields, learn about their behavior, and how to provide them with healthy, nutritious food.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Shearing */}
          <motion.div 
            className="rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[420px] relative shadow-lg img-zoom-wrapper group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background Image */}
            <img 
              src="/images/shearing.png" 
              alt="Sheep shearing natural wool care" 
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end items-start max-w-xl text-white space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="tag-pill-dark">Labor</span>
                <span className="tag-pill-dark">Animals</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Shearing
              </h3>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                Master the art of sheep shearing – an essential process that keeps the animals comfortable and provides us with beautiful, natural wool.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
