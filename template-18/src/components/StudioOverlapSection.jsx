import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export default function StudioOverlapSection() {
  return (
    <section id="studio" className="relative py-24 sm:py-32 bg-[#F5F6F3] overflow-hidden border-b border-[#0F1E1B]/5">
      {/* Giant Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center z-0">
        <span className="font-display font-black text-[15vw] sm:text-[18vw] leading-none text-[#009E96]/[0.06] tracking-tighter block uppercase">
          Tideline
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009E96]/10 text-[#009E96] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio & Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0F1E1B] tracking-tight">
              Hydrodynamic Science <br />
              <span className="text-[#009E96]">Meets Artisan Soul</span>
            </h2>
          </div>

          <p className="text-[#5B6B67] text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Every curve is mathematically calibrated for velocity, while the rails are hand-tuned
            with thirty years of wave intuition. Nothing leaves our coastal studio unfinished.
          </p>
        </div>

        {/* Asymmetrical Photo Collage Overlap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Card: Surfer Arm & Board */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-xl border border-black/5 transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden">
                <img
                  src="/assets/studio-surfer-arm.jpg"
                  alt="Surfer carrying handcrafted Tideline surfboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Top Stamp */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#009E96]" />
                  <span>(1021) // ARTISAN SHAPING</span>
                </div>

                {/* Bottom Caption Drawer */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-display font-bold">Custom Rail Contours</h4>
                      <p className="text-xs text-white/80">Beveled for maximum hold in steep hollow faces</p>
                    </div>
                    <span className="font-mono text-xs text-teal-300 font-bold bg-white/10 px-2.5 py-1 rounded-lg">
                      SERIES A
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Barrel Carve + Mission Stat Card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Right Card: Barrel Carve Wave */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-xl border border-black/5 transition-all duration-300 group-hover:shadow-2xl">
                <div className="relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden">
                  <img
                    src="/assets/studio-barrel-carve.jpg"
                    alt="Ocean barrel wave carving demonstration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 bg-[#009E96] text-white px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md">
                    (East 2017)
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-teal-300 uppercase tracking-widest">
                      Live Ocean Field Testing
                    </span>
                    <h4 className="text-lg font-display font-bold">
                      Hydro-tested in 6ft - 10ft swell conditions
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Sub-card: Spec details & Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#009E96] font-semibold uppercase">
                  <Award className="w-4 h-4" />
                  <span>Master Shaper Guarantee</span>
                </div>
                <h5 className="text-base font-bold text-[#0F1E1B]">
                  Tailored Rocker & Concave Tuning
                </h5>
                <p className="text-xs text-[#5B6B67] max-w-sm">
                  We balance rocker curvature with tail release to ensure zero resistance during quick top-turn snaps.
                </p>
              </div>

              <a
                href="#boards"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F1E1B] text-white hover:bg-[#009E96] text-xs font-semibold tracking-wider transition-all duration-200 shadow-md group flex-shrink-0"
              >
                <span>EXPLORE SHAPES</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
