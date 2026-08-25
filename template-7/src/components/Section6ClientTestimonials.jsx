import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { clientTestimonials } from '../data/properties';

export default function Section6ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = clientTestimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Top Header */}
        <div className="flex items-end justify-between border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#121212]">
              Our Clients <br />
              <span className="font-italic-serif font-normal text-[#121212]">Speak Boldly.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black text-white border border-black flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-md"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Content Layout matching exact section 6 design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: High-Res Dome House Photo (5 Cols) */}
          <div className="md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square bg-gray-100 shadow-xl"
              >
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Column: Large Quote & Author Info (5 Cols) */}
          <div className="md:col-span-5 space-y-8 pl-0 md:pl-6">
            <div className="text-4xl text-[#F8BA8B] font-serif font-black select-none">
              “ ”
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-2xl font-light text-[#121212] leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#F8BA8B]"
                  />
                  <div>
                    <h4 className="font-bold text-base text-[#121212]">{t.author}</h4>
                    <p className="text-xs text-[#777777] font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column Peek Card (2 Cols) */}
          <div className="hidden md:block md:col-span-2 overflow-hidden rounded-l-3xl opacity-50 hover:opacity-100 transition-opacity">
            <div className="aspect-[3/4] bg-gray-200 rounded-l-3xl overflow-hidden">
              <img
                src={clientTestimonials[(currentIndex + 1) % clientTestimonials.length].image}
                alt="Next property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
