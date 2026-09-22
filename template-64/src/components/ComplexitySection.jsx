import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, ShieldCheck, Terminal } from 'lucide-react';
import { complexityData } from '../data/agencyData';

export default function ComplexitySection({ onExploreSolutions, onViewInfrastructure }) {
  return (
    <section className="py-24 border-t border-[#1B2B1F]/50 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 3 Editorial Photographic Panels */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {/* Panel 1: Tall Matrix Engineer */}
            <div className="h-[360px] sm:h-[460px] rounded-3xl overflow-hidden relative border border-[#1B2B1F] group bg-[#0D1510] shadow-xl">
              <img
                src={complexityData.images.tall}
                alt="System Architect in Matrix Lighting"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070908]/90 via-transparent to-transparent opacity-60" />
            </div>

            {/* Panel 2 & 3: Stacked Team Collaboration & Cyber Nodes */}
            <div className="flex flex-col gap-4">
              {/* Panel 2: Team Collaboration */}
              <div className="h-[172px] sm:h-[222px] rounded-3xl overflow-hidden relative border border-[#1B2B1F] group bg-[#0D1510] shadow-xl">
                <img
                  src={complexityData.images.topSquare}
                  alt="Software Team Collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070908]/80 via-transparent to-transparent opacity-50" />
              </div>

              {/* Panel 3: Cyber Nodes */}
              <div className="h-[172px] sm:h-[222px] rounded-3xl overflow-hidden relative border border-[#1B2B1F] group bg-[#0D1510] shadow-xl">
                <img
                  src={complexityData.images.bottomSquare}
                  alt="Holographic Cyber Nodes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070908]/80 via-transparent to-transparent opacity-50" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.12]">
                {complexityData.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
                {complexityData.subtitle}
              </p>
            </motion.div>

            {/* 2 Feature Pillars */}
            <div className="space-y-8 pt-6 border-t border-[#1B2B1F]/60">
              {/* Pillar 1 */}
              <div className="group cursor-pointer" onClick={onExploreSolutions}>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#25E575] transition-colors">
                  {complexityData.pillars[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-3 max-w-xl">
                  {complexityData.pillars[0].description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575] group-hover:underline">
                  <span>{complexityData.pillars[0].link}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group cursor-pointer" onClick={onViewInfrastructure}>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#25E575] transition-colors">
                  {complexityData.pillars[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-3 max-w-xl">
                  {complexityData.pillars[1].description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#25E575] group-hover:underline">
                  <span>{complexityData.pillars[1].link}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
