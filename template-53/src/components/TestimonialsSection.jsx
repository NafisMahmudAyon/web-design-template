import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Sun, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { testimonialsData } from '../data/greenovaData';

export default function TestimonialsSection() {
  const [partnerIndex, setPartnerIndex] = useState(0);

  const handleNextPartner = () => {
    setPartnerIndex((prev) => (prev + 1) % testimonialsData.clientLogos.length);
  };

  const handlePrevPartner = () => {
    setPartnerIndex((prev) => (prev - 1 + testimonialsData.clientLogos.length) % testimonialsData.clientLogos.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14 sm:mb-18">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-gray-400/80 bg-white/80 text-xs font-semibold text-gray-800 shadow-xs mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-gray-700" />
              <span>{testimonialsData.sectionTag}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight font-display"
            >
              {testimonialsData.headline}
            </motion.h2>
          </div>

          <div className="lg:col-span-6 flex items-center lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-normal"
            >
              {testimonialsData.description}
            </motion.p>
          </div>
        </div>

        {/* 3-Card Layout matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-16">
          {/* Left Review Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-4 rounded-[28px] bg-white p-7 sm:p-8 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Blue Zap Badge */}
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
                <Zap className="w-5 h-5 fill-current" />
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed tracking-tight">
                {testimonialsData.items[0].quote}
              </p>
            </div>

            {/* Author */}
            <div className="pt-8 border-t border-gray-100 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={testimonialsData.items[0].avatar}
                  alt={testimonialsData.items[0].author}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-950">
                    {testimonialsData.items[0].author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonialsData.items[0].role}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-400 hover:text-gray-700 cursor-pointer transition-colors">
                Read more &rsaquo;
              </span>
            </div>
          </motion.div>

          {/* Center Card: Feature Rooftop Solar Photo (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-4 min-h-[320px] rounded-[28px] overflow-hidden shadow-card border border-gray-200/80 relative group bg-gray-100"
          >
            <img
              src={testimonialsData.middleFeatureImage}
              alt="Terracotta roof solar installation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center justify-between">
              <span>Residential Solar Array • 9.6 kW</span>
              <span className="text-brand-lime font-bold">100% Offset</span>
            </div>
          </motion.div>

          {/* Right Review Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-4 rounded-[28px] bg-white p-7 sm:p-8 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Orange Sun Badge */}
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md mb-6">
                <Sun className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed tracking-tight">
                {testimonialsData.items[1].quote}
              </p>
            </div>

            {/* Author */}
            <div className="pt-8 border-t border-gray-100 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={testimonialsData.items[1].avatar}
                  alt={testimonialsData.items[1].author}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-950">
                    {testimonialsData.items[1].author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonialsData.items[1].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner Logos Bar & Carousel Controls */}
        <div className="pt-8 border-t border-gray-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Marquee / Logos List */}
          <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none py-2 mask-fade-right">
            {testimonialsData.clientLogos.map((logo, idx) => (
              <span
                key={logo}
                className={`text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap transition-colors ${
                  idx === partnerIndex ? 'text-gray-950 font-bold' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Right Navigation Controls */}
          <div className="flex items-center gap-2.5 flex-shrink-0 self-end sm:self-center">
            <button
              onClick={handlePrevPartner}
              aria-label="Previous partner"
              className="w-9 h-9 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextPartner}
              aria-label="Next partner"
              className="w-9 h-9 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
