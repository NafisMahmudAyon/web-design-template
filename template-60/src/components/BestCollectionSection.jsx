import React, { useState } from 'react';
import { ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BestCollectionSection({ collection, onExplore }) {
  const [copiedPromo, setCopiedPromo] = useState(false);

  const handleCopyPromo = () => {
    navigator.clipboard?.writeText('CATALOG25');
    setCopiedPromo(true);
    setTimeout(() => setCopiedPromo(false), 2500);
  };

  return (
    <section id="collection" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-syne tracking-tight">
              Best Shoes Collection
            </h2>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('arrivals');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-200 shadow-sm group"
          >
            <span>Explore More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3-Column Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Left - Hand Holding Multicolored Sneaker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl overflow-hidden bg-[#F5F6F8] h-[400px] sm:h-[460px] border border-neutral-100 flex flex-col justify-end p-6 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b661ac?q=80&w=800&auto=format&fit=crop"
              alt="Hand holding modern runner"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                Streetwear Sprint
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Center - Split Promo Banner + Sneaker Duo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 h-[400px] sm:h-[460px]"
          >
            {/* Top Promo Banner */}
            <div
              onClick={handleCopyPromo}
              className="group relative flex-1 rounded-3xl overflow-hidden bg-gradient-to-br from-[#8C7A6B] via-[#9B897B] to-[#7A695B] p-6 flex flex-col justify-center items-center text-center cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-900/10"
            >
              {/* Textured overlay */}
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Limited Time Drop</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-syne uppercase tracking-tight leading-none drop-shadow-md">
                  SIGN UP &amp; GET
                  <br />
                  <span className="text-amber-300">25% OFF</span>
                </h3>

                <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30 group-hover:bg-white group-hover:text-neutral-900 transition-all">
                  {copiedPromo ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-600" />
                      <span>CODE: CATALOG25 (Copied!)</span>
                    </>
                  ) : (
                    <>
                      <Tag className="w-3.5 h-3.5" />
                      <span>Use Code: CATALOG25</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Sneaker Duo */}
            <div className="group relative flex-1 rounded-3xl overflow-hidden bg-[#F5F6F8] p-4 flex items-center justify-center border border-neutral-100 hover:shadow-md transition-all duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop"
                alt="Runner shoes pair"
                className="max-h-36 w-auto object-contain transform transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
              />
              <div className="absolute bottom-3 right-4 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-neutral-800 px-3 py-1 rounded-full shadow-sm">
                Urban Kinetic
              </div>
            </div>
          </motion.div>

          {/* Card 3: Right - High-Top Streetwear Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl overflow-hidden bg-[#F5F6F8] h-[400px] sm:h-[460px] border border-neutral-100 flex flex-col justify-end p-6 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop"
              alt="High-top street runner"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                Pro Street Prototype
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
