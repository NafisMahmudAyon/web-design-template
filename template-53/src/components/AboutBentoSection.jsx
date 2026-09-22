import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, SunMedium, Zap, ShieldCheck } from 'lucide-react';
import { bentoData } from '../data/greenovaData';

export default function AboutBentoSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14 sm:mb-18">
          {/* Badge */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-gray-400/80 bg-white/80 text-xs font-semibold text-gray-800 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-gray-700" />
              <span>{bentoData.sectionTag}</span>
            </motion.div>
          </div>

          {/* Styled Headline */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.3] text-gray-900 tracking-tight font-display"
            >
              From precision irrigation to remote crop health monitoring{' '}
              <span className="text-gray-400 font-normal">
                to fulfilling the promise{' '}
              </span>
              of tomorrow's technology
            </motion.h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Tall Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 h-[480px] sm:h-[530px] rounded-[30px] overflow-hidden relative shadow-card border border-gray-200/60 group bg-[#0B1A13]"
          >
            <img
              src={bentoData.leftCard.image}
              alt={bentoData.leftCard.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Bottom Dark Card Drawer */}
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#0C1E14]/85 backdrop-blur-md border border-white/10 text-white flex items-start gap-3.5 shadow-xl">
              <div className="p-2 rounded-xl bg-white/10 text-brand-lime flex-shrink-0">
                <SunMedium className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                {bentoData.leftCard.tag}
              </p>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Split top horizontal card + bottom 2 subcards */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Top Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="h-[230px] sm:h-[250px] rounded-[30px] overflow-hidden relative shadow-card border border-gray-200/60 group bg-[#0A2417]"
            >
              <img
                src={bentoData.topRightCard.image}
                alt={bentoData.topRightCard.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-brightness-95 flex flex-col items-center justify-center text-center p-6">
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display drop-shadow-md"
                >
                  {bentoData.topRightCard.title}
                </motion.h3>
                <p className="mt-2 text-sm sm:text-base text-white/90 font-medium tracking-wide">
                  {bentoData.topRightCard.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Bottom Row: 2 Sub-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[230px] sm:h-[250px]">
              {/* Card 1: Lime Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-[30px] bg-brand-lime p-6 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-lime-glow transition-all duration-300 border border-brand-limeHover relative overflow-hidden group"
              >
                {/* Top Arrow Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-full bg-black/10 group-hover:bg-black/15 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-gray-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900/70 bg-black/5 px-2.5 py-1 rounded-full">
                    Efficiency Gain
                  </span>
                </div>

                {/* Big Metric & Caption */}
                <div>
                  <div className="text-5xl sm:text-6xl font-extrabold text-gray-950 tracking-tight font-display leading-none">
                    {bentoData.statCard.metric}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-gray-900 leading-snug">
                    {bentoData.statCard.description}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Wind + Solar Landscape with Pill */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="rounded-[30px] overflow-hidden relative shadow-card border border-gray-200/60 group bg-[#0B1A13]"
              >
                <img
                  src={bentoData.impactCard.image}
                  alt="Renewable field"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Pill Badge at Bottom */}
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-md">
                    <span className="text-sm font-bold text-brand-lime">
                      {bentoData.impactCard.stat}
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      {bentoData.impactCard.targetYear}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
