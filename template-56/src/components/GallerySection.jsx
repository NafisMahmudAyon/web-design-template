import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Star } from 'lucide-react';
import { galleryData } from '../data/wanderlustData';

export const GallerySection = ({ onOpenBooking }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-brandForest text-white relative overflow-hidden">
      {/* Ambient gradient lights in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brandEmerald/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brandAmber/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Handpicked Destinations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight"
          >
            {galleryData.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-emerald-100/70 text-base sm:text-lg font-light leading-relaxed"
          >
            {galleryData.subtitle}
          </motion.p>
        </div>

        {/* 4-Card Asymmetrical Grid Layout (Stable Dimensions, Zero CLS) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Item 1: Tall Left Card (Bali) */}
          <div
            className="md:col-span-6 lg:col-span-4 h-[440px] sm:h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-emerald-500/20 bg-emerald-950/40 shadow-2xl transition-all duration-300 hover:border-brandAmber/60"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenBooking?.(galleryData.items[0].title)}
          >
            <img
              src={galleryData.items[0].image}
              alt={galleryData.items[0].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandForestDark/95 via-brandForestDark/30 to-transparent" />

            <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.98</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-1.5 text-xs text-brandAmber font-medium mb-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{galleryData.items[0].location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-brandAmber transition-colors">
                {galleryData.items[0].title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-emerald-200/80">From $1,850 / person</span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brandAmber group-hover:text-brandForestDark flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 & 3: Middle Column (Miyajima Torii Gate + Overwater Bungalow) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Item 2: Torii Gate */}
            <div
              className="h-[210px] sm:h-[228px] rounded-3xl overflow-hidden relative group cursor-pointer border border-emerald-500/20 bg-emerald-950/40 shadow-xl transition-all duration-300 hover:border-brandAmber/60"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onOpenBooking?.(galleryData.items[1].title)}
            >
              <img
                src={galleryData.items[1].image}
                alt={galleryData.items[1].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandForestDark/90 via-brandForestDark/30 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-brandAmber font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{galleryData.items[1].location}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-brandAmber transition-colors">
                    {galleryData.items[1].title}
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-brandAmber group-hover:text-brandForestDark flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Item 3: Bora Bora Bungalow */}
            <div
              className="h-[210px] sm:h-[228px] rounded-3xl overflow-hidden relative group cursor-pointer border border-emerald-500/20 bg-emerald-950/40 shadow-xl transition-all duration-300 hover:border-brandAmber/60"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onOpenBooking?.(galleryData.items[2].title)}
            >
              <img
                src={galleryData.items[2].image}
                alt={galleryData.items[2].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandForestDark/90 via-brandForestDark/30 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-brandAmber font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{galleryData.items[2].location}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-brandAmber transition-colors">
                    {galleryData.items[2].title}
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-brandAmber group-hover:text-brandForestDark flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: Right Tall Card (Amalfi Sunset Path) */}
          <div
            className="md:col-span-12 lg:col-span-3 h-[320px] lg:h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-emerald-500/20 bg-emerald-950/40 shadow-2xl transition-all duration-300 hover:border-brandAmber/60"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenBooking?.(galleryData.items[3].title)}
          >
            <img
              src={galleryData.items[3].image}
              alt={galleryData.items[3].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandForestDark/95 via-brandForestDark/30 to-transparent" />

            <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.95</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-1.5 text-xs text-brandAmber font-medium mb-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{galleryData.items[3].location}</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white group-hover:text-brandAmber transition-colors">
                {galleryData.items[3].title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-emerald-200/80">From $2,400 / person</span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brandAmber group-hover:text-brandForestDark flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
