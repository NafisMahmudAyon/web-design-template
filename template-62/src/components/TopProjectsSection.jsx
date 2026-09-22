import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { topProjects } from '../data/homelyData';

export default function TopProjectsSection({ onSelectProject }) {
  const [startIndex, setStartIndex] = useState(0);
  const total = topProjects.length;
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - itemsPerPage : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= total ? 0 : prev + 1));
  };

  const visibleProjects = topProjects.slice(startIndex, startIndex + itemsPerPage);
  if (visibleProjects.length < itemsPerPage) {
    visibleProjects.push(...topProjects.slice(0, itemsPerPage - visibleProjects.length));
  }

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight">
            Discover Our Top Projects
          </h2>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#C88C48] hover:bg-[#B37836] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Project Grid Track */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={`${project.id}-${startIndex}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onSelectProject?.(project)}
                className="group relative rounded-3xl overflow-hidden h-[400px] sm:h-[460px] shadow-lg hover:shadow-2xl border border-neutral-200/80 transition-all duration-300 cursor-pointer flex flex-col justify-end p-5 sm:p-6"
              >
                {/* Architectural Photography */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:opacity-95" />

                {/* Bottom Info Drawer */}
                <div className="relative z-10 bg-neutral-950/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex items-end justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white font-syne tracking-tight leading-snug truncate group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 truncate">
                      {project.location}
                    </p>
                  </div>

                  {/* Gold Arrow Button */}
                  <div className="w-9 h-9 rounded-full bg-[#C88C48] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
