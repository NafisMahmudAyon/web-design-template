import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ctaBannerData } from '../data/evergreenData';

export const CTABanner = ({ onGetStarted }) => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center justify-center p-8 sm:p-16 shadow-2xl text-center">
          {/* Architectural Background Image */}
          <img
            src={ctaBannerData.bgImage}
            alt="Modern Architectural Villa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Atmospheric Dark Overlays */}
          <div className="absolute inset-0 bg-brandDark/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brandDark/90 via-transparent to-brandDark/50" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4">
              {ctaBannerData.headline}
            </h2>

            <p className="text-white/80 text-sm sm:text-base font-sans max-w-xl mb-8 font-light">
              {ctaBannerData.subtitle}
            </p>

            <button
              onClick={() => onGetStarted?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-brandDark font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
            >
              <span>{ctaBannerData.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
